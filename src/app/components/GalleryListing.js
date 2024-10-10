import Image from 'next/image'

export const GalleryListing = ({ name, images }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col '>
                <a href="/gallery" className='hover:opacity-85 transition-all'>
                    <div className='flex flex-row items-center justify-center  '>
                        <svg className='w-6 h-6 fill-white' aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowLeftIcon"><path d="m14 7-5 5 5 5z"></path></svg>

                        <h1 className='text-white'>Go Back</h1>

                    </div>
                </a>


                <h1 className='pt-8 pb-4 text-white text-xl font-bold '>{name} Gallery</h1>

            </div>
            <div className="flex flex-col items-center">
                <section className="flex flex-wrap after:content-[''] after:flex-grow-[99999999] gap-2">
                    {images.map((img, i) => (
                        <div key={i} style={{ width: img.width * 275 / img.height, flexGrow: img.width * 275 / img.height }}>
                            <i style={{ paddingBottom: `${img.height / img.width * 100}%` }}></i>
                            <Image src={img} alt="" />
                        </div>
                    ))}


                </section>
            </div>
        </div>


    )
}