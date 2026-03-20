export default function LoadingPage() {
    return <section aria-busy="true" aria-live="polite" className="relative w-full min-h-screen bg-background">
        <div role="status" className="before:content-['Loading...'] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-white before:text-lg before:font-bold before:font-secondary before:italic before:z-2">
            <span className="spinner absolute w-40 h-40 rounded-full border-2 border-primary/35 border-l-transparent shadow-xl/30 shadow-primary/10 animate-spin z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md"></span>
            <span className="sr-only">Loading Muhammed Soliman`s Portfolio...</span>
        </div>
    </section>
}