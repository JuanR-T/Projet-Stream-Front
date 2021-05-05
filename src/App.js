import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Auth from './Components/Auth';
import Streams from './Components/Streams';
import Games from './Components/Games';
import {Route,Link} from "react-router-dom";

function App() {
  return (
    <div >
      <Navbar />
      <Route exact path="/" component={Hero} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/streams" component={Streams} />
      <Route exact path="/games" component={Games} />

    </div>
  );
};

export default App;
