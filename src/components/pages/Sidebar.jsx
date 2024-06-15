"use client";

import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {FaBell} from "react-icons/fa";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import axios from "axios";
import {useEffect, useState} from "react";

function Sidebar() {
  const [chatrooms, setChatrooms] = useState([])

  const getChatrooms = async () => {
    const sellerId = 1;

    try {
      const {data} = await axios.get(`http://127.0.0.1:3001/api/chatrooms/seller/${sellerId}`);
      setChatrooms(data);
    } catch (err) {
      console.error(err);
    }
  }

  const acceptChatroom = async (phoneNumber) => {
    const payload = {
      phone_number: phoneNumber,
      seller_id: 1,
    }

    try {
      const resp = await axios.post('http://127.0.0.1:3001/api/chatrooms', payload)
      console.log(resp)
    } catch (err) {
      console.error(err);
    } finally {
      await getChatrooms()
    }
  }

  const cekWS = async () => {
    const payload = {
      phone_number: '555',
      seller_id: 1,
      action: 'create'
    }

  }

  useEffect(() => {
    getChatrooms();
  }, []);

  return (
    <section className="shadow-lg w-80 min-h-screen py-3 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-around">
          <h1 className="font-semibold text-xl">Daftar Pelanggan</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-lg">
                <FaBell />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white shadow-md">
              <DropdownMenuLabel>Pelanggan Baru</DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuRadioGroup>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="shadow-none">+62 81981389131</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white rounded-md shadow-sm">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Apakah anda ingin memula percakapan dengan +62 81981389131</AlertDialogTitle>
                      <AlertDialogDescription>This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => cekWS()}
                        className="bg-blue-500 text-white hover:text-black border-blue-500 border hover:border-black"
                      >Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="px-4 mt-3 text-slate-500 text-base">Lorem ipsum dolor sit amet consectetur adipisicing</p>
        <nav className="mt-4 px-4">
          <ul className="flex flex-col gap-y-3">
            {chatrooms && chatrooms.map((cr) => (
              <>
                <ListItem>{cr.phone_number}</ListItem>
              </>
            ))}
          </ul>
        </nav>
      </div>
      <div className="px-4">
        <div>
          <p className="mb-3 text-base text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing</p>
        </div>
        <div className="flex items-center justify-center gap-x-5 mt-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-smibold text-lg">Admin123</h1>
        </div>
      </div>
    </section>
  );
}

function ListItem({children}) {
  return (
    <li className="flex items-center space-x-2">
      <Avatar className="w-7 h-7">
        <AvatarImage src="https://github.com/vercel.png" alt="@shadcn"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <a href="#" className="text-md font-semibold">
        {children}
      </a>
    </li>
  );
}

export default Sidebar;
