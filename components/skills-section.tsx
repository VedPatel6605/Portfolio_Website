import { Code, Database, Wrench, Trophy, Brain, Users, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      description: "Strong foundation in multiple programming languages",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["C", "C++", "Java", "Python", "C#"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Web Development",
      description: "Full-stack development with modern technologies",
      gradient: "from-green-500 to-emerald-500",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tools & Databases",
      description: "Development tools and database management",
      gradient: "from-purple-500 to-pink-500",
      skills: ["Git", "GitHub", "MySQL", "MongoDB"],
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Competitive Programming",
      description: "Strong problem-solving and algorithmic skills",
      gradient: "from-orange-500 to-red-500",
      skills: ["CodeChef: 1432", "LeetCode: 1461"],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Data structures and algorithm expertise",
      gradient: "from-indigo-500 to-purple-500",
      skills: ["DSA", "Logic Building", "Optimization"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Soft Skills",
      description: "Leadership and communication abilities",
      gradient: "from-pink-500 to-rose-500",
      skills: ["Teamwork", "Communication", "Planning"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">My expertise</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto px-4">
            A comprehensive toolkit spanning from competitive programming to full-stack development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full animate-glow"></div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-strong border-white/10 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`bg-gradient-to-br ${category.gradient} p-4 rounded-2xl inline-block mb-6 text-white shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-float`}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {category.title}
                </h3>

                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 min-h-[3rem]">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="glass text-gray-300 hover:text-white border-white/20 transition-all duration-300 hover:scale-105 hover-glow px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
