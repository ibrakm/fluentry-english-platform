import { useEffect } from "react";
import { useLocation } from "wouter";

export default function BookLesson() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to pricing page
    setLocation('/pricing');
  }, [setLocation]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to pricing...</p>
      </div>
    </div>
  );
}
