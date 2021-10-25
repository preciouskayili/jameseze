import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BookStore from "./components/BookStore";
import Gallery from "./components/Gallery";
import Audio from "./components/Audio";
import Video from "./components/Videos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={BookStore} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/audio" exact component={Audio} />
          <Route path="/video" exact component={Video} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
