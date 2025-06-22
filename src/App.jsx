import "./App.css";
import { Tabs } from "./components/TabsComponent";
import { tabs } from "./constants/tabs";

function App() {
  return (
    <div className="max-w-screen flex m-0 p-3 gap-4 h-screen bg-stone-900 flex-row xl:flex-col overflow-hidden">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
