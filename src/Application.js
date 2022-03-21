import './Application.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import Landing from './Pages/Landing/Landing';
import Subscriptions from './Pages/Subscriptions/Subscriptions';
import Footer from './Components/Footer/Footer';

const Application = () =>
{
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/subscriptions' element={<Subscriptions />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default Application;