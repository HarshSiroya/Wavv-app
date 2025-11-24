// Central image asset management for the Wavv app
// Using Unsplash API for high-quality free images

export const IMAGE_ASSETS = {
    // Hero/Landing images
    hero: {
        rooftop: "https://images.unsplash.com/photo-1519671482677-e22b61b3b91e?w=1920&h=1080&fit=crop",
        skyline: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop",
        nightlife: "https://images.unsplash.com/photo-1514991643481-cb3175ce867d?w=1920&h=1080&fit=crop",
    },

    // Event images
    events: {
        rooftopSoiree: "https://images.unsplash.com/photo-1519671482677-e22b61b3b91e?w=800&h=600&fit=crop",
        wineArt: "https://images.unsplash.com/photo-1578321272176-30f7a2334c2b?w=800&h=600&fit=crop",
        techMixer: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        culinary: "https://images.unsplash.com/photo-1504674900997-ce457c57a28f?w=800&h=600&fit=crop",
        wellness: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop",
        fashion: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=800&h=600&fit=crop",
    },

    // User/Profile images
    profiles: {
        james: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        user1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
        user2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        user3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        user4: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
        user5: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },

    // Dashboard background
    dashboard: {
        searchBg: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=500&fit=crop",
        liveEventBg: "https://images.unsplash.com/photo-1519671482677-e22b61b3b91e?w=800&h=400&fit=crop",
    },

    // Feature/category images
    features: {
        community: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
        events: "https://images.unsplash.com/photo-1519671482677-e22b61b3b91e?w=400&h=400&fit=crop",
        privacy: "https://images.unsplash.com/photo-1563986768711-b3baa3cf572d?w=400&h=400&fit=crop",
    },

    // Fallbacks and defaults
    defaults: {
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        event: "https://images.unsplash.com/photo-1519671482677-e22b61b3b91e?w=400&h=300&fit=crop",
        bg: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop",
    },
}

// Export specific event data with images included
export const EVENT_DATA = [
    {
        id: 1,
        title: "Exclusive Rooftop Soirée",
        date: "Tonight, 8:00 PM",
        location: "SkyLounge, Downtown",
        imageUrl: IMAGE_ASSETS.events.rooftopSoiree,
        category: "Nightlife",
        attendees: 42,
        premium: true,
        description: "Experience the city skyline with an exclusive rooftop gathering",
    },
    {
        id: 2,
        title: "Wine & Art Exhibition",
        date: "Tomorrow, 7:00 PM",
        location: "Gallery 23, Arts District",
        imageUrl: IMAGE_ASSETS.events.wineArt,
        category: "Arts",
        attendees: 28,
        premium: false,
        description: "Curated art collection featuring emerging artists",
    },
    {
        id: 3,
        title: "Tech Founders Mixer",
        date: "Friday, 6:30 PM",
        location: "Innovation Hub",
        imageUrl: IMAGE_ASSETS.events.techMixer,
        category: "Networking",
        attendees: 35,
        premium: true,
        description: "Connect with innovative entrepreneurs and tech leaders",
    },
    {
        id: 4,
        title: "Culinary Masterclass",
        date: "Next Tuesday, 7:00 PM",
        location: "Chef's Table, Midtown",
        imageUrl: IMAGE_ASSETS.events.culinary,
        category: "Culinary",
        attendees: 16,
        premium: true,
        description: "Learn from renowned chefs in an intimate setting",
    },
    {
        id: 5,
        title: "Wellness Retreat Day",
        date: "Saturday, 10:00 AM",
        location: "Serenity Spa & Gardens",
        imageUrl: IMAGE_ASSETS.events.wellness,
        category: "Wellness",
        attendees: 22,
        premium: false,
        description: "Relax and rejuvenate with wellness experts",
    },
    {
        id: 6,
        title: "Fashion Week After-Party",
        date: "Next Friday, 10:00 PM",
        location: "The Loft, Fashion District",
        imageUrl: IMAGE_ASSETS.events.fashion,
        category: "Nightlife",
        attendees: 50,
        premium: true,
        description: "Celebrate fashion with industry insiders",
    },
]

// User profile data with images
export const SAMPLE_USERS = [
    {
        id: 1,
        name: "James Davidson",
        role: "Tech Entrepreneur & Wavv Member",
        imageUrl: IMAGE_ASSETS.profiles.james,
        bio: "Building the future of technology",
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Venture Capitalist",
        imageUrl: IMAGE_ASSETS.profiles.user1,
    },
    {
        id: 3,
        name: "Marcus Johnson",
        role: "Creative Director",
        imageUrl: IMAGE_ASSETS.profiles.user2,
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Fashion Designer",
        imageUrl: IMAGE_ASSETS.profiles.user3,
    },
    {
        id: 5,
        name: "David Lee",
        role: "Art Collector",
        imageUrl: IMAGE_ASSETS.profiles.user4,
    },
    {
        id: 6,
        name: "Sophie Martin",
        role: "Event Curator",
        imageUrl: IMAGE_ASSETS.profiles.user5,
    },
]
