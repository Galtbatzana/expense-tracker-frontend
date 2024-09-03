"use client";

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
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


export default function Home() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("blue");
  const [icon, setIcon] = useState("Home");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingCategory, setEditingCategory] = useState();
  // const [catergory, setCategory] = useState();

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
    setLoading(true);

    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        color: color,
        icon: icon,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      
      .then(() => {
        loadList();
        setLoading(false);
        closeDialog();
        toast("Successfully created!");
      });
  }

  //ingeed uuruu backend ruu hussen data-gaa yawuulj chadaj bn
  /////////////////EDIT//////////////////////////////////////////////
  function updateCategory() {
      setLoading(true);
      fetch(`http://localhost:4000/categories/${editingCategory.id}`, {
        method: "PUT",
        body: JSON.stringify({ 
        name: name,
        color: color,
        icon: icon, 
      }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then(() => {
        loadList();
        setLoading(false);
        closeDialog();
        toast("Successfully Updated!");
      });
    
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
  function CategoryIcon123 ({iconName, color}) {
    const iconObject = catergoriesIcons.find((item)=>item.name === iconName);
    const colorObject = categoriesColors.find((item)=>item.name === color);

    if(!iconObject) {
      return <House/>;
    }
    
    let hexColor;
    if (!colorObject) {
      hexColor = "#000";
    } 
    else {
      hexColor = colorObject.value;
    }

    const { Icon } = iconObject; 

      return <Icon style={{color: hexColor}} />; 
  }
///////////////////////////////////////////////////////////
  useEffect(()=>{
    if (editingCategory) {
      setOpen(true);
      setName(editingCategory.name);
      setIcon(editingCategory.icon);
      setColor(editingCategory.color);
    }
  },[editingCategory]);
////////////////////////////////////////////////////////
  function reset() {
    setName("");
    setIcon("home");
    setColor("blue");
    setEditingCategory(null);
  }

  function closeDialog() {
    reset();
    setOpen(false);

  }
  // console.log();
  ////////////////////HTML///////////////////////////////////
  return (
    <main className="container mx-auto bg-[#F3F4F6] max-w-[1440px]">
      <Header />
      <Toaster />
      <div className="container mx-auto flex bg-[#E5E7EB]">
        <div className="w-[282px] mx-4 bg-white">
          <div className="mx-3">
            <div className="mb-3">
              <p className="font-bold mb-3 mt-6">Records</p>
              <Button
                variant="secondary"
                className="bg-[#0166FF] text-white rounded-full px-4 w-full">
                + Add Category
              </Button>
            </div>

            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs rounded-lg p-2 mb-3 bg-[#E5E7EB]"
            />
            <div className="flex-col my-4">
              <p className="font-bold my-6">Types</p>
              <div className="flex items-center gap-2 mb-3">
                <Checkbox className="rounded-full" />
                <p>ALL</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Checkbox className="rounded-full" />
                <p>Income</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Checkbox className="rounded-full" />
                <p>Expense</p>
              </div>
            </div>
          </div>

          <div className="flex-col mx-3">
            <div className="flex justify-between py-6">
              <p className="font-bold">Category</p>
              <button className="text-[#1F2937]">Clear</button>
            </div>

            <div>
              <Button onClick={()=>setOpen(true)}>+ Add Category</Button>
                <Dialog open={open}>
                  <DialogContent onClose={()=>setOpen(false)} className="sm:max-w-[425px] rounded-xl">
                    <DialogHeader>
                      <DialogTitle>Categories</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="secondary">
                            <CategoryIcon123 iconName={icon} color={color}/>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="grid grid-cols-6 gap-2">
                            {catergoriesIcons.map(({ name, Icon }) => (
                              <div
                                key={name}
                                onClick={() => setIcon(name)}
                                className={`flex items-center justify-center ${
                                  icon === name ? "bg-blue-500" : ""
                                }`}
                              >
                                <Icon />
                              </div>
                            ))}
                          </div>

                          <div className="flex gap-2 m-2">
                            {categoriesColors.map(({ name, value }) => (
                              <div
                                key={name}
                                onClick={() => setColor(name)}
                                className="w-8 h-8 rounded-full text-white flex items-center justify-center"
                                style={{ backgroundColor: value }}
                              >
                                {color === name && <Check className="w-4 h-4" />}
                              </div>
                            ))}
                          </div>

                        </PopoverContent>
                      </Popover>
                      <Input disabled={loading}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <DialogFooter>
                      {
                        editingCategory ? (
                      <Button disabled={loading} onClick={updateCategory} type="submit" className="w-full rounded-full bg-green-600 hover:bg-green-900"> 
                        Update
                      </Button> 
                        ) 
                      :
                      (<Button disabled={loading} onClick={createNew} type="submit" className="w-full rounded-full bg-green-600 hover:bg-green-900"> 
                      Add
                    </Button> 
                      )}

                    </DialogFooter>
                  </DialogContent>
                </Dialog>




              <div>
                {categories.map((category) => (
                  <div key={category.id} className="flex gap-1">
                    <CategoryIcon123 iconName={category.icon} color={category.color}/>
                    {category.name}
                    <Button
                      onClick={() => setEditingCategory(category)}
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
            </div>
          </div>
          <div className="mx-3">
            <p>Amount Range</p>
            <div className="flex gap-2 mt-3">
              <Input className="bg-[#E5E7EB]" placeholder="0" />
              <Input className="bg-[#E5E7EB]" placeholder="100" />
            </div>
            <div className="my-4">
              <Slider />
            </div>
          </div>
        </div>

        <div className="flex-1 mx-4">
          <div className="mt-6">
            <div>
              <Carousel /> last 30 days
            </div>
            <div>
              <Input /> Newest fisrt
            </div>
          </div>

          <div>
            <div className="flex flex-col bg-[#E5E7EB] gap-3">
              <div className="flex items-center justify-between bg-white rounded-lg">
                <div className="flex items-center justify-center py-3 pl-6">
                  <Checkbox className="mr-2" />
                  <p>Select all</p>
                </div>
                <p className="pr-6">35.500$</p>
              </div>
              <p>Today</p>
              <div className="flex items-center justify-between bg-white rounded-lg">
                <div className="flex items-center py-3 pl-6">
                  <Checkbox className="mr-2" />
                  <div className="m-2 w-8 h-8 rounded-full">
                    <House />
                  </div>
                  <div>
                    <p>Lending & Renting</p>
                    <p className="text-[12px]">14:00</p>
                  </div>
                </div>
                <p className="pr-6">1.000$</p>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg">
                <div className="flex items-center py-3 pl-6">
                  <Checkbox className="mr-2" />
                  <div className="m-2 w-8 h-8 rounded-full">
                    <House />
                  </div>
                  <div>
                    <p>Food & Drinks</p>
                    <p className="text-[12px]">14:00</p>
                  </div>
                </div>
                <p className="mr-6">1.000$</p>
              </div>
              <p>Yesterday</p>
              <div className="flex items-center justify-between bg-white rounded-lg">
                <div className="flex items-center py-3 pl-6">
                  <Checkbox className="mr-2" />
                  <div className="m-2 w-8 h-8 rounded-full">
                    <House />
                  </div>
                  <div>
                    <p>Lending & Renting</p>
                    <p className="text-[12px]">14:00</p>
                  </div>
                </div>
                <p className="mr-6">1.000$</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  );
}
