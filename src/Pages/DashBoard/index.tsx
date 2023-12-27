import ActivityList from "../../Components/ActivityList";
import CalendarWidget from "../../Components/CalendarWidget";
import GoalsWidget from "../../Components/GoalsWidget";
import Sidebar from "../../Components/Sidebar";
import TopBar from "../../Components/TopBar";

function DashBoard() {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <TopBar />

        {/* Widgets */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Lista de atividades */}
            <div className="lg:col-span-2">
              <ActivityList />
            </div>

            {/* Widgets à direita */}
            <div className="lg:col-span-1 grid grid-cols-1 gap-4">
              <CalendarWidget />
              <GoalsWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
