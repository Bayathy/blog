import { LinkCard } from '@/components/LinkCard/link-card'

export const Home: React.FC = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-2">
        <LinkCard href="/about" title="aboutme" />
        <LinkCard href="/links" title="Links" />
      </div>
    </main>
  )
}

export default Home
