import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BookStore from "./components/BookStore";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={BookStore} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
