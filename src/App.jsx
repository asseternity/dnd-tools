import { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('Cats');

  function HandleSubmit(event) {
    event.preventDefault();
    alert('You submitted: ' + inputValue);
  }

  return (
    <div>
      <h3>Search for something:</h3>
      <form onSubmit={(event) => HandleSubmit(event)}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

// remember how to use apis
// learn how to use environmental variables
// remember async await
