// Scroll To Top Component
import ScrollToTop from "@/app/components/ui/ScrollButton";

// Improve Performance to Navigation internal links inside Nextjs 
import Link from "next/link"

/* Icons */
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MailIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/* Footer Component - Layout */
export default function Footer(){
    // Navbar Links Array
    const navLinks = [
        {name: "about", href: "#about"},
        {name: "projects", href: "#projects"},
        {name: "experiences", href: "#experiences"},
        {name: "testimonials", href: "#testimonials"},
    ]
    // Current Year
    const currentYear = new Date().getFullYear().toString();
    return <footer className="mt-32 border-t border-border scroll-to-top"> 
        {/* Container */}
        <div className="container text-foreground py-10 flex flex-col justify-start items-center space-y-8 text-center md:flex-row md:justify-between md:items-center md:text-left">
            {/* Logo - use div as container */}
            <div className="logo">
                <Link href="#" className="text-lg font-bold uppercase tracking-wide">&lt;ms/&gt;</Link>
                <p className="mt-2 text-foreground/65 text-[15px] capitalize">&copy;{currentYear} muhammed soliman.<span className="inline-block pl-1 normal-case first-letter:uppercase">all rights reserved.</span></p>
            </div>
            {/* Main Navigation - Desktop */}
            <nav aria-label="Main Navigation">
                <ul className="flex justify-center items-center flex-wrap gap-x-1 gap-y-4">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}  className="capitalize text-[15px] tracking-tight font-normal text-foreground/65 py-2 px-3 hover:text-foreground transition-all duration-300">{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            {/* Social Links Navigation */}
                <nav aria-label="social-links" className='flex justifty-center items-center gap-5'>
                    <ul aria-label="social-label" className='flex justifty-center items-center gap-3'>
                        <li><a href="https://github.com/Mohammed-Soliman144" className=''><FiGithub size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary hover:bg-primary/15 hover:transition-all hover:duration-300'/></a></li>
                        <li><a href="https://www.linkedin.com/in/muhammad-soliman144/"><FiLinkedin size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary hover:bg-primary/15 hover:transition-all hover:duration-300'/></a></li>
                        <li><a href="mailto:muhammedsoliman144@gmail.com"><MailIcon size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary hover:bg-primary/15 hover:transition-all hover:duration-300'/></a></li>
                        <li><a href="https://wa.me/2001555382692?text=Hi%20there%20Iam%20interested%20in%20your%20services"><FaWhatsapp size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary hover:bg-primary/15 hover:transition-all hover:duration-300'/></a></li>
                    </ul>
                </nav>
        </div>
        {/* Scroll to top button */}
        <ScrollToTop />
    </footer>
}
