"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xovwwrzw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "vedpatel6600@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      action: () => window.open("mailto:vedpatel6600@gmail.com", "_self"),
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9824964641",
      gradient: "from-purple-500 to-pink-500",
      action: () => window.open("tel:+919824964641", "_self"),
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Navsari, Gujarat",
      gradient: "from-green-500 to-emerald-500",
      action: () => window.open("https://www.google.com/maps/place/Navsari,+Gujarat/@20.9443534,72.7888194,12z/data=!3m1!4b1!4m6!3m5!1s0x3be0f795909b2c77:0x1494cfa5f558f3dd!8m2!3d20.9467019!4d72.9520348!16s%2Fm%2F025slrv?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D", "_blank"),
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Let's work together</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto px-4">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing
            together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 px-4">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-strong p-8 rounded-3xl hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="glass-strong border-white/10 hover-lift group cursor-pointer"
                  onClick={info.action}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6">
                      <div
                        className={`bg-gradient-to-br ${info.gradient} p-4 rounded-2xl text-white shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-float`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 break-words">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-strong border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-4 rounded-2xl text-white animate-float">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Quick Response</h4>
                    <p className="text-gray-400">
                      I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via
                      phone.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-strong border-white/10 hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white font-medium mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="glass border-white/20 text-white placeholder:text-gray-400 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white font-medium mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="glass border-white/20 text-white placeholder:text-gray-400 h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white font-medium mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="glass border-white/20 text-white placeholder:text-gray-400 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="glass border-white/20 text-white placeholder:text-gray-400 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-strong bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 border-white/20 text-white py-4 text-lg transition-all duration-300 disabled:opacity-50 hover-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus === "success" && (
                  <div className="flex items-center justify-center gap-2 text-green-400 bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center justify-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again or contact me directly.</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
