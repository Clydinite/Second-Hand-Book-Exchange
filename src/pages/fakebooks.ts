const conditionList = [
  "Brand New",
  "Like New",
  "Used – Clean",
  "Used – With Notes",
  "Heavily Used",
];

export const books: Book[] = [
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Linear Algebra",
    isbn: "9789863121234",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "The book is in good condition with some notes from previous use.",
    avaliableTime: "10:00 AM - 12:00 PM (Monday to Friday)",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "General Chemistry",
    isbn: "9789571234567",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "Clean and well-maintained, minor pencil markings.",
    avaliableTime: "1:00 PM - 3:00 PM (Monday to Thursday)",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Data Structures",
    isbn: "9789577654321",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "Slight signs of wear, but no major damages.",
    avaliableTime: "3:00 PM - 5:00 PM (Tuesday and Friday)",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Calculus",
    isbn: "9789571234567",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "Pages are crisp and clean, ideal for study.",
    avaliableTime: "9:00 AM - 11:00 AM (Monday, Wednesday, and Friday)",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Computer System",
    isbn: "9789577654321",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "Some highlighting, otherwise in excellent shape.",
    avaliableTime: "2:00 PM - 4:00 PM (Monday to Wednesday)",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Introduction to Algorithms",
    isbn: "9789863121234",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "Well-used, but all pages intact and legible.",
    avaliableTime: "11:00 AM - 1:00 PM (Tuesday and Thursday)",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Computer Network",
    isbn: "9789571234567",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "Moderate wear and tear, suitable for a quick review.",
    avaliableTime: "5:00 PM - 7:00 PM (Wednesday and Friday)",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Database System",
    isbn: "9789577654321",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "Very few annotations, good for reference.",
    avaliableTime: "6:00 PM - 8:00 PM (Monday, Tuesday, and Thursday)",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Operating System",
    isbn: "9789863121234",
    courseId: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
    sellerEmail: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(10000000 + Math.random() * 90000000)}`,
    description: "Shows regular use, still a valuable resource.",
    avaliableTime: "8:00 AM - 10:00 AM (Tuesday, Thursday, and Saturday)",
  },
];

//   {
//     id: Math.floor(Math.random() * 1000000000),
//     title: "University Physics",
//     isbn: "978-986-7696-42-7",
//     courseId: "C115720",
//     condition: "Brand New",
//     price: 500,
//     image: `https://picsum.photos/150/300?random=${Math.floor(
//       Math.random() * 100
//     )}`,
//   },

