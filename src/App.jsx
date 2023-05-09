import CustomHeaderFullScreen from "./components/customHeaderFullScreen/CustomHeaderFullScreen";
import NavBar from "./components/navigationBar/NavigationBar";
import LogoImage from "./components/logoImage/LogoImage";
import logo from "./thlogowhite.png";
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
      <LogoImage src={logo} className="big-logo" alt="big-logo" />
    </div>
  );
}

export default App;
