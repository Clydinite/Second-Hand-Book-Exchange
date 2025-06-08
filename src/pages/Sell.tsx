import { useState } from "react";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const conditions = [
  "Brand New",
  "Like New",
  "Used – Clean",
  "Used – With Notes",
  "Heavily Used",
];

export default function TextbookSellPage() {
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState(500);
  const [condition, setCondition] = useState("Used – Clean");
  const [imageUrl, setImageUrl] = useState("");
  const [avaliableTime, setAvaliableTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const bookData = {
      title,
      courseId,
      isbn,
      price,
      condition,
      image: imageUrl,
      description,
    };

    console.log("Submitted book:", bookData);
    // Replace this with your real submission logic
    alert("Your book has been submitted!");
  };

  return (
    <div className="p-6 max-w-screen-md mx-auto z-10 relative">
      {/* TITLE */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Sell a Textbook
        </h1>
        <p className="text-muted-foreground text-lg mt-4 mb-6">
          Let others buy your books – fast and easy.
        </p>
      </div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 space-y-6">
          <div>
            <Label className="m-2">Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. University Physics, 3rd Edition"
              className="mt-1"
            />
          </div>

          <div>
            <Label className="m-2">Course ID</Label>
            <Input
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              placeholder="e.g. C115720 (found on Moodle)"
              className="mt-1"
            />
          </div>

          <div>
            <Label className="m-2">ISBN</Label>
            <Input
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="e.g. 978-986-7696-42-7"
              className="mt-1"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <Label className="m-2">Sell Price (NTD)</Label>
              <div className="ml-auto text-foreground">NTD ${price}</div>
            </div>
            <Slider
              min={0}
              max={2000}
              step={50}
              value={[price]}
              onValueChange={(v) => setPrice(v[0])}
              className="my-4"
            />
          </div>

          <div>
            <Label className="m-2">Condition</Label>
            <Select value={condition} onValueChange={setCondition}>
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                {conditions.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="m-2">Image URL</Label>
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Paste a link to an image"
              className="mt-1"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-3 w-32 h-48 object-cover rounded-xl shadow-inner"
              />
            )}
          </div>

          <div>
            <Label className="m-2">Avaliable Time</Label>
            <Input
              value={avaliableTime}
              onChange={(e) => setAvaliableTime(e.target.value)}
              placeholder="e.g. 10:00 - 17:00 (Mon, Thu)"
              className="mt-1"
            />
          </div>

          <div>
            <Label className="m-2">Extra Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional – e.g. no missing pages, notes in pencil only"
              className="mt-1"
            />
          </div>

          <div className="pt-4">
            <Button onClick={handleSubmit} className="w-full rounded-xl text-lg py-6">
              Submit Book Listing
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

