"use client"
import { useState, useEffect} from "react"
import CustomLink from "@/app/components/ui/CustomLink"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import '@/app/globals.css'
/* SimulateError Component */
// import SimulateError from "@/app/components/testing/SimulateError"

/* Header Component - Layout */
export default function Header(){
    // State To Check if Menu Icon is Open
    const [isMenuOpenned, setIsMenuOpenned] = useState<boolean>(false)
    // State To Check if ScrollY Greater Than 80
    const [isScroll, setIsScroll] = useState<boolean>(false)
    // State To Check Mobile screen
    const [screenWidth, setScreenWidth] = useState<number>(0)

    // run once on initial mount and never re-runs on updates which [] is empty dependencies array
    useEffect(()=> {
        // Void Method To Handle Scroll
        const handleScroll = () => {
            // when window.scrollY > 80 set isScroll true and vice versa
            setIsScroll(window.scrollY >= 80)
        }
        // to avoid Hard Refresh must call handleScroll
        handleScroll();

        // Attach Scroll Event To window
        window.addEventListener("scroll", handleScroll)
        
        // Method To Handle Mobile Width Screen
        const handleSreenWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        // To Keep Observe width of window untill happens unexpected behavior Hard refresh
        handleSreenWidth();

        // Attach resize Event to window to handle screen size
        window.addEventListener('resize', handleSreenWidth)

        // When Unmount (destory) The component Remove Attach Scroll Event From Window
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize",handleSreenWidth)
        }
    }, [])

    // Navbar Links Array
    const navLinks = [
        {name: "about", href: "#about"},
        {name: "projects", href: "#projects"},
        {name: "experiences", href: "#experiences"},
        {name: "testimonials", href: "#testimonials"},
    ]
    return <header id="main-header" suppressHydrationWarning={true} className = {`bg-transparent font-primary transition-all duration-700 fixed top-0 left-0 right-0 z-50 shadow-none ${isScroll ?  "sticky shadow-xl border-b border-b-border" : "fixed border-none shadow-none"}`} >
        {/* Container */}
        <div className="container w-full text-foreground py-3.75 flex justify-between items-center relative z-50">
            {/* Logo */}
            <Link href="/" className="text-lg font-bold uppercase tracking-wide hover:text-primary transition-all duration-400">&lt;ms/&gt;</Link>
            {/* Main Navigation - Desktop */}
            <nav aria-label="Main Navigation" className="hidden md:flex justify-between items-center flex-1">
                <ul className="flex justify-center items-center p-3 rounded-full glass mx-auto">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} onClick={() => setIsMenuOpenned(prev => !prev)} className="capitalize text-sm tracking-tight font-normal text-foreground/40 hover:text-foreground py-2 px-3 hover:bg-secondary hover:rounded-full transition-all duration-400">{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                {/* CTA Button */ }
                <ul className="contact inline-flex">
                    <li>
                        <CustomLink size="sm" classes="font-normal text-base tracking-tight transition-all duration-400" onClicked={() => setIsMenuOpenned(prev => !prev)} href="#contact">
                            contact me
                        </CustomLink>
                    </li>
                </ul>
                {/* Simulate Error in layout.tsx for testing only */}
                {/* <SimulateError /> */}
            </nav>

            {/* Main Navigation - Mobile */}
            {/* Menu Hamburger Icon and X Buttons */}
            {
                !isMenuOpenned && screenWidth <= 768 ? 
                    <button aria-label="Open Menu" aria-expanded={isMenuOpenned ? "true" : "false"} aria-controls="mobile-menu">
                        <Menu size={32} className="md:hidden sm:block relative transition-all duration-400 cursor-pointer" onClick={() => setIsMenuOpenned(prev => !prev)} />
                    </button>
                    :
                    <button aria-label='Close Menu'>
                        <X size={32} className="md:hidden sm:block relative transition-all duration-400 cursor-pointer" onClick={() => setIsMenuOpenned(prev => !prev)} />
                    </button>
            }
        </div>
        {/* Main Navigation - Mobile */}
        {
            isMenuOpenned && 
            <div id="mobile-menu" className="animate-fade md:hidden sm:flex absolute left-0 right-0 top-15.5 z-50 select-none glass-strong">
                <nav aria-label="Main Navigation" className="container relative z-50 flex flex-col justify-start items-start py-5 space-y-6 flex-1">
                    <ul className="flex flex-col justify-start items-start gap-8 w-full">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <CustomLink href={link.href} className="capitalize text-lg tracking-tight font-normal text-foreground/40 hover:text-foreground py-2 transition-all duration-400" 
                                    onClick={() => setIsMenuOpenned(prev => !prev)}>
                                        {link.name}
                                    </CustomLink>
                                </li>
                            ))
                        }
                    </ul>
                    {/* CTA Button */ }
                    <ul className="contact w-full">
                        <li>
                            <CustomLink size="default" classes="tracking-wide transition-all duration-400 text-lg font-semibold w-full flex justify-center items-center" onClicked={() => setIsMenuOpenned(prev => !prev)} href="#contact">
                                contact me
                            </CustomLink>
                        </li>
                    </ul>
                </nav>
            </div>
        }
    </header>
}


