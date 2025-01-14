export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "user" | "admin";
  createdAt: string;
}

export type AuthStatus = "authenticated" | "unauthenticated" | "loading";

export interface Plant {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: PlantCategory;
  stock: number;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export type PlantCategory =
  | "indoor"
  | "outdoor"
  | "succulents"
  | "flowering"
  | "tropical"
  | "herbs";

export interface CartItem {
  id: string;
  plantId: string;
  quantity: number;
  price: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
