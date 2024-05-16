"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
/* import SearchIcon from '@mui/icons-material/Search'; */



export default function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="text">What would you like to order?</h1>
      </div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '2rem' }}>
        {/* <SearchIcon sx={{ color: '#03B31F', mr: 1, my: 0.5 }} /> */}
        <TextField 
        className="customTextField" 
        fullWidth id="input-with-sx" 
        label="Search for food..." 
        color="success" 
        variant="standard"/>
      </Box>
    </div>
  );
}
