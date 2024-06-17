import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LuMessageCircle } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { LuCheck } from "react-icons/lu";
import { LuX } from "react-icons/lu";

function ChatMenu() {
  return (
    <section className="bg-white shadow-xl font-popins tracking-wider pt-5">
      <div className="flex items-center px-4 gap-x-3 mb-6">
        <LuMessageCircle className="text-3xl" />
        <h1 className="text-xl font-semibold">Customer Chat</h1>
      </div>
      <div className="my-5 relative px-4">
        <Button className="absolute shadow-none right-3 text-lg">
          <CiSearch />
        </Button>
        <Input type="text" placeholder="Search" className="bg-slate-300/30 rounded-full border-none" />
      </div>
      <Tabs defaultValue="customer" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger className="data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-blue-700 data-[state=active]:text-blue-700 pb-3 " value="customer">
            Accepted
          </TabsTrigger>
          <TabsTrigger className="data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-blue-700 data-[state=active]:text-blue-700 pb-3 " value="pending">
            Pending
          </TabsTrigger>
          <TabsTrigger className="data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-blue-700 data-[state=active]:text-blue-700 pb-3 " value="ended">
            Ended
          </TabsTrigger>
        </TabsList>
        <TabsContent value="customer">
          <User no="084672655738" message="saya membutuhkan meja dengan ukuran 10x10" />
          <User no="089354662435" message="Saya ingin membuat kursi" badge />
          <User no="084523622639" message="Halo" badge />
        </TabsContent>
        <TabsContent value="pending">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div>
                <User no="082531112536" message="Hallo UNIITECT" />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>Apakah anda yakin</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-700 text-white hover:text-red-700 border-red-700">Reject</AlertDialogCancel>
                <AlertDialogAction className="bg-green-500 text-white border-green-500 border shadow-none hover:text-green-500">Accept</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TabsContent>
        <TabsContent value="ended">
          <Card className="shadow-none border-none">
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>e logged out.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">opopopop</div>
              <div className="space-y-1"></div>
              opopopo
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function User({ no, message, badge }) {
  return (
    <>
      <div className="py-5 cursor-pointer border-b border-slate-300 w-full font-popins gap-x-4 flex items-center px-4">
        <div className="w-[10%]">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-[65%]">
          <h1 className="text-base font-semibold">{no}</h1>
          <p className="text-xs truncate">{message}</p>
        </div>
        <div className="w-[20%] text-end flex flex-col items-center">
          <p className="text-[10px]">12.00</p>
          {badge && <Badge className="shadow-none bg-blue-700 text-white rounded-full">1</Badge>}
        </div>
      </div>
    </>
  );
}

export default ChatMenu;
