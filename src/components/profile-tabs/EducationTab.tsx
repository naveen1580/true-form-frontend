import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const EducationTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Education Details</h2>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Pencil className="w-4 h-4 text-primary" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">School/College</Label>
              <Input placeholder="e.g. Lincoln College" className="bg-secondary/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Highest degree or equivalent</Label>
              <Input placeholder="e.g. Bachelors in Technology" className="bg-secondary/50" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Course</Label>
              <Input placeholder="e.g. Computer science engineering" className="bg-secondary/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Year of completion</Label>
              <Select>
                <SelectTrigger className="bg-secondary/50">
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Grade</Label>
            <Input placeholder="Enter here" className="bg-secondary/50" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Skills & Projects</h2>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Pencil className="w-4 h-4 text-primary" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Skills</Label>
            <Textarea
              placeholder="Enter here"
              className="bg-secondary/50 min-h-[120px] resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Projects</Label>
            <Textarea
              placeholder="Enter here"
              className="bg-secondary/50 min-h-[120px] resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTab;
