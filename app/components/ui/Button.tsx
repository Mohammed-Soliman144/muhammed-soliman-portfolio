
// import ButtonHTMLAttributes from react
import { ButtonHTMLAttributes } from "react"

// Type (interface) of Button Properties to accept reset of 
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    onClicked?: () => void,
    classes?: string,
    size?: string,
}
/* Button Component */
export default function Button({children, onClicked, classes="", size="default", ...rest}: ButtonProps) {
    const sizeClass: {
        "sm": string,
        "default": string,
        "lg": string,
        // Key and Value is string [for ts compiler]
        [key: string]: string
    } = {
        "sm": 'px-3 py-2',
        "default": 'px-4 py-3',
        "lg": 'px-8 py-4'
    }
    const baseClasses = `capitalize outline-none bg-primary text-foreground rounded-full shadow-md shadow-primary/20 hover:bg-primary/80
    ${sizeClass[size]} ${classes}`
    return <button onClick={onClicked} className={baseClasses} {...rest}>
        {children}
    </button>
}

