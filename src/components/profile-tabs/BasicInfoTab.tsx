import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const BasicInfoTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Basic Details</h2>
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <Pencil className="w-4 h-4 text-primary" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">First name</Label>
          <Input placeholder="e.g. John" defaultValue="" className="bg-secondary/50" />
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Last name</Label>
          <Input placeholder="e.g. Doe" defaultValue="" className="bg-secondary/50" />
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Email ID</Label>
          <Input placeholder="e.g. introduction@mail.com" defaultValue="" className="bg-secondary/50" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Date of Birth</Label>
          <Select>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder="YYYY" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2000">2000</SelectItem>
              <SelectItem value="1999">1999</SelectItem>
              <SelectItem value="1998">1998</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Gender</Label>
          <Select>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Phone number</Label>
          <div className="flex gap-2">
            <Select defaultValue="in">
              <SelectTrigger className="w-20 bg-secondary/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in">🇮🇳</SelectItem>
                <SelectItem value="us">🇺🇸</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="8332083854" defaultValue="8332083854" className="bg-secondary/50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Alternate Phone no.</Label>
          <Input placeholder="e.g. 9876543210" defaultValue="" className="bg-secondary/50" />
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Pincode</Label>
          <Input placeholder="Enter here" defaultValue="" className="bg-secondary/50" />
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Domain state</Label>
          <Select>
            <SelectTrigger className="bg-secondary/50">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="karnataka">Karnataka</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Address</Label>
        <Textarea
          placeholder="Enter here"
          className="bg-secondary/50 min-h-[100px] resize-none"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Domain country</Label>
        <Select>
          <SelectTrigger className="bg-secondary/50">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="usa">USA</SelectItem>
            <SelectItem value="uk">UK</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BasicInfoTab;
