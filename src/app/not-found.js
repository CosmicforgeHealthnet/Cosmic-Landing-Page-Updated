"use client";
import { useEffect, useState } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { ArrowLeft, HeartHandshake, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function Simple404() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleGoBack = () => {
    if (isClient && typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <HeartHandshake className="w-12 h-12 text-gray-400" />
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        The health page you're looking for doesn't exist.
      </p>

      <div className="space-x-4">
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
        <Button variant="outline" onClick={handleGoBack}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
export default Simple404;
