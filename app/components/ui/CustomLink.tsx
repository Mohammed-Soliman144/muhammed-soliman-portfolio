
// import Link, {type LinkProps} from 'next/link'
// type LinkProps contains AnchorHTMLAttributes like href, scroll, prefetch for nextjs
import Link, { type LinkProps } from "next/link"


// Declare ButtonProps as type of all manadatory properties (not optional ...rest)
type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {
    children: React.ReactNode,
    onClicked?: () => void,
    classes?: string,
    size?: string,
    hasDefaultClasses?: boolean
}

/* Link Component */
export default function CustomLink({children, onClicked, classes = "", size = "default", hasDefaultClasses = true, ...rest}: ButtonProps){
    const sizeClass: {
        "sm": string,
        "default": string,
        "lg": string,
        // Key and value string [for ts compiler]
        [key: string]: string
    } = {
        "sm": 'px-3 py-2',
        "default": 'px-4 py-3',
        "lg": 'px-8 py-4'
    }
    const baseClasses = `capitalize outline-none bg-primary text-foreground rounded-full shadow-md shadow-primary/20 hover:bg-primary/80
    ${sizeClass[size]} ${classes}`
    return <Link className={hasDefaultClasses ? baseClasses : classes} onClick={onClicked} {...rest}>
        {children}
    </Link>
}