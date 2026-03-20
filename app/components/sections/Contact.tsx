/* RCC - React Client Component */
"use client"
import { useActionState, useEffect, useRef, useState } from 'react'
import Form from 'next/form'
import Button from '@/app/components/ui/Button'
import { TbPhone, TbSend } from 'react-icons/tb'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { FaRegCheckCircle } from 'react-icons/fa'
import { RiCloseCircleLine } from 'react-icons/ri'
import { handleFormSubmittion, type formState } from '@/app/_libs/actions/server-actions'

/* Contact Component */
export default function Contact(){
    // Create new object of intial state with empty errors before send message From Type formState
    const initialState: formState = {
        success: undefined,
        errors: {},
        error: "",
    }
    // useActionState Hook to handle errorStates and formAction and sendingStatus
    const [currentState, formAction, isPending] = useActionState(handleFormSubmittion, initialState) 
    
    // check is Reset Functionality is Done
    const [isReset, setIsReset] = useState<boolean>(false);

    // Reference of form to handle form reset
    const formRef = useRef<HTMLFormElement>(null)
    const timerRef = useRef<number>(null);

    // useEffect Hook To Handle Reset Form after Message Send Successfully
    useEffect(()=> {
        if(currentState?.success)
            timerRef.current = window.setTimeout(() => {
                setIsReset(prevState => !prevState);
                formRef.current?.reset();
            }, 2000)

        return () => {
            if(timerRef.current)
                window.clearTimeout(timerRef.current)
        }
    }, [currentState])
    return <section id='contact' className='container pt-32 space-y-15'>
        <article className='header text-center space-y-6'>
            <span className='block tracking-wider uppercase text-base text-primary font-semibold'>get in touch</span>
            <h2 className='font-secondary text-3xl font-bold md:text-5xl md:font-extrabold normal-case tracking-wide text-foreground italic'><span className='inline-block font-primary text-primary pr-2 not-italic first-letter:uppercase tracking-tight'>let{"'s"} build</span>something great.</h2>
            <p className='text-foreground/65 text-sm md:text-base normal-case first-letter:capitalize break-words whitespace-normal text-pretty hyphens-auto'>have a project in mind? I{"'"}d love to hear about it.<span className='inline-block pl-1.5 first-letter:capitalize'>send me a message and let{"'"}s discuss how we can work together.</span></p>
        </article>
        <div className="contact flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-start gap-12 px-2">
            <Form ref={formRef} action={formAction} className='shadow-xl w-full lg:max-w-[550px] bg-card px-4 pt-6 pb-13.5 rounded-2xl border border-primary space-y-5 self-stretch'>
                <div className="name text-foreground text-base space-y-2">
                    <label htmlFor="name" className='capitalize inline-block mb-2 pl-1 font-semibold w-full'>name</label>
                    <input type="text" placeholder='your name...' id='name' 
                    disabled={isPending} name='name'
                    className='block px-4 py-3 rounded-2xl outline-none focus-visible:ring-2 focus-visible-ring-primary focus:ring-2 focus:ring-primary placeholder-shown:capitalize placeholder-shown:text-foreground/90 border border-border w-full bg-surface/90'/>
                    {
                        currentState?.errors?.name &&
                        <p className='p-2 rounded-xl bg-red-400/25 text-sm flex justify-start items-center gap-2'><RiCloseCircleLine size={25} className='text-red-500'/>{currentState.errors?.name}</p>
                    }
                </div>
                <div className="email text-foreground text-base space-y-2">
                    <label htmlFor="email" className='capitalize inline-block mb-2 pl-1 font-semibold w-full'>email</label>
                    <input type="email" placeholder='Your@email.com' id='email' 
                    name='email' disabled={isPending} className='block px-4 py-3 rounded-2xl outline-none focus-visible:ring-2 focus-visible-ring-primary focus:ring-2 focus:ring-primary placeholder-shown:text-foreground/90 border border-border w-full bg-surface/90'/>
                    {
                        currentState?.errors?.email &&
                        <p className='p-2 rounded-xl bg-red-400/25 text-sm flex justify-start items-center gap-2'><RiCloseCircleLine size={25} className='text-red-500'/>{currentState.errors?.email}</p>
                    }
                </div>
                <div className="message text-foreground text-base space-y-2">
                    <label htmlFor="message" className='capitalize inline-block mb-2 pl-1 font-semibold w-full'>message</label>
                    <textarea placeholder='your message...' id='message' name='message' className='block px-4 py-3 rounded-2xl outline-none focus-visible:ring-2 focus-visible-ring-primary focus:ring-2 focus:ring-primary placeholder-shown:capitalize placeholder-shown:text-foreground/90 border border-border resize-none w-full bg-surface/90' rows={5} disabled={isPending}/>
                    {
                        currentState?.errors?.message &&
                        <p className='p-2 rounded-xl bg-red-400/25 text-sm flex justify-start items-center gap-2'><RiCloseCircleLine size={25} className='text-red-500'/>{currentState.errors?.message}</p>
                    }
                </div>
                <Button type='submit' size='lg' disabled={isPending} classes='block w-full flex justify-center items-center gap-2 text-xl font-semibold shadow-xl py-5 cursor-pointer disabled:cursor-not-allowed disabled:bg-primary/30 mt-8'>
                    {
                        !isPending ?
                            <>
                                <span>send message</span><TbSend size={25}/>
                            </>
                        :
                            <>
                                <span className='relative after:content[""] after:absolute after:-right-15 after:top-1/2 after:-translate-y-1/2 after:bg-transparent after:p-4 after:rounded-full after:border-3 after:border-primary/85 after:border-l-transparent after:animate-spin'>sending message...</span>
                            </>
                    }
                </Button>
                {
                    // check if form Message send successfuly or not
                        !currentState.success && currentState.error ?
                        <div className='p-2 rounded-xl bg-red-400/25 text-sm flex justify-start items-center gap-2'><RiCloseCircleLine size={25} className='text-red-500'/>{currentState.error}</div>
                    : 
                        currentState.success && !isReset ?
                        <div className='p-3 rounded-xl flex justify-start items-center gap-3 text-base text-green-500 bg-green-500/15'><FaRegCheckCircle size={25} className='text-green-500'/>Your Message Sent Successfully</div>
                    : 
                        currentState.success === undefined &&
                        null
                }
            </Form>
            <article className='contact-info space-y-12 flex flex-col justify-center items-center w-full'>
                <nav aria-label="Contact Navigation" className='bg-card p-6 pb-8 border border-border rounded-3xl space-y-6 shadow-xl w-full lg:max-w-[550px]'>
                    <h3 aria-label="contact-info" className='capitalize text-foreground text-2xl tracking-tight font-bold' >contact information</h3>
                    <ul aria-labelledby="contact-info" className='flex flex-col justify-start items-start space-y-4'>
                        <li className='flex justify-start items-center gap-4 p-3 hover:bg-surface cursor-pointer w-full rounded-xl group transition-all duration-300 group relative'>
                            <MdOutlineEmail size={50} className='bg-primary/15 text-primary/85 p-2.75 rounded-xl group-hover:bg-primary/35 group-hover:text-primary/90'/>
                            <div className="flex flex-col space-y-1 text-base font-semibold  tracking-tight">
                                <label className='text-foreground/65 capitalize font-normal'>email</label>
                                <a className="text-foreground  dots-text group-hover:dots-hover" href="mailto:muhammedsoliman144@gmail.com" >muhammedsoliman144@gmail.com</a>
                            </div>
                        </li>
                        <li className='flex justify-start items-center gap-4 p-3 hover:bg-surface cursor-pointer w-full rounded-xl group transition-all duration-300'>
                            <TbPhone size={50} className='bg-primary/15 text-primary/85 p-2.75 rounded-xl group-hover:bg-primary/35 group-hover:text-primary/90'/>
                            <div className="flex flex-col space-y-1 text-base font-semibold  tracking-tight">
                                <label className='text-foreground/65 capitalize font-normal'>phone</label>
                                <a className="text-foreground" href="tel:+2001555382692" >+20 (01555) 382-692</a>
                            </div>
                        </li>
                        <li className='flex justify-start items-center gap-4 p-3 hover:bg-surface cursor-pointer w-full rounded-xl group transition-all duration-300'>
                            <FiMapPin size={50} className='bg-primary/15 text-primary/85 p-2.75 rounded-xl group-hover:bg-primary/35 group-hover:text-primary/90'/>
                            <div className="flex flex-col space-y-1 text-base font-semibold  tracking-tight">
                                <label className='text-foreground/65 capitalize font-normal'>location</label>
                                <a className="text-foreground capitalize" href="#" >cairo, Egypt</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="hiring-status p-6 px-8 rounded-3xl ring ring-primary space-y-4 shadow-xl w-full lg:max-w-[550px]">
                    <h4 className='relative capitalize tracking-tight text-foreground text-lg text-bold pl-5 before:content[""] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:p-1.5 before:rounded-full before:bg-green-500 before:animate-pulse'>currently available</h4>
                    <p className='text-foreground/65 first-letter:uppercase text-base tracking-tight break-words whitespace-normal text-pretty hyphens-auto'>i{"'"}m currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance, let{"'"}s talk!</p>
                </div>
            </article>
        </div>
    </section>
}