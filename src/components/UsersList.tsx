import { Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddUserModal from "./AddUserModal";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersList = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Dave Richards", email: "dave@mail.com" },
    { id: 2, name: "Abhishek Hari", email: "hari@mail.com" },
    { id: 3, name: "Nitisha Gupta", email: "nitisha@mail.com" },
  ]);

  const handleViewUser = (userId: number) => {
    navigate(`/user/${userId}`);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleAddUser = (userData: { name: string; email: string; contact: string }) => {
    const newUser = {
      id: users.length + 1,
      name: userData.name,
      email: userData.email,
    };
    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Users</h1>
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-primary hover:bg-primary/90">
          + Add user
        </Button>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-secondary">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Sr. No.</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">User name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">E-mail</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-secondary/50 transition-colors">
                <td className="px-6 py-4 text-sm text-foreground">{index + 1}</td>
                <td className="px-6 py-4 text-sm text-foreground">{user.name}</td>
                <td className="px-6 py-4 text-sm text-foreground">{user.email}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => handleViewUser(user.id)}
                      className="p-1.5 hover:bg-secondary rounded transition-colors"
                    >
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="p-1.5 hover:bg-secondary rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddUser}
      />
    </div>
  );
};

export default UsersList;
