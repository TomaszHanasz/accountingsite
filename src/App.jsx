import CustomHeaderFullScreen from "./components/customHeaderFullScreen/CustomHeaderFullScreen";
import NavBar from "./components/navigationBar/NavigationBar";
import headerImage from "./components/customHeaderFullScreen/laptophand.jpg";
import "./App.style.css";

function App() {
  return (
    <div className="App">
      <NavBar style={{ backgroundColor: `#00243f` }} />
      <CustomHeaderFullScreen
        title="Filing taxes can be simple, secure & affordable"
        text="See our experts with convenient filing options for your income tax preparation"
        image={headerImage}
      />
    </div>
  );
}

export default App;
