import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Pizza from "@/lib/models/pizza";
import Dessert from "@/lib/models/dessert";
import Drink from "@/lib/models/drink";
import Pasta from "@/lib/models/pasta";
import Salad from "@/lib/models/salad";

export const revalidate = 0;

export async function GET(req: NextRequest) {
  await dbConnect();

  const pizzas = await Pizza.find({});
  const desserts = await Dessert.find({});
  const drinks = await Drink.find({});
  const pastas = await Pasta.find({});
  const salads = await Salad.find({});

  return NextResponse.json({ pizzas, desserts, drinks, pastas, salads });
}
