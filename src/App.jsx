import CustomHeaderFullScreen from "./components/customHeaderFullScreen/CustomHeaderFullScreen";
import NavBar from "./components/navigationBar/NavigationBar";
import headerImage from "./components/customHeaderFullScreen/laptophand.jpg";
import CountComponent from "./components/countComponent/CountComponent";
import React, { useState } from "react";
import "./App.style.css";

function App() {
  const [count, setCount] = useState(0);

  const onClickHandlerIncrease = () => {
    setCount(count + 10);
    if (count >= 150) {
      setCount(count);
    }
  };

  const onClickHandlerDencrease = () => {
    setCount(count - 10);
    if (count === 0) {
      setCount(count);
    }
  };

  const onClickHandlerReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <NavBar style={{ backgroundColor: `#00243f` }} />
      <CustomHeaderFullScreen
        title="Filing taxes can be simple, secure & affordable"
        text="See our experts with convenient filing options for your income tax preparation"
        image={headerImage}
      />
      <h3 className="count-result">{count}</h3>
      <div className="count-block">
        <CountComponent buttonName={"+ 10"} onClick={onClickHandlerIncrease} />
        <CountComponent buttonName={"- 10"} onClick={onClickHandlerDencrease} />
        <CountComponent buttonName={"Reset"} onClick={onClickHandlerReset} />
      </div>
    </div>
  );
}

export default App;
