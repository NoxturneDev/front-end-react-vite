import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Sidebar() {
  return (
    <section className="shadow-lg w-80 min-h-screen py-3 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-around">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-semibold text-xl">Aplikasi Keuangan</h1>
        </div>
        <p className="px-7 mt-3 text-base">Lorem ipsum dolor sit amet consectetur adipisicing</p>
        <nav className="mt-4 px-7">
          <ul className="flex flex-col gap-y-3">
            <ListItem>Home</ListItem>
            <ListItem>Pengaturan</ListItem>
            <ListItem>Pnghitngan</ListItem>
            <ListItem>Penghjasilan</ListItem>
            <ListItem>Apakek</ListItem>
          </ul>
        </nav>
      </div>
      <div className="px-7">
        <div>
          <p className="mb-3 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing</p>
          <Button className="bg-blue-500 rounded-md w-full text-white">Coba Sekarang</Button>
        </div>
        <div className="flex items-center justify-around mt-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-smibold text-2xl">USername 122</h1>
        </div>
      </div>
    </section>
  );
}

function ListItem({ children }) {
  return (
    <li className="flex items-center space-x-2">
      <Avatar className="w-7 h-7">
        <AvatarImage src="https://github.com/vercel.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <a href="#" className="text-lg font-semibold">
        {children}
      </a>
    </li>
  );
}

export default Sidebar;
