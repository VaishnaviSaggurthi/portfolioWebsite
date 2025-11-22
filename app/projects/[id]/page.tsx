import { motion } from 'framer-motion'
import CommandNavigation from '../../components/CommandNavigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  video?: string
  liveUrl: string
  githubUrl: string
  technologies: string[]
  tags: string[]
  featured: boolean
  completedAt: string
}

const projects: Project[] = [
  {
    "id": "ecommerce-platform",
    "title": "E-Commerce Platform",
    "description": "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    "longDescription": "This comprehensive e-commerce platform was built to handle high-traffic scenarios with real-time inventory updates, secure payment processing through Stripe, and a powerful admin dashboard for managing products, orders, and analytics.",
    "image": "/projects/ecommerce.jpg",
    "video": "/projects/ecommerce-demo.mp4",
    "liveUrl": "https://ecommerce-demo.vercel.app",
    "githubUrl": "https://github.com/yourusername/ecommerce-platform",
    "technologies": ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
    "tags": ["Full-Stack", "E-Commerce", "Payment Integration"],
    "featured": true,
    "completedAt": "2024-01-15"
  },
  {
    "id": "ai-chat-application",
    "title": "AI Chat Application",
    "description": "Real-time chat application with AI integration for smart responses and conversation analysis.",
    "longDescription": "An innovative chat application that combines real-time messaging with AI-powered features. Users can engage in conversations with an AI assistant that provides contextual responses, sentiment analysis, and conversation summaries.",
    "image": "/projects/ai-chat.jpg",
    "video": "/projects/ai-chat-demo.mp4",
    "liveUrl": "https://ai-chat-demo.vercel.app",
    "githubUrl": "https://github.com/yourusername/ai-chat-app",
    "technologies": ["React", "Socket.io", "OpenAI API", "Node.js", "PostgreSQL", "JWT"],
    "tags": ["AI", "Real-time", "Chat"],
    "featured": true,
    "completedAt": "2023-12-10"
  },
  {
    "id": "task-management-system",
    "title": "Task Management System",
    "description": "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
    "longDescription": "A comprehensive task management system designed for teams to collaborate effectively. Features include real-time updates, drag-and-drop task organization, time tracking, file attachments, and detailed project analytics.",
    "image": "/projects/task-manager.jpg",
    "liveUrl": "https://taskmanager-demo.vercel.app",
    "githubUrl": "https://github.com/yourusername/task-manager",
    "technologies": ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Chart.js", "AWS S3"],
    "tags": ["Productivity", "Collaboration", "Real-time"],
    "featured": false,
    "completedAt": "2023-11-20"
  }
]

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <>
      <CommandNavigation />
      <ProjectDetailClient project={project} />
    </>
  )
}