import React, { } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ChirpDetails from './components/chirpDetails';
import NewChirpForm from './components/newChirpForm';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/chirps" element={<Home></Home>}>
				</Route>
				<Route path="/chirps/details/:chirp_id" element={<ChirpDetails></ChirpDetails>}>
				</Route>
				<Route path="/chirps/createChirp" element={<NewChirpForm></NewChirpForm>}>
				</Route>

			</Routes>
		</BrowserRouter>
	);
};

export default App;