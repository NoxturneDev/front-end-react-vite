import Sidebar from "../pages/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Dashboard() {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex flex-col justify-between p-5 w-full">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-x-5">
          <Input className="w-full" type="email" placeholder="Email" />
          <Button className="bg-blue-500 rounded text-white">Submit</Button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
