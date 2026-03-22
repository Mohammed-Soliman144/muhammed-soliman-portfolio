/* RCC */
"use client"

/* Moduled Assets */
import imageHero from '@/app/assets/imgs/hero-bg.jpg'
// import imagePortfolio from '@/app/assets/imgs/portfolio-me.png'
import imagePortfolio from '@/app/assets/imgs/portfolio-avatar.png'
import CustomLink from '@/app/components/ui/CustomLink'

/* Icons */
import { Download, ArrowRight, ChevronDown, MailIcon } from 'lucide-react'
import { FiLinkedin, FiGithub  } from 'react-icons/fi'
import {Html5PlainWordmarkIcon, Css3PlainWordmarkIcon, JavascriptPlainIcon, TypescriptPlainIcon, BootstrapPlainWordmarkIcon, ReactOriginalWordmarkIcon, NextjsPlainIcon, GitPlainWordmarkIcon, PrismaOriginalWordmarkIcon, CPlainIcon, CplusplusPlainIcon, MysqlPlainWordmarkIcon } from '@devicon/react'
import { RiTailwindCssFill } from 'react-icons/ri'


/* Reusable Components - Floating Random Circles */
import RandomCircles from '@/app/components/ui/RandomCircles'

/* Image To Handle Performance of loading images */
import Image from 'next/image'

/* SimulateError for Testing */
// import SimulateError from '@/app/components/testing/SimulateError'

/* Hero Component - Hero Section */
export default function Hero(){
    // Programming Skill List
    const skillsList = [
        {name: "HTML5", icon: Html5PlainWordmarkIcon },
        {name: "CSS3", icon: Css3PlainWordmarkIcon },
        {name: "JavaScript", icon: JavascriptPlainIcon },
        {name: "TypeScript", icon: TypescriptPlainIcon },
        {name: "Reactjs", icon: ReactOriginalWordmarkIcon },
        {name: "Nextjs", icon: NextjsPlainIcon },
        {name: "Bootstrap", icon: BootstrapPlainWordmarkIcon },
        {name: "Git", icon: GitPlainWordmarkIcon, size: 35},
        {name: "TailwindCSS", icon: RiTailwindCssFill },
        {name: "Prisma", icon: PrismaOriginalWordmarkIcon, size: 35 },
        {name: "C", icon: CPlainIcon},
        {name: "Cpp", icon: CplusplusPlainIcon, size: 25 },
        {name: "MySql", icon: MysqlPlainWordmarkIcon, size: 35}
    ]
    return <section id="hero" className="hero-section overflow-hidden">
        <div className="container relative grid grid-cols-1 grid-rows-1 lg:grid-rows-1 lg:grid-cols-2 place-content-between place-items-center gap-12 py-8 w-full h-full">
            <article className="hero-left col-span-2 place-items-start place-content-start lg:col-span-1 space-y-8 flex flex-col justifty-start items-start">
                <div className="relative z-0 badge w-fit glass px-5 py-2 text-[12px] md:text-[14.5px] capitalize text-primary rounded-full animate-fade-out" style={{"--duration-fade": "500ms"} as React.CSSProperties}>
                    <p className="relative before:absolute before:content[''] before:w-2 before:h-2 before:rounded-full before:-left-[14px] before:top-1/2 before:-translate-y-1/2 before:bg-primary before:z-1 before:animate-pulse">junior front end developer<span className="pl-2 capitalize relative after:absolute after:content[''] after:w-1 after:h-1 after:rounded-full after:left-1 after:top-[60%] after:-translate-y-1/2 after:bg-primary after:z-1"> react nextjs specialist</span></p>
                </div>
                <h1 className="text-white font-bold font-primary text-4xl md:text-5xl first-letter:uppercase leading-normal animate-fade-out" style={{"--duration-fade": "600ms"} as React.CSSProperties}>crafting <span className="text-primary">digital</span> experiences with <span  className="font-secondary italic font-normal">precision.</span></h1>
                {/* Image Hero Background and black ovelay */}
                <div className="image absolute inset-0 -z-1 w-screen left-1/2 -ml-[50vw] -translate-x-0"> 
                    <Image src={imageHero} alt="Hero Image"  className="object-scale-down aspect-4/8 lg:object-cover lg:aspect-10/5"/>
                    <div className="overlay bg-background opacity-80 absolute top-0 left-0 right-0 z-1 object-scale-down aspect-4/8 lg:object-cover lg:aspect-10/5"></div>
                </div>
                <p className='font-primary text-foreground/70 capitalize leading-normal text-lg break-words whitespace-normal text-pretty hyphens-auto animate-fade-out' style={{"--duration-fade": "700ms"} as React.CSSProperties}>
                    hi, i{`'`}m muhammed soliman — React & Next.js developer building production-grade web applications. Specialist in server components, optimistic UI, and full-stack patterns.
                </p>
                <ul className='sm:flex sm:flex-row justify-start sm:items-center gap-4 flex flex-col items-start animate-fade-out' style={{"--duration-fade": "800ms"} as React.CSSProperties}>
                    <li>
                        <CustomLink size='lg' classes='shadow-xl shadow-primary/25 text-xl font-normal flex justify-center items-center gap-1 w-55 h-17 animate-fade-loop' href='#contact' >
                        <span className='group'>contact me <ArrowRight size={25} className='inline-flex'/></span>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink hasDefaultClasses={false} classes='animated-border-button w-55 h-17 p-0 text-xl border-2 border-border group hover:border-0' href='/Muhammed_Soliman.pdf' download rel='noopener noreferrer'>
                            <span><Download size={30} className='inline-flex pr-2 group-hover:animate-bounce'/>download CV</span>
                        </CustomLink>
                    </li>
                </ul>
                {/* Social Links Navigation */}
                <nav aria-label="social-links" className='flex justifty-center items-center gap-5 animate-fade-out' style={{"--duration-fade": "800ms"} as React.CSSProperties}>
                    <p id="social-label" className='text-foreground/70 text-sm capitalize font-bold'>follow me:</p>
                    <ul aria-labelledby="social-label" className='flex justifty-center items-center gap-3'>
                        <li><a href="https://github.com/Mohammed-Soliman144"><FiGithub size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary hover:bg-primary/15 transition-all duration-400'/></a></li>
                        <li><a href="https://www.linkedin.com/in/muhammad-soliman144/"><FiLinkedin size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary hover:bg-primary/15 transition-all duration-400'/></a></li>
                        <li><a href="mailto:muhammedsoliman144@gmail.com"><MailIcon size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary hover:bg-primary/15 transition-all duration-400'/></a></li>
                    </ul>
                </nav>
            </article>
            {/* Background Image */}
            <figure className='hero-right col-span-2 lg:col-span-1 object-cover aspect-4/6 max-h-[550px] animate-image animate-fade-out' style={{"--duration-fade": "900ms"} as React.CSSProperties}>
                <Image src={imagePortfolio} alt='Portfolio Image' className='backdrop-blur-xl rounded-3xl border-12 border-primary/10'/>
                <figcaption>
                    <p className='absolute -top-8 -left-3 pl-4 w-25 h-22 bg-surface/70  rounded-2xl text-foreground/70 capitalize flex flex-col justify-center items-start gap-1 animate-bounce-slow text-sm font-semibold glass opacity-80'><span className='text-primary font-bold text-2xl'>1+</span>years exp.</p>
                    <p className='absolute -bottom-1 -right-3 px-6 py-3 bg-surface/70  rounded-2xl text-foreground capitalize flex justifty-between items-center animate-bounce-slow text-sm font-semibold glass before:content[""] before:absolute before:left-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-green-500 before:animate-pulse'>available for work</p>
                </figcaption>
            </figure>
            {/* Progamming Skills Navigation */}
            <nav aria-label="skills" className='slider relative overflow-x-hidden max-w-full col-span-2 mask-overlay flex flex-col gap-9'>
                <p id="skills-label" className='capitalize text-foreground/60 text-base font-semibold self-center'>technologies i work with</p>
                <ul aria-labelledby="skills-label" className='slide-track flex justify-center items-center gap-4 shrink-0 animate-slider-image'>
                    {
                        [...skillsList, ...skillsList , ...skillsList].map((skill, index) => (
                            <li key={index} aria-hidden={!index ? "true" : "false"} className={`slide text-foreground/40 text-base font-semibold tracking-wide capitalize transition-all duration-400 w-fit h-fit py-2 px-4.75 rounded-full bg-surface hover:bg-primary/15 border border-border group hover:text-primary/90 `}>
                                <figure className='flex justify-center items-center gap-2'>
                                    <skill.icon size={skill.size || 30} color='var(--color-primary)'/>
                                    <figcaption>
                                        {skill.name}
                                    </figcaption>
                                </figure>
                            </li>
                        ))
                    }
                </ul>
                <CustomLink size='sm' hasDefaultClasses={false} classes='uppercase text-foreground/60 text-base self-center tracking-tight -mt-4' href="#about">
                    <span>scroll <ChevronDown size={25} className='animate-bounce mx-auto mt-2' /></span>
                </CustomLink>
            </nav>
            {/* Simulate Error in page.tsx for testing only */}
            {/* <SimulateError></SimulateError> */}
        </div>       
        {/* Random Animated Floating Circle Background */}
        <RandomCircles />
    </section>
}