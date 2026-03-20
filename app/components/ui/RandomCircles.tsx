"use client"
import {useState, useEffect} from 'react'

type Circle = {
    posX: number | 100,
    posY: number | 100,
    transX1: number | 80,
    transY1: number | 80,
    transX2: number | 120,
    transY2: number | 120,
    transX3: number | 150,
    transY3: number | 150,
    transX4: number | 200,
    transY4: number | 200,
    duration: number,
    delay?: number | 0,
}
/* Random Floating Circles Component */
export default function RandomCircles() {
    const [stars, setStars] = useState<Circle[]>(() => {
        return Array.from({length: 35}).map( _ => (
            {
                /* Range From 0% to 100% - Left */
                posX: Math.random() * 100,
                /* Range From 0% to 100% - top */
                posY: Math.random() * 100,
                /* Range from -40 to 40px - translate */
                transX1: (Math.random() - 0.5) * 80,
                transY1: (Math.random() - 0.5) * 80,
                /* Range from -60 to 60px - translate */
                transX2: (Math.random() - 0.5) * 120,
                transY2: (Math.random() - 0.5) * 120,
                /* Range from -75 to 75px - translate */
                transX3: (Math.random() - 0.5) * 150,
                transY3: (Math.random() - 0.5) * 150,
                /* Range from -100 to 100px - translate */
                transX4: (Math.random() - 0.5) * 200,
                transY4: (Math.random() - 0.5) * 200,
                /* Range Of Seconds 20 Seconds + Range from 0 to 10 second Random */
                duration: (Math.random() * 10) + 20,
            }
        ))
    })

    useEffect(() => {
        const REPEAT_DURATION = (Math.random() * 10) + 20
        const interval = setInterval(() => {
            setStars(prevStars => (
                prevStars.map(star => (
                    {
                        ...star,
                        posX: Math.random() * 100,
                        posY: Math.random() * 100,
                        transX1: (Math.random() - 0.5) * 80,
                        transY1: (Math.random() - 0.5) * 80,
                        transX2: (Math.random() - 0.5) * 120,
                        transY2: (Math.random() - 0.5) * 120,
                        transX3: (Math.random() - 0.5) * 150,
                        transY3: (Math.random() - 0.5) * 150,
                        transX4: (Math.random() - 0.5) * 200,
                        transY4: (Math.random() - 0.5) * 200,
                        duration: REPEAT_DURATION,
                    }
                ))
            ))
            // setInterval accepts milleseconds so 1 millesecond * 1000 = 1 second
        }, REPEAT_DURATION * 1000)

        return () => clearInterval(interval)
    }, [])

    return <div className="absolute inset-0 w-full min-h-[150%] overflow-hidden pointer-events-none" aria-hidden="true" suppressHydrationWarning={true}>
        {
            stars.map((star, indx) => (
                <span key={indx} className="w-1.5 h-1.5 bg-primary rounded-full opacity-60 absolute -z-1 animate-dots" 
                    style={{
                        top: `${star.posY}%`,
                        left: `${star.posX}%`,
                        "--transX1": `${star.transX1}px`,
                        "--transY1": `${star.transY1}px`,
                        "--transX2": `${star.transX2}px`,
                        "--transY2": `${star.transY2}px`,
                        "--transX3": `${star.transX3}px`,
                        "--transY3": `${star.transY3}px`,
                        "--transX4": `${star.transX4}px`,
                        "--transY4": `${star.transY4}px`,
                        "--duration": `${star.duration}s`,
                        "--delay": `${star.delay}`
                    } as React.CSSProperties}
                    >
                </span>
            ))
        }
    </div>
}