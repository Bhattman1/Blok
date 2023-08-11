import { Cursor, Navbar, Team } from '@/components'
export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="flex justify-center items-center min-h-screen bg-custom-gray"> 
                <Team />
                
                <Cursor />
            </main>
        </div>
    )
}
