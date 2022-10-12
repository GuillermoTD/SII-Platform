import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const Container = () => {
  return (
    <div className="App">
      <App />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Container />);
