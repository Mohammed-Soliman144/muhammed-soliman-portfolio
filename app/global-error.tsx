"use client"
import { startTransition, useEffect } from "react"
import {useRouter} from "next/navigation"
// import Header from "@/app/components/layout/Header"
// import Footer from "@/app/components/layout/Footer"
import Button from "@/app/components/ui/Button"
import { Inter, Playfair_Display } from "next/font/google"

type ErrorProps = {
    error: Error & {digest?: string},
    reset: () => void,
}


const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const playfairFont = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
})


export default function GlobalError({error, reset} : ErrorProps){
    const router = useRouter();
    const reload = () => {
        startTransition(()=> {
            router.refresh()
            reset()
        })
    }

    // Executing imediately after render UI Component
    useEffect(()=> {
        window.scrollTo(0, 0)
        console.error(error)
    }, [error])

    return <html lang="en">
        <head>
            <title>Critical Error | Muhammed Soliman`s Portfolio</title>
            <meta name="description" content="Critical error occurred."/>
            <meta name="robots" content="noindex"/>
        </head>
        <body className={`${interFont.variable} ${playfairFont.variable} antialiased pt-20 overflow-visible`}>
            <main className="page-wrapper grid grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr_auto]">
                <section aria-live="assertive" role="alert" className="relative w-full h-full bg-background p-6 flex justify-center items-start">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <span className="text-primary text-[5rem] md:text-[8rem] lg:text-[12rem] leading-none font-black font-secondary tracking-wider">Error!</span>
                        <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center">Critical Error Occurred!</h1>
                        {
                            process.env.NODE_ENV === "development" ?
                            <p className="text-white text-lg md:text-xl break-words whitespace-normal text-pretty hyphens-auto self-center">{error.message}</p> : error.digest ?  <p className="text-white text-lg md:text-xl break-words whitespace-normal text-pretty hyphens-auto self-center"><span className="block">Error ID: {error.digest}</span>We &apos;re having trouble loading this page, please try refreshing the page or come back later.
                            </p> : <p className="text-white text-lg md:text-xl break-words whitespace-normal text-pretty hyphens-auto self-center">We &apos;re having trouble loading this page, please try refreshing the page or come back later.</p> 
                        }
                        <div className="buttons flex justify-center items-center gap-8">
                            <Button size="lg" classes="cursor-pointer" onClicked={reload}>
                                <span className="font-bold text-base">Try Again</span>
                            </Button>
                            <Button size="lg" classes="cursor-pointer" onClicked={()=> window.location.reload()}>
                                <span className="font-bold text-base">Refresh Page</span>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    </html>
}