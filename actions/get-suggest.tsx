import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  name?: string;
  category?: string;
  color?: string;
  price?: number;
}

const getSuggestions = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      name: query.name,
      category: query.category,
      color: query.color,
      price: query.price,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getSuggestions;
