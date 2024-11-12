import {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from "./page/main/Main"
import ComponentsPage from "./components/componentsPage/ComponentsPage"
import ComponentsAdd from "./components/componentsAdd/ComponentsAdd"
import Login from "./page/login/Login"
import UserInfo from "./components/userInfo/UserInfo"
import CategoryPage from "./components/categoryPage/CategoryPage"
import ParametrAdd from "./components/parametrsAdd/ParametrAdd"
import UsersPage from "./components/usersPage/UsersPage"
import ParametrType from "./components/parametrtype/ParametrType"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/category" element={<ComponentsPage/>}/>
        <Route path="/componentsAdd" element={<ComponentsAdd/>}/>
        <Route path="/userInfo" element={<UserInfo/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/parametrs" element={<CategoryPage/>}/>
        <Route path="/parametrAdd" element={<ParametrAdd/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/parametrType" element={<ParametrType/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App