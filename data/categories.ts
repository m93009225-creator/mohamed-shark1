import { Laptop, Car, Tent, Hammer, Shirt, Bike } from "lucide-react";

export const categories = [
  {
    id: 1,
    titleKey: "electronics",
    slug: "electronics",
    icon: Laptop,
    countKey: "electronics_count",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    titleKey: "vehicles",
    slug: "vehicles",
    icon: Car,
    countKey: "vehicles_count",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    titleKey: "camping",
    slug: "camping",
    icon: Tent,
    countKey: "camping_count",
    color: "from-green-500 to-emerald-400"
  },
  {
    id: 4,
    titleKey: "tools",
    slug: "tools",
    icon: Hammer,
    countKey: "tools_count",
    color: "from-orange-500 to-yellow-400"
  },
  {
    id: 5,
    titleKey: "fashion",
    slug: "fashion",
    icon: Shirt,
    countKey: "fashion_count",
    color: "from-red-500 to-rose-400"
  },
  {
    id: 6,
    titleKey: "sports",
    slug: "sports",
    icon: Bike,
    countKey: "sports_count",
    color: "from-blue-400 to-indigo-500"
  }
];