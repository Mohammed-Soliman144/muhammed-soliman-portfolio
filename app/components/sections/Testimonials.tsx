/* RCC */
"use client"
import { useState } from "react"
import Image from "next/image"
/* Moduled Assets */
import testimonialImage1 from "@/app/assets/imgs/test-1.jpg"
import testimonialImage2 from "@/app/assets/imgs/test-2.jpg"
import testimonialImage3 from "@/app/assets/imgs/test-3.jpg"
import testimonialImage4 from "@/app/assets/imgs/test-4.jpg"
/* Icons */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

/* Testimonials Component */
export default function Testimonials() {
    // Reviews Array
    const reviewsList = [
        {
            review: `"Muhammed takes feedback seriously and iterates quickly. His ability to understand requirements and turn them into functional interfaces is impressive for someone early in their career."`,
            name: "Alex Morgan",
            img: testimonialImage1,
            title: "CTO, Tech Leaders Inc."
        },
        {
            review: `"I was impressed by how clean and organized his projects are. The UI is smooth, responsive, and feels professional. He clearly cares about quality and user experience."`,
            name: "Ryan Coopern",
            img: testimonialImage2,
            title: "Product Manager, Digital Solutions."
        },
        {
            review: `"Muhammed demonstrates strong curiosity and a real passion for frontend development. He approaches problems thoughtfully, writes clean and readable code, and continuously works on improving his skills through building practical projects."`,
            name: "Jason Reed",
            img: testimonialImage3,
            title: "Senior Tech Lead, Microdata Inc."
        },
        {
            review: `"Muhammed is not only skilled technically, but also very easy to communicate with. He explains ideas clearly, listens to feedback, and works well with others to find the best solution."`,
            name: "Kevin Brooks",
            img: testimonialImage4,
            title: "CEO, Innovation Lab."
        }
    ]

    // State To handle current index of slider
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    // State To handle indicator is selected
    const [isSelected, setIsSelected] = useState<boolean>(false);
    // Move To Next Slider
    const moveToNext = () => {
        setCurrentIndex(prev => ((prev + 1) % reviewsList.length));
    }
    // Move To Previous Slider
    const moveToPrev = () => {
        setCurrentIndex(prev => ((prev - 1 + reviewsList.length) % reviewsList.length));
    }
    // Go To Specific Slider
    const moveToIndex = (index: number) => {
        setCurrentIndex(index % reviewsList.length);
    }
    return <section id='testimonials' className='testimonial-section overlay-carousel py-15'>
        <div className="container flex flex-col justify-center items-center gap-5 overflow-hidden">
            <article className='testimonials-header text-center'>
                <span className='block tracking-wider uppercase text-base text-primary font-semibold'>what people say</span>
                <h2 className='font-secondary text-3xl font-bold md:text-5xl md:font-extrabold normal-case tracking-wide text-foreground italic leading-normal'><span className='inline-block font-primary text-primary pr-2 not-italic first-letter:uppercase tracking-tight'>kind words from</span>amazing people.</h2>
            </article>    
            <section className="carousel-slider w-full relative">
                <div className="slider-track w-full flex justify-start items-center overflow-hidden pt-8 pb-25 px-5">
                    {
                        reviewsList.map((rev, index) => (
                            <article key={index} className={`slide w-full shrink-0 flex flex-col justify-start items-start gap-10 px-8 py-9 rounded-3xl ring ring-border shadow-[0px_0px_32px_-3px_color-mix(in_srgb,theme(colors.primary),transparent_65%)] bg-radial-[at_50%_75%,color-mix(in_srgb,theme(colors.card)_90%,transparent),color-mix(in_srgb,theme(colors.secondary),theme(colors.primary)_10%)] animate-smooth`} style={{transform: `translateX(-${index * 100}%)`, opacity: `${index === currentIndex ? 1 : 0}`, filter: `${index === currentIndex ? "blur(0)" : "blur(2px)"}`}} >
                                <blockquote className="flex justify-center items-center single-quote">
                                    <p className='text-foreground text-base md:text-[1.4rem] not-italic font-semibold normal-case leading-relaxed font-primary lg:px-8 break-words whitespace-normal text-pretty hyphens-auto'>{rev.review}
                                    </p>
                                </blockquote>
                                <figure className="flex justify-start items-center gap-4 lg:px-8">
                                    <Image src={rev.img} alt="Alex Morgan - Reviewer 1" className="w-20 h-20 rounded-full border-2 border-primary object-cover"/>
                                    <figcaption className="font-primary">
                                        <h3 className="text-xl font-semibold text-foreground">{rev.name}</h3>
                                        <p className="text-sm text-foreground/65 font-normal"><cite className="not-italic inline-block mt-0.5">{rev.title}</cite></p>
                                    </figcaption>
                                </figure>
                            </article>
                        ))
                    }
                </div>
                {/* Carousel Button */}
                <nav className="carousel-btns my-10 absolute -bottom-5 left-1/2 -translate-x-1/2 text-foreground flex justify-center items-center gap-30" aria-label="Navigation Carousel Buttons">
                    <button type='button' aria-label="Previous Slide" className="outline-none cursor-pointer" onClick={moveToPrev}><MdKeyboardArrowLeft size={50} className="text-foreground p-2 rounded-full bg-surface hover:text-primary hover:bg-primary/15 hover:transition-all hover:duration-300"/></button>
                    <button type='button' aria-label="Next Slide" className="outline-none cursor-pointer" onClick={moveToNext}><MdKeyboardArrowRight size={50} className="text-foreground p-2 rounded-full bg-surface hover:text-primary hover:bg-primary/15 hover:transition-all hover:duration-300"/></button>
                </nav>
                {/* Carousel Indicators */}
                <div className="carousel-indicators my-10 carousel-btns absolute -bottom-1 left-1/2 -translate-x-1/2 text-foreground flex justify-center items-center gap-3 -mt-20" role="tablist" >
                    {
                        Array.from({length: 4}).map((_, indx) => (
                            <button className={`indicator outline-none cursor-pointer transition-all duration-500 ${currentIndex !== indx && "hover:bg-primary/15"} ${currentIndex === indx ? "px-4 py-1.5 rounded-full bg-primary" : "p-1.5 rounded-full bg-muted"}`} type="button" role="tab" aria-label={`slide ${indx + 1}`} aria-selected={isSelected} onClick={() => {moveToIndex(indx); setIsSelected(!isSelected);}} key={indx}></button>
                        ))
                    }
                </div>
            </section>
        </div>
    </section>
}