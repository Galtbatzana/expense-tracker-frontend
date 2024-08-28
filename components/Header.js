import { Button } from "./ui/button"

export const Header = () => {
    return (
        <div>
            <div className="container mx-auto flex justify-between items-center bg-white">
                <div className="flex gap-2 mx-9">
                    <img src="../images/Vector.png"></img>
                    <p className="mx-6">Dashboard</p>
                    <p className="font-bold">Record</p>
                </div>
                <div className="flex gap-2 justify-center items-center py-4">
                    <Button variant="secondary" className="bg-[#0166FF] text-white rounded-full px-4 w-full mr-6">
                        + Add Record
                    </Button>
                    <img src="../images/Placeholder.png"></img>
                </div>
            </div>
        </div>
    );
}