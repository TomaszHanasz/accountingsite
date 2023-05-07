import "./App.style.css";
import CustomHeader from "./components/customHeaderFullScreen/CustomHeaderFullScreen";
import NavBar from "./components/navigationBar/NavigationBar";
import CustomButton from "./components/customButton/CustomButton";

const thankYou = () => {
  return alert("Thank You!!");
};

const scheduled = () => {
  return alert("See you tomorrow!!");
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <CustomHeader
        title="Filing taxes can be simple, secure & affordable"
        text="See our experts with convenient filing options for your income tax preparation"
        buttonCall={
          <CustomButton buttonName="Call Us" type="text" onClick={thankYou} />
        }
        buttonSchedule={
          <CustomButton
            buttonName="Schedule an Appointment"
            type="text"
            onClick={scheduled}
          />
        }
      />
    </div>
  );
}

export default App;
