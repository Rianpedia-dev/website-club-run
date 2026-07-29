"use client"

import React from "react"
import { motion } from "framer-motion"

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-2xl border border-gray-200 shadow-lg max-w-sm w-full bg-white" key={i}>
                  <div className="text-lg leading-relaxed text-gray-800 font-medium">{text}</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={48}
                      height={48}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5 text-gray-900">{name}</div>
                      <div className="leading-5 text-gray-600 tracking-tight text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

// Data testimoni klub lari
const testimonials = [
  {
    text: "Wadada mengubah hidup saya. Dari kesulitan berlari 5 menit hingga menyelesaikan maraton pertama saya, komunitas ini percaya pada saya ketika saya tidak percaya pada diri sendiri.",
    image: "/placeholder.svg?height=48&width=48",
    name: "Sarah Chen",
    role: "Finish Maraton",
  },
  {
    text: "Saya sempat merasa cemas untuk bergabung dengan grup lari, tetapi Wadada menyambut saya dengan tangan terbuka. Sekarang saya memiliki teman seumur hidup dan kepercayaan diri untuk mengejar target apa pun.",
    image: "/placeholder.svg?height=48&width=48",
    name: "Marcus Johnson",
    role: "Pelari Lintas Alam",
  },
  {
    text: "Energi di sesi lari Wadada sangat menular. Baik Anda cepat atau lambat, semua orang memberikan semangat. Ini bukan tentang kompetisi—ini tentang komunitas.",
    image: "/placeholder.svg?height=48&width=48",
    name: "Priya Patel",
    role: "Antusias 5K",
  },
  {
    text: "Setelah bertahun-tahun berlari sendiri, menemukan Wadada adalah pengubah permainan. Sesi lari kelompok mendorong saya meraih rekor pribadi baru yang tidak pernah saya bayangkan.",
    image: "/placeholder.svg?height=48&width=48",
    name: "David Rodriguez",
    role: "Pelari Cepat",
  },
  {
    text: "Wadada mengajarkan saya bahwa berlari bukan sekadar olahraga—ini adalah terapi, persahabatan, dan petualangan yang menjadi satu. Klub ini sangat membantu kesehatan mental saya.",
    image: "/placeholder.svg?height=48&width=48",
    name: "Emma Thompson",
    role: "Pelari Kesadaran Diri",
  },
  {
    text: "Dari jarang bergerak hingga 10K dalam 6 bulan dengan dukungan Wadada. Mereka mendampingi dari awal dan membantu Anda menemukan potensi diri. Sangat luar biasa.",
    image: "/placeholder.svg?height=48&width=48",
    name: "James Wilson",
    role: "Pelari Pemula",
  },
  {
    text: "Sesi lari saat matahari terbit bersama Wadada adalah pengalaman yang sangat berkesan. Ada kekuatan luar biasa saat bergerak bersama ketika dunia mulai terbangun.",
    image: "/placeholder.svg?height=48&width=48",
    name: "Aisha Mohammed",
    role: "Pelari Subuh",
  },
  {
    text: "Saya bergabung dengan Wadada setelah pindah ke kota baru. Tidak hanya menemukan teman lari, tetapi saya menemukan keluarga pilihan saya. Bergerak benar-benar gaya hidup di sini.",
    image: "/placeholder.svg?height=48&width=48",
    name: "Alex Kim",
    role: "Pembangun Komunitas",
  },
  {
    text: "Wadada merayakan setiap pencapaian, sekecil apa pun. Mil pertama saya terasa seperti memenangkan Olimpiade dengan dukungan dari tim ini.",
    image: "/placeholder.svg?height=48&width=48",
    name: "Lisa Garcia",
    role: "Pahlawan Mil Pertama",
  },
]

export { testimonials }
