import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-[calc(100dvh-72px)] items-center justify-center bg-glass bg-opacity-50 backdrop-blur-md rounded-2xl px-4"
    >
      <div className="flex flex-col items-center text-center max-w-5xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
          Welcome to NCKU Secondhand Book Exchange Platform
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
          <Link to="/buy" className="w-full sm:w-auto">
            <Button
              variant="default"
              className="w-full sm:w-[15rem] h-[4rem] text-xl font-bold p-4 border border-white/10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg text-white hover:text-black"
            >
              Buy
            </Button>
          </Link>
          <Link to="/sell" className="w-full sm:w-auto">
            <Button
              variant="default"
              className="w-full sm:w-[15rem] h-[4rem] text-xl font-bold p-4 border border-white/10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg text-white hover:text-black"
            >
              Sell
            </Button>
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
