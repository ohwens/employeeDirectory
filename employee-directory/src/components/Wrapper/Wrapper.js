import React from 'react';

function Wrapper({ children }) {
  return (
      <div className="wrap">
        { children }
      </div>
  );
}

export default Wrapper;