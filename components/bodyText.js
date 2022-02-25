import { PortableText } from "@portabletext/react"

export default function BodyText({ value }) {
    const myPortableTextComponents = {
        types: {
            quote: ({value}) => (
                <blockquote>{value.author && (<cite>{value.author}</cite>)}
                    {value.quoteText}
                </blockquote>
            ),
            title: ({value}) => (
                <h2>{value.title}</h2>
            ) 
        },
    }

    return(
        <div className='content'>
            <PortableText 
                value={value}
                components={myPortableTextComponents}
            /> 
        </div>
    )
  }