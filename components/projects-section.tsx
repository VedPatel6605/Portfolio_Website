import { ExternalLink, Github, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Attendance System",
      description:
        "Eye-Scan Smart Attendance System is a secure and intelligent biometric solution that uses eye/iris recognition to mark attendance in real time.",
      image: "/images/Smart Attendance System.png",
      featured: true,
      live: true,
      technologies: ["Python", "React.js", "Flask", "JavaScript", "OpenCV", "Deep Learning", "MySQL"],
      features: [
        "Eye / Iris Recognition using advanced machine learning models",
        "Real-Time Attendance Marking with automatic timestamps",
        "Liveness Detection to prevent spoofing and fake entries",
        "Secure Biometric Data Storage with privacy protection",
        "Admin Panel for user management and report generation"
      ],
      liveUrl: "https://meditech-phi.vercel.app/",
      githubUrl: "https://github.com/VedPatel6605/Smart_Attendance_System_Project",
    },
    {
      title: "Netflix Clone",
      description:
        "A pixel-perfect recreation of Netflix's user interface with modern responsive design. Features include movie browsing, search functionality, and clean interface layout built with core web technologies.",
      image: "/images/netflix-project.png",
      featured: true,
      live: true,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Netflix-inspired UI with attention to detail",
        "Fully responsive design for all devices",
        "Modern CSS Grid and Flexbox layouts",
        "Interactive movie browsing experience",
      ],
      liveUrl: "https://netflix-clone-git-main-vedpatel6605s-projects.vercel.app/",
      githubUrl: "https://github.com/VedPatel6605/Netflix_Clone",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-slate-800/50">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-pink-300">Featured work</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto px-4">
            Discover my latest work showcasing modern web technologies, innovative solutions, and creative
            problem-solving.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full animate-glow"></div>
        </div>

        {/* Projects */}
        <div className="space-y-16 px-4">
          {projects.map((project, index) => (
            <Card key={index} className="glass-strong border-white/10 overflow-hidden hover-lift group">
              <div className={`grid lg:grid-cols-2 gap-12 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="absolute top-6 left-6 flex gap-3">
                    {project.featured && (
                      <Badge className="glass border-white/20 text-blue-300 hover-glow">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {project.live && <Badge className="glass border-white/20 text-green-300 hover-glow">Live</Badge>}
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h3 className="text-3xl font-black text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">{project.description}</p>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 text-lg">Key Features:</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 mt-2 flex-shrink-0 animate-pulse-glow"></div>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="glass text-gray-300 hover:text-white border-white/20 transition-all duration-300 hover:scale-105 hover-glow px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="glass-strong bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 border-white/20 text-white flex-1 hover-glow py-3"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="glass border-white/20 text-gray-300 hover:text-white flex-1 hover-glow py-3"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View more projects */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-8 text-lg">Want to see more of my work?</p>
          <Button
            asChild
            className="glass-strong bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 border-white/20 text-white px-10 py-4 text-lg hover-glow"
          >
            <a href="https://github.com/VedPatel6605" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 mr-3" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
