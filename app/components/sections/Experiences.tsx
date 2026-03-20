/* clsx library To Handles conditional classes */
import { clsx } from "clsx";
/* Experiences Component */
export default function Experiences(){
    // Experiences Array
    const experiencesList = [
        {
            from: "October 23, 2025",
            fromTime: "2025-10-23",
            to: "Present",
            toTime: "2026-03-01",
            isCurrent: true,
            heading: "Freelance Frontend Developer",
            company: "Freelancer Platforms (Mostaql & Khamsat)",
            summary: `Building responsive web interfaces and landing pages for small businesses and individual clients. Collaborating directly with clients to translate design ideas into clean, maintainable frontend code while ensuring performance and usability across devices.`,
            techList: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "SCSS", "Git & Github"]
        },
        {
            from: "March 01, 2025",
            fromTime: "2025-03-01",
            to: "Present",
            toTime: "2026-03-01",
            isCurrent: true,
            heading: "Building Modern Frontend Web Applications",
            company: "Practical experience solving real-world problems",
            summary: `Developed multiple frontend applications to strengthen practical development skills and simulate real-world workflows. Focused on building reusable components, responsive layouts, and modern UI patterns while improving code structure and problem-solving abilities.`,
            techList: ["React", "Next.js","Tailwind CSS", "Bootstrap", "REST APIs" , "Component Architecture"]
        },
        {
            from: "August 01, 2024",
            fromTime: "2024-08-01",
            to: "October 23, 2025",
            toTime: "2025-10-23",
            isCurrent: false,
            heading: "Frontend Development Learning Journey",
            company: "Applying frontend skills to production-ready web applications",
            summary: `Focused on building a strong foundation in web development by practicing HTML, CSS, and modern JavaScript. Built small projects to apply responsive design techniques and learned version control using Git and GitHub.`,
            techList: ["HTML5", "CSS3","JavaScript", "Responsive Design", "Bootstrap", "SCSS", "React", "TypeScript", "Nextjs", "Git & Github", "MySql", "C & C++"]
        },
    ]
    return <section id='experiences' className='container py-32 grid grid-cols-1 xl:grid-cols-2 gap-x-12 space-y-20 overlay-experiences'>
        <article className='header text-left space-y-4 col-span-2 max-w-200'>
            <span className='block tracking-wider uppercase text-base text-primary font-semibold'>career journey</span>
            <h2 className='font-secondary text-3xl font-bold md:text-5xl md:font-extrabold normal-case tracking-wide text-foreground italic leading-normal'><span className='inline-block font-primary text-primary pr-2 not-italic first-letter:uppercase tracking-tight'>experience that</span>speaks through continuous learning and building.</h2>
            <p className='text-foreground/75 text-base md:text-lg normal-case first-letter:capitalize leading-normal break-words whitespace-normal text-pretty hyphens-auto'>A timeline highlighting my progress in frontend development — from mastering the fundamentals of web technologies to building modern applications and delivering solutions through freelance work and personal projects.</p>
        </article>
        <section className="timeline relative col-span-2 h-fit grid lg:grid-cols-2 grid-cols-[20px_1fr_1fr] grid-rows-auto lg:gap-12 gap-x-0 gap-y-6 before:content[''] before:w-0.5 before:h-full  before:bg-linear-to-b before:from-primary before:to-transparent before:absolute before:top-0.5 before:left-[5px] lg:before:left-1/2 lg:before:-translate-x-1/2">
            {
                experiencesList.map((exper, indx) => {
                    const rowPos = `${indx + 1}`
                    const colPos = indx % 2 ? "2" : "1"

                    const articleClasses = clsx("relative py-4 px-4 rounded-2xl border border-primary/20 bg-special-card shadow-xl/30 text-foreground/65 hover:border hover:border-primary w-fit h-fit text-start lg:row-start-(--row-pos) lg:col-start-(--col-pos) col-[2/4] lg:col-span-1",{
                        "lg:text-end": !(indx % 2),
                        "lg:text-start": indx % 2,
                    })
                    const ulClasses = clsx("technologies flex justifty-start items-center gap-1 flex-wrap",{
                        "lg:justify-start": indx % 2,
                        "lg:justify-end": !(indx % 2),
                    })
                    const circlePseudo = clsx("before:content[''] before:block before:w-3 before:h-3  before:bg-primary before:rounded-full before:absolute before:-top-0.5 before:-left-5.25 lg:before:-top-0.25 before:z-1", `${exper.isCurrent ? "after:content[''] after:inline-block after:w-3.5 after:h-3.5  after:bg-primary after:rounded-full after:absolute after:-top-0.5 after:-left-5.25 lg:after:-top-0.25 after:z-1 after:animate-ping" : ""}`, {
                        "lg:before:inset-0 lg:before:left-[104%] xl:before:left-[103.5%]": !(indx % 2),
                        "lg:after:inset-0 lg:after:left-[104%] xl:after:left-[103.5%]": !(indx % 2),
                        "lg:before:-left-7.5": (indx % 2),
                        "lg:after:-left-7.5": (indx % 2),
                    },"before:-left-5 after:-left-5");
                    return <article key={indx} className={clsx(articleClasses, circlePseudo)} style={{"--row-pos":  rowPos, "--col-pos": colPos } as React.CSSProperties}>
                        <p aria-label='timeline' className="text-primary">
                            <time dateTime={exper.fromTime}>{exper.from}</time> - {exper.isCurrent ? <span>{exper.to}</span> : <time dateTime={exper.toTime}>{exper.to}</time> }
                        </p>
                        <h3 className="text-foreground text-xl md:text-2xl tracking-tight font-bold pt-2 pb-1">{exper.heading}</h3>
                        <p className="text-base font-semibold break-words whitespace-normal text-pretty hyphens-auto">{exper.company}</p>
                        <p className="text-sm md:text-base py-5 break-words whitespace-normal text-pretty hyphens-auto">{exper.summary}</p>
                        <ul className={clsx(ulClasses)}>
                            {
                                exper.techList.map((tech, index) => (
                                    <li key={index} className="flex justify-center items-center text-foreground/45 text-sm font-normal tracking-wide p-1.5 rounded-full bg-surface/85">{tech}</li>
                                ))
                            }
                        </ul>
                    </article>
                })
            }
        </section>
    </section>
}
