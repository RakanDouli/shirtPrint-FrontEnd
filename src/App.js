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
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";
import { getDesignerWithStoredToken } from "./store/designer/actions";
import Modal from "react-modal";
import { useEffect } from "react";
import DesingerHome from "./Pages/DesignerHome";

Modal.setAppElement("#root");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken());
    dispatch(getDesignerWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/designer/homepage" component={DesingerHome} />
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
