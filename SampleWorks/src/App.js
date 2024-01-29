  import React from "react";
  import Navbar from "./Nav/Navbar";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import DashBoard from "./screens/DashBoard";
  import Dummy from "./screens/dummy";
import Form from "./screens/Form";
import DynamicUseEffectExample from "./screens/DynamicEffect";


  function App() {
    return (
      <div>
        {/* <BrowserRouter> */}
        {/* <Router>
          <Routes>
            <Route path="/" element={<DashBoard />} />    
              <Route path="/dummy" element={<Dummy />} />
              <Route path="/form" element={<Form />} />
              <Route path="" element="" />
              <Route path="" element="" />
          </Routes>
        </Router> */}

        {/* </BrowserRouter> */}
        <DynamicUseEffectExample />
      </div>
    )
  }

  export default App;
