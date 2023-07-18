import Image from 'next/image'

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid lg:grid-cols-2 py-6 items-center gap-12'>
        <div className=''>
          <h1 className='text-5xl mb-6 font-bold'>
            Welcome Every one to My Company
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            veritatis praesentium quas optio facilis rerum possimus, culpa eum
            aliquam pariatur neque repellat ratione exercitationem iusto.
            Recusandae, repudiandae laborum? Ipsa, ea.
          </p>

          <button className='bg-red-400 hover:bg-red-300 duration-200 p-2 rounded-xl text-white font-bold px-6 mt-4'>
            Shop Now
          </button>
        </div>
        <div className=''>
          <Image src='https://i.ibb.co/W5gLqVL/K9-WYdj2-CB.png' width={500} height={200} alt='Banner Image' />
        </div>
      </div>
    </div>
  )
}

export default Hero
