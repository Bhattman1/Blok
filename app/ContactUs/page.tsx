import { Cursor, Navbar, ContactUsAnimation } from '@/components'

export default function Home() {
    return (
      <div className="fixed inset-0 bg-black  z-50">
        <title>Blok Studios</title>
         <Navbar />
         
        <main className=" items-center min-h-screen bg-custom-gray "> 
        <Cursor />
         
        <ContactUsAnimation />
        </main>
      </div>
    )
}
