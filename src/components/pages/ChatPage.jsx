import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BubbleChat from "./BubbleChat";
import { useState } from "react";

function ChatPage({ title }) {
  const [chat, setChat] = useState("");
  const [bubbleChat, setBubbleChat] = useState([]);

  const handleAddChat = () => {
    const newChat = {
      id: bubbleChat.length + 1,
      chat: chat,
    };

    setBubbleChat((prev) => [...prev, newChat]);
    setChat("");
    console.log(test);
  };

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  return (
    <div className="flex flex-col border-r justify-between p-5 w-1/2 h-screen">
      <div>
        <div className="pb-5 border-b mb-5">
          <h1 className="text-lxl font-semibold">{title}</h1>
        </div>
        {bubbleChat.map((item) => (
          <BubbleChat key={item.id} chat={item.chat} variant="reciver" />
        ))}
      </div>
      <div className="flex gap-x-5">
        <Input value={chat} onChange={handleChange} className="w-full" type="email" placeholder="Email" />
        <Button onClick={handleAddChat} className="bg-blue-500 rounded text-white">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ChatPage;
