import Chat from "./components/chat";
import Login from "./components/login";
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "./context/authContextProvider";
import {useContext} from "react";

function App() {


    const {isAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Routes>
                {isAuth && <Route path={"*"} element={<Chat/>}/>}
                {!isAuth && <Route path={"*"} element={<Login/>}/>}
            </Routes>
        </div>
    );
}

export default App;
