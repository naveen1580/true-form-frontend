import { Pencil, FileText, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ExperienceTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Work Experience</h2>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Pencil className="w-4 h-4 text-primary" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Domain</Label>
              <Input placeholder="e.g. Technology" className="bg-secondary/50" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Sub-domain</Label>
                <Input placeholder="e.g. MERN Stack" className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Experience</Label>
                <Select>
                  <SelectTrigger className="bg-secondary/50">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Domain</Label>
              <Input placeholder="e.g. Technology" className="bg-secondary/50" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Sub-domain</Label>
                <Input placeholder="e.g. MERN Stack" className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Experience</Label>
                <Select>
                  <SelectTrigger className="bg-secondary/50">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">LinkedIn</h2>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Pencil className="w-4 h-4 text-primary" />
            </button>
          </div>
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">URL</Label>
            <Input placeholder="linkedin.com/in/linkedin" className="bg-secondary/50" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Resume</h2>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Pencil className="w-4 h-4 text-primary" />
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">myresume.pdf</span>
            </div>
            <button className="px-3 py-1 text-sm text-primary hover:bg-background rounded transition-colors">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
