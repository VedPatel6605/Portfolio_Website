"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-mesh">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/25 to-blue-600/25 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce-slow"></div>
        <div
          className="absolute top-3/4 left-3/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-300">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-responsive-hero font-black mb-6 leading-none">
          <span className="block text-blue-400">
            Ved Patel
          </span>
          {/* <span className="block text-purple-400">
            Patel
          </span> */}
        </h1>

        {/* Subtitle */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Full Stack Developer & Problem Solver
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          B.Tech IT student specializing in <span className="text-blue-400 font-semibold">MERN Stack & Java & Python Development</span>.
          Passionate about building <span className="text-purple-400 font-semibold">scalable web applications</span> and
          solving complex problems with innovative solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="glass-strong px-8 py-4 text-lg font-semibold text-white hover-glow group"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-500">
              View My Work
            </span>
            <ArrowDown className="ml-3 h-5 w-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="glass border-white/20 px-8 py-4 text-lg font-semibold text-white hover-glow hover:border-blue-400/50"
          >
            <a
              href="https://drive.google.com/file/d/1WTLHJHjkxSS3ZBh5G-yAtHCl-fNvlMas/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <Download className="ml-3 h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/VedPatel6605", color: "hover:text-white" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/ved-patel-76487a294/",
              color: "hover:text-blue-400",
            },
            { icon: Mail, href: "mailto:vedpatel6600@gmail.com", color: "hover:text-purple-400" },
          ].map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              asChild
              className="glass w-14 h-14 text-gray-400 hover-glow transition-all duration-300"
            >
              <a
                href={social.href}
                target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                <social.icon className={`h-6 w-6 ${social.color} transition-colors`} />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
