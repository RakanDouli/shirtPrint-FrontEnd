import { Switch, Route } from "react-router-dom";
import ProductDetail from "./components/productDetails";
import UserSignup from "./Pages/UserSignup";
import UserLogin from "./Pages/UserLogin";
import DesignerSignup from "./Pages/DesignerSignup";
import DesignerLogin from "./Pages/DesignerLogin";
import Navigation from "./components/Navigation";
import "../src/Styles/app.scss";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./components/footer";
import Modal from "react-modal";
Modal.setAppElement("#root");
function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/designer/signup" component={DesignerSignup} />
        <Route path="/designer/login" component={DesignerLogin} />
        <Route path="/user/signup" component={UserSignup} />
        <Route path="/user/login" component={UserLogin} />
        <Route path="/product/:id" component={ProductDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
