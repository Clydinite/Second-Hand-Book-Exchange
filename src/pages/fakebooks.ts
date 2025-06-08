type Book = {
  id: number;
  title: string;
  isbn: string;
  courseId: string;
  condition: string;
  price: number;
  image: string;
};


const conditionList = ["Brand New", "Like New", "Used – Clean", "Used – With Notes", "Heavily Used"];

export const books: Book[] = [
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Linear Algebra",
    isbn: "9789863121234",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "General Chemistry",
    isbn: "9789571234567",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Data Structures",
    isbn: "9789577654321",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Calculus",
    isbn: "9789571234567",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Computer System",
    isbn: "9789577654321",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Introduction to Algorithms",
    isbn: "9789863121234",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Computer Network",
    isbn: "9789571234567",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Database System",
    isbn: "9789577654321",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Operating System",
    isbn: "9789863121234",
    courseId: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100000 + Math.random() * 900000)}`,
    condition: conditionList[Math.floor(Math.random() * conditionList.length)],
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
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

