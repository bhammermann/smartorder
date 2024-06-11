"use client"

import * as React from "react"
import { Moon, Search, Sun } from "lucide-react"

import "./home.css"
import Carousel from "@/components/carousel";
/* import SearchIcon from '@mui/icons-material/Search'; */



export default function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="text">What would you like to order?</h1>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <button type="submit">
          <Search />
        </button>
        <div className="input input-bordered w-full max-w-xs">
          <input type="text" placeholder="Search for food ..." />
        </div>
      </div>
      <div><h1 className="text">Popular Items</h1></div>
      <div><Carousel/></div>
    </div>
  );
}
