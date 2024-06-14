import Sidebar from "../pages/Sidebar";
import ChatPage from "../pages/ChatPage";

function Dashboard() {
  return (
    <section className="flex">
      <Sidebar />
      <ChatPage title={"+62 818091816"} />
      <ChatPage title={"Helper AI"} />
    </section>
  );
}

export default Dashboard;
