// handle Sending Form by API End Points that provides by emailjs 
// SDK (Software Development Kit - ready prepared thiry library) like emailjs.send() (also its wrap the same functionality of API End Point) but it is for browser only and does not work for server side
"use server"

// install zod library for professional form validation => npm install zod
// import {z} from "zod"
import {z} from "zod"

// A- Define Constant variable wraps whole form inputs as object schema of validation required for each input (with the same name of input) by using z.object({})
const formSchema = z.object({
    // instead of trim your input string then check length then return error message
    name: z.string().trim().min(2, "Name must contains two characters at least or more"),
    // instead of regular expression /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/ to validate your email
    email: z.email("Invalid email"),
    // instead of trim your input string then check length then return error message
    message: z.string().trim().min(5,"Message must contains five characters at least or more")
})


// B- Declare Type of formState which contains status of form and errors
export type formState = {
    // if true => form sent successfully | if false => form failed to send | if undefined => form did not submit yet (success values optional => optional when useActionState hook must define initialState which equals formState but it is undefined which form did not submit yet)
    success?: boolean,
    // errors? for validation Errors generated within validating your form submit like if name is less then 2 char 
    // Record<string,string> is utiltityType but is better than {[key as string]: string}
    errors?: Record<string, string>,
    // error for Network error | server error | emailjs error and so on
    error?: string
}


// C- Helper function to check Configuration Constant variables of emailjs
function handleEmailJSConfig() {
    const user_id = process.env.EMAILJS_PUBLIC_KEY as string
    const service_id = process.env.EMAILJS_SERVICE_ID as string
    const template_id = process.env.EMAILJS_TEMPLATE_ID as string
    const accessToken = process.env.EMAILJS_ACCESS_TOKEN as string

    // if userid is undefined or null throw new error (crash your app)
    if(!user_id || !service_id || !template_id || !accessToken) 
        throw new Error(`Configuration Error in Emailjs`);

    return {user_id, service_id, template_id, accessToken}
}


// Server side action to handle FormSubmittion
export async function handleFormSubmittion(prevState: formState, formData: FormData): Promise<formState> {
    // Extract all inputs from FormData
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Check Validation of form inputs according to formSchema by using safeParse which can not crash your app (that define validation requirements)
    const formValidation = formSchema.safeParse({
        name,
        email,
        message
    })

    if(!formValidation.success) {
        // {string, string[]} 
        // extract fieldErrors from z.flattenError(formValidation.error) return object as {string, string[]} 
        const {fieldErrors} = z.flattenError(formValidation.error);
        // object.fromEntries(array) convert array to object (note Object.from)
        // object.entries(object) convert object to array
        // convert from {string, string[]} to {string, string} as type of formState
        const flatErrors = Object.fromEntries(Object.entries(fieldErrors).map(([key, value]) => [key, value?.at(0)]));
        // return fails in form validation
        return {success: false, errors: flatErrors as Record<string, string>}
    }

    try {
        // Destructuring Configuration Constant variables
        const {user_id, service_id, template_id, accessToken} = handleEmailJSConfig();
        // https://api.emailjs.com/api/v1.0/email/send API END POINT
        // Request API POST Method return 200 if success
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            // must be the same shape of api format with the same keys
            body: JSON.stringify({
                user_id,
                service_id,
                template_id,
                accessToken,
                template_params: {
                    name,
                    email,
                    message
                }
            })
        })
        // Request API POST Method return 200 if success or 400 client side error
        if(!response.ok)
            return {success: false, error: `Emailjs Error Failed To Send Form ${response.status}`}

        // only one case remains if program flow up of above steps its the success case
        return {success: true, errors: {} }
    } catch(err) {
        // handle if there error on the server side level
        return {success: false, error: `Server Error ${err instanceof Error? err.message :  "unkown error"}`}
    }
}


