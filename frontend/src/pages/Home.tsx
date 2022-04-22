import React from 'react';
import LayoutMain from 'components/Layouts/LayoutMain';
import Button from 'components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import 'styles/pages/Home.css';
import { useState } from 'react';
import UsernameDialog from 'components/UsernameDialog';

const Home: React.FC = () => {
  const [showUserDialog, setShowUserDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  const requestNewRoom = () => {
    // TODO: request new room from API
    setShowUserDialog(true);
  };

  return (
    <LayoutMain>
      {showUserDialog ? (
        <UsernameDialog />
      ) : (
        <div className="dialog">
          <span className="title">
            Words <strong>NOT</strong> on Stream
          </span>
          <span className="subtitle">choose an option:</span>

          <footer className="flex gap-4">
            <Link to="/wnos/join">
              <Button color="pink" popup kind="outline" className="text-2xl">
                join room
              </Button>
            </Link>
            {/* TODO: should create a new game and redirect to game */}
            <Button
              popup
              color="green"
              kind="outline"
              className="text-2xl"
              onClick={requestNewRoom}
            >
              create new room
            </Button>
          </footer>
        </div>
      )}
    </LayoutMain>
  );
};

export default Home;
