"use client"
import {ComponentProps } from "react"
import { experimental_useFormStatus as useFormStatus} from "react-dom"

type FormSubmitButtonProps = {
    children: React.ReactNode,
    className?: String,
} & ComponentProps<"button">
export default function FormSubmitButton(
    {children, className, ...props}: FormSubmitButtonProps
){
    const { pending } = useFormStatus()
    return (
        <button
        {...props}
         type="submit" disabled={pending} className={`btn btn-primary ${className}` }>
            { pending && <span className="loading loading-spinner text-secondary"></span>}
            {children}</button>
    )
    // <button>Add Product</button>
}