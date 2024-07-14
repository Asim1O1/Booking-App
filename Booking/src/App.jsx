import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import HotelList from "./pages/hotelList";
import HotelPage from "./pages/hotel";
import "./tailwind.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/hotels" element={<HotelList/>}></Route>
          <Route path="/hotel/:id" element={<HotelPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
