import { Cursor, Navbar, ContactUsAnimation } from '@/components'

export default function Home() {
    return (
      <div className="fixed inset-0 bg-black animate-slideUp z-50">
         <Navbar />
        <main className="flex justify-center items-center min-h-screen bg-custom-gray"> 
        <Cursor />
         
        <ContactUsAnimation />
        </main>
      </div>
    )
}
