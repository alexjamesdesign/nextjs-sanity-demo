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


export default function home ({ data:{home} }) {
  console.log(home)

  return (
    <>
    <div className="section section-gray">
      <p className="">'string'</p>
      <p>{home.title}</p>
    </div>
    
    <div className="section">
    <p className="">'image'</p>
      <Image 
        src={home.heroImage.asset.url}
        width={150}
        height={150}
        className='flex'
      />
    </div>

    <div className="section section-gray">
    <p className="">'array' of type 'images'</p>
      {home.galleryImages.map((image, index) => {
        return(
          <Image 
          src={image.asset.url}
          width={150}
          height={150}
          className='flex'
        />
        )
      })}
    </div>

    </>
  )
}

const query = `{
  "home": *[_type == "home"][0] {
    title,
    heroImage {
      asset->{
        ...
      }
    },
    galleryImages[] {
      asset->{
        ...
      }
    },
  }
}`


export async function getStaticProps () {
  const data = await sanityClient.fetch(query);

  return {
    props: {
      data
    }
  }
}