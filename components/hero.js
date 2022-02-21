import Image from "next/image";

export default function ExampleHero({ imageUrl, heading, tagline }) {
    return(
        <div className="flex flex-wrap w-full p-8 mb-4 bg-gray-100 sm:flex-nowrap">
            {imageUrl && (
            <div className="w-full sm:w-4/12">
                <Image
                    src={imageUrl}
                    width="300"
                    height="300"
                    alt="Hero Image"
                    layout="responsive"
                    className="block w-4/12"
                />
            </div>
            )}
            
            <div className="flex flex-wrap content-center pt-6 font-mono sm:ml-6 sm:w-8/12 sm:pt-0">
                <p className="w-full pb-2 text-3xl font-bold">{heading}</p>
                <p className="w-full text-xl">{tagline}</p>
            </div>
        </div>
    )
  }