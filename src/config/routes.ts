import { lazy } from 'react'

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))

export const routes = [
  {
    path: '/',
    element: Home,
    protected: false,
  },
  {
    path: '/about',
    element: About,
    protected: false,
  },
] 