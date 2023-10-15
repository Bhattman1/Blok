import { Cursor, Navbar, Loading, Video, Navbar2 } from '@/components'
export default function Home() {
    return (
        <div  >
            
            <Navbar2 />
            <title>BLOK STUDIOS</title>
            <Cursor />

            <main className="flex justify-center items-center min-h-screen bg-custom-gray "> 
            
                <Loading />
                
                <Cursor />
            </main>
        </div>
    )
}
