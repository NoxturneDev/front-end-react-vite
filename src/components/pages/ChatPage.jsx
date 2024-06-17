import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BubbleChat from "./BubbleChat";
import { useEffect, useState } from "react";

const senderChat = ["Balasan"];

const AIChat = [
  "Saya membutuhkan meja dengan ukuran 10x10 untuk ruang tamu saya",
];

function ChatPage({ title, bg }) {
  const [socket, setSocket] = useState(null);
  const [chat, setChat] = useState("");
  const [bubbleChat, setBubbleChat] = useState([]);
  const [replies, setReplies] = useState([]);

  const handleAddChat = () => {
    const newChat = {
      id: bubbleChat.length + 1,
      chat: chat,
      type: "sender",
    };

    sendChat(chat);
    setBubbleChat((prev) => [...prev, newChat]);
    setChat("");
  };

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  const connectWebSocket = () => {
    const s = new WebSocket("ws://127.0.0.1:3001/ws/ai?phoneNumber=123");

    s.onopen = () => {
      console.log("Connected to websocket");
      setSocket(s);
    };
    s.onclose = () => {
      console.log("Disconnected from websocket");
      setSocket(null);
    };
  };

  const sendChat = () => {
    const temp = {
      phoneNumber: "123",
      message: chat,
      prompt: chat,
    };

    socket.send(JSON.stringify(temp));
  };

  useEffect(() => {
    connectWebSocket();
  }, []);

  useEffect(() => {
    if (socket === null) return;

    socket.onmessage = (msg) => {
      console.log(msg.data);
      const newChat = {
        id: bubbleChat.length + 1,
        chat: JSON.parse(msg.data),
        type: "receiver",
      };
      setBubbleChat((prev) => [...prev, newChat]);
      setChat(" ");
    };
  }, [socket, chat]);

  return (
    <>
      <div className={`flex flex-col border-r ${bg ? "bg-slate-100" : "bg-transparent"} justify-between h-screen overflow-y-scroll relative w-full`}>
        <div className="p-5">
          <div className={`py-5 border-b mb-5 sticky top-0 ${bg ? "bg-slate-100" : "bg-white"} z-100`}>
            <h1 className="text-lxl font-semibold">{title}</h1>
          </div>
          {/* {bubbleChat.map((item) => (
            <BubbleChat key={item.id} chat={item.chat} variant={item.type}/>
          ))} */}
          <BubbleChat chat={AIChat} variant={"receiver"} />
          <BubbleChat chat={senderChat} variant={"sender"} />
        </div>
        <div className="flex gap-x-5 bg-white px-5 py-3 sticky bottom-0">
          <Input value={chat} onChange={handleChange} className="w-full rounded placeholder:text-slate-400" type="test" placeholder="Type yout message here" />
          <Button onClick={handleAddChat} className="bg-blue-500 rounded text-white">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
