import { Cursor, Navbar, Loading, Video, Navbar2 } from '@/components'
export default function Home() {
    return (
        <div  >
            <title>Blok Studios</title>
            <Navbar2 />
            
            <Cursor />

            <main className="flex justify-center items-center min-h-screen bg-custom-gray "> 
            
                <Loading />
                
                <Cursor />
            </main>
        </div>
    )
}
