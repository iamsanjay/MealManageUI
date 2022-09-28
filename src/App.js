import {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Login from './Components/Login.jsx';
import UserScreen from './Components/UserScreen.jsx';
import ReportScreen from './Components/AdminReport/ReportScreen.jsx';

function App() {
  
  const [user, setUser] = useState();

  const [view, setView] = useState();

  useEffect(() => {
    if(user){
      setView("admin" == user.username ? <ReportScreen user={user}/> : <UserScreen user = {user}/>)
    } else {
      setView(<Login setUser = {setUser} />)
    }
  }, [user])

 
  
  
  return (
    <div>
      <h1 className="mt-5 mb-20 text-center">Calorie Tracker</h1>
      <hr/>
      {view}
      <hr/>
       {user && <p className="text-center" style={{"cursor":"pointer"}} onClick={() => setUser()}><u>Sign out</u></p>}
    </div>
  );
}

export default App;
