import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatePresence, motion } from "framer-motion";
import { books } from "./fakebooks";

const conditions = [
  "Brand New",
  "Like New",
  "Used – Clean",
  "Used – With Notes",
  "Heavily Used",
];

export default function TextbookExchange() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([
    "Brand New",
    "Like New",
    "Used – Clean",
    "Used – With Notes",
    "Heavily Used",
  ]);

  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(search.toLowerCase());
    const isbnMatch = book.isbn.includes(search);
    const courseMatch = book.courseId
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
    <>
      <div className="p-6 max-w-screen-lg mx-auto z-10">
        {/* TITLE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
            Buy a Textbook
          </h1>
          <p className="text-muted-foreground text-lg mt-4 mb-6">
            Trade books with students, by students.
          </p>
        </div>

        {/* SEARCH & FILTERS + BOOK CARDS */}
        <div className="flex flex-col gap-6 mb-6">

          {/* SIDEBAR: SEARCH & FILTERS */}
          <div className="space-y-4 select-none sticky top-16"> {/* sticky doesn't work somehow */}
            <Input
              placeholder="Search by title, course ID or ISBN"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl shadow-md"
            />

            <div className="flex flex-col">
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

          {/* BOOK CARDS */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
                      <Card className="group hover:scale-[1.02] transition-transform overflow-hidden p-5 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl flex flex-row gap-4 sm:items-center">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-32 h-48 object-cover rounded-xl shadow-inner"
                        />
                        <CardContent className="flex-1 space-y-2">
                          <div className="font-semibold text-xl md:text-2xl text-white">
                            {book.title}
                          </div>
                          <div className="text-sm text-gray-400">
                            <span className="text-white/80">Course ID:</span>{" "}
                            {book.courseId}
                          </div>
                          <div className="text-sm text-gray-400">
                            <span className="text-white/80">ISBN:</span>{" "}
                            {book.isbn}
                          </div>
                          <div className="text-sm text-yellow-300">
                            {book.condition}
                          </div>
                          <div className="text-xl font-bold text-green-400">
                            ${book.price}
                          </div>
                        </CardContent>
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
    </>
  );
}
