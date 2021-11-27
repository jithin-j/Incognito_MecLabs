
import Main from "./components/incognito/Main";
import { BrowserRouter as Router ,Route ,Routes} from "react-router-dom";
import Login from '../src/components/incognito/Login'
import Signup from '../src/components/incognito/Signup'
function App() {
  return (
    <div className="App">


<Router>

<Routes>
  <Route path="/" element={<Main />} exact>
</Route>

<Route path="/login" element={< Login/>} exact>
</Route>


<Route path="/signup" element={<Signup />} exact>
</Route>



  </Routes>
</Router>


      
    </div>
  );
}

export default App;
