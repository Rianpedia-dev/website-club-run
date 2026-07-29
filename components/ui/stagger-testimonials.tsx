"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Data testimoni klub lari
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Wadada mengubah hidup saya. Dari kesulitan berlari 5 menit hingga menyelesaikan maraton pertama saya, komunitas ini percaya pada saya ketika saya tidak percaya pada diri sendiri.",
    by: "Sarah Chen, Finish Maraton",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SarahChen&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Saya sempat merasa cemas untuk bergabung dengan grup lari, tetapi Wadada menyambut saya dengan tangan terbuka. Sekarang saya memiliki teman seumur hidup dan kepercayaan diri untuk mengejar target apa pun.",
    by: "Marcus Johnson, Pelari Lintas Alam",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarcusJohnson&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Energi di sesi lari Wadada sangat menular. Baik Anda cepat atau lambat, semua orang memberikan semangat. Ini bukan tentang kompetisi—ini tentang komunitas.",
    by: "Priya Patel, Antusias 5K",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=PriyaPatel&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Setelah bertahun-tahun berlari sendiri, menemukan Wadada adalah pengubah permainan. Sesi lari kelompok mendorong saya meraih rekor pribadi baru yang tidak pernah saya bayangkan.",
    by: "David Rodriguez, Pelari Cepat",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DavidRodriguez&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Wadada mengajarkan saya bahwa berlari bukan sekadar olahraga—ini adalah terapi, persahabatan, dan petualangan yang menjadi satu. Klub ini sangat membantu kesehatan mental saya.",
    by: "Emma Thompson, Pelari Kesadaran Diri",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EmmaThompson&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Dari jarang bergerak hingga 10K dalam 6 bulan dengan dukungan Wadada. Mereka mendampingi dari awal dan membantu Anda menemukan potensi diri. Sangat luar biasa.",
    by: "James Wilson, Pelari Pemula",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JamesWilson&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Sesi lari saat matahari terbit bersama Wadada adalah pengalaman yang sangat berkesan. Ada kekuatan luar biasa saat bergerak bersama ketika dunia mulai terbangun.",
    by: "Aisha Mohammed, Pelari Subuh",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AishaMohammed&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Saya bergabung dengan Wadada setelah pindah ke kota baru. Tidak hanya menemukan teman lari, tetapi saya menemukan keluarga pilihan saya. Bergerak benar-benar gaya hidup di sini.",
    by: "Alex Kim, Pembangun Komunitas",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexKim&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Wadada merayakan setiap pencapaian, sekecil apa pun. Mil pertama saya terasa seperti memenangkan Olimpiade dengan dukungan dari tim ini.",
    by: "Lisa Garcia, Pahlawan Mil Pertama",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LisaGarcia&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Rencana latihan di Wadada sangat luar biasa. Saya berkembang dari hampir tidak bisa menyelesaikan 5K menjadi lolos kualifikasi Boston hanya dalam dua tahun.",
    by: "Michael Chen, Kualifikasi Maraton Boston",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MichaelChen&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Yang saya sukai dari Wadada adalah keberagamannya. Pelari dari segala usia, latar belakang, dan kemampuan berkumpul dengan satu semangat yang sama.",
    by: "Sofia Rodriguez, Pelopor Keberagaman",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SofiaRodriguez&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Rasa kebersamaan dan komitmen di Wadada tidak tertandingi. Ketika Anda tahu keluarga lari Anda menunggu, Anda pasti akan hadir apa pun yang terjadi.",
    by: "Tyler Brooks, Raja Konsistensi",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TylerBrooks&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Grup lari lintas alam Wadada mengenalkan saya ke tempat-tempat terindah yang tidak pernah saya ketahui sebelumnya. Berlari menjadi cara saya menjelajahi dunia.",
    by: "Nina Patel, Penjelajah Jalur",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NinaPatel&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Percakapan setelah berlari di Wadada sama berharga nya dengan lari itu sendiri. Kami saling berbagi pengalaman dan inspirasi di setiap milnya.",
    by: "Robert Kim, Pelari Filosofis",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RobertKim&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Saya tidak pernah berpikir akan menjadi seorang pelari, tetapi pendekatan Wadada yang ramah pemula membuatnya menjadi kenyataan. Sekarang saya tidak bisa membayangkan hidup tanpa berlari.",
    by: "Jessica Martinez, Pemula",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JessicaMartinez&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "Dukungan pemulihan cedera di Wadada sangat luar biasa. Saat saya harus istirahat, mereka tetap memberi motivasi dan membantu saya bangkit kembali lebih kuat.",
    by: "Daniel Park, Kisah Kebangkitan",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DanielPark&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Lari amal Wadada memberikan makna pada setiap langkah kami. Kami tidak hanya berlari untuk diri sendiri, kami berlari untuk memberikan dampak positif.",
    by: "Rachel Green, Penggalang Dana",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RachelGreen&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Lokakarya teknik di Wadada mengubah postur lari saya. Saya berlari lebih cepat dan bebas dari cedera berkat bimbingan ahli mereka.",
    by: "Kevin Wong, Perfeksionis Teknik",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KevinWong&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Lari virtual Wadada membuat saya tetap bersemangat. Bahkan ketika kami tidak bisa berlari bersama, kami tetap terhubung sebagai satu komunitas.",
    by: "Amanda Foster, Pejuang Virtual",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AmandaFoster&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Program mentoring di Wadada sangat mengubah hidup. Pelari berpengalaman membimbing para pendatang baru dan membagikan wawasan mereka dengan tulus.",
    by: "Carlos Mendez, Peserta Mentoring",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=CarlosMendez&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Testimoni sebelumnya"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Testimoni berikutnya"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
