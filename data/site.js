/* =========================================================================
   RAWASI ADVENTURES — SHARED SITE CONTENT
   Links, guides, FAQ, packing list and refund policy. Used by the FAQ page,
   the About page and every trip page.
   ========================================================================= */

window.RAWASI_SITE = {
  links: {
    whatsapp: "https://chat.whatsapp.com/IivAJXxc9Q6ETvlqQZd3Gt",
    youtube: "https://youtu.be/XKM4X516dsk",
    instagram: "https://www.instagram.com/rawasi.adventures/",
    phone: "[PHONE]",   // e.g. "+14155550123"
    email: "[EMAIL]"    // e.g. "salaam@rawasiadventures.com"
  },

  guides: [
    { name: "Ibrahim Twist", role: "Logistics & Safety", image: "assets/guide-ibrahim.jpg",
      bio: "Route planning, safety and operations. Extensive Sierra Nevada backpacking experience." },
    { name: "Imam Yaseen Mahmoud", role: "Islamic Programming", image: "assets/guide-yaseen.jpg",
      bio: "Leads the morning halaqa before the trail and the evening halaqa at camp." },
    { name: "Luke Frobase", role: "Wilderness Guide & Videographer", image: "assets/guide-luke.jpg",
      bio: "Eagle Scout, Wilderness First Aid certified, 4 years of backcountry guiding." }
  ],

  packing: [
    "Backpacking pack (50–65L)",
    "Tent",
    "Sleeping bag + sleeping pad",
    "Warm layers & rain shell",
    "Hiking boots or trail runners",
    "Headlamp + extra batteries",
    "Water filter & bottles (2–3L)",
    "Sun hat, sunglasses & sunscreen",
    "Toiletries & personal medication",
    "Prayer mat",
    "Qur'an / dhikr book (optional)",
    "Small towel & a change of clothes for the drive home"
  ],

  refund: [
    { when: "30+ days before", refund: "Full refund" },
    { when: "20–29 days before", refund: "50% refund" },
    { when: "14–19 days before", refund: "25% refund" },
    { when: "Within 14 days", refund: "No refund" }
  ],
  refundNote: "Once you book, we commit to permits, shuttle, food, guides and gear based on headcount.",

  faq: [
    { id: "included", q: "What's included?",
      a: "<p>Halaqas with Imam Yaseen Mahmoud, guided wilderness trekking, swimming, backcountry camp permits, all halal meals, and a roundtrip group shuttle from the Bay Area.</p><p>You bring your own backpacking gear — rentals are available.</p>" },
    { id: "leaders", q: "Who's leading the trip?",
      a: "<p><strong>Ibrahim</strong> handles logistics and safety, <strong>Imam Yaseen</strong> leads the Islamic program, and <strong>Luke</strong> is our wilderness guide and videographer.</p>" },
    { id: "shuttle", q: "Where does the shuttle depart?",
      a: "<p>MCC Masjid in the Bay Area. The exact trail destination isn't disclosed publicly — it's part of the experience.</p>" },
    { id: "age", q: "What's the age range?",
      a: "<p>Young adult men, 18 to mid-30s. Outside that range but feel called to this? Reach out — we'd love to hear from you.</p>" },
    { id: "gear", q: "I don't have gear. What do I do?",
      a: "<p>Rent from us:</p><ul class=\"price-list\"><li><span>Sleeping bag + pad</span><span>$48</span></li><li><span>Backpacking tent</span><span>$45</span></li><li><span>Backpacking pack</span><span>$50</span></li></ul><p>Book rentals at least 5 days before the trip. Or buy on Amazon and return after the trip.</p>" },
    { id: "experience", q: "Do I need experience?",
      a: "<p>No — but be in reasonable shape. If you can walk 3–7 miles comfortably, you can do this. The pace is set for the whole group.</p>" },
    { id: "safety", q: "Is it safe?",
      a: "<p>Yes. We stay on established trails, carry a wilderness first aid kit at all times, and plan routes around the group's ability.</p>" },
    { id: "bears", q: "What about black bears?",
      a: "<p>Black bears are naturally timid. All food is stored in bear canisters and our guides follow clear wildlife protocols.</p>" },
    { id: "halal", q: "Is the food halal?",
      a: "<p>Yes — all meals are halal.</p>" },
    { id: "pack", q: "What should I pack?",
      a: "<p>Here's the checklist. Tap to tick items off — it's saved on your phone.</p><div data-packing></div>" },
    { id: "refund", q: "What's the refund policy?",
      a: "<div data-refund></div>" }
  ]
};
