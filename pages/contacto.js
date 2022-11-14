import { Content } from '@components/Content'
import { FormContact } from '@components/FormContact'
import { PageMap } from '@components/PageMap'
import { Subtitle } from '@components/Subtitle'
import { Text } from '@components/Text'

const pageData = {
  title: 'Contacto',
  description: 'Contacto IIH',
  image: '/prueba.png',
  content: {
    title: 'Contáctenos',
    intro: 'Sus mensajes son muy importantes para nosotros. Envíe su mensaje y nos pondremos en contacto con usted.',
  },
  contacts: [
    {
      name: 'Ing. Rony Parra, PhD',
      role: 'Director del instituto',
      email: 'rmparra@uce.edu.ec',
    },
    {
      name: 'Ing. Génesis Yánez',
      role: 'Técnica de investigación',
      email: 'gbyanez@uce.edu.ec',
    },
    {
      name: 'Instituto de Investigaciones Hidrocarburíferas',
      role: null,
      email: 'iih@uce.edu.ec',
    }
  ]
}

export default function Contacto () {
  const contacts = pageData.contacts.map(({ name, role, email }) => (
    <div key={name} className="w-full md:w-auto">
      <p className='flex items-end mx-2 font-bold border-b text-md md:text-xl'>{name}</p>
      <p className='mx-2 mt-1 text-xs md:text-sm'>{role}</p>
      <a
        className='mx-2 mt-1 text-xs italic text-blue-500 transition-colors md:text-sm hover:text-blue-700 active:text-blue-900'
        href={`mailto:${email}?subject=Envío%20desde%20la%20página%20web`}
      >{email}</a>
    </div>
  ))

  return (
    <Content
      title={pageData.title}
      description={pageData.description}
      image={pageData.image}
    >
      <main
        className='container flex flex-col gap-10 p-3 mx-auto md:p-10 lg:flex-row'>
        <section className='w-full h-auto'>
          <Subtitle>{pageData.content.title}</Subtitle>
          <Text>{pageData.content.intro}</Text>
          <FormContact />
        </section>
        <section className='flex flex-col items-center'>
          <div className='flex flex-wrap items-center my-3 md:justify-center gap-x-16 gap-y-5'>
            {contacts}
          </div>
          <PageMap />
        </section>
      </main>
    </Content>

  )
}
