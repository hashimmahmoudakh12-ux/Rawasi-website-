/* =========================================================================
   RAWASI ADVENTURES — SHARED SITE CONTENT
   Links, founders, testimonials and FAQ. All wording is copied from
   rawasiadventures.com (see /scrape/*.md for the source text).
   ========================================================================= */

window.RAWASI_SITE = {
  links: {
    whatsapp: "https://chat.whatsapp.com/IivAJXxc9Q6ETvlqQZd3Gt",
    youtube: "https://youtu.be/XKM4X516dsk",
    instagram: "https://www.instagram.com/rawasi.adventures/",
    phone: "+17073554489",
    phoneDisplay: "(707) 355-4489",
    email: "contact@rawasiadventures.com"
  },

  // About page — "Our Founders"
  founders: [
    { name: "Ibrahim Abdul-haqq Twist", role: "Co-Founder, Wilderness Explorer", image: "assets/people/ibrahim-twist.jpg",
      bio: "Ibrahim was born into a family rooted in the outdoors, working in conservation in Ecuador's Amazon rainforest since 1995 and organizing nature retreats for the Bay Area Muslim community since 2008. His love for backpacking took hold on his first trip as a kid, on South Sister in Oregon. A California native, he backpacks the Sierra Nevada, chases trout and salmon as a backcountry fisherman, and loves studying maps to plan every route. He has also explored the Amazon jungle, volcanoes in Indonesia, and trails in New Zealand, Australia, Italy, Utah and Oregon." },
    { name: "Imam Yaseen Mahmoud", role: "Co-Founder, Muslim Scholar", image: "assets/people/yaseen-mahmoud.jpg",
      bio: "A Bay Area native and Eagle Scout, Yaseen brings a lifelong connection to the outdoors and a deep commitment to community. He holds a degree in Islamic Law and Theology from Zaytuna College, where his studies focused on Arabic Literature, Islamic Jurisprudential Law and Ethics." }
  ],

  testimonials: [
    { name: "Omar El-Etr", trip: "Emigrant Wilderness, July 2026", image: "assets/people/testimonial-omar.jpg",
      quote: "We're all waking up for Fajr to pray, so we're not missing anything. Our deen is still intact, and if anything, we're actually connecting more with nature and Allah." },
    { name: "Mohammad Sameer Khan", trip: "Emigrant Wilderness, July 2026", image: "assets/people/testimonial-sameer.jpg",
      quote: "I was always looking for like-minded Muslim brothers... backpacking for me... gives me a chance to connect better with my Creator and strengthen my iman." },
    { name: "Din Didic", trip: "Emigrant Wilderness, July 2026", image: "assets/people/testimonial-din.jpg",
      quote: "SubhanAllah, Allah still calls us the most beautiful of creation when we have all this... So how lucky are we to have Allah? Ya Kareem." }
  ],

  /* FAQ, grouped by trip. Each trip page links to its own group.
     yosemite-2027: from the old /hetchhetchy page sections.
     sierra-2026:   the old /emigrant-2026 page "Frequently Asked Questions", verbatim. */
  faqGroups: [
    {
      id: "yosemite-2027",
      title: "Yosemite's Hetch Hetchy",
      subtitle: "January 15 to 18, 2027",
      faq: [
        { id: "hh-right", q: "Is This Trip Right for Me?",
          a: "<p>No backpacking experience needed. There are two backpacking days, with a day at base camp in between and an optional day hike. If you're in basic shape, you can do this. For the most enjoyable trip, we recommend a little training beforehand to build your pace.</p>" },
        { id: "hh-ready", q: "We'll Get You Ready",
          a: "<p>Every brother who books schedules a personal call with our team. We'll learn where you're at, answer your questions, and help you get trail-ready before January. On the trail, 3 guides look after 12 participants, so you're supported every step of the way.</p>" },
        { id: "hh-expect", q: "What to Expect on the Trail",
          a: "<ul class=\"price-list\"><li><span>Pace</span><span>Steady, with breaks along the way</span></li><li><span>Distance</span><span>13.4 miles total, spread over 3 days</span></li><li><span>Trail</span><span>Established, nothing technical</span></li><li><span>Pack</span><span>Minimum 28 lbs with the full kit</span></li><li><span>Solitude</span><span>Deep in Yosemite's roadless wilderness</span></li></ul>" },
        { id: "hh-included", q: "What's Included",
          a: "<p><strong>$770, all-inclusive:</strong> Professional guides, halal meals, four-season gear, AWD shuttle, bathroom hygiene kit, safety plan and wilderness first aid.</p><p>Premium four-season gear rentals are included: 85-liter backpack with pack liner, one-person backpacking tent, REI Magma 15 sleeping bag, Big Agnes sleeping pad, BearVault BV450 bear canister and rain poncho, sized and fitted to you.</p>" },
        { id: "hh-bring", q: "You Bring",
          a: "<ul><li>Warm layers</li><li>Hiking shoes</li><li>Water bottle</li><li>Utensils: fork, spoon and knife</li><li>Toothbrush, toothpaste and personal hygiene items</li></ul><p>Your full packing list comes in your confirmation email.</p>" },
        { id: "hh-details", q: "Trip Details",
          a: "<ul class=\"price-list\"><li><span>Dates</span><span>Fri-Mon, January 15-18, 2027</span></li><li><span>Length</span><span>4 days, 3 nights</span></li><li><span>Trail</span><span>13.4 miles over 3 days, starting at 3,800 ft</span></li><li><span>Group</span><span>15 Muslim men, 18+</span></li><li><span>Experience</span><span>None needed, basic fitness encouraged</span></li><li><span>Pickup</span><span>MCC East Bay (pickups available along the route)</span></li><li><span>Departs</span><span>Friday, 10:30 AM sharp</span></li><li><span>Returns</span><span>Monday evening</span></li></ul>" },
        { id: "hh-commitment", q: "Your Commitment",
          a: "<p>Pay in full at booking. Your spot is yours once you book.</p><ul class=\"price-list\"><li><span>Before Dec 1</span><span>If you need to cancel, a 30% cancellation fee applies.</span></li><li><span>Starting Dec 1</span><span>No refunds. If something comes up, we encourage you to give your spot to a brother you know.</span></li><li><span>If we cancel before departure because of weather or closures</span><span>Everything you paid becomes credit toward any Rawasi Adventures retreat of your choice. If it costs less, we refund the difference.</span></li><li><span>If we cancel for any other reason</span><span>You choose a full refund or full credit.</span></li><li><span>Once we head out</span><span>The trip lead may adjust plans for safety and conditions. That's part of the adventure.</span></li></ul>" }
      ]
    },
    {
      id: "sierra-2026",
      title: "Emigrant Wilderness",
      subtitle: "July 17 to 19, 2026 · past retreat",
      faq: [
        { id: "included", q: "What's included in the price?",
          a: "<p>Your base price covers: Halaqas with Imam Yaseen Mahmoud, guided wilderness trekking, swimming, backcountry camp permits, all meals Friday through Sunday (Halal), and roundtrip group shuttle from the Bay Area.</p><p>You still need to take care of your own backpacking gear — we have easy our affordable options for you!</p>" },
        { id: "leaders", q: "Who is leading this trip?",
          a: "<p><strong>Ibrahim Twist</strong> handles all logistics, route planning, safety, and operations. He has extensive backpacking experience in the Sierra Nevada and knows this terrain well.</p><p><strong>Imam Yaseen Mahmoud</strong> leads the Islamic programming — a morning halaqa before we hit the trail each day and an evening halaqa at camp. The spiritual dimension of this trip is intentional, structured, and led by someone with real knowledge and presence.</p><p><strong>Luke Frobase</strong> is a Wilderness Guide and Videographer. An Eagle Scout and Wilderness First Aid certified guide, Luke brings four years of backcountry guiding experience and lends both his trail expertise and his lens to capture the journey as it unfolds.</p>" },
        { id: "shuttle", q: "Where does the shuttle depart from?",
          a: "<p>MCC Masjid, Bay Area. 2:30 PM sharp on Friday July 17 — no exceptions. Returns to MCC by Sunday evening. Exact destination is not disclosed publicly — it's part of the experience.</p>" },
        { id: "age", q: "What age range is this for?",
          a: "<p>Young adult men, above 18 to mid-30s. Outside that range but feel called to this? Reach out and we'll talk.</p>" },
        { id: "gear", q: "What if I don't have backpacking gear?",
          a: "<p>No problem — that's common, and easy to sort. You have two options for anything you're missing:</p><p><strong>Rent from us</strong> (added to your base price):</p><ul class=\"price-list\"><li><span>Sleeping bag + sleeping pad</span><span>$48</span></li><li><span>Backpacking tent</span><span>$45</span></li><li><span>Backpacking pack</span><span>$50</span></li></ul><p><strong>Or buy cheap on Amazon</strong> and return it after the trip for a refund — basically free, and some of the best deals you'll find anywhere.</p><p>If renting from us, book by July 12th — gear can't be guaranteed for late bookings.</p>" },
        { id: "experience", q: "Do I need prior backpacking experience?",
          a: "<p>No — but you need to be in reasonable shape. Saturday is a full day on trail with a loaded pack through Sierra Nevada terrain. If you can walk 3–7 miles comfortably, you can do this. Ibrahim sets a pace the whole group can sustain. Unsure if you're ready? Reach out before booking — we'd rather have that conversation upfront.</p>" },
        { id: "safety", q: "Is it safe?",
          a: "<p>Yes. The Emigrant Wilderness has established trails and no technical terrain. A wilderness first aid kit is on trail at all times. July is peak Sierra season — long days, stable weather, no snow. We plan every route with the group's ability in mind.</p>" },
        { id: "refund", q: "What is our refund policy?",
          a: "<ul class=\"price-list\"><li><span>30+ days before the trip</span><span>Full refund</span></li><li><span>20-29 days before the trip</span><span>50% refund</span></li><li><span>14-19 days before the trip</span><span>25% refund</span></li><li><span>Within 14 days of the trip</span><span>No refund</span></li></ul><p>Once you book, we immediately commit to permits, shuttle, food, guides, and gear based on confirmed headcount. The closer to the trip date, the harder it is for us to recover those costs — which is why refunds decrease as the trip gets closer.</p>" },
        { id: "bears", q: "Should I be worried about black bears?",
          a: "<p>Not really — most people don't realize black bears are naturally timid and avoid confrontation, unlike grizzlies. We store all food in bear canisters, and your guides carry clear protocols for any wildlife encounters. Sightings are rare, and when they happen, black bears typically want nothing to do with us either.</p>" },
        { id: "pack", q: "What should I pack?",
          a: "<p>A full packing list is shared after booking, but generally: lightweight clothing for warm days (highs in the 80s) and cool nights (lows in the 40s-50s), swimwear, and the usual camping essentials. Remember, only bring what you need — every pound matters when backpacking.</p>" },
        { id: "halal", q: "Is the food halal?",
          a: "<p>Yes. All food on this trip is halal. Friday dinner and Saturday are fresh cooked big meals. Saturday meals on trail are pre-made but delicous and high-quality meals. If you have dietary needs or allergies, let us know at booking.</p>" },
        { id: "late", q: "Can I join the group late or leave early?",
          a: "<p>No. One shuttle, one group, one departure time. There is no individual transport option. If a genuine emergency comes up, reach out and we'll work through it.</p>" },
        { id: "salah", q: "What about wudu and salah on the trail?",
          a: "<p>All five prayers are observed as a group, led by Imam Yaseen on the trail and at camp. The Sierra Nevada has rivers, streams, and lakes throughout the route — clean water for wudu is accessible. Tayammum applies when water is not. Any fiqh questions on the trail — Imam Yaseen handles it.</p>" },
        { id: "bathrooms", q: "What about bathrooms in the wilderness?",
          a: "<p>You'll have bathrooms available Friday, Saturday morning, and Sunday morning. The only stretch without facilities is Saturday morning through Sunday midday, once we're deep in the wilderness — real backpacking. It's simpler than people expect, and mostly just a precaution — we'll walk through it together before we head out.</p><p>If you'd like to bring your own gear for that window, it's easy and inexpensive to put together — see our packing list for a few optional recommendations.</p>" },
        { id: "emergency", q: "What if there's an emergency on the trail?",
          a: "<p>We have a clear emergency protocol — stabilize, assess, and contact Tuolumne County Search and Rescue if evacuation is needed. Emergency contacts are collected from every participant at booking. If you have a pre-existing medical condition, let us know confidentially in advance so we can be prepared.</p><p>We won't have cell reception in the backcountry, but we carry a Starlink device for emergency text messaging — so family back home can still reach us, or we can reach out, if needed.</p>" },
        { id: "cancel", q: "What if I book but can't make it?",
          a: "<p>Full payment is required at booking — no deposits, no holds. Spots for this trip are limited, and booking yours means someone else may have been turned away to hold it for you. All logistics (permits, shuttle, food, gear) are locked in based on confirmed headcount, so <strong>cancellations within two weeks of the trip are non-refundable</strong>, as costs are already committed and can't be recovered.</p>" },
        { id: "difficulty", q: "How difficult is the hike?",
          a: "<p>Saturday's hike in is the bigger push: about 5.5 miles with roughly 1,600 ft of elevation gain, taking 3-4 hours. Sunday's return hike is much easier — same 5.5 miles, but mostly downhill along the river with only about 135 ft of gain, taking 2-3 hours.</p><p>Beginner-friendly overall, but come ready for a real trekking day on Saturday.</p>" },
        { id: "fishing", q: "Can we go fishing on the trip?",
          a: "<p>Yes — this is backcountry fishing, so you'll be carrying your rod into the wilderness with you, camping right alongside remote rivers most people never get to fish. If you love fishing, bringing a rod takes this trip to another level — it's about as exclusive an experience as it gets. The brown trout out here are some of the most prized and best-tasting around, and you're welcome to cook and eat what you catch.</p><p>A California fishing license isn't included with the trip — you'll need to get your own. A one-day license is $21.09, or the full 365-day resident license is $64.54 if you think you'll fish again later in the year. Licenses can be bought online through CDFW or at most sporting goods stores.</p><p>There's also a store right at the trailhead where you can pick up a license, rod, lures, and anything else you need — so if you'd rather decide once we're out there, that's an easy option too.</p>" }
      ]
    }
  ]
};
