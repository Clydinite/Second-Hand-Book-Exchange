import "./app.css";

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
    image: "https://picsum.photos/1080/1920",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "General Chemistry",
    isbn: "9789571234567",
    course: "CHEM101",
    condition: "Used",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: "https://picsum.photos/1080/1920",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Data Structures",
    isbn: "9789577654321",
    course: "CS102",
    condition: "With Notes",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: "https://picsum.photos/1080/1920",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Calculus",
    isbn: "9789571234567",
    course: "MATH101",
    condition: "Used",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: "https://picsum.photos/1080/1920",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Computer System",
    isbn: "9789577654321",
    course: "CS101",
    condition: "With Notes",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: "https://picsum.photos/1080/1920",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Introduction to Algorithms",
    isbn: "9789863121234",
    course: "CS202",
    condition: "Brand New",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: "https://picsum.photos/1080/1920",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Computer Network",
    isbn: "9789571234567",
    course: "CS203",
    condition: "Used",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: "https://picsum.photos/1080/1920",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Database System",
    isbn: "9789577654321",
    course: "CS204",
    condition: "With Notes",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: "https://picsum.photos/1080/1920",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    title: "Operating System",
    isbn: "9789863121234",
    course: "CS205",
    condition: "Brand New",
    price: Math.floor(Math.random() * (1200 - 400 + 1)) + 400,
    image: "https://picsum.photos/1080/1920",
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
      <div className="relative min-h-screen  text-white overflow-hidden">
        {/* Soft light effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] mix-blend-soft-light pointer-events-none z-0" />

        {/* Main content */}
        <div className="relative z-10 p-6 space-y-8 max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-extrabold bg-clip-text to-indigo-400">
            Textbook Exchange
          </h1>

          <div className="grid md:grid-cols-3 gap-4 select-none">
            <Input
              placeholder="Search by title, course ID or ISBN"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl shadow-md"
            />

            <div className="flex flex-col justify-between">
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
                      <Card className="hover:scale-[1.02] transition-transform overflow-hidden p-4 border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm rounded-2xl shadow-md">
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
