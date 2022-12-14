import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header}  from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { ItemShow } from "./ItemShow"
import { Login } from "./Login"
import { UserIndex } from "./UserIndex"
import { UserShow } from "./UserShow"
import { ListIndex } from "./ListIndex"
import { ListShow } from "./ListShow"
import { DiscogTest } from "./DiscogTest"
import { Signup } from "./Signup"
import { ProfileShow } from "./ProfileShow"



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
      <Route path="/users/:id" element={<UserShow />} />
      <Route path="/lists" element={<ListIndex />} />
      <Route path="/lists/:id" element={<ListShow />} />
      <Route path="/discogtest" element={<DiscogTest />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<ProfileShow />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;