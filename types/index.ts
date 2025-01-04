// types/index.ts

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  profileImage: string;
  bio: string;
  joinedDate: Date;
  role: "USER" | "ADMIN";
  followers: number;
  following: number;
  recipes: number;
  badges: Badge[];
  location?: string;
  website?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  specialties: string[];
  savedRecipes: string[];
  collections: Collection[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  author: User;
  images: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  category: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutritionInfo: NutritionInfo;
  tips?: string[];
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  saves: number;
  views: number;
  comments: Comment[];
  ratings: Rating[];
  tags: string[];
  equipment?: string[];
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  note?: string;
}

export interface Instruction {
  id: string;
  stepNumber: number;
  content: string;
  image?: string;
  tip?: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
  createdAt: Date;
  likes: number;
  replies?: Comment[];
}

export interface Rating {
  id: string;
  user: User;
  value: number;
  review?: string;
  createdAt: Date;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  recipes: Recipe[];
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAt: Date;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  fiber?: number;
  sugar?: number;
  sodium?: number;
}
