const { Checkbox } = require("@/components/ui/checkbox");
import { Categories } from "@/component/Hero/Categories";
import { ButtonDemo } from "../buttons/button-demo";

export const Hero = () => {
    return (
<div className="bg-slate-400">
    <div>
        <div>
            <p>Records</p>
            <ButtonDemo/>
        </div>

        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="flex-col">
            <p>Types</p>
            <div>
                <Checkbox/>
                <p>ALL</p>
            </div>
            <div>
                <Checkbox/>
                <p>Income</p>
            </div>
            <div>
                <Checkbox/>
                <p>Expense</p>
            </div>
        </div>
    </div>
    <div>
        <div>
            <p>Category</p>
            <button>Clear</button>
        </div>
        <div>
            <Categories />
        </div>
    </div>
</div>

    );
}
