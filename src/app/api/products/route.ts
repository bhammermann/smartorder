import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Pizza from "@/lib/models/pizza";
import getModel from "@/lib/models/product";


export const revalidate = 0

export async function GET(req: Request, res: NextResponse) {
  await dbConnect();

  // const product = await Products.find({});
  
  // return NextResponse.json(product);
  // const Pizza = getModel("pizza");
  // const pizza = await Pizza.find({});
  const pizzas = await Pizza.find({});

  return NextResponse.json(pizzas);
}
