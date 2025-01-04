"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export function CookieConsent() {
  const router = useRouter();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-neutral-200">
          <div className="flex items-start justify-between">
            <div className="flex-1 mr-4">
              <h3 className="text-lg font-semibold mb-2">Cookie Settings</h3>
              <p className="text-neutral-600 text-sm">
                We use cookies to enhance your experience. By continuing to
                visit this site, you agree to our use of cookies.{" "}
                <a href="/privacy" className="text-emerald-600 hover:underline">
                  Learn more
                </a>
              </p>
            </div>
            <button
              onClick={() => setShowConsent(false)}
              className="text-neutral-400 hover:text-neutral-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button
              onClick={acceptCookies}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
            >
              Accept All Cookies
            </Button>
            <Button variant="outline" onClick={declineCookies}>
              Decline Optional Cookies
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/cookie-settings")}
            >
              Customize Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
