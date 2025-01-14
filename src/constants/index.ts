export const APP_NAME = "Planto";

export const ROUTES = {
  HOME: "/",
  PLANTS: "/plants",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  PROFILE: "/profile",
  CART: "/cart",
} as const;

export const PLANT_CATEGORIES = {
  INDOOR: "indoor",
  OUTDOOR: "outdoor",
  SUCCULENTS: "succulents",
  FLOWERING: "flowering",
  TROPICAL: "tropical",
  HERBS: "herbs",
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
  },
  PLANTS: {
    LIST: "/api/plants",
    DETAIL: (id: string) => `/api/plants/${id}`,
  },
  CART: {
    LIST: "/api/cart",
    ADD: "/api/cart/add",
    REMOVE: "/api/cart/remove",
  },
} as const;

export const BREAKPOINTS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
  "2XL": "1536px",
} as const;
