/* =========================================================================
   RAWASI ADVENTURES — TRIP DATA
   -------------------------------------------------------------------------
   Every trip lives in this one array. The Trips page, the featured card on
   the home page and each trip detail page all render from here.

   All wording, dates, prices and policies below are copied from
   rawasiadventures.com (see /scrape/*.md for the source text).

   To add a trip: copy an object below, change the values, then copy
   trips/yosemite-2027.html to trips/<your-slug>.html and change
   data-trip-page="..." plus the <title>/meta tags. See README.md.

   Field notes
   - slug:      unique id, must match data-trip-page="" on the trip page
   - startDate / endDate: "YYYY-MM-DD". A trip is "Past" once endDate passes.
   - price:     number in USD.
   - status:    "open" | "soldout" | "waitlist" | "soon"
   - spotsLeft: shown under the Reserve button. The old site read this live
                from the Squarespace store; here it is updated by hand.
   - rentals:   optional gear add-ons shown as toggles on the trip page
   ========================================================================= */

window.RAWASI_TRIPS = [
  {
    slug: "yosemite-2027",
    page: "trips/yosemite-2027.html",
    featured: true,
    title: "Yosemite's Hetch Hetchy",
    shortTitle: "Yosemite's Hetch Hetchy",
    eyebrow: "Rawasi Backpacking Retreat",
    headline: "Yosemite's Hetch Hetchy",
    dates: "January 15 to 18, 2027",
    datesLong: "Fri-Mon, January 15-18, 2027",
    startDate: "2027-01-15",
    endDate: "2027-01-18",
    duration: "4 days, 3 nights",
    location: "Yosemite National Park, California",
    shortLocation: "Yosemite National Park, CA",
    groupSize: "15 Muslim men, 18+",
    price: 770,
    priceLabel: "All-inclusive",
    priceNote: "Professional guides, halal meals, four-season gear, AWD shuttle, bathroom hygiene kit, safety plan and wilderness first aid",
    payNote: "Pay in full at booking. Your spot is yours once you book.",
    spotsLeft: 9, // live count on rawasiadventures.com on Nov 9, 2026 (page fallback text said 12)
    status: "open",
    // The old site's "Reserve your spot" button goes to this Squarespace checkout product.
    registerUrl: "https://www.rawasiadventures.com/programs-events/p/hetch-hetchy-2027",
    image: "assets/photos/trip-hetchhetchy.jpg",
    imageAlt: "Three backpackers on the trail above the Hetch Hetchy Reservoir",
    heroImage: "assets/photos/hh-winter-view.jpg",
    heroAlt: "Kolana Rock and snowy peaks above the Hetch Hetchy Reservoir",
    heroVideo: "",
    tags: ["15 Muslim men, 18+", "4 days, 3 nights", "No experience needed"],
    cardSummary: "Guides, gear, halal meals and shuttle included. No experience needed.",
    flyer: "assets/yosemite-2027-flyer.webp", // shown in a "Trip flyer" section on the trip page
    flyerAlt: "Rawasi Backpacking Retreat flyer: Yosemite's Hetch Hetchy, January 15–18, 2027. Brothers only, limited to 15, gear and halal meals provided. With Qari Yaseen Mahmoud and Ibrahim Abdul-haqq Twist.",
    summary:
      "Join an adventurous group of 15 Muslim men backpacking deep into Yosemite's wilderness. Hike beneath towering granite walls, cross bridges past waterfalls and pray together under the winter stars. Come home with new brothers, new skills and a deeper connection to Allah's creation.",
    details: [
      { label: "Dates", value: "Fri-Mon, January 15-18, 2027" },
      { label: "Length", value: "4 days, 3 nights" },
      { label: "Trail", value: "13.4 miles over 3 days, starting at 3,800 ft" },
      { label: "Group", value: "15 Muslim men, 18+" },
      { label: "Experience", value: "None needed, basic fitness encouraged" },
      { label: "Pickup", value: "MCC East Bay (pickups available along the route)" },
      { label: "Departs", value: "Friday, 10:30 AM sharp" },
      { label: "Returns", value: "Monday evening" }
    ],
    highlightsTitle: "Trip Highlights",
    highlights: [
      { icon: "mountain", title: "Trek deep into the wilderness of Yosemite National Park" },
      { icon: "water", title: "Hike past majestic waterfalls and towering granite walls" },
      { icon: "people", title: "View wildlife in its remote natural habitat" },
      { icon: "moon", title: "Stargaze under Yosemite's dark night sky" },
      { icon: "tent", title: "Base camp near Rancheria Falls" },
      { icon: "people", title: "Pray with your brothers in untouched nature" },
      { icon: "fish", title: "Halal meals by the campfire" }
    ],
    includedTitle: "What's Included",
    included: [
      { title: "Professional guide support", items: [
        "Navigate the mountains safely with an experienced trip lead",
        "Backpacking tips and know-how along the way",
        "Personal attention to your health and condition throughout the trip"
      ], note: "Plus 2 wilderness guides who help run camp: cooking, water, coffee and more, so you can enjoy the trip." },
      { title: "Safety and emergency plan", items: [
        "Wilderness First Aid certified team",
        "Satellite connection to emergency services",
        "Careful trip planning, from route study to weather monitoring"
      ] },
      { title: "Halal meals throughout the adventure", items: [
        "A primal feast of halal steak and potatoes to start the trip",
        "Halal backpacking meals in the wild (supporting Muslim-owned businesses)",
        "Trail snacks: halal jerky, electrolytes, and candy for quick energy",
        "Hot coffee served every morning"
      ] },
      { title: "Premium four-season gear rentals", items: [
        "Sized and fitted to you",
        "85-liter backpack with pack liner",
        "One-person backpacking tent",
        "REI Magma 15 sleeping bag",
        "Big Agnes sleeping pad",
        "BearVault BV450 bear canister",
        "Rain poncho"
      ] },
      { title: "Round-trip Rawasi AWD shuttle", image: "assets/photos/hh-sprinter-van.jpg", imageAlt: "The Rawasi AWD Mercedes-Benz Sprinter", items: [
        "Ride together in an AWD Mercedes-Benz Sprinter",
        "Departure from MCC East Bay in the Bay Area, with pickups available along the route"
      ] },
      { title: "Bathroom hygiene kit", items: [
        "Your own istinja bottle, trowel, hand sanitizer and biodegradable toilet paper",
        "Stay clean and keep your taharah deep in the backcountry, far from any bathroom"
      ] },
      { title: "Winter Trekker 1 completion patch", text: "Earn a Rawasi Adventures embroidered patch for completing the first winter edition of the Rawasi Backpacking Retreat" }
    ],
    packingTitle: "You Bring",
    packing: [
      "Warm layers",
      "Hiking shoes",
      "Water bottle",
      "Utensils: fork, spoon and knife",
      "Toothbrush, toothpaste and personal hygiene items"
    ],
    packingNote: "Your full packing list comes in your confirmation email.",
    itineraryTitle: "Itinerary: 4 Days, 3 Nights",
    itinerary: [
      { day: "Day 1", date: "Fri, Jan 15", title: "Shuttle Out, Gear Check and Campfire Feast",
        text: "Meet at MCC East Bay for a 10:30 AM departure, with pickups available along the route, and ride to Yosemite together in our AWD Mercedes Sprinter. At camp, your guide fits your pack and gear to you, then we sit down to a primal feast of halal steak and potatoes by the fire." },
      { day: "Day 2", date: "Sat, Jan 16", title: "Into the Wilderness: Waterfalls and Granite Walls",
        text: "Early start, packs on. We backpack about 6.7 miles along the Hetch Hetchy Reservoir, past Kolana Rock, towering granite walls and the cascades of Wapama Falls, to base camp near Rancheria Falls. We set up camp and enjoy a roaring campfire under the winter stars." },
      { day: "Day 3", date: "Sun, Jan 17", title: "Explore from Base Camp",
        text: "A lighter day, with camp staying put. Learn how to catch and cook food in the wild in a group activity led by your lead wilderness guide, Ibrahim Twist. Catch the sunset over the valley, then close the night stargazing under Yosemite's dark sky." },
      { day: "Day 4", date: "Mon, Jan 18", title: "Hike Out and Celebrate",
        text: "After Fajr, we pack up camp and backpack the same trail out, about 6.7 miles. Every brother who finishes receives his Winter Trekker completion patch, then we ride home together in the Sprinter, back at MCC East Bay Monday evening." }
    ],
    fit: {
      title: "Is This Trip Right for Me?",
      text: "No backpacking experience needed. There are two backpacking days, with a day at base camp in between and an optional day hike. If you're in basic shape, you can do this. For the most enjoyable trip, we recommend a little training beforehand to build your pace.",
      readyTitle: "We'll Get You Ready",
      ready: "Every brother who books schedules a personal call with our team. We'll learn where you're at, answer your questions, and help you get trail-ready before January. On the trail, 3 guides look after 12 participants, so you're supported every step of the way.",
      expectTitle: "What to Expect on the Trail",
      expect: [
        { label: "Pace", value: "Steady, with breaks along the way" },
        { label: "Distance", value: "13.4 miles total, spread over 3 days" },
        { label: "Trail", value: "Established, nothing technical" },
        { label: "Pack", value: "Minimum 28 lbs with the full kit" },
        { label: "Solitude", value: "Deep in Yosemite's roadless wilderness" }
      ]
    },
    guides: [
      { name: "Ibrahim Abdul-haqq Twist", role: "Trip Lead, Wilderness Explorer and Rawasi Co-Founder", image: "assets/people/ibrahim-twist-hetchhetchy.jpg",
        bio: "Ibrahim was born into a family rooted in the outdoors, working in conservation in Ecuador's Amazon rainforest since 1995 and organizing nature retreats for the Bay Area Muslim community since 2008, a life that instilled in him a love and respect for the wild. His love for backpacking took hold on his first trip as a kid, on South Sister in Oregon. A California native, he backpacks the Sierra Nevada, chases trout and salmon as a backcountry fisherman, hunts, and loves studying maps to plan every route. He has also explored the Amazon jungle, volcanoes in Indonesia, and trails in New Zealand, Australia, Italy, Utah and Oregon. As co-founder of Rawasi Adventures, his passion is bringing Muslim brothers into the wilderness for life-changing experiences, far from the noise of everyday life." },
      { name: "Yasir Malang", role: "Wilderness Guide", image: "assets/people/yasir-malang.jpg",
        bio: "Yasir has spent years leading mountain bike rides, day hikes and group backpacking trips to build community and help brothers connect with Allah's creation. Whether it's your first night under the stars or you're a seasoned hiker, he's there to make sure you feel confident and comfortable in the wild." },
      { name: "Bushran Mohammed", role: "Wilderness Guide", image: "assets/people/bushran-mohammed.jpg",
        bio: "Bushran found the outdoors in high school and made it a way of life in Colorado, backpacking to alpine lakes, mountain biking and snowboarding. Now in California, he says yes to almost any adventure, from cliff jumping to midnight kayaking in the Everglades, and he loves bringing people into the wilderness for the first time. Out there, he prays in the open air and takes in what Allah has created." }
    ],
    policyTitle: "Your Commitment",
    policy: [
      { when: "Before Dec 1", text: "If you need to cancel, a 30% cancellation fee applies." },
      { when: "Starting Dec 1", text: "No refunds. If something comes up, we encourage you to give your spot to a brother you know." },
      { when: "If we cancel before departure because of weather or closures", text: "Everything you paid becomes credit toward any Rawasi Adventures retreat of your choice. If it costs less, we refund the difference." },
      { when: "If we cancel for any other reason", text: "You choose a full refund or full credit." },
      { when: "Once we head out", text: "The trip lead may adjust plans for safety and conditions. That's part of the adventure." }
    ],
    galleryTitle: "Photos",
    gallery: [
      { src: "assets/photos/hh-brothers-hiking.jpg", alt: "Three backpackers on the trail above the Hetch Hetchy Reservoir, with Kolana Rock ahead" },
      { src: "assets/photos/hh-red-pack-overlook.jpg", alt: "A backpacker with a red pack looking over the Hetch Hetchy Reservoir and Kolana Rock" },
      { src: "assets/photos/hh-kolana-hiker.jpg", alt: "A backpacker on the trail beside Kolana Rock and the reservoir" },
      { src: "assets/photos/hh-winter-view.jpg", alt: "Kolana Rock and snowy peaks above the Hetch Hetchy Reservoir" },
      { src: "assets/photos/hh-kolana-falls.jpg", alt: "Kolana Rock above the reservoir, seen from a waterfall on the trail" },
      { src: "assets/photos/hh-rainbow-bridge.jpg", alt: "A rainbow over the bridge below Wapama Falls" },
      { src: "assets/photos/hh-wapama-falls.jpg", alt: "Wapama Falls" },
      { src: "assets/photos/hh-oshaughnessy-bridge.jpg", alt: "A wooden footbridge over the cascades along the Hetch Hetchy trail" },
      { src: "assets/photos/hh-snowy-reservoir.jpg", alt: "Snow on the peaks above the Hetch Hetchy Reservoir" },
      { src: "assets/photos/hh-river-view.jpg", alt: "Looking down the Tuolumne River to the Hetch Hetchy Reservoir" },
      { src: "assets/photos/hh-campfire.jpg", alt: "A campfire on granite at camp" },
      { src: "assets/photos/hh-tent-morning.jpg", alt: "A tent at base camp looking down the valley to the reservoir" },
      { src: "assets/photos/hh-tent-sunset.jpg", alt: "A tent at base camp at sunset" },
      { src: "assets/photos/hh-stars.jpg", alt: "The Milky Way over the pines on a clear Sierra night" }
    ],
    testimonialsTitle: "From our last retreat",
    rentals: [], // all gear is included in the $770 price
    faqGroup: "yosemite-2027"
  },
  {
    slug: "sierra-2026",
    page: "trips/sierra-2026.html",
    featured: false,
    title: "Emigrant Wilderness",
    shortTitle: "Emigrant Wilderness",
    eyebrow: "Rawasi Backpacking Retreat · Weekend Wilderness Trek",
    headline: "We came as strangers. We left as brothers.",
    dates: "July 17 to 19, 2026",
    datesLong: "July 17-19, 2026",
    startDate: "2026-07-17",
    endDate: "2026-07-19",
    duration: "3 days, 2 nights",
    location: "Emigrant Wilderness, Sierra Nevada Mountains, CA",
    shortLocation: "Sierra Nevada Mountains, CA",
    groupSize: "Brothers only, ages 18+",
    // Old-site price for this past trip: $399 base, on sale for $319. Not shown on past trips.
    price: null,
    basePrice: 399,
    salePrice: 319,
    status: "soldout",
    statusNote: "Our registration is now closed.",
    registerUrl: "",
    image: "assets/photos/emigrant-1.jpg",
    imageAlt: "Rawasi brothers on the trail in the Emigrant Wilderness",
    heroImage: "assets/photos/emigrant-2.jpg",
    heroAlt: "A mountain lake and meadow in the Emigrant Wilderness",
    heroVideo: "",
    youtube: "XKM4X516dsk",
    tags: ["Brothers Only", "Ages 18+", "Beginner-Friendly"],
    quote: { text: "Say: travel through the land and observe how He began creation.", cite: "Surah Al-Ankabut, 29:20" },
    // Recap text from the old About page ("Our Story").
    summary:
      "In July 2026, we took our first group of brothers deep into the Sierra Nevada. We hiked through mountain terrain, swam in alpine lakes, camped in a stunning meadow, bonded over the campfire and prayed together. Brothers who started as strangers left as friends.",
    // Pre-trip description from the old /emigrant-2026 page.
    intro:
      "Spend a weekend deep in the Sierra Nevada — hiking through the backcountry, camping in the wilderness, and resetting your soul far from the noise of everyday life. Surrounded by brothers, with Halaqahs led by Imam Yaseen Mahmoud, and guided every step of the way. Depart Friday afternoon, return Sunday evening. No experience needed.",
    about: {
      title: "A Guided Wilderness Retreat For Muslim Brothers",
      text: "Tucked into California's northern Sierra Nevada, we’re backpacking a wilderness holding hundreds of crystal-clear alpine lakes, granite and volcanic peaks topping 11,000 feet — with a fraction of Yosemite's crowds. Darker skies. Better fishing. And a stillness that reminds you why you came. It's one of California's best-kept secrets."
    },
    stats: [
      { value: "12", label: "brothers" },
      { value: "3", label: "days, 2 nights" },
      { value: "11", label: "miles (5.5 each way)" },
      { value: "100%", label: "halal meals" },
      { value: "🎣", label: "caught & cooked wild fish" }
    ],
    recap: [
      { title: "Alpine lakes", text: "Backcountry swims in water so clear you could count the stones." },
      { title: "Meadow camp", text: "A stunning meadow, a campfire, and brothers who were strangers two days before." },
      { title: "Catch & cook", text: "We caught wild fish and cooked them right there at camp." },
      { title: "Pack weigh-in", text: "A Rawasi tradition: the lightest backpacker wins a special reward." }
    ],
    galleryTitle: "Photos & video",
    gallery: [
      { src: "assets/photos/emigrant-1.jpg", alt: "Rawasi brothers on the trail in the Emigrant Wilderness" },
      { src: "assets/photos/emigrant-2.jpg", alt: "A mountain lake and meadow in the Emigrant Wilderness" },
      { src: "assets/photos/emigrant-3.jpg", alt: "Brothers swimming in an alpine lake" },
      { src: "assets/photos/emigrant-4.jpg", alt: "Brothers backpacking up a granite trail" },
      { src: "assets/photos/emigrant-5.jpg", alt: "Four brothers on a granite overlook" },
      { src: "assets/photos/emigrant-6.jpg", alt: "Sunset over the meadow at camp" },
      { src: "assets/photos/about-hero.jpg", alt: "Rawasi brothers praying together in a mountain meadow" }
    ],
    includedTitle: "What’s Included In Your Retreat!",
    included: [
      { title: "Islamic Program with Imam Yaseen", text: "Imam Yaseen Mahmoud leads a halaqa every morning before we hit the trail and every evening at camp. Starting and ending each day with intention, surrounded by the creation of Allah, miles from the noise of daily life." },
      { title: "Guided Trekking", text: "A fully guided multi-day backpacking trek through miles of scenic Sierra Nevada wilderness — overnight camps, route planning, safety, pacing, and campsite selection all handled so you can focus on the adventure." },
      { title: "Wilderness Camping", text: "Sleep in the heart of the Sierra Nevada wilderness — permitted backcountry campsites, no roads, no cabins, no hotels. Just mountains, open sky, and your brothers." },
      { title: "All Meals Included (Halal)", text: "All meals provided. Friday night feast to kick off the trip. Delicious halal meals throughout. Cooked for you by your trip leaders." },
      { title: "Roundtrip Group Shuttle from MCC Bay Area", text: "Door to trailhead and back. A 15-passenger van takes the whole group deep into the Sierra Nevada — no coordinating carpools, no driving yourself after 3 days on trail. Friday departure 2:30pm, return Sunday evening." }
    ],
    itineraryTitle: "Trip Itinerary",
    itinerary: [
      { day: "Friday July 17", date: "Departure", title: "Departure", items: ["Shuttle departs 2:30 PM from MCC masjid", "4 hour drive into Sierra Nevada", "Arrive to first camp", "Fully cooked feast", "Evening halaqa"] },
      { day: "Saturday July 18", date: "Real wilderness", title: "Real wilderness", items: ["Morning halaqa", "Full day backpacking through alpine terrain", "Mountains, rivers, waterfalls, backcountry swimming", "Dehydrated meals (breakfast, lunch, dinner)", "Evening halaqa at camp"] },
      { day: "Sunday July 19", date: "Return", title: "Return", items: ["Morning halaqa (closing session)", "Break camp", "Hike back to trailhead", "Pizza at trailhead", "Shuttle back to MCC Masjid by evening"] }
    ],
    guidesTitle: "Meet Your Trip leaders",
    guides: [
      { name: "Imam Yaseen Mahmoud", role: "Muslim Scholar, Rawasi Co-Founder", image: "assets/people/yaseen-mahmoud.jpg",
        bio: "A Bay Area native and Eagle Scout, Yaseen brings a lifelong connection to the outdoors and a deep commitment to community. He holds a degree in Islamic Law and Theology from Zaytuna College, where his studies focused on Arabic Literature, Islamic Jurisprudential Law, and Ethics. On the trail, Yaseen leads morning and evening halaqas — grounding each day in intention, reflection, and brotherhood. His scholarship and presence transform this expedition from a wilderness trek into something far more meaningful." },
      { name: "Ibrahim Abdul-haqq Twist", role: "Wilderness Guide, Rawasi Co-Founder", image: "assets/people/ibrahim-twist-emigrant.jpg",
        bio: "Ibrahim's outdoor roots run deep — his family has been organizing nature retreats for the Bay Area Muslim community since 2008 through organizations like L.A.K.E. and Cool Currents. He has guided multi-day backpacking treks in California's Sierra Nevada, traversed terrain across the Trinity Alps and Utah's Wasatch Mountains, and has taken his pursuit of wilderness abroad — including volcanic terrain in Indonesia on Mount Rinjani and Mount Merapi. His background in backcountry travel and group logistics gives every participant the space to be fully immersed in the wilderness and the experience." },
      { name: "Luke Fro", role: "Wilderness Guide, Videographer", image: "assets/people/luke-fro.jpg",
        bio: "An Eagle Scout and Wilderness First Aid certified guide, Luke grew up in Pennsylvania, where a deep love for nature took root early and became the foundation of his connection to God — eventually leading him to Islam. He brings four years of experience guiding with Dust and Tribe, and works as a filmmaker exploring the interconnectedness of Islam and nature. On this trip, Luke lends both his backcountry expertise and his lens, capturing the journey as it unfolds." },
      { name: "Adeeb Syed", role: "Wilderness Guide", image: "assets/people/adeeb-syed.jpg",
        bio: "An Eagle Scout, Adeeb's passion for the outdoors began early and has grown through years of adventure. He has led multi-day backpacking expeditions and river trips across California and beyond, summited high-altitude peaks, and navigated remote terrain while building practical wilderness survival skills. Passionate about responsible exploration, Adeeb is committed to helping others build confidence, self-reliance, and a lasting appreciation for the outdoors." }
    ],
    // Rental prices published on the old site for this trip (FAQ + Essential Backpacking Gear page).
    rentals: [
      { id: "sleep", name: "Sleeping bag + sleeping pad", price: 48 },
      { id: "tent", name: "Backpacking tent", price: 45 },
      { id: "pack", name: "Backpacking pack", price: 50 }
    ],
    testimonialsTitle: "What brothers said",
    faqGroup: "sierra-2026"
  }
];
