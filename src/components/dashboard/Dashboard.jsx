import Sidebar from "../pages/Sidebar";
import ChatPage from "../pages/ChatPage";
import ChatMenu from "../pages/ChatMenu";

function Dashboard() {
  return (
    <section className="flex">
      <Sidebar />
      <ChatMenu />
      <ChatPage title={"084672655738"} />
    </section>
  );
}

export default Dashboard;
