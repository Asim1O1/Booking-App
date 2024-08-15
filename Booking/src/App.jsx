import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import HotelList from "./pages/hotelList";
import HotelPage from "./pages/hotel";
import SearchComponent from "./components/searchComp";
import Calendar from "./components/calendar";
import Register from "./components/register";
import "./tailwind.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/hotels" element={<HotelList />}></Route>
          <Route path="/searchComponent" element={<SearchComponent />}></Route>
          <Route path="/hotel/:id" element={<HotelPage />}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
