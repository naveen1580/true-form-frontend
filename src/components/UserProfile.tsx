import { UserCircle2, Copy, Pencil } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicInfoTab from "./profile-tabs/BasicInfoTab";
import EducationTab from "./profile-tabs/EducationTab";
import ExperienceTab from "./profile-tabs/ExperienceTab";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="flex items-start gap-8 mb-8">
        <div className="w-32 h-32 rounded-full bg-[hsl(var(--avatar-bg))] flex items-center justify-center flex-shrink-0">
          <UserCircle2 className="w-16 h-16 text-[hsl(var(--avatar-fg))]" />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Dave Richards</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <span>dave@mail.com</span>
            <button className="p-1 hover:bg-secondary rounded transition-colors">
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground">+91 8332083854</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 mb-8">
          <TabsTrigger
            value="basic"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary px-4 py-3"
          >
            Basic Info
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary px-4 py-3"
          >
            Education & skills
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary px-4 py-3"
          >
            Experience
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-0">
          <BasicInfoTab />
        </TabsContent>

        <TabsContent value="education" className="mt-0">
          <EducationTab />
        </TabsContent>

        <TabsContent value="experience" className="mt-0">
          <ExperienceTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
