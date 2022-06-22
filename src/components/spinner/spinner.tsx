import React from 'react';
import { Spinner as BsSpinner } from 'react-bootstrap';
import './spinner.css';

interface ISpinnerProps {
  fixed?: boolean;
}

const Spinner: React.FC<ISpinnerProps> = ({ fixed }) => {
  return fixed ? (
    <div className="spinner-container-fixed">
      <BsSpinner animation="border" role="status" />
    </div>
  ) : (
    <BsSpinner animation="border" role="status" />
  );
};

export default Spinner;
