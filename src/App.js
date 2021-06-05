import "reactjs-popup/dist/index.css";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Index from "./pages/index";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Index} exact={true} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
