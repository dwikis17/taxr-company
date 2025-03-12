"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface GetStartedButtonProps {
    /**
     * The button text
     */
    text?: string
    /**
     * The URL the button links to
     */
    href?: string
    /**
     * Optional additional className for the button
     */
    className?: string
    /**
     * Optional onClick handler
     */
    onClick?: () => void
    /**
     * Optional size variant
     * @default "default"
     */
    size?: "small" | "default" | "large"
}

export function CustomButton({
    text = "Get started",
    href = "#",
    className,
    onClick,
    size = "default",
}: GetStartedButtonProps) {
    const sizeClasses = {
        small: "py-2 px-4 text-sm",
        default: "py-3 px-8 text-lg",
        large: "py-4 px-10 text-xl",
    }

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "inline-block bg-white border-2 border-black font-medium transition-transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
                sizeClasses[size],
                className,
            )}
        >
            {text}
        </Link>
    )
}

