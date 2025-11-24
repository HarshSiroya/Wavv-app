import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  location: string
  imageUrl: string
  category: string
  attendees: number
  premium: boolean
}

export function EventCard({ title, date, location, imageUrl, category, attendees, premium }: EventCardProps) {
  return (
    <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer h-full">
        {/* Image with overlay */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-purple-900 to-black">
          {/* Background image with lazy loading */}
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>

          {/* Premium badge */}
          {premium && (
            <div className="absolute top-3 right-3 z-20">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg">
                ✨ Premium
              </Badge>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 left-3 z-20">
            <Badge variant="outline" className="text-white/90 border-white/30 bg-black/40 backdrop-blur-sm">
              {category}
            </Badge>
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 space-y-3">
            <div>
              <h3 className="font-bold text-white text-lg mb-1 group-hover:text-purple-300 transition-colors line-clamp-2">
                {title}
              </h3>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-white/85">
                <Calendar className="mr-2 h-4 w-4 text-purple-400/70 flex-shrink-0" />
                <span className="line-clamp-1">{date}</span>
              </div>
              <div className="flex items-center text-sm text-white/85">
                <MapPin className="mr-2 h-4 w-4 text-purple-400/70 flex-shrink-0" />
                <span className="line-clamp-1">{location}</span>
              </div>
              <div className="flex items-center text-sm text-white/85">
                <Users className="mr-2 h-4 w-4 text-purple-400/70 flex-shrink-0" />
                <span>{attendees} attending</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-white/10">
              <span className="text-xs text-white/60 font-medium">
                {premium ? "🔒 Approval Required" : "✓ Open to Members"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

