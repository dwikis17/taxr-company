"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log({ email, firstName, lastName })
    }

    return (
        <div className="bg-purple-100 py-20 ">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Stress-free taxes.
                                <br />
                                £169, all in.
                            </h1>
                            <p className="mt-6 text-xl text-gray-700">Self Assessment doesn't need to be painful.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <ArrowRight className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                                <p className="text-lg">Simple, fast, all online</p>
                            </div>
                            <div className="flex items-start">
                                <ArrowRight className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                                <p className="text-lg">Sorted by an accredited accountant</p>
                            </div>
                            <div className="flex items-start">
                                <ArrowRight className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                                <p className="text-lg">Filed in as little as 48 hours</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="text-sm">
                                <span className="font-semibold">Excellent</span> <span className="text-gray-600">4.8 out of 5</span>
                            </div>
                            <div className="ml-2">
                                <span className="text-green-500">★</span>
                                <span className="text-xs text-gray-600">Trustpilot</span>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto lg:flex lg:justify-end">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-2xl font-bold mb-6">Let's get started</h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                    Start now
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

