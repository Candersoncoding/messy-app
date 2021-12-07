import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';

function App() {



	return (
		<div className="App">
			<header className="App-header">
			{/* In here I want to put a title, a logout button, a search bar which just a simple form (Pokemon)*/}
			</header>
			<NavBar />
			<div>
			{/* has buttons that render images or more data within the jumbotron related to that topic */}
			</div>
			<footer>
			{/* who made it, when, contact info that when clicked shows a popover of the data above */}
			</footer>
		</div>
	);
}

export default App;
