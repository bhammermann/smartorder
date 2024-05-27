"use client"

import * as React from "react"
import { Moon, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import { Input } from "@/components/ui/input";
import "./home.css"
import { Button } from "@/components/ui/button";
/* import SearchIcon from '@mui/icons-material/Search'; */



export default function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="text">What would you like to order?</h1>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Button type="submit" size="icon">
          <Search />
        </Button>
        <div className="p-2">
          <Input type="email" id="email" placeholder="Search for food ..." />
        </div>
      </div>
    </div>
  );
}
