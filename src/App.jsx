import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { ItemShow } from "./ItemShow"
import { Login } from "./Login"
import { UserIndex } from "./UserIndex"
import { UserShow } from "./UserShow"



function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Home />} />
      <Route path="/items/:id" element={<ItemShow />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UserIndex />} />
      <Route path="/users/:id" element={<UserShow/>} />
      {/* <Route path="/user/2" element={<UserShow />} /> */}
      {/* <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogoutLink />} />
      <Route path="/new_product" element={<ItemsNew />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;