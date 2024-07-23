"use client"

import * as React from "react"

import "/src/styles/home.css";
import Carousel from "@/components/carousel";
import Products from "@/components/products";
/* import SearchIcon from '@mui/icons-material/Search'; */


export default function Home() {
  return (
    <div className="home">
      <div className="center-text">
        <strong className="text">What would you like to order?</strong>
      </div>
      <div className="p-6"><b className="text">Popular Items</b></div>
      <div><Carousel/></div>
      <div className="bg-def"><Products/></div>
    </div>
  );
}
