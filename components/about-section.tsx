import { GraduationCap, Code, Award, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const achievements = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Academic Excellence",
      description: "9.0 CGPA in B.Tech IT",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Competitive Programming",
      description: "CodeChef: 1001 • LeetCode: 1001",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "NPTEL Certifications",
      description: "2 X NPTEL Certified (DSA Using Java, Programming In Java)",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-slate-800/50">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Get to know me</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full animate-glow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="glass-strong p-8 rounded-3xl hover-lift">
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Hello! I'm a passionate{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  Full Stack Developer
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  B.Tech Information Technology
                </span>{" "}
                student at CHARUSAT, driven by innovation and the power of technology to solve real-world problems.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My development journey is powered by curiosity and a passion for creating impactful solutions. I
                specialize in the{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  MERN stack
                </span>{" "}
                and excel in{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent font-semibold">
                  competitive programming
                </span>
                , which has enhanced my problem-solving abilities and coding precision.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm committed to writing clean, efficient code and building applications that make a difference. Whether
                it's developing scalable web solutions or contributing to open-source projects, I believe in leveraging
                technology to create positive impact.
              </p>
            </div>
          </div>

          {/* Achievement cards */}
          <div className="space-y-6 order-1 lg:order-2">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="glass-strong border-white/10 hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div
                      className={`bg-gradient-to-br ${achievement.gradient} p-4 rounded-2xl text-white shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-float`}
                    >
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
