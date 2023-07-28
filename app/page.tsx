import Image from 'next/image'
import { Cursor, Navbar, Video } from '@/components'

export default function Home() {
  return (
    <main className="bg-custom-gray">
      <Cursor />
     <Navbar />
     <Video />
     </main>
     )
}
