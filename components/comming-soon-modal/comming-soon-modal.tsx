"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { sendEmail } from "./send-email";

export function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { error, success } = await sendEmail(formData.get("email") as string);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            We're Cooking Up Something Special!
          </DialogTitle>
          <DialogDescription className="text-neutral-600">
            Kitchentries is coming soon! Be the first to know when we launch.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="pl-10"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
          >
            Notify Me
          </Button>
        </form>

        <p className="text-sm text-neutral-500 mt-4 text-center">
          Or contact us at{" "}
          <a
            href="mailto:contact@kitchentries.com"
            className="text-emerald-600 hover:underline"
          >
            contact@kitchentries.com
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
}
