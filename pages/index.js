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


export default function page ({ data:{page} }) {
  console.log(page)

  return (
    
    <>
    <div className="section section-gray">
      <p>{page.title}</p>
    </div>

    <div className="p-8 my-6 bg-gray-100 hero">
    {page.hero.map((e, heroImage, index) => {
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
    </div>

    <div className="p-8 my-6 bg-gray-100 gallery-carousel">
    {page.galleryCarousel.map((e, index) => {
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
    </div>

    </>
  )
}

const query = `{
  "page": *[_type == "page"][0] {
    title,
    hero[]{
      heading,
      tagline,
      label,
      heroImage {
        asset->{
          ...
        }
      }
    },
    galleryCarousel[] {
      galleryTitle,
      galleryImages[] {
        asset->{
          ...
        }
      }
    }
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