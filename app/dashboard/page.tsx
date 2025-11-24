import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/event-card"
import { ArrowRight, Search } from "lucide-react"
import { IMAGE_ASSETS, EVENT_DATA } from "@/lib/image-assets"

export default function DashboardPage() {
  return (
    <div className="wavv-container py-8 space-y-12">
      {/* Hero Search Section - Inspired by xceed.me */}
      <section className="relative rounded-xl overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 z-10"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `url('${IMAGE_ASSETS.dashboard.searchBg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-20 flex flex-col items-center text-center">
          <h1 className="wavv-heading-lg mb-6">Find Your Next Experience</h1>

          <div className="relative max-w-2xl w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
            <input
              type="text"
              placeholder="Search events, venues, or people..."
              className="w-full py-4 px-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-6">
            <a href="/events/new">
              <Button className="wavv-button-primary">Create Event</Button>
            </a>
            <a href="/events" className="hidden sm:inline-block">
              <Button className="wavv-button-secondary">Browse Events</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trending Events */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="wavv-heading">Trending Events</h2>
          <Link href="/events" className="text-white/70 hover:text-white text-sm font-medium group flex items-center">
            View all
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            title={EVENT_DATA[0].title}
            date={EVENT_DATA[0].date}
            location={EVENT_DATA[0].location}
            imageUrl={EVENT_DATA[0].imageUrl}
            category={EVENT_DATA[0].category}
            attendees={EVENT_DATA[0].attendees}
            premium={EVENT_DATA[0].premium}
          />
          <EventCard
            title={EVENT_DATA[1].title}
            date={EVENT_DATA[1].date}
            location={EVENT_DATA[1].location}
            imageUrl={EVENT_DATA[1].imageUrl}
            category={EVENT_DATA[1].category}
            attendees={EVENT_DATA[1].attendees}
            premium={EVENT_DATA[1].premium}
          />
          <EventCard
            title={EVENT_DATA[2].title}
            date={EVENT_DATA[2].date}
            location={EVENT_DATA[2].location}
            imageUrl={EVENT_DATA[2].imageUrl}
            category={EVENT_DATA[2].category}
            attendees={EVENT_DATA[2].attendees}
            premium={EVENT_DATA[2].premium}
          />
        </div>
      </section>

      {/* Live Now */}
      <section className="space-y-6">
        <h2 className="wavv-heading">Live Now</h2>
        <div className="wavv-card rounded-xl overflow-hidden">
          <div className="relative aspect-video bg-gradient-to-r from-purple-900 to-indigo-900">
            <div className="absolute inset-0" style={{ backgroundImage: `url('${IMAGE_ASSETS.dashboard.liveEventBg}')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.7 }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold">Exclusive Rooftop Soirée</h3>
                <p className="text-white/70">Happening now at SkyLounge</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4">The view from this rooftop party is absolutely incredible! #SkyLoungeSoirée</p>
            <Button className="wavv-button-secondary w-full">View Live Feed</Button>
          </div>
        </div>
      </section>

      {/* Your Invites */}
      <section className="space-y-6">
        <h2 className="wavv-heading">Your Invites</h2>
        <div className="wavv-card rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold mb-1">2</p>
              <p className="text-white/70">Invites Remaining</p>
            </div>
            <div className="flex-1 max-w-md">
              <p className="text-white/80 mb-4">
                Share Wavv with friends who appreciate exclusive experiences and meaningful connections.
              </p>
              <Button className="wavv-button-primary w-full">Invite Friends</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

