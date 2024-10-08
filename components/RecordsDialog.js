import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RadioGroup } from "@radix-ui/react-context-menu";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export function RecordsDialog() {
  const [date, setDate] = useState();
  const searchParams = useSearchParams();
  const create = searchParams.get("create");
  const [addRecordsOpen, setaddRecordsOpen] = useState(false);
  const [time, setTime] = useState();
  const expense = "EXPENSE";
  const income = "INCOME";
  const [show, setShow] = useState("");
  const [transAction, setTransAction] = useState();

  function createTransaction () {
    
  } 
  // cosnt [selected, setSelected] = useState("EXPENSE");
  // const expense = "EXPENSE";
  // const income = "INCOME";

  // code oo deerees ni doosh unshih, sain oilgoh, console.log -oor shalgah, //
  // useEffect oruulj 1 udaa //
  useEffect(() => {
    if (create === "New") {
      setaddRecordsOpen(true);
    }
  }, [create]);

  // console.log(time);

  return (
    <div>
      <Dialog open={addRecordsOpen}>
        <DialogContent
          onClose={() => setaddRecordsOpen(false)}
          className="sm:max-w-[792px]"
        >
          <DialogHeader>
            <DialogTitle>Add Records</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex gap-4">
            <div className="flex flex-col flex-1 gap-4 m-4">
              <RadioGroup>
                <div className="flex">
                  <Button
                    onClick={() => setShow(expense)}
                    variant="secondary"
                    className={`${
                      show === expense
                        ? "bg-[#16A34A] text-white"
                        : "bg-[#D1D5DB] text-white"
                    } rounded-full px-4 w-full`}
                  >
                    INCOME
                  </Button>
                  <Button
                    onClick={() => setShow(income)}
                    variant="secondary"
                    className={`${
                      show === income
                        ? "bg-[#0166FF] text-white"
                        : "bg-[#D1D5DB] text-white"
                    } rounded-full px-4 w-full`}
                  >
                    EXPENSE
                  </Button>
                </div>
              </RadioGroup>
              <div>
                <Input
                  id="username"
                  defaultValue="Insert Amount"
                  className="bg-[#D1D5DB] rounded-md"
                />
              </div>
              <p>Category</p>
              <Select>
                <SelectTrigger className="w-[180px] bg-[#D1D5DB]">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center justify-between">
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-44 justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                      <Select
                        onValueChange={(value) =>
                          setDate(addDays(new Date(), parseInt(value)))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="0">Today</SelectItem>
                          <SelectItem value="1">Tomorrow</SelectItem>
                          <SelectItem value="3">In 3 days</SelectItem>
                          <SelectItem value="7">In a week</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="rounded-md border">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Input
                    aria-label="Time"
                    type="time"
                    onChange={(event) => setTime(event.target.value)}
                    className="rounded-md border p-1.5"
                  />
                </div>
              </div>
              <Button onClick={createTransaction()}
                variant="secondary"
                className={`
                  ${
                    show === expense
                      ? "bg-[#16A34A] text-white"
                      : "bg-[#0166FF] text-white"
                  } rounded-full px-4 w-full`}
              >
                Add Records
              </Button>
            </div>
            <div className="flex flex-col flex-1 gap-4 m-4">
              <p>Payee</p>
              <Select>
                <SelectTrigger className="w-[180px] bg-[#D1D5DB]">
                  <SelectValue placeholder="Write here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <p>Note</p>
              <Textarea />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
