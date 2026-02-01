import Link from 'next/link'
import ServiceReveal from '@/components/sections/ServiceReveal'
import Services from '@/components/genesis/Services'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-black">
      <div className="z-10 w-full max-w-[1920px] mx-auto">
        <Services />
        <ServiceReveal />
      </div>
    </main>
  )
}
