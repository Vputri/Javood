import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import ComingSoon from "./containers/ComingSoon";
import Home from "./containers/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Menu" component={ComingSoon} exact />
          <Route path="/Profil" component={ComingSoon} exact />
          <Route path="/FAQ" component={ComingSoon} exact />
          <Route path="/Kontak" component={ComingSoon} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;