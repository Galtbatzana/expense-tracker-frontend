import { useState } from "react";
import { Check } from "lucide-react";

const categoriesColors = [
    {
        name: "blue", 
        value: "#0166FF",
    },
    {
        name: "sky", 
        value: "#01B3FF",
    },
    {
        name: "green", 
        value: "#41CC00",
    },
    {
        name: "yellow", 
        value: "#F9D100",
    },
    {
        name: "orange", 
        value: "#FF7B01",
    },
    {
        name: "purple", 
        value: "#AE01FF",
    },
    {
        name: "red", 
        value: "#FF0101",
    },
];

export const CatergoriesColors = () => {
    const [color, setColor] = useState();
   
    return (
        <div className="flex gap-2 m-2">
            {categoriesColors.map(({name, value})=>(
                <div key={name} onClick={()=>setColor(name)} className="w-8 h-8 rounded-full text-white flex items-center justify-center" style={{backgroundColor: value}}>
                    {color === name && <Check className="w-4 h-4"/>}
                </div>
            ))}
        </div>
    );
}

