import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import "./sidebar.css";
import { Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <Sheet>
      <div className="Headerbar">
        <div className="button">
          <SheetTrigger asChild>
            <Button className="SidebarButton" size="icon"><Menu /></Button>
          </SheetTrigger>
        </div>
        <div className="name"> Burger King</div>
        <div className="avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator></Separator>
      <SheetContent className="w-[200px] sm:w-[250px]" side="left">
        <SheetHeader>
          <SheetTitle>Test187</SheetTitle>
          <SheetDescription>
            <Button>Test361</Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

// Path: src/components/ui/sheet.tsx
