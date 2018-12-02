// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
 const App = function() {
  const buttonText = 'Click Me!';
  const labelText = 'Enter Name:';

   return (
     <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
   );
 }

// Show react component on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
