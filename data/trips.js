/* =========================================================================
   RAWASI ADVENTURES — TRIP DATA
   -------------------------------------------------------------------------
   Every trip lives in this one array. The Trips page, the featured card on
   the home page and each trip detail page all render from here.

   To add a trip: copy an object below, change the values, then copy
   trips/yosemite-2027.html to trips/<your-slug>.html and change
   data-trip="..." plus the <title>/meta tags. See README.md.

   Field notes
   - slug:      unique id, must match data-trip="" on the trip page
   - startDate / endDate: "YYYY-MM-DD". A trip is "Past" once endDate passes.
   - price:     number in USD. Change 800 to update every page at once.
   - status:    "open" | "soldout" | "waitlist" | "soon"
   - rentals:   gear add-ons shown as toggles on the trip page (live total)
   ========================================================================= */

window.RAWASI_TRIPS = [
  {
    slug: "yosemite-2027",
    page: "trips/yosemite-2027.html",
    featured: true,
    title: "Yosemite — Hetch Hetchy Backpacking Retreat 2027",
    shortTitle: "Yosemite — Hetch Hetchy",
    eyebrow: "Winter Retreat 2027",
    headline: "Winter in the valley.",
    dates: "January 15–18, 2027",
    startDate: "2027-01-15",
    endDate: "2027-01-18",
    season: "Winter weekend",
    duration: "4 days",
    location: "Hetch Hetchy Valley, Yosemite National Park, CA",
    shortLocation: "Yosemite, CA",
    groupSize: "15 Muslim men",
    price: 800,
    priceNote: "per person · price subject to change",
    status: "open",
    statusNote: "Public registration opened November 9, 2026. Waitlist members got 24-hour early access.",
    registerUrl: "#register", // ← replace with your payment / registration link
    image: "assets/yosemite-hetch-hetchy.jpg",
    heroImage: "assets/yosemite-winter-stars.jpg",
    heroVideo: "", // optional, e.g. "assets/yosemite.mp4"
    tags: ["Brothers only", "Ages 18+", "Beginner-friendly"],
    summary:
      "Step into the wild of Yosemite. Hike beneath towering granite walls, cross bridges under thundering waterfalls, camp deep in the valley, learn how to catch and cook food in the wild, and pray together under the winter stars, inshaAllah.",
    highlights: [
      { icon: "mountain", title: "Granite walls", text: "Hike beneath the towering cliffs of Hetch Hetchy." },
      { icon: "water", title: "Waterfalls & bridges", text: "Cross bridges under thundering winter falls." },
      { icon: "tent", title: "Valley camping", text: "Sleep deep in the valley, far from the crowds." },
      { icon: "fish", title: "Catch & cook", text: "Learn to catch and cook food in the wild." },
      { icon: "moon", title: "Prayer under the stars", text: "Pray together beneath the winter sky." },
      { icon: "people", title: "Brotherhood", text: "Come as strangers. Leave as brothers." }
    ],
    included: [
      { title: "Islamic program", text: "Morning and evening halaqas with Imam Yaseen Mahmoud." },
      { title: "Guided trekking", text: "Experienced guides set a pace for the whole group." },
      { title: "Wilderness camping & permits", text: "Backcountry permits handled for you." },
      { title: "All halal meals", text: "Every meal on the trail is halal." },
      { title: "Roundtrip group shuttle", text: "From the Bay Area. Departure details TBD." }
    ],
    itineraryNote: "Full itinerary coming soon.",
    itinerary: [
      { day: "Day 1", date: "Fri, Jan 15", title: "Depart & hike in", items: ["Group shuttle departs the Bay Area", "Drive to Hetch Hetchy trailhead", "Hike in and set up first camp", "Evening halaqa"] },
      { day: "Day 2", date: "Sat, Jan 16", title: "Into the valley", items: ["Fajr and morning halaqa", "Hike beneath the granite walls", "Waterfalls and bridge crossings", "Evening halaqa under the stars"] },
      { day: "Day 3", date: "Sun, Jan 17", title: "Catch & cook", items: ["Learn to catch and cook food in the wild", "Valley exploring", "Brotherhood challenges", "Campfire and halaqa"] },
      { day: "Day 4", date: "Mon, Jan 18", title: "Hike out & return", items: ["Closing halaqa", "Break camp and hike out", "Shuttle back to the Bay Area"] }
    ],
    rentals: [
      { id: "sleep", name: "Sleeping bag + pad", price: 48 },
      { id: "tent", name: "Backpacking tent", price: 45 },
      { id: "pack", name: "Backpacking pack", price: 50 }
    ],
    packingExtras: ["Insulated puffy jacket", "Thermal base layers (top + bottom)", "Warm beanie & gloves", "Wool socks (2–3 pairs)", "Winter-rated sleeping bag (20°F or lower)", "Waterproof boots & gaiters"],
    faqIds: ["included", "leaders", "shuttle", "age", "gear", "experience", "safety", "bears", "halal", "pack"]
  },
  {
    slug: "sierra-2026",
    page: "trips/sierra-2026.html",
    featured: false,
    title: "Rawasi Backpacking Retreat — Weekend Wilderness Trek",
    shortTitle: "Sierra Nevada Wilderness Trek",
    eyebrow: "Summer Retreat 2026",
    headline: "We came as strangers. We left as brothers.",
    dates: "July 17–19, 2026",
    startDate: "2026-07-17",
    endDate: "2026-07-19",
    season: "Summer weekend",
    duration: "3 days",
    location: "Emigrant Wilderness, Sierra Nevada Mountains, CA",
    shortLocation: "Sierra Nevada, CA",
    groupSize: "12 Muslim brothers",
    price: null,
    status: "soldout",
    registerUrl: "",
    image: "assets/sierra-2026.jpg",
    heroImage: "assets/sierra-2026.jpg",
    heroVideo: "",
    youtube: "XKM4X516dsk",
    tags: ["Brothers only", "Ages 18+", "Beginner-friendly"],
    summary:
      "12 Muslim brothers. 2 days and about 15 miles deep in the Sierra Nevada. We hiked mountain terrain, swam in alpine lakes, camped in a stunning meadow, bonded over the campfire, ate delicious halal meals, and even caught and cooked wild fish.",
    stats: [
      { value: "12", label: "brothers" },
      { value: "2–3", label: "days" },
      { value: "15", label: "miles" },
      { value: "100%", label: "halal meals" },
      { value: "🎣", label: "caught & cooked wild fish" }
    ],
    recap: [
      { title: "Alpine lakes", text: "Backcountry swims in water so clear you could count the stones." },
      { title: "Meadow camp", text: "A stunning meadow, a campfire, and brothers who were strangers two days before." },
      { title: "Catch & cook", text: "We caught wild fish and cooked them right there at camp." },
      { title: "Pack weigh-in", text: "A Rawasi tradition: the lightest backpacker wins a special reward." }
    ],
    gallery: [
      { src: "assets/sierra-alpine-lake.jpg", alt: "Alpine lake in the Emigrant Wilderness" },
      { src: "assets/sierra-campfire.jpg", alt: "Brothers around the campfire" },
      { src: "assets/sierra-meadow.jpg", alt: "Camp in a Sierra meadow" },
      { src: "assets/sierra-maghrib.jpg", alt: "Maghrib prayed in the High Sierra" },
      { src: "assets/sierra-summit.jpg", alt: "Summit view of the Sierra Nevada" },
      { src: "assets/hero-sierra.jpg", alt: "Sunset over the Sierra ridgeline" }
    ],
    included: [
      { title: "Islamic program", text: "Halaqas with Imam Yaseen." },
      { title: "Guided trekking", text: "Routes planned around the group." },
      { title: "Wilderness camping", text: "Permits and campsites handled." },
      { title: "All meals included", text: "Fully halal, from feast to trail food." },
      { title: "Roundtrip group shuttle", text: "From MCC, Bay Area." }
    ],
    itinerary: [
      { day: "Day 1", date: "Fri, Jul 17", title: "Departure", items: ["Shuttle departs 2:30 PM from MCC masjid", "4-hour drive into the Sierra", "Arrive at first camp", "Fully cooked feast", "Evening halaqa"] },
      { day: "Day 2", date: "Sat, Jul 18", title: "Real wilderness", items: ["Morning halaqa", "Full day backpacking through alpine terrain", "Mountains, rivers, waterfalls, backcountry swimming", "Dehydrated meals on the trail", "Evening halaqa at camp"] },
      { day: "Day 3", date: "Sun, Jul 19", title: "Return", items: ["Closing halaqa", "Break camp", "Hike back to the trailhead", "Pizza at the trailhead", "Shuttle back to MCC by evening"] }
    ],
    rentals: [],
    faqIds: []
  }
];
