import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStatsStore } from "@/stores/statistics-store";
import { useState } from "react";


export function SubmitDialog() {
  const [open, setOpen]=useState(false);
  const { rank, percentile, score, setRank, setPercentile, setScore } = useStatsStore();
  const handleScore=(e: any)=>{
    e.preventDefault();
    if(e.target.value>15){
      return alert("Score must be greater than 15.");
    }
    setScore(e.target.value);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-purple-700 text-white text-lg h-10">Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white text-lg">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">Update Scores</DialogTitle>
          <DialogDescription>
            Make changes to the data here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center gap-4">
            <Label htmlFor="rank" className="text-left text-lg w-full">
              Update Your <span className="font-bold">Rank</span>:
            </Label>
            <Input
              id="rank"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="w-[10rem]"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <Label htmlFor="percentile" className="text-left text-lg w-full">
              Update Your <span className="font-bold">Percentile</span>:
            </Label>
            <Input
              id="percentile"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="w-[10rem]"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <Label htmlFor="score" className="text-left text-lg w-full">
              Update Your <span className="font-bold">Current Score (out of 15)</span>:
            </Label>
            <Input
              id="score"
              value={score}
              onChange={handleScore}
              className="w-[10rem]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={()=> setOpen(false)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
