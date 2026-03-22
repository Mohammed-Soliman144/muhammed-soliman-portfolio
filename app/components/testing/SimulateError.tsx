/* RCC - Testing UI */
"use client"

import { useState } from "react"
import Button from "@/app/components/ui/Button"

/* SimulateError Component */
export default function SimulateError() {
    // State to trigger error within rendering component phase
    const [error, setError] = useState<Error | null>(null)

    // Destroy Rendering of Component if error is true
    if(error) throw error

    return <Button size="sm" classes="cursor-pointer ml-4" onClicked={() => {
        try {
            /* when component hydrate after mounted on the browser then clicks throw error */
            throw new Error("Simulate Error")
        } catch(err) {
            // update the state by error to triggers react rerendering the component
            if(err instanceof Error)
                setError(err)
        }
    }}>
        <span>Trigger Error</span>
    </Button>
}

