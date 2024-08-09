import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/sidenav/SideNav";
import Stories from "./components/stories/Stories";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="App">
      <main className="app-container">
        <SideNav />
        <div className="main-section">
          <Navbar />
          <Stories />
          <Feed />
        </div>
      </main>
    </div>
  );
}

export default App;
