import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import BubbleChat from "./BubbleChat";
import {useEffect, useState} from "react";
import {FaCheck} from "react-icons/fa";

function ChatPage({title, bg, type}) {
  const [aiLoading, setAILoading] = useState(false)
  const [socket, setSocket] = useState(null)
  const [chat, setChat] = useState("");
  const [bubbleChat, setBubbleChat] = useState([]);
  const chatHistory = [];

  const handleAddChat = () => {
    const newChat = {
      id: bubbleChat.length + 1,
      chat: chat,
      type: "sender",
      prompt_type: "user",
    }

    sendChat(newChat);
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
      connectWebSocket()
    }
  }

  const sendChat = (chatObj) => {
    const temp = {
      phoneNumber: "123",
      message: chat,
      prompt: chat,
      prompt_type: chatObj.prompt_type,
    }

    socket.send(JSON.stringify(temp))
    setAILoading(true)
  }

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
        type: "receiver"
      };

      setBubbleChat((prev) => [...prev, newChat]);
      setChat(" ")
      setAILoading(false)
    }

  }, [socket, chat]);

  return (
    <>
      <div
        className={`flex flex-col border-r ${bg ? "bg-slate-100" : "bg-transparent"} justify-between w-1/2 h-screen overflow-y-scroll relative`}>
        <div className="p-5">
          <div
            className={`flex flex-col justify-center items-start py-5 border-b mb-5 sticky top-0 ${bg ? "bg-slate-100" : "bg-white"} z-100`}>
            <div className="flex justify-start items-center gap-2">
              <h1 className="text-lxl font-semibold">{title}</h1>
              {socket && (
                <FaCheck color="blue"/>
              )}
            </div>
            {aiLoading === true ? 'Typing...' : ''}
          </div>
          {bubbleChat.map((item) => (
            <BubbleChat key={item.id} chat={item.chat} variant={item.type}/>
          ))}
        </div>
        <div className="flex flex-col gap-5 bg-white px-5 py-3 sticky bottom-0">
          <div className="flex gap-x-5 bg-white px-5 py-3 sticky bottom-0">
            <Input disabled={aiLoading} value={chat} onChange={handleChange}
                   className="w-full rounded placeholder:text-slate-400" type="test"
                   placeholder="Type yout message here"/>
            <Button onClick={handleAddChat} className="bg-blue-500 rounded text-white">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  )
    ;
}

export default ChatPage;
