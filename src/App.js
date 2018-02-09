import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyButton extends Component {
	render() {
		const label = this.props.label;
		const width = this.props.width
		return (
			<div className='myButton' 
			  style={{width}} 
			  onClick={()=> alert('\wybrane imie to '+label+' !!!')}
			  >
			{label}
			</div>
		)
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is my firs website :)
		  I can publish my code here as well <code>console.log('\hello world')</code>
        </p>
		<MyButton label={'ADAM'}  width={ 60 } />
		<MyButton label={'DANIEL'} width={ 300 } />
		<MyButton label={'TATA'} width={ 400 } />
      </div>
    );
  }
}

export default App;
