"use client";

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { House } from "lucide-react";
import { useEffect, useState } from "react";
import { categoriesColors } from "@/components/CategoriesColor";
import { catergoriesIcons } from "@/components/CategoriesIcon";
import { Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@radix-ui/react-slider";
import { Hero } from "@/components/Hero";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");

  //automataar render hiij bga function loadList geed ner ugchie
  function loadList() {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  useEffect(() => {
    loadList();
  }, []);

  ////////////////CREATE////////////////////////////////////////////
  function createNew() {
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({
        // name: name,
        // color: color,
        // icon: icon,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }

  //ingeed uuruu backend ruu hussen data-gaa yawuulj chadaj bn
  /////////////////EDIT//////////////////////////////////////////////
  function editCategoryName(id, oldName) {
    const name = prompt("Are you sure?", oldName);
    if (name) {
      fetch(`http://localhost:4000/categories/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name: name }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then(() => {
        loadList();
      });
    }
  }
  /////////DELETE/////////////////////////////////////////////
  function deleteCategoryName(id, oldName) {
    if (confirm("are you sure?")) {
      fetch(`http://localhost:4000/categories/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 404) {
          alert("Category not found");
        }
        loadList();
      });
    }
  }
  /////////////////////////////////////////////////////////////

  ////////////////////HTML///////////////////////////////////
  return (
    <main className="container mx-auto bg-[#F3F4F6] max-w-[1440px]">
      <Header />
      <Hero />

      <div>
        <Button onClick={createNew}>Add new</Button>
        {categories.map((category) => (
          <div key={category.id}>
            {category.name}
            <Button
              onClick={() => editCategoryName(category.id, category.name)}
            >
              Edit
            </Button>
            <Button
              onClick={() => deleteCategoryName(category.id, category.name)}
            >
              Del
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
