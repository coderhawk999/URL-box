import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Search from "./pages/Search";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            component={() => {
              return <Redirect to="/search" />;
            }}
          />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
