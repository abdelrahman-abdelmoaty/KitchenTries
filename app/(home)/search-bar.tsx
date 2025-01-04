"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SearchBar() {
  const { push } = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;
    if (searchQuery) {
      push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur group-hover:blur-md transition-all duration-300" />
      <form
        onSubmit={handleSearch}
        className="relative bg-white rounded-lg shadow-lg flex items-center p-2"
      >
        <Search className="w-6 h-6 text-neutral-400 ml-2" />
        <input
          type="search"
          name="search"
          placeholder="Search for recipes, ingredients, or cuisines..."
          className="flex-1 px-4 py-3 text-lg border-none outline-none bg-transparent placeholder-neutral-400"
        />
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6">
          Search
        </Button>
      </form>
    </div>
  );
}
