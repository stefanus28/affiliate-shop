"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, User } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-neutral-600">Have questions about our collection? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-neutral-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-neutral-900">Email</h3>
                  <p className="text-neutral-600">hello@refinedsteps.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-neutral-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-neutral-900">Response Time</h3>
                  <p className="text-neutral-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-neutral-900">Do you sell shoes directly?</h4>
                  <p className="text-sm text-neutral-600">
                    No, we're an affiliate site that curates the best leather shoes available on Amazon.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">How do you select products?</h4>
                  <p className="text-sm text-neutral-600">
                    Our team carefully reviews each product for quality, customer reviews, and value.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Returns and exchanges?</h4>
                  <p className="text-sm text-neutral-600">All purchases are handled through Amazon's return policy.</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
