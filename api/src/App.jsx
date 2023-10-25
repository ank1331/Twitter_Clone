import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import Widget from "./Components/Widget";

function App() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      <main>
        <Sidebar />

        <Feed />

        <Widget />
      </main>
    </div>
  );
}

export default App;
