import { Plant, Review } from '../types/plant'

export const topSellingPlants: Plant[] = [
  {
    id: 1,
    title: 'Calathea plant',
    description: 'Lorem ipsum dolor sit amet',
    price: 359,
    image: '/plant1.png'
  },
  // ... more plants
]

export const customerReviews: Review[] = [
  {
    id: 1,
    name: 'Customer Name',
    avatar: '/avatar1.jpg',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  // ... more reviews
] 