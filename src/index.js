import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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

const Main = () => {
	let us_rx = new RegExp('us', 'i'); // Issues getting relative path working
    return (
		<DebugRouter>
      <Switch>
        <Route path={us_rx} component={US}></Route>
        <Route component={App}></Route>
      </Switch>
		</DebugRouter>
    );
}
          

ReactDOM.render(<BrowserRouter basename="/cv"><Main/></BrowserRouter>, document.getElementById('root'));
