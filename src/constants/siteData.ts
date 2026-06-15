export const companyData = {
  name: "Envision Eye Clinic",
  shortName: "Envision",
  location: "Aundh, Pune",
  fullAddress: "2nd Floor, Shivraj Apartments, near Parihar Chowk, Aundh, Pune, Maharashtra 411007",
  doctorName: "Dr. Vaishalli Sathe",
  doctorCredentials: "MBBS, DNB, Pediatric Ophthalmologist & Squint Surgeon, A.E.H., M.E.H. London",
  email: "drvaishalisathe@gmail.com",
  phone: "+91 92722 22256",
  phoneRaw: "+919272222256",
  whatsapp: "https://wa.me/919272222256",
  maps: "https://www.google.com/maps/place/Envision+Eye+Clinic+Cataract+and+LASIK+Surgery+Center/@18.5603887,73.8076555,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2522c46783:0xed3da2e96d85b17!8m2!3d18.5603887!4d73.8076555!16s%2Fg%2F1td1sx4_?entry=ttu",
  instagram: "https://www.instagram.com/envisioneyeclinicpune/",
  googleReviews: "https://search.google.com/local/reviews?placeid=ChIJg2fEIiW_wjsRF1vYli7a0w4"
};

export const heroContent = {
  badge: "Premium Eye Care Center",
  title: "Clear Vision in 30 Minutes.",
  subtitle: "Walk In, Walk Out, See Life Again.",
  description: "Modern cataract surgery with Dr. Vaishalli Sathe — 5,000+ happy patients, personalised lens options, and no hospital stay.",
  stats: [
    "5,000+ Surgeries",
    "30-Min Procedure",
    "Home Same Day",
    "Glasses-Free Options",
  ],
  formHeader: "Let’s get your eyes checked.",
  formButton: "Request My Appointment",
  reassurance: "We’ll call you within 30 minutes to confirm. Your details stay private.",
};

export const formOptions = {
  preferredTime: ["Morning (9am–12pm)", "Afternoon", "Evening"],
  concerns: ["Blurry vision", "Diagnosed cataract", "Second opinion", "Other"],
};

export const iolLenses = [
  {
    name: "Monofocal IOL",
    desc: "Clear, sharp distance vision — the most widely used lens after cataract surgery.",
  },
  {
    name: "Multifocal IOL",
    desc: "See near and far without glasses, ideal for an active, glasses-free lifestyle.",
  },
  {
    name: "Toric IOL",
    desc: "Corrects astigmatism along with cataract for crisp, distortion-free vision.",
  },
  {
    name: "EDOF IOL",
    desc: "Extended Depth of Focus lens for a continuous, seamless range of vision.",
  },
];

export const treatmentComparison = {
  title: "Choose the Vision You Want",
  subtitle: "The lens you choose shapes the rest of your life. Want to put your glasses away for good? There’s a lens for that. Happy using readers? That works too. Here’s the honest, side-by-side comparison — no pressure, no up-sell.",
  doctorNote: "The ‘best’ lens is the one that matches your eyes, your prescription, and how you live your life. We do a detailed evaluation before recommending anything — and we will always explain why.",
  rows: [
    {
      feature: "Distance vision",
      mono: "Excellent",
      toric: "Excellent",
      enhancedMono: "Excellent",
      trifocal: "Excellent",
      positive: [0, 1, 2, 3],
    },
    {
      feature: "Reading (near)",
      mono: "Needs glasses",
      toric: "Needs glasses",
      enhancedMono: "Needs glasses",
      trifocal: "Clear",
      positive: [3],
    },
    {
      feature: "Computer (intermediate)",
      mono: "Limited",
      toric: "Limited",
      enhancedMono: "Clear",
      trifocal: "Clear",
      positive: [2, 3],
    },
    {
      feature: "Corrects astigmatism",
      mono: "No",
      toric: "Yes",
      enhancedMono: "In toric variants",
      trifocal: "~ Varies",
      positive: [1],
    },
    {
      feature: "Glasses needed after surgery",
      mono: "Usually needed",
      toric: "Reduced need",
      enhancedMono: "Reduced dependancy",
      trifocal: "Rarely needed",
      positive: [3],
    },
    {
      feature: "Night vision / halos",
      mono: "Minimal risk",
      toric: "Minimal risk",
      enhancedMono: "Minimal risk",
      trifocal: "~ Brief adjustment",
      positive: [0, 1, 2],
    },
    {
      feature: "Insurance / cost",
      mono: "Usually covered",
      toric: "~ Partial coverage",
      enhancedMono: "Usually covered",
      trifocal: "Premium",
      positive: [0, 2],
    },
    {
      feature: "Best for",
      mono: "Budget-conscious; happy to wear glasses",
      toric: "Patients with astigmatism",
      enhancedMono: "Who want less dependency on glasses",
      trifocal: "Spectacle-free living",
      positive: [3],
    },
    {
      feature: "Typical starting cost (per eye)",
      mono: "₹25,000 – ₹42,000",
      toric: "₹42,000 – ₹55,000",
      enhancedMono: "₹50,000 – ₹70,000",
      trifocal: "₹55,000 – ₹1,15,000",
      positive: [],
    },
  ],
};

export const procedureData = {
  title: "Modern Cataract Surgery — Simpler Than You Think",
  subtitle: "Today’s cataract surgery is nothing like it used to be. No stitches. No overnight stay. No eye patch for weeks. In 30 minutes it’s done — and most patients are seeing clearly by the very next morning.",
  whatIsSection: {
    title: "What Is a Cataract?",
    description: "Imagine looking through a window that’s been slowly fogging up for years. That’s what a cataract feels like — the natural lens inside your eye has turned cloudy, so light struggles to get through.",
    conclusion: "It’s the world’s leading cause of reversible blindness — and the good news is, it’s 100% treatable. We gently remove the cloudy lens and replace it with a crystal-clear artificial one, hand-picked to match the life you want to live.",
  },
  dayOfSection: {
    title: "What Happens on the Day",
    steps: [
      {
        step: "Relax",
        desc: "Numbing drops are placed — you won’t feel pain, only gentle pressure at most.",
      },
      {
        step: "Micro-Incision",
        desc: "Using phacoemulsification, we dissolve and remove the cloudy lens through a tiny, stitch-free incision.",
      },
      {
        step: "New Lens",
        desc: "Your new, clear lens (IOL) is gently placed inside — chosen specifically for your eye and lifestyle.",
      },
      {
        step: "Walk Out",
        desc: "You walk out, no bandage, no overnight stay. Most patients see clearly by tomorrow morning.",
      },
    ],
  },
  recovery: [
    "30-minute procedure",
    "Home the same day",
    "Clear vision next day",
  ],
  highlights: [
    "No stitches.",
    "No overnight stay.",
    "No eye patch for weeks.",
    "In 30 minutes it's done",
  ],
};

export const symptomsData = {
  title: "Is Cataract Quietly Stealing Your Vision?",
  subtitle: "Cataracts sneak up slowly — so slowly that many people adjust to blurry vision without realising it can be fixed. If any of these feel familiar, it’s time for a check-up.",
  items: [
    {
      title: "Blurry or Hazy Vision",
      description: "Even your new glasses can’t make the world feel crisp anymore.",
    },
    {
      title: "Glare & Halos at Night",
      description: "Streetlights and oncoming headlights dazzle you. Driving at night feels unsafe.",
    },
    {
      title: "Prescription Keeps Changing",
      description: "You’re updating your glasses every few months — and still squinting.",
    },
    {
      title: "Trouble Reading Fine Print",
      description: "Medicine labels, phone screens, the morning paper — all a strain.",
    },
    {
      title: "Faded or Washed-Out Colours",
      description: "Flowers, food, faces — everything looks duller than it used to.",
    },
    {
      title: "Double Vision in One Eye",
      description: "You notice ghosting or shadows where there should be one clear image.",
    },
  ],
  cta: "Not sure? Ask the Doctor on WhatsApp.",
};

export const whyEnvisionData = {
  title: "Why Families Across Pune Choose Envision",
  subtitle: "Advanced technology matters. But so does being treated like a person, not a procedure. Here’s what makes Envision different.",
  items: [
    {
      num: "01",
      title: "Latest Technology, Gentle Touch",
      desc: "No Injection > No Pain > No Stitches — Faster healing, less discomfort, sharper results.",
    },
    {
      num: "02",
      title: "The Right Lens for Your Life",
      desc: "Monofocal, toric, or premium trifocal — honest guidance on what suits your eyes and lifestyle.",
    },
    {
      num: "03",
      title: "Trained at World Renowned Institutes",
      desc: "Dr. Vaishalli brings global best practices and expertise to your neighbourhood clinic.",
    },
    {
      num: "04",
      title: "Precise Measurements, Predictable Results",
      desc: "Advanced biometry means your new lens corrects your vision accurately — less surprise, more clarity.",
    },
    {
      num: "05",
      title: "Home by Lunchtime",
      desc: "No hospital stay, no bandages / eye-patch. Walk in, walk out, see clearly tomorrow.",
    },
    {
      num: "06",
      title: "We Don’t Disappear After Surgery",
      desc: "Personal WhatsApp support for any post-op worry. Structured follow-ups. We’re in it with you.",
    },
  ],
};

export const doctorData = {
  title: "Meet Dr. Vaishalli Sathe",
  description: "Every eye is different. Every life is different. That’s why Dr. Vaishalli doesn’t just perform cataract surgery — she listens first, plans carefully, and chooses the lens that fits how you actually live. Fellowship-trained at Moorfields Eye Hospital, London, she brings world-class expertise to warm, personalised care right here in Aundh.",
  credentials: [
    "MBBS + DNB (Ophthalmology)",
    "Dr Vaishalli Sathe got trained in LASIK/SMILE Surgery under a renowned LASIK Surgeon who is a pioneer of SMILE SURGERY in India",
    "Fellowship In Pediatric Ophthalmology and Squint Surgery",
    "So trusted with children’s eyes too",
    "Expert in Premium IOL selection & personalized cataract planning",
  ],
  stats: [
    { value: "5,000+", label: "Surgeries Performed" },
    { value: "18+", label: "Years of Experience" },
    { value: "Trained at Renowned", label: "Institutes in India and London" },
  ],
  credentialsBadges: [
    "Trained at renowned Institutes",
    "India",
    "London",
  ],
  specializationBadges: [
    { icon: "Eye", label: "LASIK" },
    { icon: "Eye", label: "Advanced Cataract Surgery" },
    { icon: "Heart", label: "Personalised Eye Care" },
  ],
  highlights: [
    "Trained at renowned Institutes in India and London,",
    "advanced cataract surgery, LASIK, & personalised eye care.",
  ],
};

export const faqsData = {
  title: "Your Questions, Answered Honestly",
  subtitle: "The things patients and their families actually ask — answered the way our surgeons would in clinic.",
  items: [
    {
      q: "When is the right time for cataract surgery?",
      a: "The old idea that you must wait until the cataract is ‘ripe’ is outdated. If blurry vision is getting in the way of driving, reading, watching TV, or simply enjoying your day — it’s time. In fact, earlier treatment often means a smoother procedure and faster recovery.",
    },
    {
      q: "Will it hurt?",
      a: "No. Numbing drops are placed before we begin, so you won’t feel pain — only mild pressure at most. You’ll be awake, comfortable, and it’s over in 20–30 minutes.",
    },
    {
      q: "What does it actually cost?",
      a: "It depends entirely on the lens you choose, which depends on how you live. Standard monofocal lenses start at ₹25,000 per eye. Premium trifocal lenses (for complete glasses-free living) can go up to ₹1,20,000 per eye. We share a full estimate at your consultation — no hidden charges, no surprises.",
    },
    {
      q: "Will I still need glasses after surgery?",
      a: "With a monofocal lens, you’ll likely still need reading glasses. With a trifocal or multifocal lens, most patients put their glasses away entirely. The surgeon will help you pick what fits your life best.",
    },
    {
      q: "How soon will I be back to normal?",
      a: "Most patients notice clearer vision within 24 hours. You can resume light activities — reading, watching TV, gentle work — the very next day. Avoid swimming, heavy lifting, or rubbing your eye for 2–4 weeks.",
    },
    {
      q: "Can both eyes be done on the same day?",
      a: "We prefer to do them about a week apart. This lets the first eye settle before we operate on the second — it’s safer, smoother, and the approach surgeons trust.",
    },
    {
      q: "Is it safe for elderly parents? My father is 78.",
      a: "Absolutely. Cataract surgery is one of the safest procedures in modern medicine, and age is not a barrier — many of our patients are in their 70s and 80s. The surgeon checks overall eye and general health first to ensure everything goes smoothly.",
    },
    {
      q: "Can a cataract come back after surgery?",
      a: "No. Once the cloudy lens has been removed, it cannot return. Occasionally the thin membrane behind the new lens becomes slightly hazy years later — a simple 5-minute laser visit (called YAG capsulotomy) clears it permanently.",
    },
    {
      q: "Do you speak Marathi / Hindi?",
      a: "Yes — The entire Envision team speaks Marathi, Hindi and English.",
    },
  ],
};

export const footerContent = {
  title: "Your Clear Vision Is One Call Away",
  description: "Don’t let another year pass in fog, glare and frustration. Book a consultation with Envision today — and take the first simple step toward seeing the people and places you love, clearly again.",
  primaryButtons: {
    whatsapp: "WhatsApp Us Now",
    call: "Call the Clinic",
  },
  socialLinks: {
    instagram: "Follow on Instagram",
    maps: "Find Us on Google Maps",
    reviews: "Read Google Reviews",
  },
};

export const testimonialsData = {
  title: "Trusted by 5,000+ Patients Across Pune",
  subtitle: "Real stories from real people who can now read, drive, and see their grandchildren’s faces clearly again.",
  googleRating: {
    label: "Google Rating",
    score: "4.9 / 5.0",
    location: "Envision Eye Clinic, Aundh, Pune",
  },
  items: [
    {
      name: "Geet Kelkar",
      tag: "SMILE LASIK  ·  Google Review",
      quote: "I was so nervous about the procedure, but Dr. Vaishalli guided me through every step — from the first consultation to post-op care. Within a week my vision was fully restored. Calm, skilled, and genuinely kind.",
    },
    {
      name: "Ramesh Deshpande",
      tag: "Cataract Surgery  ·  Patient (age 68)",
      quote: "After 20 years of thicker and thicker glasses, I can finally read the newspaper without them. The surgery itself was over before I realised it had started. I was home for lunch the same day.",
    },
    {
      name: "Priya Kulkarni",
      tag: "Cataract (Trifocal)  ·  Patient’s daughter",
      quote: "My mother is 72. We chose the trifocal lens on Dr. Vaishalli’s advice and she no longer needs glasses at all — distance, reading, phone. She keeps saying ‘I wish I’d done this five years ago.’",
    },
    {
      name: "Madhura Pohekar",
      tag: "Cataract Surgery  ·  Patient's daughter",
      quote: "We've been visiting Dr. Vaishali Sathe for over 5 years now, and every single experience has been nothing short of outstanding. Recently, Dr. Sathe performed cataract surgery on my mother, and I am thrilled to share just how excellent the entire process was from start to finish.\n\nDr. Vaishali Sathe is a highly skilled and compassionate eye surgeon, and her expertise truly shines through. She took the time to thoroughly explain the procedure, answer all our questions, and ensure that my mom felt comfortable and at ease throughout the entire process. The surgery itself was flawless, and my mom's recovery has been smooth. Her vision has improved dramatically, and we couldn't be more grateful for the wonderful results.\n\nWhat makes this experience even more special is the incredible team that surrounds Dr. Sathe. Mangal, the receptionist, always greets us with a smile and handles all scheduling and inquiries with great efficiency. Her professionalism and warmth create an incredibly welcoming and reassuring environment.",
    },
    {
      name: "Neha Kamat",
      tag: "Cataract Surgery  ·  Google Review",
      quote: "Both my parents underwent cataract surgery with Dr. Vaishali Sathe and the results are life-changing. From the initial consultation, the doctor took the time to explain the different lens options and what to expect during recovery. The procedure itself was quick and painless. The entire team at Envision clinic was professional and made the insurance process seamless. Highly recommend the doctor and all the services.",
    },
    {
      name: "Anup Latnekar",
      tag: "Cataract Surgery  ·  Google Review",
      quote: "We first visited Dr. Vaishali Sathe to get my mother's eyes checked for cataract two years ago.\n\nDr. Sathe's diagnosis was accurate at each developmental stage of glaucoma leading to two highly successful cataract surgeries at the right time in each eye. The OPD in Aundh is on par with clinics in countries like US, UK etc. with state of the art equipment used for diagnosis and same goes for surgery OT.\n\nIt is a privilege as the doctor personally attends to patients' pre, and post surgery care, providing clear instructions herself without delegating certain tasks to staff. We observed this was not just for us but a uniform practice for all patients treated equally, genuinely and with respect.\n\nThe staff also is very well trained and professional. Both surgeries were performed very skillfully with no pain to my mother (being 86) or any complications during or after surgery. Both surgeries were managed very efficiently with a great deal of effort on Dr. Sathe's part.\n\nDr. Sathe's approach towards her patients is friendly, caring yet professional. We experienced her practice to be highly trustworthy, ethical and values based which is rare in today's medical arena.\n\nWe highly recommend Dr. Vaishali Sathe to anyone requiring eye care or cataract for consultation for an unmatched eye treatment and care in Pune. Thank you Envision for gifting my mother a new vision!",
    },
  ],
};
