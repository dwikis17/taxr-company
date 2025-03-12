import Image from "next/image"
import { cn } from "@/lib/utils"

export interface ContentSectionProps {
    /**
     * The number or identifier to display
     */
    number?: string
    /**
     * The main heading text
     */
    title: string
    /**
     * The description or body text
     */
    description: string
    /**
     * The image source URL
     */
    imageSrc: string
    /**
     * The image alt text
     */
    imageAlt: string
    /**
     * Whether to show the image on the right (true) or left (false)
     * @default false
     */
    imageOnRight?: boolean
    /**
     * Optional additional className for the container
     */
    className?: string
    /**
     * Optional custom width for the image
     * @default 400
     */
    imageWidth?: number
    /**
     * Optional custom height for the image
     * @default 400
     */
    imageHeight?: number
    /**
     * Optional custom className for the image container
     */
    imageClassName?: string
    /**
     * Optional custom className for the content container
     */
    contentClassName?: string
}

export function ContentSection({
    number,
    title,
    description,
    imageSrc,
    imageAlt,
    imageOnRight = false,
    className,
    imageWidth = 400,
    imageHeight = 400,
    imageClassName,
    contentClassName,
}: ContentSectionProps) {
    return (
        <div className={cn("flex flex-col md:flex-row items-center gap-8 py-2", className)}>
            {/* Conditionally order the content based on imageOnRight prop */}
            {!imageOnRight && (
                <div className={cn("relative flex-shrink-0", imageClassName)}>
                    <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="object-contain"
                    />
                </div>
            )}

            <div className={cn("flex-1 space-y-4", contentClassName)}>
                <div className="flex items-start gap-4">
                    {number && <div className="text-6xl font-bold text-gray-900"><Image
                        src={number}
                        alt="numer"
                        width={imageWidth}
                        height={imageHeight}
                        className="object-contain"
                    /></div>}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                        <p className="text-lg text-gray-700">{description}</p>
                    </div>
                </div>
            </div>

            {/* Image on right side when imageOnRight is true */}
            {imageOnRight && (
                <div className={cn("relative flex-shrink-0", imageClassName)}>
                    <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="object-contain"
                    />
                </div>
            )}
        </div>
    )
}

