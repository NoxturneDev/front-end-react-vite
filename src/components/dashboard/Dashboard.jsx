import Sidebar from "../pages/Sidebar";
import ChatPage from "../pages/ChatPage";
import ChatPageUser from "@/components/pages/ChatPageUser.jsx";

function Dashboard() {
  return (
    <section className="flex">
      <Sidebar />
      <ChatPageUser title={"081981389131"} />
      <ChatPage bg title={"Helper AI"} type={"AI"}/>
    </section>
  );
}

export default Dashboard;
