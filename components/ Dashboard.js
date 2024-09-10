import { House } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";


// import { ChartPie } from "./Chart";
// import { BarChart } from "./BarChart";


export default function Dashboard() {
  


  return (
    <div className="container mx-auto flex flex-col bg-[#F3F4F6] max-w-[1440px ">
      <div className="flex gap-6">
        <div className="w-[384px] h-[216px] bg-[#0166FF] text-white rounded-lg">
          <p>Geld</p>
          <p>Cash</p>
          <p>$10.000,00</p>
        </div>

        <div className="w-[384px] h-[216px] bg-white text-black rounded-lg">
          <p>Your income</p>
          <p>1.200.000₮</p>
          <p>Your income amount</p>
          <p>32% from last month</p>
        </div>

        <div className="w-[384px] h-[216px] bg-white text-black rounded-lg">
          <p>Your income</p>
          <p>1.200.000₮</p>
          <p>Your income amount</p>
          <p>32% from last month</p>
        </div>
      
      </div>

      <div>
       BarChart
       PieChart
      </div>

      <div>
        <p>Last Records</p>
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
  );
}
