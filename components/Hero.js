import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Categories } from "./Categories";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Carousel } from "./ui/carousel";
import { House, Icon } from "lucide-react";
import { CatergoriesIcons } from "./CategoriesIcon";
import { CatergoriesColors } from "./CategoriesColor";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";



export const Hero = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

console.log(name);

  return (
    <div className="container mx-auto flex bg-[#E5E7EB]">
      <div className="w-[282px] mx-4 bg-white">
        <div className="mx-3">
          <div className="mb-3">
            <p className="font-bold mb-3 mt-6">Records</p>
            <Button
              variant="secondary"
              className="bg-[#0166FF] text-white rounded-full px-4 w-full" onClick={()=>setOpen(true)}
            >
              + Add Category
            </Button>
              <Dialog open={open}>
                <DialogTrigger asChild>
                  {/* <Button variant="outline">Edit Profile</Button> */}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Categories</DialogTitle>
                  </DialogHeader>
                  <div className="flex gap-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="secondary">
                          <House />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <CatergoriesIcons />
                        <CatergoriesColors />
                      </PopoverContent>
                    </Popover>
                    <Input value={name} onChange={(event)=>setName(event.target.value)} />
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => setOpen(false)}
                      type="submit"
                      className="w-full rounded-full bg-green-600 hover:bg-green-900"
                    >
                      Add
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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

          <Categories />

          <div>
            <div>+ Add Category</div>
          </div>
        </div>
        <div className="mx-3">
          <p>Amount Range</p>
          <div className="flex gap-2 mt-3">
            <Input className="bg-[#E5E7EB]" placeholder="0"/>
            <Input className="bg-[#E5E7EB]" placeholder="100"/>
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
                <Checkbox className="mr-2"/>
                <p>Select all</p>
              </div>
              <p className="pr-6">35.500$</p>
            </div>
            <p>Today</p>
            <div className="flex items-center justify-between bg-white rounded-lg">
              <div className="flex items-center py-3 pl-6">
                <Checkbox className="mr-2"/>
                <div className="m-2 w-8 h-8 rounded-full"><House /></div>
                <div>
                  <p >Lending & Renting</p>
                  <p className="text-[12px]">14:00</p>
                </div>
              </div>
              <p className="pr-6">1.000$</p>
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg">
              <div className="flex items-center py-3 pl-6">
                <Checkbox className="mr-2"/>
                <div className="m-2 w-8 h-8 rounded-full"><House /></div>
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
                <Checkbox className="mr-2"/>
                <div className="m-2 w-8 h-8 rounded-full"><House /></div>
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
  );
};
