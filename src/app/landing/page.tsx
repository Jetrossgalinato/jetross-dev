"use client";
import Header from "./components/Header";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen transition duration-300">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="animate-spin w-10 h-10 text-primary" />
        </div>
      ) : (
        <div className="flex flex-col items-center pb-64 pt-10">
          <Header />
        </div>
      )}
    </div>
  );
}
