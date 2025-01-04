// data/users.ts
export const USERS = [
  {
    id: "u1",
    username: "mariakitchen",
    name: "Maria Romano",
    email: "maria@example.com",
    profileImage: "/images/users/maria.jpg",
    image: "/placeholder.svg",
    bio: "Passionate Italian chef sharing family recipes passed down through generations.",
    joinedDate: new Date("2023-01-15"),
    role: "USER",
    followers: 1543,
    following: 245,
    recipes: 86,
    badges: [
      {
        id: "b1",
        name: "Master Chef",
        icon: "👨‍🍳",
        description: "Created over 50 highly-rated recipes",
        unlockedAt: new Date("2023-06-15"),
      },
      {
        id: "b2",
        name: "Pasta Lover",
        icon: "🍝",
        description: "Specializes in pasta recipes",
        unlockedAt: new Date("2023-03-20"),
      },
      {
        id: "b4",
        name: "Recipe Guru",
        icon: "📜",
        description: "Shared over 100 recipes",
        unlockedAt: new Date("2023-08-01"),
      },
    ],
    location: "Rome, Italy",
    website: "www.mariaskitchen.com",
    socialLinks: {
      instagram: "@mariakitchen",
      youtube: "@mariakitchen",
    },
    specialties: ["Italian", "Pasta", "Mediterranean"],
    savedRecipes: ["r2", "r3", "r4"],
  },
  {
    id: "u2",
    username: "chef_alex",
    name: "Alex Johnson",
    email: "alex@example.com",
    profileImage: "/images/users/alex.jpg",
    image: "/placeholder.svg",
    bio: "Professional chef specializing in fusion cuisine",
    joinedDate: new Date("2023-02-20"),
    role: "USER",
    followers: 2100,
    following: 180,
    recipes: 45,
    badges: [
      {
        id: "b3",
        name: "Taste Maker",
        icon: "👅",
        description: "Known for unique and delicious flavor combinations",
        unlockedAt: new Date("2023-07-10"),
      },
      {
        id: "b5",
        name: "Grill Master",
        icon: "🔥",
        description: "Expert in grilling and BBQ techniques",
        unlockedAt: new Date("2023-09-05"),
      },
    ],
    location: "New York, USA",
    website: "www.chefalex.com",
    socialLinks: {
      instagram: "@chef_alex",
      twitter: "@chef_alex",
    },
    specialties: ["Fusion", "American", "Asian"],
    savedRecipes: ["r1", "r5"],
  },
  {
    id: "u3",
    username: "sushi_master",
    name: "Yuki Tanaka",
    email: "yuki@example.com",
    profileImage: "/images/users/yuki.jpg",
    image: "/placeholder.svg",
    bio: "Traditional Japanese cuisine expert",
    joinedDate: new Date("2023-03-15"),
    role: "USER",
    followers: 3200,
    following: 120,
    recipes: 92,
    badges: [
      {
        id: "b6",
        name: "Sushi Chef",
        icon: "🍣",
        description: "Specializes in sushi making techniques",
        unlockedAt: new Date("2023-10-20"),
      },
    ],
    location: "Tokyo, Japan",
    website: "www.yukicooks.jp",
    socialLinks: {
      instagram: "@sushi_master",
    },
    specialties: ["Japanese", "Sushi", "Ramen"],
    savedRecipes: ["r6", "r7"],
  },
  {
    id: "u4",
    username: "spice_queen",
    name: "Priya Sharma",
    email: "priya@example.com",
    profileImage: "/images/users/priya.jpg",
    image: "/placeholder.svg",
    bio: "Bringing authentic Indian flavors to your kitchen",
    joinedDate: new Date("2023-04-10"),
    role: "USER",
    followers: 1800,
    following: 230,
    recipes: 67,
    badges: [
      {
        id: "b7",
        name: "Spice Master",
        icon: "🌶️",
        description: "Known for bold and flavorful spice combinations",
        unlockedAt: new Date(),
      },
    ],
    location: "Mumbai, India",
    website: "www.priyaskitchen.in",
    socialLinks: {
      instagram: "@spice_queen",
      youtube: "@priyacooks",
    },
    specialties: ["Indian", "Vegetarian", "Curry"],
    savedRecipes: ["r8", "r9"],
  },
  {
    id: "u5",
    username: "pastry_pro",
    name: "Sophie Martin",
    email: "sophie@example.com",
    profileImage: "/images/users/sophie.jpg",
    image: "/placeholder.svg",
    bio: "Pastry chef creating sweet masterpieces",
    joinedDate: new Date("2023-05-05"),
    role: "USER",
    followers: 2500,
    following: 195,
    recipes: 73,
    badges: [],
    location: "Paris, France",
    website: "www.sophiebakes.fr",
    socialLinks: {
      instagram: "@pastry_pro",
    },
    specialties: ["Pastry", "Desserts", "French"],
    savedRecipes: ["r10", "r11"],
  },
  {
    id: "u6",
    username: "bbq_king",
    name: "James Wilson",
    email: "james@example.com",
    profileImage: "/images/users/james.jpg",
    image: "/placeholder.svg",
    bio: "BBQ enthusiast and grill master",
    joinedDate: new Date("2023-06-01"),
    role: "USER",
    followers: 1650,
    following: 210,
    recipes: 38,
    badges: [],
    location: "Texas, USA",
    website: "www.bbqkingjames.com",
    socialLinks: {
      instagram: "@bbq_king",
      twitter: "@bbqking_james",
    },
    specialties: ["BBQ", "Grilling", "Smoking"],
    savedRecipes: ["r12", "r13"],
  },
];

// data/collections.ts
export const COLLECTIONS = [
  {
    id: "c1",
    name: "Quick Weeknight Dinners",
    description: "Delicious meals ready in 30 minutes or less",
    coverImage: "/images/collections/quick-meals.jpg",
    recipes: [], // Will be populated
    isPrivate: false,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-15"),
  },
  // More collections...
];

// data/categories.ts
export const CATEGORIES = [
  {
    id: "cat1",
    name: "Breakfast",
    icon: "🍳",
    description: "Start your day right",
    recipeCount: 145,
    image: "/images/categories/breakfast.jpg",
  },
  // More categories...
];

// data/cuisines.ts
export const CUISINES = [
  {
    id: "cuisine1",
    name: "Italian",
    icon: "🇮🇹",
    description: "Traditional Italian recipes",
    recipeCount: 234,
    popularDishes: ["Pasta Carbonara", "Margherita Pizza", "Tiramisu"],
    image: "/images/cuisines/italian.jpg",
  },
  // More cuisines...
];

// data/comments.ts
export const COMMENTS = [
  {
    id: "comment1",
    content: "Amazing recipe! I made this last night and my family loved it.",
    user: USERS[1],
    createdAt: new Date("2024-01-16"),
    likes: 12,
    replies: [],
  },
  // More comments...
];

// data/recipes.ts
export const RECIPES = [
  {
    id: "r1",
    title: "Classic Homemade Pasta Carbonara",
    description:
      "Traditional Roman pasta dish made with eggs, pecorino Romano, pancetta and black pepper.",
    author: USERS[0], // Maria
    images: [
      "/images/recipes/carbonara-1.jpg",
      "/images/recipes/carbonara-2.jpg",
    ],

    time: {
      prepTime: 15,
      cookTime: 20,
      totalTime: 35,
    },
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    category: ["Main Course", "Pasta"],
    ingredients: [
      {
        id: "i1",
        name: "Spaghetti",
        amount: 400,
        unit: "g",
      },
      {
        id: "i2",
        name: "Eggs",
        amount: 4,
        unit: "large",
      },
      // More ingredients...
    ],
    instructions: [
      {
        id: "step1",
        stepNumber: 1,
        content: "Bring a large pot of salted water to boil.",
        image: "/images/steps/boiling-water.jpg",
      },
      // More steps...
    ],
    nutritionInfo: {
      calories: 650,
      protein: 25,
      carbohydrates: 70,
      fat: 30,
      sodium: 890,
    },
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    likes: 234,
    saves: 156,
    views: 1890,
    rating: 4.5,
    comments: COMMENTS,
    ratings: [
      {
        user: USERS[1],
        value: 4,
      },
    ],
    tags: ["Italian", "Pasta", "Quick", "Traditional"],
  },
  {
    id: "r2",
    title: "Spicy Thai Green Curry",
    description: "Authentic Thai green curry with coconut milk, vegetables, and your choice of protein.",
    author: USERS[2],
    images: ["/images/recipes/thai-curry-1.jpg", "/images/recipes/thai-curry-2.jpg"],
    time: { prepTime: 20, cookTime: 30, totalTime: 50 },
    servings: 4,
    difficulty: "Medium",
    cuisine: "Thai",
    category: ["Main Course", "Curry"],
    ingredients: [
      { id: "i3", name: "Coconut Milk", amount: 400, unit: "ml" },
      { id: "i4", name: "Green Curry Paste", amount: 2, unit: "tbsp" }
    ],
    instructions: [
      { id: "step2", stepNumber: 1, content: "Heat oil in a large pan over medium heat", image: "/images/steps/heat-oil.jpg" }
    ],
    nutritionInfo: { calories: 450, protein: 20, carbohydrates: 25, fat: 35, sodium: 680 },
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
    likes: 189,
    saves: 120,
    views: 1450,
    rating: 4.7,
    comments: [],
    ratings: [],
    tags: ["Thai", "Spicy", "Curry", "Asian"]
    },
    {
    id: "r3",
    title: "Classic French Croissants",
    description: "Buttery, flaky French croissants made from scratch.",
    author: USERS[4],
    images: ["/images/recipes/croissant-1.jpg"],
    time: { prepTime: 40, cookTime: 20, totalTime: 360 },
    servings: 8,
    difficulty: "Hard",
    cuisine: "French",
    category: ["Breakfast", "Pastry"],
    ingredients: [
      { id: "i5", name: "Butter", amount: 250, unit: "g" },
      { id: "i6", name: "Flour", amount: 500, unit: "g" }
    ],
    instructions: [
      { id: "step3", stepNumber: 1, content: "Prepare the laminated dough", image: "/images/steps/laminated-dough.jpg" }
    ],
    nutritionInfo: { calories: 280, protein: 5, carbohydrates: 30, fat: 15, sodium: 190 },
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
    likes: 312,
    saves: 245,
    views: 2100,
    rating: 4.9,
    comments: [],
    ratings: [],
    tags: ["French", "Pastry", "Breakfast", "Baking"]
    },
    {
    id: "r4",
    title: "Homemade Sushi Rolls",
    description: "Learn to make beautiful sushi rolls at home with step-by-step instructions.",
    author: USERS[2],
    images: ["/images/recipes/sushi-1.jpg", "/images/recipes/sushi-2.jpg"],
    time: { prepTime: 45, cookTime: 30, totalTime: 75 },
    servings: 6,
    difficulty: "Medium",
    cuisine: "Japanese",
    category: ["Main Course", "Seafood"],
    ingredients: [
      { id: "i7", name: "Sushi Rice", amount: 300, unit: "g" },
      { id: "i8", name: "Nori Sheets", amount: 6, unit: "sheets" }
    ],
    instructions: [
      { id: "step4", stepNumber: 1, content: "Cook and season the sushi rice", image: "/images/steps/sushi-rice.jpg" }
    ],
    nutritionInfo: { calories: 320, protein: 12, carbohydrates: 45, fat: 8, sodium: 420 },
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
    likes: 267,
    saves: 198,
    views: 1780,
    rating: 4.6,
    comments: [],
    ratings: [],
    tags: ["Japanese", "Sushi", "Seafood", "Asian"]
    },
    {
    id: "r5",
    title: "Indian Butter Chicken",
    description: "Rich and creamy butter chicken made with aromatic spices and tender chicken.",
    author: USERS[3],
    images: ["/images/recipes/butter-chicken-1.jpg"],
    time: { prepTime: 30, cookTime: 40, totalTime: 70 },
    servings: 4,
    difficulty: "Medium",
    cuisine: "Indian",
    category: ["Main Course", "Curry"],
    ingredients: [
      { id: "i9", name: "Chicken Thighs", amount: 800, unit: "g" },
      { id: "i10", name: "Heavy Cream", amount: 200, unit: "ml" }
    ],
    instructions: [
      { id: "step5", stepNumber: 1, content: "Marinate the chicken", image: "/images/steps/marinate-chicken.jpg" }
    ],
    nutritionInfo: { calories: 520, protein: 32, carbohydrates: 18, fat: 38, sodium: 750 },
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19"),
    likes: 423,
    saves: 287,
    views: 2450,
    rating: 4.8,
    comments: [],
    ratings: [],
    tags: ["Indian", "Curry", "Chicken", "Creamy"]
    },
    {
    id: "r6",
    title: "Texas-Style BBQ Ribs",
    description: "Slow-smoked BBQ ribs with a perfect bark and tender meat.",
    author: USERS[5],
    images: ["/images/recipes/bbq-ribs-1.jpg", "/images/recipes/bbq-ribs-2.jpg"],
    time: { prepTime: 60, cookTime: 360, totalTime: 420 },
    servings: 6,
    difficulty: "Hard",
    cuisine: "American",
    category: ["Main Course", "BBQ"],
    ingredients: [
      { id: "i11", name: "Pork Ribs", amount: 2, unit: "racks" },
      { id: "i12", name: "BBQ Rub", amount: 100, unit: "g" }
    ],
    instructions: [
      { id: "step6", stepNumber: 1, content: "Prepare the ribs and apply rub", image: "/images/steps/prep-ribs.jpg" }
    ],
    nutritionInfo: { calories: 580, protein: 45, carbohydrates: 12, fat: 42, sodium: 890 },
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
    likes: 356,
    saves: 234,
    views: 1980,
    rating: 4.9,
    comments: [],
    ratings: [],
    tags: ["BBQ", "American", "Pork", "Grilling"]
    }
];

// data/activities.ts
export const ACTIVITIES = [
  {
    id: "a1",
    type: "RECIPE_CREATED",
    user: USERS[0],
    recipe: RECIPES[0],
    timestamp: new Date("2024-01-15T14:30:00"),
  },
  // More activities...
];

// data/notifications.ts
export const NOTIFICATIONS = [
  {
    id: "n1",
    type: "LIKE",
    user: USERS[1],
    targetUser: USERS[0],
    recipe: RECIPES[0],
    read: false,
    timestamp: new Date("2024-01-15T15:30:00"),
  },
  // More notifications...
];
