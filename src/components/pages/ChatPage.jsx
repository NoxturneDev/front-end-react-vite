import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import BubbleChat from "./BubbleChat";
import {useEffect, useState} from "react";

const senderChat = [
  "buatkan aku paragraf mengenai design interior yang minimalis, aman untuk anak kecil, dan ergonomis"
]

const AIChat = [
  "Desain interior minimalis yang aman untuk anak kecil dan ergonomis adalah kombinasi yang harmonis antara estetika dan fungsi. Penekanan pada garis-garis bersih dan ruang terbuka menciptakan lingkungan yang luas dan minim kekacauan, sementara penggunaan bahan yang ramah anak dan penempatan furnitur yang cermat memastikan keamanan dan kenyamanan. Permukaan yang halus, sudut yang membulat, dan penyimpanan yang mudah diakses meminimalkan risiko cedera, sedangkan tinggi meja dan kursi yang disesuaikan dengan usia anak mendukung postur yang baik dan mendorong kemandirian. Desain ini menciptakan ruang yang tenang dan merangsang, di mana anak-anak dapat bermain, belajar, dan berkembang dengan aman dan nyaman."
]

function ChatPage({title}) {
  const [socket, setSocket] = useState(null)
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
    const s = new WebSocket("ws://127.0.0.1:3001/ws/ai?phoneNumber=123")

    s.onopen = () => {
      console.log("Connected to websocket");
      setSocket(s)
    }
    s.onclose = () => {
      console.log("Disconnected from websocket");
      setSocket(null)
    }
  }

  const sendChat = () => {
    const temp = {
      phoneNumber: "123",
      message: chat,
      prompt: chat,
    }

    socket.send(JSON.stringify(temp))
  }

  useEffect(() => {
    connectWebSocket();
  }, []);

  useEffect(() => {
    if(socket === null) return;

    socket.onmessage = (msg) => {
      console.log(msg.data);
      const newChat = {
        id: bubbleChat.length + 1,
        chat: JSON.parse(msg.data),
        type: "receiver"
      };
      setBubbleChat((prev) => [...prev, newChat]);
      setChat(" ")
    }
  }, [socket, chat]);

  return (
    <div className="flex flex-col border-r justify-between p-5 w-1/2 h-screen">
      <div>
        <div className="pb-5 border-b mb-5">
          <h1 className="text-lxl font-semibold">{title}</h1>
        </div>
        {bubbleChat.map((item) => (
          <BubbleChat key={item.id} chat={item.chat} variant={item.type}/>
        ))}
      </div>
      <div className="flex gap-x-5">
        <Input value={chat} onChange={handleChange} className="w-full" type="email" placeholder="Email"/>
        <Button onClick={() => handleAddChat()} className="bg-blue-500 rounded text-white">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ChatPage;
