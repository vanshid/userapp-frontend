import { useState } from 'react';
import { css } from '@emotion/react';
import ClockLoader from 'react-spinners/ClockLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function LoadingComponent() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('blue');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85vh',
      }}
    >
      <div className="sweet-loading">
        <ClockLoader
          color={color}
          loading={loading}
          css={override}
          size={150}
        />
      </div>
    </div>
  );
}

export default LoadingComponent;
