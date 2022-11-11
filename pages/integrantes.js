import { Content } from '@components/Content'
import { MemberCard } from '@components/MemberCard'
import { openMemberModal } from '@utils/openMemberModal'
import { equipo, investigadores } from '@constants/members'
import Title from '@components/Title'

const pageContent = {
  title: 'Integrantes',
  description: 'Integrantes IIH',
  image: '/prueba.png',
  sections: [
    {
      label: 'Equipo de Trabajo',
      content: equipo,
    },
    {
      label: 'Investigadores asociados',
      content: investigadores,
    },
  ]
}

function Section ({ data, title }) {
  const content = data.map(({ name, image, role, title, description }) => (
    <MemberCard
      key={name}
      name={name}
      role={role}
      image={image}
      openModal={() => openMemberModal(name, image, title, description)}
    />
  ))
  return <section className='flex flex-col items-center gap-5 pb-16'>
    <Title>{title}</Title>
    <div className='flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-10 md:flex-row'>
      {content}
    </div>
  </section>
}

export default function Integrantes () {
  const sections = pageContent.sections.map(({ label, content }) => (
    <Section key={label} title={label} data={content} />
  ))

  return (
    <Content
      title={pageContent.title}
      description={pageContent.description}
      image={pageContent.image}
    >
      <main>
        <div className='container w-full mx-auto'>
          {sections}
        </div>
      </main>
    </Content>
  )
}
