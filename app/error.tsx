/* RCC */
"use client"
/* Flag any update in states is not urgent */
import {startTransition, useEffect} from "react"
/* useRouter Hook to change routes inside RCC */ 
import {useRouter} from "next/navigation"
import Button from "@/app/components/ui/Button"

/* Auto Error props Type */
type ErrorProps = {
    /* digest as errorID To expose specific error in production */
    error: Error & {digest?: string},
    reset: () => void
}

export default function ErrorBoundary({error, reset} : ErrorProps) {
    const router = useRouter()
    const reload = () => {
        startTransition(()=> {
            router.refresh()
            reset()
        })
    }

    useEffect(()=> {
        // Scroll To the first element of content not error object directly according to where set it in html elements
        window.scrollTo(0, 0)
        // print the error
        console.error(error)
    }, [error])

    return <section aria-live="assertive" role="alert" className="relative w-full min-h-screen bg-background p-6 flex justify-center items-start">
        <div className="flex flex-col justify-center items-center gap-8">
            <span className="text-primary text-[5rem] md:text-[8rem] lg:text-[12rem] leading-none font-black">Ooops!</span>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center">Something went wrong!</h2>
            {
                process.env.NODE_ENV === "development" ?
                <p className="text-white text-lg md:text-xl break-words whitespace-normal text-pretty hyphens-auto self-center">{error.message}</p> : error.digest ?  <p className="text-white text-lg md:text-xl break-words whitespace-normal text-pretty hyphens-auto self-center"><span className="block">Error ID: {error.digest}</span>Unexpected error happenned when loading the section, please try reloading the page.
                </p> : <p className="text-white text-lg md:text-xl break-words whitespace-normal text-pretty hyphens-auto self-center">Unexpected error happens when loading the section, please try reloading the page.</p> 
            }
            <Button size="lg" classes="cursor-pointer" onClicked={reload}>
                <span className="text-bold text-xl">Try Again</span>
            </Button>
        </div>
    </section>
}