import "./App.css";
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs  from './About'
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from './Services'
import { Events } from './Events'
import Contact from './ContactUs'
import Support from './Support'
function App() {
return (
	<Router>
	<Sidebar />
	<Routes>
		<Route path="/about-us" exact component={AboutUs} />
		<Route path="/services" exact component={Services} />
		<Route path="/services/services1" exact component={ServicesOne} />
		<Route path="/services/services2" exact component={ServicesTwo} />
		<Route path="/services/services3" exact component={ServicesThree} />
		<Route path="/contact" exact component={Contact} />
		<Route path="/events" exact component={Events} />
		<Route path="/support" exact component={Support} />
	</Routes>
	</Router>
);
}

export default App;

