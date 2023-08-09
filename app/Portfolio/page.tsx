import { Cursor, Navbar, Loading, Video } from '@/components'
export default function Home() {
    return (
        <div  >
            <Navbar />
            <main className="flex justify-center items-center min-h-screen bg-custom-gray"> 
                <Loading />
                
                <Cursor />
            </main>
        </div>
    )
}
