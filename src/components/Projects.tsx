"use client"

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, admin dashboard etc.',
    image: 'https://res.cloudinary.com/dxhjlkdx0/image/upload/v1764943362/xggiscz6k1j660x0llab.png',
    tags: ['TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js' ],
    link: 'https://garutech.ng/',
    github: '#'
  },
  {
    title: 'Business Tour Page / Gallery',
    description: 'Gallery page for a business tour company. with events images and videos',
    image: 'https://res.cloudinary.com/dxhjlkdx0/image/upload/v1764943580/e9icilwgv6xovksdbqy6.png',
    tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    link: 'https://tour.garutech.ng/',
    github: '#'
  },
  {
    title: 'Lost and Found Web App',
    description: 'Modern lost and found app with cool design, media sharing and real-time inventory',
    image: 'https://res.cloudinary.com/dxhjlkdx0/image/upload/v1764943658/silrjvnefnmvyil4htsy.png',
    tags: ['HTML & CSS', 'Firebase', 'Javascript', 'UI Design'],
    link: 'https://lawalkamal.github.io/Lost-and-Found/',
    github: '#'
  },
  {
    title: 'Product Figma Design',
    description: 'Figma design of an ecommerce website for bikes. Ulrta-Modern design, prototyping.  ',
    image: 'https://res.cloudinary.com/dxhjlkdx0/image/upload/v1764943894/g57amwgdgc8xih4q3ywy.png',
    tags: ['UI Design', 'Figma', 'Corel'],
    link: 'https://www.figma.com/proto/LqWAN0siti31qokC1ySk4o/Bicycle-Product-Page?node-id=68-41&p=f&t=WbtUYXVufRtpmtr8-0&scaling=scale-down&content-scaling=fixed&page-id=62%3A5',
    github: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-card rounded-full text-sm font-medium text-muted-foreground mb-4">
            Recent Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in modern web development and UI design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 p-0 border-border/50 animate-in fade-in slide-in-from-bottom-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action buttons on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="rounded-lg shadow-lg"
                    onClick={() => window.open(project.link, '_blank')}
                    disabled={project.link === '#'}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-lg shadow-lg bg-card/90 backdrop-blur-sm"
                    onClick={() => window.open(project.github, '_blank')}
                    disabled={project.github === '#'}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}