export const brand = {
  name: 'IronCore Fitness',
  tagline: 'Train Harder. Live Stronger.',
  city: 'Austin, TX',
}

export const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  headline: 'Transform Your Body, Transform Your Life',
  subheadline:
    'Elite coaching, science-backed programming, and a community that shows up for you—every rep, every session, every goal.',
  primaryCta: { label: 'Join Now', href: '#membership' },
  secondaryCta: { label: 'Book Free Trial', href: '#contact' },
  posterImage:
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80',
  videoSrc:
    'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
}

export const programs = [
  {
    title: 'Weight Training',
    description:
      'Progressive overload systems, compound lifts, and accessory work tailored to your level—from first barbell to competition prep.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Personal Training',
    description:
      '1:1 sessions built around your schedule, movement quality, and goals. Accountability that actually shows up on the gym floor.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fat Loss Programs',
    description:
      'Sustainable fat loss with structured training, habit coaching, and nutrition guidance—no crash diets, no guesswork.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Strength & Conditioning',
    description:
      'Power, speed, and work capacity for athletes and weekend warriors. Periodized blocks that peak when you need to perform.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cardio Training',
    description:
      'Zone-based conditioning, sled work, and bike intervals engineered to build an engine without burning you out.',
    image:
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=900&q=80',
  },
] as const

export const transformations = [
  {
    name: 'Jordan M.',
    story:
      'Lost 38 lbs in 6 months while gaining strength on squat and deadlift. The coaches rewired my relationship with food and training.',
    before:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1597347316205-36f6c451902a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Alex R.',
    story:
      'Went from desk-bound to completing a hybrid event. IronCore’s S&C block built durability I didn’t think was possible at 41.',
    before:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sam K.',
    story:
      'Postpartum return-to-training felt overwhelming until I met the team here. Safe progressions, clear plan, real confidence.',
    before:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
  },
] as const

export const membershipPlans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '₹3,499',
    cadence: '/ month',
    blurb: 'Flexible month-to-month access for busy schedules.',
    features: ['Full floor access', 'Locker + towel service', 'App-based workout logs'],
    popular: false,
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: '₹8,899',
    cadence: '/ 3 months',
    blurb: 'Best value for members building a consistent habit.',
    features: [
      'Everything in Monthly',
      '1 complimentary PT session / quarter',
      'Guest pass (2 / month)',
      'Priority class booking',
    ],
    popular: true,
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '₹30,999',
    cadence: '/ year',
    blurb: 'Commit to the long game and save nearly 25% versus twelve monthly renewals.',
    features: [
      'Everything in Quarterly',
      'Quarterly InBody scan',
      'IronCore tee + shaker',
      'Freeze up to 30 days / year',
    ],
    popular: false,
  },
] as const

export const trainers = [
  {
    name: 'Maya Collins',
    role: 'Head Coach — Performance',
    years: '12+ years',
    specialties: ['Olympic lifting', 'Athlete prep', 'Mobility'],
    bio: 'Former collegiate sprinter; USAW Level 2. Obsessed with technical excellence under load.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Daniel Ortiz',
    role: 'Strength & Fat Loss',
    years: '9 years',
    specialties: ['Body recomposition', 'Nutrition habits', 'Hypertrophy'],
    bio: 'Builds plans you can execute on a real schedule—no six-hour gym days required.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Priya Nair',
    role: 'Conditioning & HIIT Lead',
    years: '7 years',
    specialties: ['Metabolic conditioning', 'Running mechanics', 'Small group'],
    bio: 'Makes the engine bigger without beating up your joints—smart volume, clear intent.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Chris Vaughn',
    role: 'Rehab & Return-to-Training',
    years: '10 years',
    specialties: ['Pain-free progressions', 'Shoulder health', 'Master athletes'],
    bio: 'PT-informed coaching that bridges clinic work with serious training.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
  },
] as const

export const whyUs = [
  {
    title: 'Modern Equipment',
    description:
      'Rogue racks, calibrated plates, turf sprint lane, and conditioning tools maintained like a pro facility.',
  },
  {
    title: 'Certified Trainers',
    description:
      'NSCA, NASM, USAW, and PN credentials on staff—continuing education is non-negotiable here.',
  },
  {
    title: 'Flexible Timings',
    description:
      '5am openers, lunch-hour slots, and late sessions until 10pm weekdays. Your program fits life, not the other way around.',
  },
  {
    title: 'Diet Guidance',
    description:
      'Practical nutrition coaching: protein targets, meal templates, and weekly check-ins that complement your training.',
  },
] as const

export const testimonials = [
  {
    quote:
      'I’ve trained at five gyms in Austin—IronCore is the first where programming, culture, and coaching all line up.',
    name: 'Taylor Brooks',
    context: 'Member since 2023',
  },
  {
    quote:
      'They met me where I was post-injury. Six months later I’m pulling conventional again and feeling bulletproof.',
    name: 'Riley Chen',
    context: 'Personal training client',
  },
  {
    quote:
      'The floor is respectful, focused, and motivating. No egos—just people putting in work.',
    name: 'Casey Jordan',
    context: 'Quarterly member',
  },
  {
    quote:
      'Night-shift friendly hours saved my consistency. Coaches actually remember your goals.',
    name: 'Morgan Ellis',
    context: 'Night crew regular',
  },
  {
    quote:
      'My first week trial turned into a yearly membership. The energy here is addictive—in the best way.',
    name: 'Jamie Alvarez',
    context: 'Yearly member',
  },
] as const

export const ctaBand = {
  title: 'Start Your Fitness Journey Today',
  subtitle: 'Book a complimentary trial session or lock in membership—your first workout is on us.',
  primary: { label: 'Book Free Trial', href: '#contact' },
  secondary: { label: 'View Membership', href: '#membership' },
}

export const contact = {
  addressLine1: '248 Industrial Blvd',
  addressLine2: 'Austin, TX 78745',
  phoneDisplay: '(512) 555-0148',
  phoneHref: 'tel:+15125550148',
  email: 'hello@ironcorefitness.test',
  hours: 'Mon–Fri 5:00am – 10:00pm · Sat–Sun 7:00am – 8:00pm',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=248+Industrial+Blvd+Austin+TX+78745&t=&z=14&ie=UTF8&iwloc=&output=embed',
}

export const footer = {
  disclaimer:
    'Individual results vary based on effort, adherence, and starting point. Images shown are illustrative member stories.',
  copyrightYear: 2026,
}
