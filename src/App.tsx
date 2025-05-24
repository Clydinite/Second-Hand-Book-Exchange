import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatePresence, motion } from "framer-motion";

const conditions = ["Brand New", "Used", "With Notes"];

const books = [
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Linear Algebra",
    isbn: "9789863121234",
    course: "MATH101",
    condition: "Brand New",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "General Chemistry",
    isbn: "9789571234567",
    course: "CHEM101",
    condition: "Used",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Data Structures",
    isbn: "9789577654321",
    course: "CS102",
    condition: "With Notes",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Calculus",
    isbn: "9789571234567",
    course: "MATH101",
    condition: "Used",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Computer System",
    isbn: "9789577654321",
    course: "CS101",
    condition: "With Notes",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Introduction to Algorithms",
    isbn: "9789863121234",
    course: "CS202",
    condition: "Brand New",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Computer Network",
    isbn: "9789571234567",
    course: "CS203",
    condition: "Used",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Database System",
    isbn: "9789577654321",
    course: "CS204",
    condition: "With Notes",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Operating System",
    isbn: "9789863121234",
    course: "CS205",
    condition: "Brand New",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: `https://picsum.photos/300/500?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
];

export default function TextbookExchange() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([
    "Brand New",
    "Used",
    "With Notes",
  ]);

  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(search.toLowerCase());
    const isbnMatch = book.isbn.includes(search);
    const courseMatch = book.course
      .toLowerCase()
      .includes(search.toLowerCase());
    const priceMatch =
      book.price >= priceRange[0] && book.price <= priceRange[1];
    const conditionMatch = selectedCondition.some((condition) => {
      return book.condition === condition;
    });

    return (
      (titleMatch || isbnMatch || courseMatch) && priceMatch && conditionMatch
    );
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative overflow-hidden min-h-screen bg-gray-950 text-white">
        {/* BLOBS */}
        <div className="absolute z-10 inset-0 overflow-hidden">
          <div className="absolute top-[-5rem] left-[-5rem] w-[20rem] h-[20rem] bg-pink-500 opacity-15 rounded-full filter blur-3xl mix-blend-multiply animate-blob" />
          <div className="absolute top-[10rem] left-[25rem] w-[20rem] h-[20rem] bg-blue-500 opacity-15 rounded-full filter blur-3xl mix-blend-multiply animate-blob" />
          <div className="absolute top-[25rem] left-[5rem] w-[20rem] h-[20rem] bg-green-500 opacity-15 rounded-full filter blur-3xl mix-blend-multiply animate-blob" />
        </div>

        {/* MAIN UI */}
        <div className="p-6 max-w-screen-xl mx-auto z-10 relative">
          {/* TITLE */}
          <div>
            <h1 className="text-5xl font-extrabold drop-shadow-md">
              Book Exchange
            </h1>
            <p className="text-muted-foreground text-lg mt-4 mb-6">
              Trade books with students, by students.
            </p>
          </div>

          {/* SEARCH & FILTERS */}
          <div className="grid md:grid-cols-3 gap-4 select-none mb-6">
            <Input
              placeholder="Search by title, course ID or ISBN"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl shadow-md"
            />

            <div className="flex flex-col justify-between">
              
              <div className="flex flex-col mb-4">
                <label className="text-muted-foreground my-2">
                  Price: ${priceRange[0]} ~ ${priceRange[1]} NTD
                </label>
                <Slider
                  min={0}
                  max={2000}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
              </div>

              <div className="space-y-2">
                {conditions.map((condition) => (
                  <label
                    key={condition}
                    className="flex items-center space-x-2 text-muted-foreground"
                  >
                    <Checkbox
                      checked={selectedCondition.includes(condition)}
                      onCheckedChange={(checked) =>
                        setSelectedCondition(
                          checked
                            ? [...selectedCondition, condition]
                            : selectedCondition.filter((c) => c !== condition)
                        )
                      }
                    />
                    <span>{condition}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* BOOK CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book, idx) => (
                  <motion.div key={book.id ?? idx} layout>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="hover:scale-[1.02] transition-transform overflow-hidden p-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg">
                        <div className="flex items-center">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-24 h-full object-cover rounded-xl shadow-inner"
                          />
                          <CardContent className="px-4 py-3 space-y-3 flex-1">
                            <div className="font-semibold text-xl text-white">
                              {book.title}
                            </div>
                            <div className="text-sm text-gray-400">
                              ISBN: {book.isbn}
                            </div>
                            <div className="text-sm text-gray-500 italic">
                              {book.condition}
                            </div>
                            <div className="text-lg font-bold text-green-400">
                              ${book.price}
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.p
                  className="col-span-full text-center text-gray-400 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  No books fit the search criteria.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
