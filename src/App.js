import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="mx-auto  max-w-4xl">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogdetail/:id">
            <BlogDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
