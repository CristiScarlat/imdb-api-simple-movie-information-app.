import React from 'react';
import { Button } from 'react-bootstrap';
import { PlusIcon } from '../../components/icons/icons';

interface IWatchlistButtonProps {
  className?: string;
  onClick?: (x: React.MouseEvent<HTMLButtonElement>) => void;
}

const WatchlistButton = ({
  className = '',
  onClick
}: IWatchlistButtonProps) => {
  return (
    <Button
      variant="secondary"
      className={className}
      style={{ whiteSpace: 'nowrap' }}
      onClick={onClick}
    >
      <PlusIcon />
      Watchlist
    </Button>
  );
};

export default WatchlistButton;
