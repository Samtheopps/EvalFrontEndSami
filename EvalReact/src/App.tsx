import './App.css'
import { Route, Routes } from 'react-router-dom'
import {UserList} from "./component/UserList/UserList.tsx";
import UserDetail from "./component/UserDetail/UserDetail.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/user/:id" element={<UserDetail/>}/>
        </Routes>
    </>
  )
}

export default App
