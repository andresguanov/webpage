import Image from 'next/image'

export default function MemberInfo ({ name, image, title, description }) {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto gap-5 px-10">
      <header className='flex flex-col items-center gap-5'>
        <h2 className="font-bold">{name}</h2>
        <Image
          width={200}
          height={200}
          className="object-cover object-top rounded-full"
          src={image}
          alt={name}
        />
        <p className='pb-2 leading-normal tracking-wide text-center lg:w-4/5'>
          {title}
        </p>
      </header>
      <p className='py-5 leading-loose tracking-wide text-justify border-t-2 lg:text-lg lg:w-4/5 '>
        {description}
      </p>
    </section>
  )
}
