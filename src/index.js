import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './reset.css';
import './index.css';
import App from './App';
import US from './App-US';

class DebugRouter extends BrowserRouter {
  constructor(props){
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null,2));
    this.history.listen((location, action)=>{
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
    });
  }
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<BrowserRouter basename="/cv">
      <Routes>
        <Route path="/us/" element={<US />}></Route>
        <Route path="*" element={<App />}></Route>
      </Routes>
	</BrowserRouter>
);
