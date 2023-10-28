import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import Widget from "./Components/Widget";

function App() {
  return (
    <div className="flex min-h-screen  mx-auto">
      <main className="flex">
        <Sidebar />

        <Feed />

        <Widget />
      </main>
    </div>
  );
}

export default App;
