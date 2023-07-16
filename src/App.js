import Home from "./pages/home/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/singe/Single";
import List from "./pages/list/List";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="list" element={<List />} />

            <Route path="new" element={<New />} />
            <Route path="singe" element={<Single />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
