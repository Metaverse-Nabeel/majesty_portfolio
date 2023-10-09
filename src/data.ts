interface Data {
  id: number;
  title: string;
  image: string;
  desc: string;
  category: string;
}

interface Skill {
  id: number;
  label: string;
  value: number;
}
interface Package {
  id: number;
  title: string;
  label: string;
  category: string;
  capacity: string;
  support: string;
  price: number;
  color: string;
}

export const Data: Data[] = [
  {
    id: 101,
    title: "Abstract Design",
    image: "/images/p1.jpg",
    desc: "Explore the mesmerizing world of abstract design. This vibrant creation harmonizes colors and patterns, offering a visual symphony that sparks creativity and captivates the imagination.",
    category: "design",
  },
  {
    id: 102,
    title: "Landscape Photo",
    image: "/images/p2.jpg",
    desc: "Immerse yourself in the breathtaking beauty of nature with this captivating landscape photo. Majestic vistas and serene surroundings create a scene that beckons exploration and contemplation.",
    category: "photos",
  },
  {
    id: 103,
    title: "Portrait Art",
    image: "/images/p5.jpg",
    desc: "Embark on a journey of emotion and expression with this unique portrait art. Each brushstroke captures the essence of the subject, revealing layers of personality and depth.",
    category: "art",
  },
  {
    id: 104,
    title: "Geometric Design",
    image: "/images/p4.jpg",
    desc: "Delve into the world of precision and symmetry with this captivating geometric design. Intricate shapes and patterns converge to create a visually stunning masterpiece.",
    category: "design",
  },
  {
    id: 105,
    title: "Nature Photo",
    image: "/images/p3.jpg",
    desc: "Capture the essence of the great outdoors with this enchanting nature photo. From lush forests to cascading waterfalls, nature's beauty unfolds in every pixel.",
    category: "photos",
  },
  {
    id: 106,
    title: "Surreal Art",
    image: "/images/p6.jpg",
    desc: "Immerse yourself in a dreamscape of surreal art. Reality bends and twists in this captivating piece, inviting you to explore the boundaries of imagination.",
    category: "art",
  },
  {
    id: 107,
    title: "Pattern Design 1",
    image: "/images/p6.jpg",
    desc: "Embark on a visual journey with this captivating pattern design. Intricate details and harmonious repetition create a mesmerizing visual experience.",
    category: "design",
  },
  {
    id: 108,
    title: "Cityscape Photo 1",
    image: "/images/p6.jpg",
    desc: "Witness the pulse of urban life with this dynamic cityscape photo. Skyscrapers touch the sky, and city lights paint a vivid picture of modernity.",
    category: "photos",
  },
  {
    id: 109,
    title: "Modern Art 1",
    image: "/images/p6.jpg",
    desc: "Experience the avant-garde with this captivating modern art piece. A fusion of bold concepts and cutting-edge techniques creates a visual feast for the contemporary soul.",
    category: "art",
  },
  {
    id: 110,
    title: "Wave Design 1",
    image: "/images/p6.jpg",
    desc: "Ride the waves of creativity with this mesmerizing wave design. Fluid lines and dynamic curves converge, creating a sense of motion and artistic energy.",
    category: "design",
  },
  {
    id: 111,
    title: "Wildlife Photo",
    image: "/images/p6.jpg",
    desc: "Embark on a visual safari with this stunning wildlife photo. Each frame captures the untamed beauty of the animal kingdom in its natural habitat.",
    category: "photos",
  },
  {
    id: 112,
    title: "Abstract Art",
    image: "/images/p6.jpg",
    desc: "Dive into the abstract world with this expressive piece of art. Colors dance and forms collide, inviting you to interpret the meaning behind every brushstroke.",
    category: "art",
  },
  {
    id: 113,
    title: "Tech Design",
    image: "/images/p6.jpg",
    desc: "Merge technology and design seamlessly with this captivating tech design. Futuristic elements and sleek aesthetics converge in a visual representation of innovation.",
    category: "design",
  },
  {
    id: 114,
    title: "Night Sky Photo",
    image: "/images/p6.jpg",
    desc: "Gaze at the stars with this mesmerizing night sky photo. Each twinkle in the cosmic canvas tells a story of the vast and awe-inspiring universe.",
    category: "photos",
  },
  {
    id: 115,
    title: "Classical Art",
    image: "/images/p6.jpg",
    desc: "Pay homage to the classics with this timeless piece of art. Rich in tradition and artistic heritage, it invites contemplation and appreciation of the masters.",
    category: "art",
  },
  {
    id: 116,
    title: "Mosaic Design",
    image: "/images/p6.jpg",
    desc: "Embark on a visual odyssey with this intricate mosaic design. Each piece tells a story, creating a rich tapestry of color, form, and cultural expression.",
    category: "design",
  },
  {
    id: 117,
    title: "Travel Photo",
    image: "/images/p6.jpg",
    desc: "Journey across continents with this captivating travel photo. Each frame captures the essence of exploration, inviting you to experience the beauty of diverse landscapes and cultures.",
    category: "photos",
  },
  {
    id: 118,
    title: "Fantasy Art",
    image: "/images/p6.jpg",
    desc: "Escape to a realm of imagination with this enchanting fantasy art. Mythical creatures and magical landscapes invite you to explore the boundaries of reality and fantasy.",
    category: "art",
  },
  {
    id: 119,
    title: "Minimalist Design",
    image: "/images/p6.jpg",
    desc: "Simplicity meets elegance in this minimalist design. Clean lines and subtle details create a visual oasis that soothes the mind and enhances the appreciation of form.",
    category: "design",
  },
  {
    id: 120,
    title: "Underwater Photo",
    image: "/images/p6.jpg",
    desc: "Dive deep into the mysteries of the ocean with this captivating underwater photo. Vibrant marine life and surreal underwater landscapes unfold in every frame.",
    category: "photos",
  },
  {
    id: 121,
    title: "Pop Art",
    image: "/images/p6.jpg",
    desc: "Bursting with color and energy, this pop art creation is a visual celebration. Bold strokes and vibrant hues collide, creating a lively and dynamic masterpiece.",
    category: "art",
  },
  {
    id: 122,
    title: "Graffiti Design",
    image: "/images/p6.jpg",
    desc: "Express yourself with this bold and expressive graffiti design. Each stroke tells a story, inviting you to embrace the raw energy and urban creativity.",
    category: "design",
  },
  {
    id: 123,
    title: "Sunset Photo",
    image: "/images/p6.jpg",
    desc: "Chase the golden hour with this mesmerizing sunset photo. Warm hues paint the sky, creating a serene and picturesque moment that captures the beauty of transitions.",
    category: "photos",
  },
  {
    id: 124,
    title: "Whimsical Art",
    image: "/images/p6.jpg",
    desc: "Let your imagination run wild with this whimsical art piece. Playful elements and vibrant colors create a surreal world that invites joy and creative exploration.",
    category: "art",
  },
  {
    id: 125,
    title: "Architectural Design",
    image: "/images/p6.jpg",
    desc: "Explore the beauty of architecture with this stunning design. Each line and curve tells a story of innovation, form, and the seamless integration of art and structure.",
    category: "design",
  },
  {
    id: 126,
    title: "Macro Photo",
    image: "/images/p6.jpg",
    desc: "Discover the beauty in the details with this mesmerizing macro photo. Every intricate element is magnified, inviting you to appreciate the exquisite complexity of the world.",
    category: "photos",
  },
  {
    id: 127,
    title: "Abstract Expressionism",
    image: "/images/p6.jpg",
    desc: "Immerse yourself in the raw emotion and dynamic energy of abstract expressionism. Bold strokes and vivid colors collide, creating a captivating canvas that invites contemplation and introspection.",
    category: "art",
  },
  {
    id: 128,
    title: "Tech Design",
    image: "/images/p6.jpg",
    desc: "Merge technology and design seamlessly with this captivating tech design. Futuristic elements and sleek aesthetics converge in a visual representation of innovation.",
    category: "design",
  },
  {
    id: 129,
    title: "Night Sky Photo",
    image: "/images/p6.jpg",
    desc: "Gaze at the stars with this mesmerizing night sky photo. Each twinkle in the cosmic canvas tells a story of the vast and awe-inspiring universe.",
    category: "photos",
  },
  {
    id: 130,
    title: "Macro Photo",
    image: "/images/p6.jpg",
    desc: "Dive into the intricate details of the world with this mesmerizing macro photo. Every nuance is magnified, revealing a universe of beauty that often goes unnoticed.",
    category: "photos",
  },
  {
    id: 131,
    title: "Abstract Expressionism",
    image: "/images/p6.jpg",
    desc: "Immerse yourself in the raw emotion and dynamic energy of abstract expressionism. Bold strokes and vivid colors collide, creating a captivating canvas that invites contemplation and introspection.",
    category: "art",
  },
];

export const Skills: Skill[] = [
  {
    id: 1,
    label: "Photography",
    value: 95,
  },
  {
    id: 2,
    label: "Web Design",
    value: 85,
  },
  {
    id: 3,
    label: "Photoshop",
    value: 80,
  },
];
export const PackagesData: Package[] = [
  {
    id: 1,
    title: "Basic",
    label: "Web Design",
    category: "Photography",
    capacity: "1GB Storage",
    support: "Mail Support",
    price: 10,
    color: "#616161",
  },
  {
    id: 2,
    title: "Pro",
    label: "Web Design",
    category: "Photography",
    capacity: "50GB Storage",
    support: "Endless Support",
    price: 25,
    color: "#009688",
  },
  {
    id: 3,
    title: "Premium",
    label: "Web Design",
    category: "Photography",
    capacity: "Unlimited Storage",
    support: "Endless Support",
    price: 50,
    color: "#616161",
  },
];
