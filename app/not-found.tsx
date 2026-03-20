import CustomLink from "@/app/components/ui/CustomLink"

export default function NotFound(){
    return <section className="w-full min-h-screen bg-background p-6 flex justify-center items-start">
        <div className="flex flex-col justify-center items-center gap-8">
            <span className="text-primary text-[10rem] md:text-[12rem] lg:text-[15rem] leading-none font-black">404</span>
            <h1 className="text-white text-4xl md:text-6xl">Page not found</h1>
            <p className="text-white text-lg md:text-xl text-center break-words whitespace-normal text-pretty hyphens-auto">Sorry, The page you are looking for doesn`t exist.</p>
            <CustomLink size="lg" href="/" >
                <span>Back To Home</span>
            </CustomLink>
        </div>
    </section>
}