import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EventCard } from "@/components/event-card"
import { Edit, Settings, Users, Calendar, MapPin, LinkIcon, Share2 } from "lucide-react"
import { IMAGE_ASSETS, EVENT_DATA, SAMPLE_USERS } from "@/lib/image-assets"

export default function ProfilePage() {
  const currentUser = {
    name: "Alexandra Lee",
    bio: "Tech enthusiast & cultural explorer",
    location: "New York, NY",
    joinedYear: 2025,
    website: "alexlee.com",
    imageUrl: IMAGE_ASSETS.profiles.user1,
    interests: ["Nightlife", "Culinary", "Tech", "Arts", "Networking"],
    connections: 42,
    invitesRemaining: 2,
  }

  return (
    <div className="wavv-container py-8 space-y-8">
      {/* Profile Header Card */}
      <div className="wavv-card rounded-xl overflow-hidden">
        {/* Banner/Background */}
        <div
          className="h-48 w-full bg-gradient-to-r from-purple-900 to-indigo-900 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGE_ASSETS.hero.skyline}')`, opacity: 0.85 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
        </div>

        {/* Profile Content */}
        <div className="p-6 md:p-8 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-end md:items-start">
            {/* Avatar */}
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex-shrink-0 overflow-hidden border-4 border-black shadow-2xl">
              <img src={currentUser.imageUrl} alt={currentUser.name} className="w-full h-full object-cover" />
            </div>

            {/* Profile Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">{currentUser.name}</h1>
                  <p className="text-lg text-white/70 mb-4">{currentUser.bio}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button className="wavv-button-secondary gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button size="icon" className="wavv-button-secondary">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="wavv-button-secondary">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Profile Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-purple-400/70" />
                  <span className="text-white/80">{currentUser.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-purple-400/70" />
                  <span className="text-white/80">Joined {currentUser.joinedYear}</span>
                </div>
                <div className="flex items-center">
                  <LinkIcon className="h-5 w-5 mr-3 text-purple-400/70" />
                  <a href={`https://${currentUser.website}`} className="text-purple-400 hover:text-purple-300">
                    {currentUser.website}
                  </a>
                </div>
              </div>

              {/* Interests */}
              <div className="mb-6">
                <p className="text-white/60 text-sm font-medium mb-3">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {currentUser.interests.map((interest) => (
                    <Badge
                      key={interest}
                      className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-white border border-purple-500/30 hover:border-purple-500/60"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">{currentUser.connections}</p>
                  <p className="text-sm text-white/60">Connections</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{currentUser.invitesRemaining}</p>
                  <p className="text-sm text-white/60">Invites Remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Attended */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent Events</h2>
          <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
            View All →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            title={EVENT_DATA[2].title}
            date={EVENT_DATA[2].date}
            location={EVENT_DATA[2].location}
            imageUrl={EVENT_DATA[2].imageUrl}
            category={EVENT_DATA[2].category}
            attendees={EVENT_DATA[2].attendees}
            premium={EVENT_DATA[2].premium}
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
            title={EVENT_DATA[4].title}
            date={EVENT_DATA[4].date}
            location={EVENT_DATA[4].location}
            imageUrl={EVENT_DATA[4].imageUrl}
            category={EVENT_DATA[4].category}
            attendees={EVENT_DATA[4].attendees}
            premium={EVENT_DATA[4].premium}
          />
        </div>
      </div>

      {/* Connections Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Connections</h2>
          <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
            View All →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {SAMPLE_USERS.slice(0, 6).map((user) => (
            <div key={user.id} className="wavv-card rounded-lg p-4 text-center hover:bg-white/5 transition-colors">
              <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600">
                <img src={user.imageUrl} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium text-white truncate">{user.name}</h3>
              <p className="text-xs text-white/60 truncate">{user.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

