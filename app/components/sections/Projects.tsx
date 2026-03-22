/* Image */
import Image from 'next/image'

/* Icons */
import { ArrowUpRight } from 'lucide-react'
import { FiGithub  } from 'react-icons/fi'

/* Moduled Assets */
import groceryImage from "@/app/assets/imgs/Ecommerce-React-App.png"
import tailwindImage from "@/app/assets/imgs/React-Landing-App.png"
import bootstrapImage from "@/app/assets/imgs/Bootstrap-Template.png"
import dashboardImage from "@/app/assets/imgs/Dashboard.png"
import assembelyImage from "@/app/assets/imgs/Assembly-End-Game.png"
import specialImage from "@/app/assets/imgs/Special-Design.png"
import CustomLink from '@/app/components/ui/CustomLink'

/* Projects Component */
export default function Projects(){
    return <section id='projects' className='project-section'>
        <div className='container pt-32 projects grid grid-cols-1 gap-10 place-items-start xl:grid-cols-2 xl:place-items-stretch place-content-center'>
            <article className='header text-center space-y-4 col-span-2 mb-10'>
                <span className='block tracking-wider uppercase text-base text-primary font-semibold'>featured work</span>
                <h2 className='font-secondary text-3xl font-bold md:text-5xl md:font-extrabold normal-case tracking-wide text-foreground italic leading-normal'><span className='inline-block font-primary text-primary pr-2 not-italic first-letter:uppercase tracking-tight'>projects that</span>make an impact.</h2>
                <p className='text-foreground/75 text-base md:text-lg normal-case first-letter:capitalize leading-normal break-words whitespace-normal text-pretty hyphens-auto'>A selection of projects that reflect my growth as a developer — from interactive web applications to practical tools built to solve real-world problems.</p>
            </article>
            <article className="col-span-2 xl:col-span-1 flex flex-col justify-center items-start background-card-mix ring ring-border rounded-2xl shadow-xl/30 overflow-hidden group relative shimmer-shine">
                <figure>
                    <Image src={groceryImage} alt='Grocery Ecommerce Image' className='aspect-4/3 object-fill group-hover:scale-105 rounded-tl-2xl rounded-tr-2xl transition-transform duration-700 group'/>
                    <figcaption className='px-5 py-3 space-y-1'>
                        <h3 className='text-foreground text-xl md:text-2xl tracking-tight font-bold group-hover:text-primary transition-all duration-700 py-2 flex justify-between items-center'><span>Grocery React App</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arrow-move group-hover:text-primary group-hover:-translate-y-[15px] group-hover:translate-x-[8px]"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </h3>
                        <p className='text-foreground/65 text-base md:text-lg normal-case break-words whitespace-normal text-pretty hyphens-auto'>A React-based grocery interface demonstrating component structure, dynamic rendering, and practical UI behavior. This project simulates a shopping experience with interactive elements and stateful components, highlighting React fundamentals and real-world frontend logic.</p>
                        {/* Social Links */}
                        <nav aria-label="social-links" className='flex justifty-center items-center gap-5'>
                            <h3 id="social-label" className='sr-only'>Social Links</h3>
                            <ul aria-labelledby="social-label" className='absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%] flex justifty-center items-center gap-5 invisible group-hover:visible'>
                                <li><a href="https://github.com/Mohammed-Soliman144/Grocery-React-App" target='_blank' title='Go To Repository'><FiGithub size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300' /></a></li>
                                <li><a href="https://mohammed-soliman144.github.io/Grocery-React-App/" target='_blank' title='Go To Live Demo'><ArrowUpRight size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300'/></a></li>
                            </ul>
                        </nav>
                    </figcaption>
                </figure>
                <ul aria-label="technologies" className='flex justify-start items-center gap-1.5 px-5 pt-2 pb-5 flex-wrap group'>
                    {
                        ["React", "TypeScript", "SCSS", "JavaScript ES6+", "Context Api", "Hooks", "Custom Hooks", "State Management", "LocalStorage", "React Router", "Responsive Design"].map((skill, index) => (
                            <li key={index} className='flex justify-center items-center text-foreground/45 text-sm font-normal tracking-wide capitalize w-fit h-fit p-2 rounded-full bg-surface/70 hover:bg-primary/5 border border-border hover:border hover:border-primary hover:text-primary/90 transition-all duration-700'>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </article>
            <article className="col-span-2 xl:col-span-1 flex flex-col justify-stretch items-start background-card-mix ring ring-border rounded-2xl shadow-xl/30 overflow-hidden group relative shimmer-shine">
                <figure>
                    <Image src={tailwindImage} alt='Portfolio Image' className='aspect-4/3 object-fill group-hover:scale-105 rounded-tl-2xl rounded-tr-2xl transition-transform duration-700 group' />
                    <figcaption className='px-5 py-3 space-y-1'>
                        <h3 className='text-foreground text-xl md:text-2xl tracking-tight font-bold group-hover:text-primary transition-all duration-700 py-2 flex justify-between items-center'><span>Landing React App</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arrow-move group-hover:text-primary group-hover:-translate-y-[15px] group-hover:translate-x-[8px]"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></h3>
                        <p className='text-foreground/65 text-base md:text-lg normal-case break-words whitespace-normal text-pretty hyphens-auto'>A modern React landing page with smooth structure, engaging hero section, and responsive layout. Showcases practical use of React components, reusable sections, and responsive behavior, making it suitable as a product, service, or portfolio introduction page.</p>
                        {/* Social Links */}
                        <nav aria-label="social-links" className='flex justifty-center items-center gap-5'>
                            <h3 id="social-label" className='sr-only'>Social Links</h3>
                            <ul aria-labelledby="social-label" className='absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%] flex justifty-center items-center gap-5 invisible group-hover:visible'>
                                <li><a href="https://github.com/Mohammed-Soliman144/Landing-React-App" target='_blank' title='Go To Repository'><FiGithub size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300' /></a></li>
                                <li><a href="https://mohammed-soliman144.github.io/Landing-React-App/" target='_blank' title='Go To Live Demo'><ArrowUpRight size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300'/></a></li>
                            </ul>
                        </nav>
                    </figcaption>
                </figure>
                <ul aria-label="technologies" className='flex justify-start items-center gap-1 px-5 pt-2 pb-5 flex-wrap group'>
                    {
                        ["React", "TypeScript", "TailwindCSS", "JavaScript ES6+", "Responsive Design"].map((skill, index) => (
                            <li key={index} className='flex justify-center items-center text-foreground/45 text-sm font-normal tracking-wide capitalize w-fit h-fit p-2 rounded-full bg-surface/70 hover:bg-primary/5 border border-border hover:border hover:border-primary hover:text-primary/90 transition-all duration-700'>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </article>
            <article className="col-span-2 xl:col-span-1 flex flex-col justify-stretch items-start background-card-mix ring ring-border rounded-2xl shadow-xl/30 overflow-hidden group relative shimmer-shine">
                <figure>
                    <Image src={assembelyImage} alt='Assembely End Image' className='aspect-4/3 object-fill group-hover:scale-105 rounded-tl-2xl rounded-tr-2xl transition-transform duration-700 group' />
                    <figcaption className='px-5 py-3 space-y-1'>
                        <h3 className='text-foreground text-xl md:text-2xl tracking-tight font-bold group-hover:text-primary transition-all duration-700 py-2 flex justify-between items-center'><span>Assembly EndGame</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arrow-move group-hover:text-primary group-hover:-translate-y-[15px] group-hover:translate-x-[8px]"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></h3>
                        <p className='text-foreground/65 text-base md:text-lg normal-case relative figcaption-pseudo-icon group/pseudo-icon break-words whitespace-normal text-pretty hyphens-auto'>A creative and interactive web project inspired by game UI principles, showcasing dynamic layout and responsive design. This project demonstrates strong attention to visual hierarchy, engaging user experience, and CSS layout skills, making it ideal for entertainment or landing pages.</p>
                        {/* Social Links */}
                        <nav aria-label="social-links" className='flex justifty-center items-center gap-5'>
                            <h3 id="social-label" className='sr-only'>Social Links</h3>
                            <ul aria-labelledby="social-label" className='absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%] flex justifty-center items-center gap-5 invisible group-hover:visible'>
                                <li><a href="https://github.com/Mohammed-Soliman144/Assembly-EndGame" target='_blank' title='Go To Repository'><FiGithub size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300' /></a></li>
                                <li><a href="https://mohammed-soliman144.github.io/Assembly-EndGame" target='_blank' title='Go To Live Demo'><ArrowUpRight size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300'/></a></li>
                            </ul>
                        </nav>
                    </figcaption>
                </figure>
                <ul aria-label="technologies" className='flex justify-start items-center gap-1 px-5 pt-2 pb-5 flex-wrap group'>
                    {
                        ["React", "TypeScript", "CSS3", "JavaScript ES6+", "Hooks"].map((skill, index) => (
                            <li key={index} className='flex justify-center items-center text-foreground/45 text-sm font-normal tracking-wide capitalize w-fit h-fit p-2 rounded-full bg-surface/70 hover:bg-primary/5 border border-border hover:border hover:border-primary hover:text-primary/90 transition-all duration-700'>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </article>
            <article className="col-span-2 xl:col-span-1 flex flex-col justify-stretch items-start background-card-mix ring ring-border rounded-2xl shadow-xl/30 overflow-hidden group relative shimmer-shine">
                <figure>
                    <Image src={bootstrapImage} alt='Company Profile Image'  className='aspect-4/3 object-fill group-hover:scale-105 rounded-tl-2xl rounded-tr-2xl transition-transform duration-700 group' />
                    <figcaption className='px-5 py-3 space-y-1'>
                        <h3 className='text-foreground text-xl md:text-2xl tracking-tight font-bold group-hover:text-primary transition-all duration-700 py-2 flex justify-between items-center'><span>Bootstrap Template</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arrow-move group-hover:text-primary group-hover:-translate-y-[15px] group-hover:translate-x-[8px]"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></h3>
                        <p className='text-foreground/65 text-base md:text-lg normal-case break-words whitespace-normal text-pretty hyphens-auto'>A modern Bootstrap-based landing page template with clean structure and responsive behavior. Built using semantic HTML5 and Bootstrap grid utilities, it highlights layout mastery, cross-screen compatibility, and polished visual styling ideal for corporate or personal sites.</p>
                        {/* Social Links */}
                        <nav aria-label="social-links" className='flex justifty-center items-center gap-5'>
                            <h3 id="social-label" className='sr-only'>Social Links</h3>
                            <ul aria-labelledby="social-label" className='absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%] flex justifty-center items-center gap-5 invisible group-hover:visible'>
                                <li><a href="https://github.com/Mohammed-Soliman144/Bootstrap-Template-One" target='_blank' title='Go To Repository'><FiGithub size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300' /></a></li>
                                <li><a href="https://mohammed-soliman144.github.io/Bootstrap-Template-One" target='_blank' title='Go To Live Demo'><ArrowUpRight size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300'/></a></li>
                            </ul>
                        </nav>
                    </figcaption>
                </figure>
                <ul aria-label="technologies" className='flex justify-start items-center gap-1 px-5 pt-2 pb-5 flex-wrap group'>
                    {
                        ["HTML5", "CSS3", "Bootstrap", "JavaScript ES6+", "Font Awesome Icons", "Responsive Design"].map((skill, index) => (
                            <li key={index} className='flex justify-center items-center text-foreground/45 text-sm font-normal tracking-wide capitalize w-fit h-fit p-2 rounded-full bg-surface/70 hover:bg-primary/5 border border-border hover:border hover:border-primary hover:text-primary/90 transition-all duration-700'>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </article>
            <article className="col-span-2 xl:col-span-1 flex flex-col justify-stretch items-start background-card-mix ring ring-border rounded-2xl shadow-xl/30 overflow-hidden group relative shimmer-shine">
                <figure>
                    <Image src={dashboardImage} alt='Dashboard Image' className='aspect-4/3 object-fill group-hover:scale-105 rounded-tl-2xl rounded-tr-2xl transition-transform duration-700 group' />
                    <figcaption className='px-5 py-3 space-y-1'>
                        <h3 className='text-foreground text-xl md:text-2xl tracking-tight font-bold group-hover:text-primary transition-all duration-700 py-2 flex justify-between items-center'><span>Dashboard Template</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arrow-move group-hover:text-primary group-hover:-translate-y-[15px] group-hover:translate-x-[8px]"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></h3>
                        <p className='text-foreground/65 text-base md:text-lg normal-case break-words whitespace-normal text-pretty hyphens-auto'>A comprehensive dashboard layout built with a focus on data presentation and UI structure. Featuring panels, navigation, and layout scales, this template illustrates organized component composition, responsive grid usage, and interface clarity for admin or analytics applications.</p>
                        {/* Social Links */}
                        <nav aria-label="social-links" className='flex justifty-center items-center gap-5'>
                            
                            <h3 id="social-label" className='sr-only'>Social Links</h3>
                            <ul aria-labelledby="social-label" className='absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%] flex justifty-center items-center gap-5 invisible group-hover:visible'>
                                <li><a href="https://github.com/Mohammed-Soliman144/Dashboard-Template-Four" target='_blank' title='Go To Repository'><FiGithub size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300' /></a></li>
                                <li><a href="https://mohammed-soliman144.github.io/Dashboard-Template-Four" target='_blank' title='Go To Live Demo'><ArrowUpRight size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300'/></a></li>
                            </ul>
                        </nav>
                    </figcaption>
                </figure>
                <ul aria-label="technologies" className='flex justify-start items-center gap-1 px-5 pt-2 pb-5 flex-wrap group'>
                    {
                        ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"].map((skill, index) => (
                            <li key={index} className='flex justify-center items-center text-foreground/45 text-sm font-normal tracking-wide capitalize w-fit h-fit p-2 rounded-full bg-surface/70 hover:bg-primary/5 border border-border hover:border hover:border-primary hover:text-primary/90 transition-all duration-700'>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </article>
            <article className="col-span-2 xl:col-span-1 flex flex-col justify-stretch items-start background-card-mix ring ring-border rounded-2xl shadow-xl/30 overflow-hidden group relative shimmer-shine">
                <figure>
                    <Image src={specialImage} alt='Special Design Landing Image' className='aspect-4/3 object-fill group-hover:scale-105 rounded-tl-2xl rounded-tr-2xl transition-transform duration-700 group' />
                    <figcaption className='px-5 py-3 space-y-1'>
                        <h3 className='text-foreground text-xl md:text-2xl tracking-tight font-bold group-hover:text-primary transition-all duration-700 py-2 flex justify-between items-center'><span>Special Design</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arrow-move group-hover:text-primary group-hover:-translate-y-[15px] group-hover:translate-x-[8px]"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></h3>
                        <p className='text-foreground/65 text-base md:text-lg normal-case break-words whitespace-normal text-pretty hyphens-auto'>An artistic and visually striking web interface that showcases creative design sensibilities. This project highlights custom visual styling, advanced CSS techniques, and responsive adjustments, demonstrating an understanding of both design patterns and practical implementation.</p>
                        {/* Social Links */}
                        <nav aria-label="social-links" className='flex justifty-center items-center gap-5'>
                            
                            <h3 id="social-label" className='sr-only'>Social Links</h3>
                            <ul aria-labelledby="social-label" className='absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%] flex justifty-center items-center gap-5 invisible group-hover:visible'>
                                <li><a href="https://github.com/Mohammed-Soliman144/Special-Design" target='_blank' title='Go To Repository'><FiGithub size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300' /></a></li>
                                <li><a href="https://mohammed-soliman144.github.io/Special-Design" target='_blank' title='Go To Live Demo'><ArrowUpRight size={45} className='text-foreground p-3 rounded-full bg-surface hover:text-primary transition-all duration-300'/></a></li>
                            </ul>
                        </nav>
                    </figcaption>
                </figure>
                <ul aria-label="technologies" className='flex justify-start items-center gap-1 px-5 pt-2 pb-5 flex-wrap group'>
                    {
                        ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"].map((skill, index) => (
                            <li key={index} className='flex justify-center items-center text-foreground/45 text-sm font-normal tracking-wide capitalize w-fit h-fit p-2 rounded-full bg-surface/70 hover:bg-primary/5 border border-border hover:border hover:border-primary hover:text-primary/90 transition-all duration-700'>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </article>
            <ul className='place-self-center row-span-2 col-span-2 flex justify-start items-center gap-3'>
                <li>
                    <CustomLink size='lg' classes='animated-border-button group relative z-1' href='https://github.com/mohammed-soliman144' target='_blank' rel='noopener noreferrer'>
                    <span>View All Projects<ArrowUpRight size={35} className='inline-flex pl-2 group-hover:animate-bounce'/></span>
                    </CustomLink>
                </li>
            </ul>
        </div>
    </section>
}