import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Building2, MapPin, TreePine, ShieldCheck, Phone, Mail, Instagram, Linkedin, Home } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md/0">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center">
            <Home className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Aether Developments</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#residences" className="hover:text-gray-900 transition">Residences</a>
          <a href="#amenities" className="hover:text-gray-900 transition">Amenities</a>
          <a href="#portfolio" className="hover:text-gray-900 transition">Portfolio</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>
        <a href="#contact" className="ml-6 inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition">
          Book a Tour <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient overlays for contrast (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end">
        <div className="pb-24">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-700 mb-4">Luxury • Contemporary • Urban</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-gray-900">
            Crafted Spaces for Modern Living
          </h1>
          <p className="mt-6 max-w-2xl text-gray-700 text-base sm:text-lg">
            Premium residences that balance form and function. Designed with intention, built with precision.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
              Explore Portfolio <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-white transition">
              Request Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg">
      <div className="h-11 w-11 rounded-full bg-gray-900 text-white flex items-center justify-center mb-4">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function Amenities() {
  return (
    <section id="amenities" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">Considered in Every Detail</h2>
            <p className="mt-3 text-gray-600 max-w-xl">From architecture to interiors, every decision is made to elevate daily life.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gray-900">
            Schedule a Private Viewing <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Building2} title="Architectural Clarity" desc="Clean lines, natural materials, timeless palettes that endure." />
          <FeatureCard icon={MapPin} title="Prime Locations" desc="Walkable neighborhoods with culture, cuisine, and connection." />
          <FeatureCard icon={TreePine} title="Biophilic Touches" desc="Ample light, greenery, and outdoor spaces to recharge." />
          <FeatureCard icon={ShieldCheck} title="Secure & Private" desc="Discrete access, smart systems, and concierge services." />
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const projects = [
    {
      title: 'Skyline Residences',
      tag: 'Downtown',
      img: 'https://images.unsplash.com/photo-1465804575741-338df8554e4e?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Harbor House',
      tag: 'Waterfront',
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Grove Park',
      tag: 'Midtown',
      img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop'
    },
  ]
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">Selected Work</h2>
        <p className="mt-3 text-gray-600 max-w-xl">A snapshot of developments that define our approach to urban living.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href="#contact" className="group relative overflow-hidden rounded-2xl">
              <img src={p.img} alt={p.title} className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest opacity-80">{p.tag}</span>
                <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">Private Viewings & Enquiries</h2>
          <p className="mt-4 text-gray-600">Our team will tailor a presentation to your interests and timeline.</p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-gray-800"><Phone className="h-5 w-5" /> +1 (555) 202-0199</div>
            <div className="flex items-center gap-3 text-gray-800"><Mail className="h-5 w-5" /> hello@aether.dev</div>
          </div>

          <div className="mt-8 flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-gray-900"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        <form className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">First name</label>
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-800" placeholder="Alex" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Last name</label>
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-800" placeholder="Morgan" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-800" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-800" placeholder="Tell us what you’re looking for"></textarea>
            </div>
          </div>
          <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition">
            Request a Private Tour <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Aether Developments. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Careers</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Amenities />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
