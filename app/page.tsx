"use client"

import HeroSection from "../hero-section"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import "./globals.css"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import Chatbot from "../components/chatbot"

export default function Page() {
  const missionStatement =
    "Di Wadada Run Club, kami percaya bahwa bergerak bukanlah sebuah pilihan, melainkan gaya hidup. Lahir dari semangat Jamaika yang penuh warna, kami menyatukan para pelari dari setiap sudut dunia yang berbagi semangat untuk melampaui batas. Baik Anda mengejar matahari terbit di jalanan kota atau menaklukkan jalur pegunungan, kami hadir untuk mendukung perjalanan Anda. Komunitas kami tumbuh dari irama langkah kaki, kekuatan ketekunan, dan kegembiraan dari kemenangan bersama. Bergabunglah dengan kami karena kami berlari tidak hanya untuk kebugaran, tetapi untuk kebebasan, persahabatan, dan cinta sejati pada olahraga lari."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Pelari wanita dalam efek motion blur artistik",
      title: "Setiap Langkah Berarti",
      description:
        "Dari joging pertama Anda mengelilingi kompleks hingga maraton keseratus Anda, setiap pelari memiliki cerita. Di Wadada, kami menyambut para pemula yang baru pertama kali mengikat tali sepatu mereka. Kecepatan Anda tidak masalah—yang terpenting adalah semangat Anda. Apa yang Anda tunggu?",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Pelari pria dengan tekad dan fokus",
      title: "Temukan Ritme Anda",
      description:
        "Baik Anda mengejar rekor pribadi atau sekadar mengejar matahari terbit, komunitas kami menyambut setiap tipe pelari. Dari pelari cepat hingga jogger santai, dari pelari lintas alam hingga bintang trek—ada tempat untuk Anda di sini. Pertanyaannya adalah: apa yang Anda tunggu?",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Pelari dalam gerakan dinamis menunjukkan kekuatan dan keanggunan",
      title: "Bergabunglah dengan Gerakan Ini",
      description:
        "Berlari bukan hanya tentang jarak tempuh—ini tentang setiap momen. Percakapan di pagi hari, perjuangan bersama, dan kemenangan kolektif. Di Wadada Run Club, Anda tidak hanya bergabung dengan sebuah kelompok, Anda bergabung dengan sebuah keluarga. Jadi ikat sepatu Anda, melangkah keluar, dan temukan potensi sejati Anda. Sungguh, apa yang Anda tunggu?",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">MISI KAMI</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">SEMUA PELARI DISAMBUT HANGAT</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Setiap pelari memiliki perjalanan yang unik. Berikut adalah beberapa cerita dari komunitas inklusif kami.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Lihat apa kata para{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">PELARI</span>{" "}
              kami.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Cerita nyata dari para pelari yang menemukan ritme terbaik mereka bersama Wadada Run Club.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
      <Chatbot />
    </div>
  )
}
