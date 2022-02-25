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
import { PortableText } from '@portabletext/react'
import BodyText from '@/components/bodyText'


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

          {item._type == 'wysiwyg' && (

            <div class="w-full bg-gray-100 p-8 mb-4">

              <BodyText 
                value={item.bodyText}
              />

            </div>

          )}
          
        </>
      )
    })}

    </>
  )
}

const query = `{
  "home": *[_type == "home"][0] {
    title,
    wysiwygtwo,
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