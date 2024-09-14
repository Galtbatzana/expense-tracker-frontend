// import { ChartPie } from "./Chart";
// import { BarChart } from "./BarChart";

import { BarChart1 } from "@/components/BarChart";

function Dashboard() {
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

      <BarChart1 />
    </div>
  );
}
export default Dashboard;
