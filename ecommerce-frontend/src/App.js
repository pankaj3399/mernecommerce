import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<Route path="/" component={HomePage} exact />
					<Route path="/product/:id" component={ProductPage} />
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
