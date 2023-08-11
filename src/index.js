import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';


import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, metamaskWallet, coinbaseWallet } from "@thirdweb-dev/react";

import AppRouter from './AppRouter.js';
import { BrowserRouter } from "react-router-dom";
// 

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

	<React.StrictMode >
		<>



			<div className="App">
				<header className="App-header">

					{/* <NetworkSelect />
					 */}

					<BrowserRouter>

						<AppRouter />

					</BrowserRouter>

				</header>
			</div>
		</>
	</React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
