// import React from 'react';
/*import logo from './logo.svg';
import './App.css';*/
/*import Hello from './hello';*/

/*function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <a
                    className="App-link" href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}*/

/*const App = () => {
    return (
        <div className="App">
            <Hello/>
        </div>
        /*<h1>Hello World</h1>*/
/*    )
}*/

/* informations :
in JS
const App = () => {
  return React.createElement("h1", null, "Hello world!");
};

with JSX
const App = () => {
    return <h1>Hello World</h1>
}
*/

/* useState()
Here is the code of the Example class, a very basic counter */

/*class App extends React.Component {
  constructor(props) { // on déclare le compteur, son état et on l'initialise à 0
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        {/* When we want to display the current count in a class, we read this.state.count *//*}
        /*<p>You clicked {this.state.count} times</p> 
        {/*In the rendering, we call the this.setState at each click and increment on the state.count*//*}
        /*<button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}*/

/* Here's the equivalent with the hooks */
/*import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0); // declare a count and its state directly with useState*/
  // If we declare a state variable with useState, we get a pair. The first element is the current value, and the second is a function that allows you to modify it. In this case, we define count, its future state and initialize it to 0

/*
You can call multiple state variables
const [count, setCount] = useState(0);
const [check, setCheck] = useState('give me five');
const [test, setTest] = useState(true);
const [form, setForm] = useState({username: '',password: ''});
*/

  /*return (
    <div>
        {/* After this, we can call count directly *//*}
      /*<p>You clicked {count} times</p>
      {/* In the rendering, we just have to call up the status and we increment directly on the counter. *//*}
      /*<button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;*/

/* we import the usestate + useEffect and we import axios. */
// npm run build
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
    /* we initialize the useStates */
    const [jokes, setJokes] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    /* We retrieve the api data in the useEffect, we assign the setJokes which will be the answer, we set the setLoad to true and we assign the setError in case of request failure */
    useEffect(() => {
        axios.get('http://api.icndb.com/jokes/')
            .then(res => {
                setJokes(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);

    /* We set up our condition, with the load, we retrieve the data, we process the structure and display the result in a small list */
    if (load) {
        return (
            <ul>{error ? <li>{error.message}</li> : jokes.value.map((fact) => <li class="joke" id={fact.id}>{fact.joke}</li>)}</ul>
        );
    }
    else {
        return (
              <div>Loading...</div>
        );
    }
};
export default App;
//npm install eslint-plugin-react-hooks --save-dev
