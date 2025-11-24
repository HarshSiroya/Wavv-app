import { EventCard } from "@/components/event-card"
import { Search, Filter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IMAGE_ASSETS, EVENT_DATA } from "@/lib/image-assets"

export default function EventsPage() {
  return (
    <div className="wavv-container py-8 space-y-8">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 z-10"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `url('${IMAGE_ASSETS.dashboard.searchBg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-20 flex flex-col items-center text-center">
          <h1 className="wavv-heading-lg mb-2">Discover Events</h1>
          <p className="text-white/70 text-lg mb-8">Find and join exclusive experiences</p>

          <div className="relative max-w-2xl w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
            <input
              type="text"
              placeholder="Search events by name, location, or category..."
              className="w-full py-4 px-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <Button className="wavv-button-secondary">
          <Filter className="mr-2 h-4 w-4" />
          All Events
        </Button>
        <Button className="wavv-button-secondary">
          <MapPin className="mr-2 h-4 w-4" />
          Near Me
        </Button>
        <Button className="wavv-button-secondary">Today</Button>
        <Button className="wavv-button-secondary">This Weekend</Button>
        <Button className="wavv-button-secondary">Nightlife</Button>
        <Button className="wavv-button-secondary">Arts</Button>
        <Button className="wavv-button-secondary">Networking</Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EVENT_DATA.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            imageUrl={event.imageUrl}
            category={event.category}
            attendees={event.attendees}
            premium={event.premium}
          />
        ))}
      </div>
    </div>
  )
}

