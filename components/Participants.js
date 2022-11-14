import Title from './Title'

function Participant ({ title, image, url }) {
  return <a href={url} target="_blank" className='grid bg-white rounded hover:scale-105 place-content-center' rel="noreferrer">
    <picture>
      <img
        className='h-20 rounded md:h-28 aspect-auto'
        src={image}
        alt={title}
        loading="lazy"
      />
    </picture>
  </a>
}

export function Participants ({ title, data }) {
  const participants = data.map(({ label, image, url }) => (
    <Participant key={label} title={label} image={image} url={url} />
  ))
  return (
    <section
      className="container flex flex-col flex-wrap items-center justify-center gap-3 p-5 md:pl-12"
    >
      <Title>{title}</Title>
      <section className='flex flex-wrap items-center justify-center gap-5 md:gap-10'>
        {participants}
      </section>
    </section>

  )
}
