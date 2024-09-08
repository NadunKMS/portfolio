import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className='flex flex-col items-center py-40'>
        <Image 
        src="/Name-card.webp"
        width={300}
        height={200}
        alt="Picture of the author"
        className='py-4'
        />
        <h2 className='md:text-4xl text-3xl font-bold text-center'>
            Let’s Transform Your Online <br/> Presence with Endless <br/> Creativity
        </h2>

        <div className='space-y-6 my-6 text-center'>
          <p className="text-gray-500">
           I focus on create high-converting websites that drive <br/> business growth and elevate your brand's  <br/> online presence.
          </p>
        </div>
        {/* <div className="absolute inset-0 z-10"></div> */}

        <button className='cta hover-animate'>
          <Link href='https://cal.com/nadun'>Schedule a Free Strategy Call</Link>
        </button>
    </div>
  )
}

export default Hero