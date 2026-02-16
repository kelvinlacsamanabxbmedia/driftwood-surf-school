import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

const homePageData = {
  title: 'Home',
  slug: 'home',
  layout: [
    {
      blockType: 'hero',
      backgroundImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCPlhamYNcLoblbh5qG2uu2OLr7qFOciiTuoupgDABkYj4cVPUj1ow_jIqoO_K4AGL8zmM4JAlz0iaQ88PIJj0TdUG6bmMlFo5i7Jc9R48WNSHHNgpW2MBEcfom1v6bBwyiU1Ee8bfbnbWju7FrLg_jhc238LwUDTTUYdPG_c4oUkTVSpdVT22Mcf2K64QQJVog300kmsnnB3TS4dhaJGNsKK81GGlmE3cTaTg-p5Dt9Grxl3YuCLv8MDlOQGEf4UxCfL20qUDbJUA',
      badgeText: 'Surf Conditions: Good',
      heading: 'Ride the Tide at',
      headingHighlight: 'Driftwood',
      subheading:
        'Experience the best waves with professional coaching. From first timers to seasoned pros, your wave is waiting.',
      ctaText: 'Book Your Session',
      ctaLink: '#booking',
    },
    {
      blockType: 'ourStory',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC9xaPTQFk3CrzkGXp7Nz3xLTmYYa8-xaDk9vc5JL0Tx-GJNC124zfnaaCBQ_wxndAT4_3JX_nEJOfXQMfzoAXCSe2SE-GoBJuslrmFS3-qjUY8Llev4wLpXO9JwFgj0H5vLSCj9IajJ9mN0XuVqTnuX9Y-Ot4g_xx9i7Un3V3kVjEqCy-ROIiLausRRURFvtV9dvsiLM9rIBbVwa-AbFzZ1Auzd5S7i2bomrpcN_97d5mWaToZVYfdqZ2KFQ6o_YvkTgtO5qeHVD4',
      sinceText: 'Since 1998',
      heading: 'Our Story',
      bodyParagraph1:
        'What started as a single van and a quiver of longboards has grown into the premier surf destination on the coast. At Driftwood, we believe surfing is more than just a sport—it\'s a way to connect with nature and yourself.',
      bodyParagraph2:
        'Founded by local legends who grew up on these very breaks, we\'ve taught thousands of people to stand up on their first wave. Our philosophy remains simple: respect the ocean, have fun, and share the stoke.',
      teamImages: [
        {
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCvZbARYBSIsk_0I6ne83TjwK-RkHApsv__s9dSE0yDLVsqxtABZz151nHmITUJC0RpfC1Uiwc6MG2l89lf0ybQGaYHqtxRkTn8wk3njrIAh5POh2tEsBZsGhKETN0qVpIVwnoY9c6t5xHSFctLYIw7Q9--0Vqt56yqLXE55_PzH_HduOIGSlsKizlxjub4qBgF7LSZk6rOaLke4pjeAnVZofm2hCAUoyFdCH9iiZxgn6TgUi39w9iPC0Crr_inGQxVea1x7U-tbjE',
          alt: 'Team member',
        },
        {
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC07a2vVfgWRkjOB1ztrG2wNmgavXWCkXoDhhqxT6AA6SHC4oF34QPM-7BCtKbF08KGXPnxHHS8vKQjDG4wRCX-GlmJbtb_R3z4orUDViVuZX5JlZRbVBb1xUzmD5_0uComB4ToEJgSlohWdMYHA3qRKgF_-AWvbzPE0Oo1C5FXo8F-rJ7pvIDYymfVJfvmKB7oK3-MFmLLD1eXehuBrkwALKMhc1_shv1-8W7fnFMGgOMk_YvDnFk5wZXMntxU5ymwoc0PsSGia9Q',
          alt: 'Team member',
        },
        {
          imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBAZkZUcjqTqG2_54JuKHHehCCVJtkckkejYFSTUOHw2cbGO3RVCYyfYI90hF2UDXbbXmrVetHDObWD68LS9L1R2MKUqucjIIHzBRnTnLiB8eoEc7dgN8fymG2qbjPih_0CW27c2ud-zu0Heg8Hm6g4BTFdJu_ghlDd3u3WrpciNF5oxM62vlxq8RipbA2Wj91mVmgN0SHWli-urv4o7wRL0KgspwRAfL4KqtHk5GARrRy7jDgb2QbxMi7SAEFbeY2tXTPKJN44FBg',
          alt: 'Team member',
        },
      ],
      teamLabel: 'Meet the locals',
    },
    {
      blockType: 'lessonCards',
      heading: 'Choose Your Lesson',
      subtitle: 'Professional coaching for every skill level.',
      lessons: [
        {
          title: 'Group Lesson',
          price: 75,
          priceUnit: '/ session',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuA_UbRgHpaIni03GGIOATcO1iPHuHQ1R-KLgtzqKtHuQJZHekF0lNiyCfZDjeCp4DBpZhjZ70ZcQr-krIsA0AhwUK37u2XUzR1oZlzfc4O-V9emjXjEJ4nbVo5zVd0rRBs1JCxwsr_OWw31_udsLN7MBtzeRDk49WQ7o9SG5PbuPSAZLDZYbyCLMby8D8_WIlIxrWSytdLaAQylyPOJwW-5h-nsjgzz73icXwcLBRxXXW-HEIAs89NCQqVm_pnCuRVO8GaQSW-OARw',
          badge: 'Best Value',
          isRecommended: false,
          features: [
            { feature: 'Fun with friends' },
            { feature: 'Includes board rental' },
            { feature: '90 minutes' },
          ],
        },
        {
          title: 'Private Lesson',
          price: 120,
          priceUnit: '/ session',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDWjSWO_vnXreknYLZIBnao6dbD2OW-FZce10JK7U8ypgcXJ4TkpMXcTE1-Na2vx5wHuUQLLvHInsedwFTRA8rQ3-_yRA7fQ4zYwsv32vnRAxVop8fV-UTiKWCOBAe17Q_-KuATuX97-imHfnIK-MiCZobo1d6ot5yvWdWBd5W8_MRzr5WVjBQchd6Ii0zIU0_-oNkehD2Z9WreJ6SGplQkP87ITbYpRvKYCWK1Ic_wS6Qn2pdfBUTDu3pVb1emfRvOu9oNkVkyKAk',
          badge: null,
          isRecommended: true,
          features: [
            { feature: '1-on-1 coaching' },
            { feature: 'Video analysis' },
            { feature: 'Flexible scheduling' },
          ],
        },
        {
          title: 'Surf Camp',
          price: 550,
          priceUnit: '/ week',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDW5up6GjmUTcmxFsKpVqOXECVPHZaT8kiOlu1qsMFdfw7T9YoFj43_Lxw1neqcODPL9CAn2dpgEuDFRA-1pQh3vAhiIrKZPjpHq6PtTLifTJhQOWkzZqza64417ThL7UkYgLUyeO6scrc5SDXZBN40WMu0eDSui4gWhTwrhIbzAB4ngotulYacScVlj7hb4VIQaJXHmdePoShjo0jxqPdd1NYODaAWLK-GajHI8BkUQV6QL8xn4RvvO1qH3RiYChax7kT1OF1tzZY',
          badge: null,
          isRecommended: false,
          features: [
            { feature: '5-day intensive' },
            { feature: 'Accommodation included' },
            { feature: 'Daily video review' },
          ],
        },
      ],
    },
    {
      blockType: 'liveConditions',
      conditions: [
        {
          label: 'Swell',
          value: '3-4',
          unit: 'ft',
          icon: 'tsunami',
          description: 'Clean conditions',
          colorScheme: 'blue',
        },
        {
          label: 'Water',
          value: '68',
          unit: '°F',
          icon: 'device_thermostat',
          description: '3/2 wetsuit req.',
          colorScheme: 'orange',
        },
        {
          label: 'Wind',
          value: '8',
          unit: 'mph',
          icon: 'air',
          description: 'Offshore NW',
          colorScheme: 'slate',
        },
        {
          label: 'UV Index',
          value: 'High',
          unit: null,
          icon: 'light_mode',
          description: 'Sunscreen essential',
          colorScheme: 'yellow',
        },
      ],
      optimalTime: '7am - 10am',
      lowTideTime: '8:15 AM',
      lowTideHeight: '0.4ft',
      highTideTime: '2:45 PM',
      highTideHeight: '4.8ft',
    },
    {
      blockType: 'instructorGrid',
      heading: 'Meet the Crew',
      instructors: [
        {
          name: 'Kai',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCvZbARYBSIsk_0I6ne83TjwK-RkHApsv__s9dSE0yDLVsqxtABZz151nHmITUJC0RpfC1Uiwc6MG2l89lf0ybQGaYHqtxRkTn8wk3njrIAh5POh2tEsBZsGhKETN0qVpIVwnoY9c6t5xHSFctLYIw7Q9--0Vqt56yqLXE55_PzH_HduOIGSlsKizlxjub4qBgF7LSZk6rOaLke4pjeAnVZofm2hCAUoyFdCH9iiZxgn6TgUi39w9iPC0Crr_inGQxVea1x7U-tbjE',
          experience: '12 Years Surfing',
          quote: 'I make the best tacos on the beach.',
        },
        {
          name: 'Sarah',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBCGGi2z59XmoDerLq0tiMzBZKOmI5aYVZHfMdunfUEhQdEw0dhPupwhBliLucnJTV3waREDKJ9uq51KOVRgDRAdPQ7rT4qcpHLqpMDDdvfXW3pjmcf4zjUpjiqKk2fUtunyq_MAybFmvTA12Cz2aaguvwhNjJyYldkkvmKXD6akWCwGA4LxWt-739QamXkk8k6YYlpuJfWY7rshqAA8JUWg0fmq9HxTAfkSDTvDNXf18Es0A2NVoCnoz0NuM-2uaVG3MeY0JVhaxQ',
          experience: '8 Years Surfing',
          quote: 'Former pro skateborder.',
        },
        {
          name: 'Mike',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC07a2vVfgWRkjOB1ztrG2wNmgavXWCkXoDhhqxT6AA6SHC4oF34QPM-7BCtKbF08KGXPnxHHS8vKQjDG4wRCX-GlmJbtb_R3z4orUDViVuZX5JlZRbVBb1xUzmD5_0uComB4ToEJgSlohWdMYHA3qRKgF_-AWvbzPE0Oo1C5FXo8F-rJ7pvIDYymfVJfvmKB7oK3-MFmLLD1eXehuBrkwALKMhc1_shv1-8W7fnFMGgOMk_YvDnFk5wZXMntxU5ymwoc0PsSGia9Q',
          experience: '15 Years Surfing',
          quote: 'Can hold breath for 4 mins.',
        },
        {
          name: 'Jessica',
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBAZkZUcjqTqG2_54JuKHHehCCVJtkckkejYFSTUOHw2cbGO3RVCYyfYI90hF2UDXbbXmrVetHDObWD68LS9L1R2MKUqucjIIHzBRnTnLiB8eoEc7dgN8fymG2qbjPih_0CW27c2ud-zu0Heg8Hm6g4BTFdJu_ghlDd3u3WrpciNF5oxM62vlxq8RipbA2Wj91mVmgN0SHWli-urv4o7wRL0KgspwRAfL4KqtHk5GARrRy7jDgb2QbxMi7SAEFbeY2tXTPKJN44FBg',
          experience: '6 Years Surfing',
          quote: 'Loves sunrise sessions.',
        },
      ],
    },
    {
      blockType: 'faq',
      heading: 'Common Questions',
      subtitle: 'Everything you need to know before you hit the water.',
      questions: [
        {
          question: 'Do I need my own wetsuit?',
          answer:
            'No, we provide high-quality wetsuits and surfboards for all our lessons. If you have your own gear that you prefer, feel free to bring it along!',
          icon: 'checkroom',
          iconColor: 'primary',
        },
        {
          question: 'What if it rains?',
          answer:
            'Surfing is a water sport, so we get wet anyway! We run lessons rain or shine, as long as conditions are safe. Rainy days often mean less crowded waves.',
          icon: 'rainy',
          iconColor: 'blue',
        },
        {
          question: 'Is there a minimum age?',
          answer:
            'For group lessons, the minimum age is 12. For private lessons, we can accommodate children as young as 6, provided they are comfortable in the water.',
          icon: 'child_care',
          iconColor: 'orange',
        },
        {
          question: 'Cancellation policy?',
          answer:
            'We understand plans change. Full refunds are available for cancellations made at least 24 hours before your scheduled session.',
          icon: 'event_busy',
          iconColor: 'red',
        },
      ],
    },
    {
      blockType: 'bookingForm',
      backgroundImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDW5up6GjmUTcmxFsKpVqOXECVPHZaT8kiOlu1qsMFdfw7T9YoFj43_Lxw1neqcODPL9CAn2dpgEuDFRA-1pQh3vAhiIrKZPjpHq6PtTLifTJhQOWkzZqza64417ThL7UkYgLUyeO6scrc5SDXZBN40WMu0eDSui4gWhTwrhIbzAB4ngotulYacScVlj7hb4VIQaJXHmdePoShjo0jxqPdd1NYODaAWLK-GajHI8BkUQV6QL8xn4RvvO1qH3RiYChax7kT1OF1tzZY',
      heading: 'Start Your Adventure',
      subtitle: 'The ocean is calling. Answer it with Driftwood.',
      formHeading: 'Secure Your Spot',
      formSubtitle: 'Fill out the details below to book your wave.',
      lessonOptions: [
        { label: 'Group', price: '$75' },
        { label: 'Private', price: '$120' },
        { label: 'Camp', price: '$550' },
      ],
      submitText: 'Confirm Booking',
      disclaimer: 'No payment required until confirmation.',
    },
  ],
}

async function seed() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('Seeding home page...')

  // Check if home page already exists
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log('Home page already exists. Updating...')
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: homePageData,
    })
    console.log('Home page updated successfully!')
  } else {
    await payload.create({
      collection: 'pages',
      data: homePageData,
    })
    console.log('Home page created successfully!')
  }

  process.exit(0)
}

seed().catch((err) => {
  console.error('Error seeding:', err)
  process.exit(1)
})
