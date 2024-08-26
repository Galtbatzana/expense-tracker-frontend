const { Checkbox } = require("@/components/ui/checkbox");
import { Categories } from "@/component/Hero/Categories";
import { ButtonDemo } from "../buttons/button-demo";

export const Hero = () => {
    return (
<div className="container mx-auto">
    <div>
        <div>
            <p className="font-bold">Records</p>
            <ButtonDemo/>
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
        <div className="flex">
            <p>Category</p>
            <button>Clear</button>
        </div>
        <div>
            <Categories />
        </div>
    </div>
    <div>
        <p>Amount Range</p>
        <div></div>
        <div>slider</div>
    </div>
</div>

    );
}
