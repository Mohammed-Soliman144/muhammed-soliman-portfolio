/* Icons */
import { FaCode } from "react-icons/fa"
import { LuRocket, LuUsers } from "react-icons/lu"
import { Lightbulb } from 'lucide-react'

/* About Component */
export default function About(){
    return <section id='about' className="about-section">
        <div className='container pt-32 grid grid-cols-1 xl:grid-cols-2 gap-x-12 space-y-20'>
            <article className='header text-left space-y-7 break-words whitespace-normal text-pretty hyphens-auto'>
                <span className='block tracking-wider uppercase text-base text-primary font-semibold'>about me</span>
                <h2 className='font-secondary text-3xl font-bold md:text-5xl md:font-extrabold normal-case tracking-wide text-foreground italic leading-normal'><span className='inline-block font-primary text-primary pr-2 not-italic first-letter:uppercase tracking-tight'>building the future,</span>one component at a time.</h2>
                <p className='text-foreground/75 text-base md:text-[16.5px] normal-case first-letter:capitalize leading-normal pr-5'>i’m a passionate Frontend Developer with over a year of focused, hands-on experience building real-world web applications. My journey started with curiosity about how the web works, and it quickly turned into a serious commitment to mastering modern frontend development.</p>
                <p className='text-foreground/75 text-base md:text-[16.5px] normal-case first-letter:capitalize leading-normal pr-5'>i specialize in React, Next.js, and TypeScript, building responsive landing pages, interactive dashboards, and full-stack applications with clean architecture and production-ready standards. My approach combines strong technical fundamentals with attention to performance, usability, and maintainability.</p>
                <p className='text-foreground/75 text-base md:text-[16.5px] normal-case first-letter:capitalize leading-normal pr-5'>although I’m early in my professional journey, I’ve dedicated myself to writing clean, scalable code and understanding concepts deeply—not just using frameworks, but knowing how and why things work.</p>
                <p className='text-foreground/75 text-base md:text-[16.5px] normal-case first-letter:capitalize leading-normal pr-5'>when I’m not coding, I’m exploring advanced patterns, improving my problem-solving skills, and continuously learning to grow into a stronger engineer.</p>
                <blockquote className="bg-special-card font-secondary p-8 rounded-3xl backdrop-blur-xl ring-1 ring-primary/10 shadow-[0px_5px_30px_5px_color-mix(in_srgb,theme(colors.primary),transparent_70%)]">
                    <p className='relative quote text-foreground italic text-base md:text-lg font-semibold normal-case first-letter:capitalize leading-normal break-words whitespace-normal text-pretty hyphens-auto'>My mission is to create digital experiences that are not only functional, but meaningful — products users enjoy using and developers enjoy maintaining.</p>
                </blockquote>
            </article>
            <div className="cards grid xs:grid-cols-1 sm:grid-cols-2 place-items-center place-content-center gap-x-15 gap-y-5 md:gap-5 xl:gap-x-25 break-words whitespace-normal text-pretty hyphens-auto">
                <article className="flex flex-col justify-center items-start gap-2 bg-special-card ring ring-border rounded-2xl shadow-xl/30 w-full sm:min-w-75 h-50 px-6 py-3">
                    <figure className="group">
                        <FaCode size={50} className='bg-primary/15 text-primary/70 p-2.75 rounded-xl group-hover:bg-primary/35 group-hover:text-primary/95'/>
                    </figure>
                    <h3 className='capitalize text-foreground text-2xl tracking-tight font-bold'>clean code</h3>
                    <p className='text-foreground/65 text-base md:text-base normal-case first-letter:capitalize'>Writing maintainable, scalable code that stands the test of time.</p>
                </article>
                <article className="flex flex-col justify-center items-start gap-2 bg-special-card ring ring-border rounded-2xl shadow-xl/30 w-full sm:min-w-75 h-50 px-6 py-3">
                    <figure className="group">
                        <LuRocket size={50}className='bg-primary/15 text-primary/70 p-2.75 rounded-xl group-hover:bg-primary/35 group-hover:text-primary/95'/>
                    </figure>
                    <h3 className='capitalize text-foreground text-2xl tracking-tight font-bold'>performance</h3>
                    <p className='text-foreground/65 text-base md:text-sm normal-case first-letter:capitalize'>Optimizing for speed and delivering lightning-fast user experiences.</p>
                </article>
                <article className="flex flex-col justify-center items-start gap-2 bg-special-card ring ring-border rounded-2xl shadow-xl/30 w-full sm:min-w-75 h-50 px-6 py-3">
                    <figure className="group">
                        <LuUsers size={50} className='bg-primary/15 text-primary/70 p-2.75 rounded-xl group-hover:bg-primary/35 group-hover:text-primary/95'/>
                    </figure>
                    <h3 className='capitalize text-foreground text-2xl tracking-tight font-bold'>Collaboration</h3>
                    <p className='text-foreground/65 text-base md:text-base normal-case first-letter:capitalize'>Working closely with teams to bring ideas to life.</p>
                </article>
                <article className="flex flex-col justify-center items-start gap-2 bg-special-card ring ring-border rounded-2xl shadow-xl/30 w-full sm:min-w-75 h-50 px-6 py-3">
                    <figure className="group">
                        <Lightbulb size={50} className='bg-primary/15 text-primary/70 p-2.75 rounded-xl group-hover:bg-primary/35 group-hover:text-primary/95'/>
                    </figure>
                    <h3 className='capitalize text-foreground text-2xl tracking-tight font-bold'>Innovation</h3>
                    <p className='text-foreground/65 text-base md:text-base normal-case first-letter:capitalize'>Staying ahead with the latest technologies and best practices.</p>
                </article>
            </div>
        </div>
    </section>
}
