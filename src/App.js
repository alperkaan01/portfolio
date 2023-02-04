import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Navbar></Navbar> 
      <Routes>
        <Route path="/">
            <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
