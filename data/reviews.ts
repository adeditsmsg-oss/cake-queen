export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  occasion?: string;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Priya Sharma',
    avatar: 'PS',
    rating: 5,
    date: 'June 2025',
    occasion: 'Wedding Cake',
    text: "Ordered the Rose Gold Floral Tier Cake for my sister's wedding and honestly, I was speechless when I saw it. সত্যিই অসাধারণ! The cake was so beautiful that guests were clicking photos for 20 minutes before anyone dared cut it. Delivery was exactly on time, packaging was stunning. Thank you Cake Queen — you made her special day unforgettable! 🎂✨",
  },
  {
    id: 'r2',
    name: 'Rajan Ghosh',
    avatar: 'RG',
    rating: 5,
    date: 'May 2025',
    occasion: 'Birthday Cake',
    text: "Black Forest cake ta ekdum fresh chilo — cream gulo heavy chilo na, halka and perfectly balanced. My son absolutely loved his birthday cake and kept asking for second pieces. দামও খুব reasonable. Will definitely be coming back for his next birthday and honestly probably every birthday after that. Best bakery in Medinipur! 🙌",
  },
  {
    id: 'r3',
    name: 'Ananya Das',
    avatar: 'AD',
    rating: 4,
    date: 'April 2025',
    occasion: 'Red Velvet Cake',
    text: "The Red Velvet was genuinely really good — soft, moist, and that cream cheese frosting was tangy in the best way. পরের বার একটু বেশি icing দিলে আরও ভালো হতো, but that's just my personal sweet tooth talking. The packaging was so pretty — almost felt like a gift itself. Overall very happy and will definitely order again! 😊",
  },
  {
    id: 'r4',
    name: 'Suresh Kumar',
    avatar: 'SK',
    rating: 5,
    date: 'March 2025',
    occasion: 'Anniversary Photo Cake',
    text: "5 stars without any hesitation. Ordered a custom photo cake for my wife's anniversary and the photo print quality was exceptional — the colours were sharp and vibrant. The chocolate base was absolutely delicious. দোকানের মানুষজন খুবই ভদ্র and accommodated a last-minute design change without any hassle. This is the kind of service that makes you a loyal customer for life.",
  },
  {
    id: 'r5',
    name: 'Kavya Singh',
    avatar: 'KS',
    rating: 5,
    date: 'February 2025',
    occasion: 'Unicorn Birthday Cake',
    text: "The Unicorn Cake for my daughter's 5th birthday was absolutely MAGICAL! She cried happy tears when she saw it — and honestly, so did I! ঠিক সময়ে delivery হয়েছিল and the cake was perfectly fresh. The rainbow layers inside were such a wonderful surprise for all the kids. Cake Queen is hands-down the best cake shop in Midnapore. 🦄✨",
  },
  {
    id: 'r6',
    name: 'Biplab Roy',
    avatar: 'BR',
    rating: 4,
    date: 'January 2025',
    occasion: 'Pastries & Sweets',
    text: "Good quality cakes at very reasonable prices — that's rare to find these days. The pastries are also amazing, especially the Blueberry Cheesecake slice which I've ordered three times now. একটু আগে order দেওয়া ভালো for big occasion cakes, especially during festive season. But overall a very satisfied and regular customer. Highly recommend! 👍",
  },
  {
    id: 'r7',
    name: 'Meera Agarwal',
    avatar: 'MA',
    rating: 5,
    date: 'December 2024',
    occasion: 'Gift Box',
    text: "Got a Durga Puja special box of French Macarons and handcrafted chocolates as a gift for my in-laws, and the reaction was priceless! The presentation was so premium — it almost felt like a branded luxury gift from a high-end store. স্বাদও ছিল অসাধারণ! The macarons were perfectly chewy, not too sweet. Cake Queen আমাদের শহরের গর্ব! Will definitely gift again. 🙏❤️",
  },
];

export const faqs = [
  {
    id: 'faq1',
    question: 'How far in advance should I place my order?',
    answer: 'For standard cakes, 24–48 hours advance notice is sufficient. For custom and multi-tier cakes (wedding, theme cakes), we recommend ordering at least 3–5 days in advance. During festive seasons (Durga Puja, Christmas, New Year), please book 7–10 days ahead to guarantee availability.',
  },
  {
    id: 'faq2',
    question: 'Do you offer home delivery in Midnapore / Medinipur?',
    answer: 'Yes! We offer home delivery within Midnapore city limits. Delivery is available daily from 10 AM to 9 PM. For orders above ₹1,000, delivery within 5km is free. For longer distances, a nominal delivery charge applies. Contact us on WhatsApp for exact delivery zones.',
  },
  {
    id: 'faq3',
    question: 'Can I order a fully customised cake?',
    answer: 'Absolutely! Custom cakes are our speciality. You can specify the flavour, size, design, colour scheme, theme, inscriptions, and any special dietary requirements. For complex designs, please share reference images when placing your order via WhatsApp. Our bakers will confirm feasibility within a few hours.',
  },
  {
    id: 'faq4',
    question: 'What is the minimum order size for cakes?',
    answer: 'Most of our cakes are available from 500g onwards. Wedding and multi-tier cakes have a minimum weight of 2kg. Cupcakes can be ordered in multiples of 4. Pastries, cookies, and brownies are available as individual pieces with no minimum order.',
  },
  {
    id: 'faq5',
    question: 'Do you use fresh ingredients?',
    answer: 'Always. We bake fresh every single day using farm-fresh eggs, premium imported butter, fresh cream, and seasonal fruits. We never use artificial colours or preservatives in our cakes. Our commitment to fresh, quality ingredients is what sets Cake Queen apart.',
  },
  {
    id: 'faq6',
    question: 'How should I store my cake?',
    answer: 'Cream-based cakes should be refrigerated and consumed within 2–3 days. Fondant cakes are best stored at room temperature (away from direct sunlight) for up to 2 days. Cookies and brownies keep well in an airtight container for 5–7 days at room temperature. Always bring chilled cakes to room temperature for 30 minutes before serving.',
  },
  {
    id: 'faq7',
    question: 'Can I add a personal message or photo to my cake?',
    answer: 'Yes! You can add a handwritten-style message in any colour, or upload a photo for our edible photo printing service. Just include your message or photo when placing your WhatsApp order. Photo prints are high-resolution, food-safe, and taste wonderful!',
  },
  {
    id: 'faq8',
    question: 'Do you accept corporate and bulk orders?',
    answer: 'Yes, we love partnering with corporates, event planners, and organisations for bulk orders. We offer special discounts for orders above 10 kg or 50+ units of cupcakes/pastries. Contact us on WhatsApp or call us to discuss your requirements and get a custom quote.',
  },
  {
    id: 'faq9',
    question: 'What flavours are available?',
    answer: 'We offer: Chocolate, Vanilla, Red Velvet, Black Forest, Pineapple, Butterscotch, Mango, Strawberry, Lemon, Oreo, Coffee, and seasonal specials. Most flavours can be combined — for example, chocolate cake with strawberry cream. Ask us for our current seasonal menu on WhatsApp!',
  },
  {
    id: 'faq10',
    question: 'Do you make eggless cakes?',
    answer: 'Yes, we offer eggless versions of most of our cakes on request. Our eggless cakes are equally moist, delicious, and beautifully decorated. Please mention your eggless requirement when placing your order. There is no extra charge for the eggless option.',
  },
];
