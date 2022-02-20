import { sanityClient } from '../sanity'

// const query = `*[_type == "Hero"][0]{
//   title
// }`

// const pageService = new SanityPageService(query)

// export const Hero = ({ hero }) => {
//   return (
//     <h1>Hello</h1>
//   )
// }

export const getServerSideProps = async (pageContext) => {
  return {props: {}};
  const pageHero = pageContext.query.title
  console.log(pageHero)
}

// export async function getStaticProps(context) {
//   const props = await pageService.fetchQuery(context)
//   return { 
//     props: { title }
//   };
// }

// export const getServerSideProps = async () => {
//   const query = '*[ _type == "Hero"]'
//   const hero = await sanityClient.fetch(query)

//   if (!hero.length) {
//     return {
//       props: {
//         hero: [],
//       },
      
//     }
//   } else {
//     return {
//       props: {
//         title: hero.title
//       },
//     }
//   }
// }

export default Hero