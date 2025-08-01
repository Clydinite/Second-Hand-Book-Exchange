// const conditionList = [
//   "Brand New",
//   "Like New",
//   "Used – Clean",
//   "Used – With Notes",
//   "Heavily Used",
// ];

export const books: Book[] = [
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Advanced Engineering Mathematics, 10th Edition",
    isbn: "798-1-119-93416-5",
    courseId: "C115720",
    condition: "Like New",
    price: 450,
    image: "26544.jpg",
    sellerEmail: "C34134087",
    avaliableTime: "10:00 AM - 12:00 PM except on weekends",
    description: "Slightly used, but it's like new.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "English for General Engineering",
    isbn: "978-957-445-386-3",
    courseId: "E123456",
    condition: "Used – With Notes",
    price: 150,
    image: "29893.jpg",
    sellerEmail: "C34134087",
    avaliableTime: "10:00 AM - 12:00 PM only on weekends",
    description:
      "I wrote a lot of notes on this book, great for study but expect handwritten highlights and margin comments.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Essential Calculus, 2nd Edition",
    isbn: "978-1-133-49256-6",
    courseId: "A123456",
    condition: "Used – With Notes",
    price: 320,
    image: "29895.jpg",
    sellerEmail: "C34134087",
    avaliableTime: "Everyday 9:00 AM - 11:00 AM, before the semester starts",
    description:
      "The book contains handwritten notes and some pages with calculations.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "University Physics, 3rd Revised Edition",
    isbn: "978-986-7696-42-7",
    courseId: "C115720",
    condition: "Like New",
    price: 200,
    image: "34442.jpg",
    sellerEmail: "C34134087",
    avaliableTime: "Available anytime after 2:00 PM on weekdays",
    description:
      "Almost brand new condition, no marks or damage. Ideal for physics courses.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Chemical Principles, 8th Edition",
    isbn: "978-981-4834-21-6",
    courseId: "B123456",
    condition: "Heavily Used",
    price: 200,
    image: "34443.jpg",
    sellerEmail: "C34134087",
    avaliableTime: "Weekends 9:00 AM - 11:00 AM only",
    description:
      "The book is water-damaged with some pages wrinkled and stained. Digital access code has already been redeemed. Price reflects condition.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Essential Calculus, 2nd Edition",
    isbn: "978-1-133-49256-6",
    courseId: "C123456",
    condition: "Like New",
    price: 400,
    image: "34498.jpg",
    sellerEmail: "C34134087",
    avaliableTime: "Weekdays 1:00 PM - 3:00 PM",
    description:
      "The book is gently used but very clean since the professor barely used it, perfect for serious calculus students.",
  },
  // fake books
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Introduction to Quantum Mechanics",
    isbn: "978-0-123-45678-9",
    courseId: "Q101000",
    condition: "Used – Clean",
    price: 350,
    image: "https://picsum.photos/400/600?random=1",
    sellerEmail: "C34134087",
    avaliableTime: "Weekdays 9:00 AM - 11:00 AM",
    description:
      "Minimal wear, clean pages, perfect for quantum physics beginners.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Modern Art History",
    isbn: "978-0-987-65432-1",
    courseId: "A200100",
    condition: "Used – With Notes",
    price: 180,
    image: "https://picsum.photos/400/600?random=2",
    sellerEmail: "C87654321",
    avaliableTime: "Weekends 2:00 PM - 5:00 PM",
    description:
      "Some notes inside, great for art students interested in modern movements.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Data Structures and Algorithms",
    isbn: "978-1-234-56789-0",
    courseId: "S101010",
    condition: "Like New",
    price: 500,
    image: "https://picsum.photos/400/600?random=3",
    sellerEmail: "C11223344",
    avaliableTime: "Anytime on weekdays",
    description:
      "Almost brand new, very clean, essential for computer science majors.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Microeconomics Principles",
    isbn: "978-3-141-59265-3",
    courseId: "E101202",
    condition: "Used – Clean",
    price: 230,
    image: "https://picsum.photos/400/600?random=4",
    sellerEmail: "C99887766",
    avaliableTime: "Weekdays 3:00 PM - 6:00 PM",
    description:
      "Well kept, no highlights, solid reference for economics studies.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Organic Chemistry Basics",
    isbn: "978-0-543-21098-7",
    courseId: "B102030",
    condition: "Heavily Used",
    price: 120,
    image: "https://picsum.photos/400/600?random=5",
    sellerEmail: "C55667788",
    avaliableTime: "Weekends 10:00 AM - 1:00 PM",
    description:
      "Heavy highlighting and some dog-eared pages, but still usable for lab courses.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Introduction to Philosophy",
    isbn: "978-4-321-09876-5",
    courseId: "P100400",
    condition: "Used – Clean",
    price: 210,
    image: "https://picsum.photos/400/600?random=6",
    sellerEmail: "C66778899",
    avaliableTime: "Afternoons on weekdays",
    description:
      "Very clean copy with minor wear, great for philosophy majors.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Advanced Statistics",
    isbn: "978-9-876-54321-0",
    courseId: "K202020",
    condition: "Used – With Notes",
    price: 320,
    image: "https://picsum.photos/400/600?random=7",
    sellerEmail: "C77889900",
    avaliableTime: "Weekdays 12:00 PM - 2:00 PM",
    description:
      "Includes handwritten notes and solved problems, very helpful for exam prep.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "World History: Renaissance to Modern",
    isbn: "978-2-468-13579-1",
    courseId: "H303040",
    condition: "Used – Clean",
    price: 270,
    image: "https://picsum.photos/400/600?random=8",
    sellerEmail: "C88990011",
    avaliableTime: "Mornings on weekends",
    description:
      "Well maintained, no damage, good for history buffs and students alike.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Fundamentals of Electrical Engineering",
    isbn: "978-1-357-91357-9",
    courseId: "E404040",
    condition: "Like New",
    price: 430,
    image: "https://picsum.photos/400/600?random=9",
    sellerEmail: "C99001122",
    avaliableTime: "Weekdays after 4:00 PM",
    description: "Excellent condition, minimal use, perfect for EE students.",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Psychology 101: An Introduction",
    isbn: "978-0-741-85296-3",
    courseId: "Y910100",
    condition: "Used – Clean",
    price: 200,
    image: "https://picsum.photos/400/600?random=10",
    sellerEmail: "C10111213",
    avaliableTime: "Flexible, contact for details",
    description:
      "Clean copy with no markings, great for intro psychology courses.",
  },
];
