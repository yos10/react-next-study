import { useState, useEffect } from 'react';

const SwitchDemo = () => {
  const [pushed, setPushed] = useState(false);
  useEffect(() => {
    document.title = `現在の状態: ${pushed ? 'ON' : 'OFF'}`;
  }, [pushed]);
  return (
    <main style={{ textAlign: 'center' }}>
      <p>押してね</p>
      <button
        onClick={() => {
          setPushed(!pushed);
        }}
        style={{ background: pushed ? 'pink' : 'skyblue' }}
      >
        {pushed ? 'ON' : 'OFF'}
      </button>
    </main>
  );
};

export default SwitchDemo;
