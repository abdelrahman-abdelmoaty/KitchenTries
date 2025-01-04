// types/models.ts

// User Model
export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // Hashed
  name: string;
  bio?: string;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
  role: "USER" | "ADMIN";
  followers: string[]; // Array of user IDs
  following: string[]; // Array of user IDs
  savedRecipes: string[]; // Array of recipe IDs
  badges: Badge[];
  social?: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  preferences?: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    privateProfile: boolean;
  };
}

// Recipe Model
export interface Recipe {
  id: string;
  title: string;
  description: string;
  author: string; // User ID
  images: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  category: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutrients?: NutritionInfo;
  tips?: string[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  likes: string[]; // Array of user IDs
  saves: string[]; // Array of user IDs
  views: number;
  comments: Comment[];
  ratings: Rating[];
  tags: string[];
  equipment?: string[];
  sourceUrl?: string;
  isVerified: boolean;
}

// Ingredient Model
export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
  isRequired: boolean;
  substitutes?: string[];
}

// Instruction Model
export interface Instruction {
  id: string;
  stepNumber: number;
  content: string;
  image?: string;
  timers?: number[]; // in minutes
  tips?: string[];
}

// Comment Model
export interface Comment {
  id: string;
  recipeId: string;
  userId: string;
  content: string;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
  likes: string[]; // Array of user IDs
  replies?: Comment[];
}

// Rating Model
export interface Rating {
  id: string;
  recipeId: string;
  userId: string;
  value: number; // 1-5
  review?: string;
  createdAt: Date;
}

// Collection Model (for user's recipe collections/cookbooks)
export interface Collection {
  id: string;
  userId: string;
  name: string;
  description?: string;
  coverImage?: string;
  recipes: string[]; // Array of recipe IDs
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Badge Model
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
  dateAwarded: Date;
}

// Notification Model
export interface Notification {
  id: string;
  userId: string;
  type: "LIKE" | "COMMENT" | "FOLLOW" | "MENTION" | "RATING";
  content: string;
  sourceId: string; // ID of the related entity (recipe, comment, etc.)
  sourceType: "RECIPE" | "COMMENT" | "USER" | "RATING";
  createdAt: Date;
  read: boolean;
}

// Nutrition Info Model
export interface NutritionInfo {
  servingSize: string;
  calories: number;
  fat: number;
  saturatedFat?: number;
  carbohydrates: number;
  sugar?: number;
  protein: number;
  fiber?: number;
  sodium?: number;
}

// Activity Model (for tracking user actions)
export interface Activity {
  id: string;
  userId: string;
  type: "CREATE_RECIPE" | "LIKE" | "COMMENT" | "FOLLOW" | "RATE" | "SAVE";
  entityId: string;
  entityType: "RECIPE" | "COMMENT" | "USER" | "COLLECTION";
  createdAt: Date;
  metadata?: Record<string, any>;
}

// Search History Model
export interface SearchHistory {
  id: string;
  userId: string;
  query: string;
  filters?: Record<string, any>;
  createdAt: Date;
}

// Report Model
export interface Report {
  id: string;
  reporterId: string;
  entityId: string;
  entityType: "RECIPE" | "COMMENT" | "USER";
  reason: string;
  description?: string;
  status: "PENDING" | "REVIEWED" | "RESOLVED" | "DISMISSED";
  createdAt: Date;
  resolvedAt?: Date;
}
