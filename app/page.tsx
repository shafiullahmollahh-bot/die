"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SocialProfileCard } from "@/components/social-profile-card"
import { Github, Send, Terminal, Code, Shield, Zap, ExternalLink, Users } from "lucide-react"

export default function Portfolio() {
  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const fullText = "> Developer + Cyber Security Researcher"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const skills = [
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 92, category: "Backend" },
    { name: "PHP", level: 80, category: "Backend" },
    { name: "API Security", level: 95, category: "Security" },
    { name: "Penetration Testing", level: 90, category: "Security" },
  ]

  const projects = [
    {
      title: "Email Spoofer",
      description: "Advanced email spoofing tool for security testing",
      tech: ["HTML", "CSS", "PHP"],
      status: "Active",
      url: "https://shahad.top/spoofer.php",
    },
    {
      title: "Web Shell",
      description: "Powerful web-based command execution interface",
      tech: ["PHP", "JavaScript"],
      status: "Active",
      url: "https://github.com/homo-developer/web-shell",
    },
    {
      title: "APK to Image Injector",
      description: "Steganography tool for embedding APK files in images",
      tech: ["Python"],
      status: "Active",
      url: "https://github.com/homo-developer/apk-to-img",
    },
    {
      title: "WormGPT API",
      description: "API interface for WormGPT AI model integration",
      tech: ["PHP"],
      status: "Active",
      url: "https://github.com/homo-developer/wormgpt-api",
    },
    {
      title: "Stealer",
      description: "Information gathering and extraction tool",
      tech: ["Kivy", "Python"],
      status: "Active",
      url: "https://github.com/homo-developer/stealer",
    },
    {
      title: "Telegram Member Scraper",
      description: "Advanced Telegram member extraction utility",
      tech: ["Python"],
      status: "Active",
      url: "https://github.com/homo-developer/atu-tg-mem-scrapper",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Terminal Grid Background */}
      <div className="fixed inset-0 terminal-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-mono font-bold text-primary neon-text glitch-text" data-text="DIE">
                DIE
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a
                href="https://github.com/homo-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:neon-glow"
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://t.me/a_telegram_user"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors hover:neon-glow"
              >
                <Send size={20} />
                <span className="hidden sm:inline">Telegram</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Terminal size={16} className="text-primary" />
                  <span className="text-sm font-mono text-primary">System Online</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                  <span className="text-foreground">Welcome to</span>
                  <br />
                  <span className="text-primary neon-text">DIE's Lab</span>
                </h1>
                <div className="font-mono text-lg lg:text-xl text-accent mb-8 min-h-[2rem]">
                  {terminalText}
                  <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
                </div>
                <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl">
                  Crafting secure digital experiences through code and cybersecurity research. Specializing in API
                  security, penetration testing, and custom tool development.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow" asChild>
                  <a href="https://t.me/a_telegram_user" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2" size={20} />
                    Initiate Contact
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  asChild
                >
                  <a href="https://github.com/homo-developer" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={20} />
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <SocialProfileCard />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-accent neon-text">Skills</span> Matrix
            </h2>
            <p className="text-muted-foreground text-lg">Technical expertise across development and security domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:neon-glow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Development</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Full-stack development with modern frameworks and technologies
              </p>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-accent" size={20} />
                <h3 className="text-lg font-semibold">Security Research</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                API security, penetration testing, and vulnerability assessment
              </p>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Tool Creation</h3>
              </div>
              <p className="text-muted-foreground text-sm">Custom security tools and automation frameworks</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Lab */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-primary neon-text">Exploit</span> Lab
            </h2>
            <p className="text-muted-foreground text-lg">Interactive gallery of security tools and research projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <Badge
                    variant={project.status === "Active" ? "default" : "secondary"}
                    className={project.status === "Active" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent-foreground hover:bg-accent/20"
                  asChild
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    View Source
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Spotlight */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-accent neon-text">Channel</span> Spotlight
              </h2>
              <p className="text-muted-foreground text-lg">Stay updated with the latest security research and tools</p>
            </div>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Send className="text-accent" size={32} />
                <h3 className="text-2xl font-bold text-accent">@veinsploit</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Exclusive security research, tool releases, and cybersecurity insights. Join the community of security
                professionals and researchers.
              </p>
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Tools Shared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">Daily</div>
                  <div className="text-sm text-muted-foreground">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Active</div>
                  <div className="text-sm text-muted-foreground">Community</div>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground neon-glow" asChild>
                <a href="https://t.me/veinsploit" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-2" size={20} />
                  Join Channel
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 neon-glow">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-primary neon-text glitch-text" data-text="Initiate Contact">
                  Initiate Contact
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Ready to collaborate on security research, custom tool development, or cybersecurity consulting? Let's
                connect and build something extraordinary.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 neon-glow animate-pulse"
                asChild
              >
                <a href="https://t.me/a_telegram_user" target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2" size={24} />
                  Contact on Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/homo-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://t.me/a_telegram_user"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Send size={24} />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm mb-2">© 2025 DIE. All rights reserved.</p>
              <p className="font-mono text-xs text-muted-foreground">{"coded with ☠️ by DIE"}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
