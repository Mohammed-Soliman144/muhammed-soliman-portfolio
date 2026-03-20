"use client"
import { useState, useEffect } from "react"

/* ScrollToTop Component */
export default function ScrollToTop() {
    // State To Handle Visibility of Scroll Btn 
    const [isVisible, setIsVisible] = useState<boolean>(false)

    // Mount only once at first time
    useEffect(() => {
        // Toggle State of scroll button to true after 300px of Axis Y
        const handleScroll = () => {
            setIsVisible(window.scrollY > 800)
        }

        // Attach scroll Event to window and using passive: true to force the browser scrolling without waiting to finish javascript code to improve performance
        window.addEventListener('scroll', handleScroll, {passive: true})

        // Remove scroll Event from window after destory the component
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll To Top Functionality using window.scrollTo({options})
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    if(!isVisible) return null;
    return  <button className="scroll-to-top" type="button" aria-label="Back To Top" onClick=  {scrollTop} style={{"--visible": isVisible ? "visible" : "hidden"} as React.CSSProperties}>
        {/* handle Styling of button by Pseudo Element CSS */}
    </button>
}