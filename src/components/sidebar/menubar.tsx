import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Home } from "lucide-react"
import { Button } from "../ui/button"
import "./menubar.css";
  
  export default function Menubar2() {
    return (

    <div className="menubar">
        <div className="first">
          <Button size="icon"><Home /></Button>
          </div>
          <div className="second">
          <Button size="icon"><Home /></Button>
          </div>
          <div className="third">
          <Button size="icon"><Home /></Button>
          </div>
          <div className="fourth">
          <Button size="icon"><Home /></Button>
          </div>
      </div>
    )
  }
  