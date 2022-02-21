import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { sanityClient, urlFor } from '../sanity'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import ExampleHero from '@/components/hero'


export default function homePage ({ data:{home} }) {
  console.log(home)

  return (
    
    <>
    {home.content.map((item, index) => {
      return (
        <>
          {item._type == 'hero' && (

            <ExampleHero 
              heading={item.heading}
              tagline={item.tagline}
              imageUrl={item.heroImage.asset.url ?? null}
            />
            
          )}

          {item._type == 'galleryCarousel' && (
            <>
              <div class="w-full bg-gray-100 p-8 mb-4">
                <h2>{item.galleryTitle}</h2>
                
                <div className="flex flex-wrap justify-between w-full space-between lg:flex-nowrap">
                {item.galleryImages.map((image, index) => {
                  return ( 
                    <div className="block w-1/2 pb-3 pr-3 md:pr-6 sm:w-1/3 md:1/6">         
                    <Image
                      src={image.asset.url}
                      width="200"
                      height="200"
                      alt="Gallery Images"
                      layout="responsive"
                    />
                    </div>
                  )
                })}
                </div>
              </div>
            </>
          )}
        </>
      )
    })}

    {/* <div className="p-8 my-6 bg-gray-100 hero">
    {home.hero.map((item, heroImage, index) => {
      return (
        <div className="flex">

          <Image
            src={e.heroImage.asset.url}
            width="200"
            height="200"
            alt="Hero Image"
            layout="fixed"
            className="block w-1/2"
          />
          
          <div className="flex flex-wrap content-center w-1/2 ml-6 font-mono">
            <p className="pb-2 text-3xl font-bold">{e.heading}</p>
            <p className="text-xl">{e.tagline}</p>
          </div>
        </div>
      )
    })}
    </div> */}

    {/* <div className="p-8 my-6 bg-gray-100 gallery-carousel">
    {home.galleryCarousel.map((e, index) => {
      return (
        <div>

          <h2>{e.galleryTitle}</h2>
          
          <div className="flex w-full flex-nowrap">
          {e.galleryImages.map((e, index) => {
            return (
              
                <Image
                  src={e.asset.url}
                  width="200"
                  height="200"
                  alt="Gallery Images"
                  layout="fixed"
                  className="flex w-1/2 mr-4"
                />
            )
          })}
          </div>

        </div>
      )
    })}
    </div> */}

    </>
  )
}

const query = `{
  "home": *[_type == "home"][0] {
    title,
    content[]{
      ...,
      heroImage{
        asset->{...}
      },
      galleryImages[]{
        asset->{...}
      },
    },
  },
}`

export async function getStaticProps () {
  const data = await sanityClient.fetch(query);

  return {
    props: {
      data
    }
  }
}