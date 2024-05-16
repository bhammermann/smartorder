import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/product";


export const revalidate = 0

export async function GET(req: Request, res: NextResponse) {
  await dbConnect();

  const products = await Product.find({});
  
  return NextResponse.json(products);
}
