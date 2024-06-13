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
        <strong className="text">What would you like to order?</strong>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <button type="submit">
          <Search />
        </button>
        <div className="p-2">
          <input type="text" placeholder="Search ..." className="input input-bordered w-full max-w-xs bg-background" />
        </div>
      </div>
      <div className="p-2"><b className="text">Popular Items</b></div>
      <div><Carousel/></div>
    </div>
  );
}
