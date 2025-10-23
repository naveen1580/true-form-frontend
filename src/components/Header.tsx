import { Search, Bell, UserCircle2 } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="border-2 border-foreground px-3 py-1 text-sm font-bold">
              LOGO
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <UserCircle2 className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
