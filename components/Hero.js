
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Categories } from "./Categories";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Carousel } from "./ui/carousel";
import { House, Icon } from "lucide-react";
import { CatergoriesIcons } from "./CategoriesIcon";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CatergoriesColors } from "./CategoriesColor";




export const Hero = () => {
    const [open, setOpen] = useState(false);

    return (
<div className="container mx-auto">
    <div className="container mx-auto flex">
        <div>
            <div>
                <div>
                    <p className="font-bold">Records</p>
                    <Button/>
                </div>

                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                <div className="flex-col">
                    <p>Types</p>
                    <div className="flex items-center gap-2">
                        <Checkbox className="rounded-full"/>
                        <p>ALL</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox className="rounded-full"/>
                        <p>Income</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox className="rounded-full"/>
                        <p>Expense</p>
                    </div>
                </div>
            </div>
            <div className="flex-col">
                <div className="flex justify-between">
                    <p>Category</p>
                    <button>Clear</button>
                </div>
                <div>
                    <Categories/>
                </div>
                <div>
                    <div onClick={ () => setOpen(true) }>+</div>
                    <Dialog open={open}>
                        <DialogTrigger asChild>
                            <Button variant="outline">Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Categories</DialogTitle>
                            </DialogHeader>
                            <div className="flex gap-4">
                                
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="secondary"><House /></Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className="grid grid-cols-6">
                                             {CatergoriesIcons(Icon)}   
                                        </div>
                                        <div className="grid grid-cols-7">
                                             {CatergoriesColors}   
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                <Input defaultValue="Name"/>
                            </div>
                            <DialogFooter>
                            <Button onClick={()=> setOpen(false)} type="submit"  className="w-full rounded-full bg-green-600 hover:bg-green-900">Add</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <p>Add Category</p>
                </div>
            </div>
            <div>
                <p>Amount Range</p>
                <div className="flex">
                    <Input/>
                    <Input/>
                </div>
                <div><Slider/></div>
            </div>
        </div>
        <div>
            <div>
                <div><Carousel/> last 30 days</div>
                <div><Input/> Newest fisrt</div>
            </div>
            <div>
                <div className="flex-col">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center">
                            <Checkbox/>
                            <p>Select all</p>
                        </div>
                        <p>35.500$</p>
                    </div>
                    <p>Today</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox/>
                            <div>icon</div>
                            <div>
                                <p>Lending & Renting</p>
                                <p>14:00</p>
                            </div>
                        </div>
                        <p>1.000$</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox/>
                            <div>icon</div>
                            <div>
                                <p>Food & Drinks</p>
                                <p>14:00</p>
                            </div>
                        </div>
                        <p>1.000$</p>
                    </div>
                    <p>Yesterday</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Checkbox/>
                                <div>icon</div>
                                <div>
                                    <p>Lending & Renting</p>
                                    <p>14:00</p>
                                </div>
                            </div>
                            <p>1.000$</p>
                        </div>
                </div>
            </div>
        </div>
    </div>      
</div>

    );
}
