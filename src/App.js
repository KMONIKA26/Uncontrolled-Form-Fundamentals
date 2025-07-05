import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value;

    if (inputValue.trim() === '') {
      alert('Please enter something.');
    } else {
      alert(`Submitted text: ${inputValue}`);
      inputRef.current.value = ''; // Clear input after submission
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Uncontrolled Form - useRef</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          ref={inputRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
