import axios from "axios";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CiSearch } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

function Sidebar() {
  const [chatrooms, setChatrooms] = useState([]);

  const getChatrooms = async () => {
    const sellerId = 1;

    try {
      const { data } = await axios.get(`http://127.0.0.1:3001/api/chatrooms/seller/${sellerId}`);
      setChatrooms(data);
    } catch (err) {
      console.error(err);
    }
  };

  const acceptChatroom = async (phoneNumber) => {
    const payload = {
      phone_number: phoneNumber,
      seller_id: 1,
    };

    try {
      const resp = await axios.post("http://127.0.0.1:3001/api/chatrooms", payload);
      console.log(resp);
    } catch (err) {
      console.error(err);
    } finally {
      await getChatrooms();
    }
  };

  const cekWS = async () => {
    const payload = {
      phone_number: "555",
      seller_id: 1,
      action: "create",
    };
  };

  useEffect(() => {
    getChatrooms();
  }, []);

  return (
    <section className="shadow-lg font-popins bg-gradient-to-b from-blue-700 text-white to-indigo-600 min-h-screen min-w-72 py-3">
      <div className="flex items-center px-4 -ml-2">
        <img className="w-12 rounded-full" src="../../../src/assets/img/logo.png" alt="" />
        <h1 className="text-xl font-semibold font-popins tracking-widest">UNIITECT</h1>
      </div>
      <div className="mt-4 relative px-4">
        <Button className="absolute shadow-none right-3 text-lg">
          <CiSearch />
        </Button>
        <Input type="text" placeholder="Search" className="bg-slate-400/50 rounded-full border-none" />
      </div>
      <div className="mt-5 flex flex-col justify-between h-[81vh]">
        <div className="mt-3 flex flex-col gap-y-2">
          <ListMenu title={"Home"}>
            <LuHome />
          </ListMenu>
          <ListMenu title={"Users"} active>
            <LuUsers />
          </ListMenu>
          <ListMenu title={"Settings"}>
            <LuSettings />
          </ListMenu>
          <ListMenu title={"Help & Support"}>
            <LuMessageCircle />
          </ListMenu>
        </div>
        <div className="px-4 flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[15px]">Username</p>
              <p className="text-sm font-light">Admin</p>
            </div>
          </div>
          <div className="text-2xl cursor-pointer">
            <LuLogOut />
          </div>
        </div>
      </div>
    </section>
  );
}

function ListMenu({ children, title, active }) {
  return (
    <div className={`px-1 w-full ${active ? "bg-blue-900" : ""} py-2`}>
      <Button className="shadow-none text-xl cursor-pointer">
        {children}
        <span className="mt-1 text-base ml-3">{title}</span>
      </Button>
    </div>
  );
}

export default Sidebar;
