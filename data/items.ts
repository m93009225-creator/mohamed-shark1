export interface Item {
  id: number;
  titleKey: string;
  categoryKey: string;
  pricePerDay: number;
  image: string;
  ownerKey: string;
  rating: number;
}

export const featuredItems: Item[] = [
  {
    id: 1,
    titleKey: "items.item1.title",
    categoryKey: "items.item1.category",
    pricePerDay: 500,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500",
    ownerKey: "items.item1.owner",
    rating: 4.8
  },
  {
    id: 2,
    titleKey: "items.item2.title",
    categoryKey: "items.item2.category",
    pricePerDay: 150,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=500",
    ownerKey: "items.item2.owner",
    rating: 4.9
  },
  {
    id: 3,
    titleKey: "items.item3.title",
    categoryKey: "items.item3.category",
    pricePerDay: 200,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=500",
    ownerKey: "items.item3.owner",
    rating: 4.7
  }
];