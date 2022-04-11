import React from 'react';
import LayoutMain from 'components/Layouts/LayoutMain';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <LayoutMain>
      <h1>HOME PAGE</h1>
      <main className="flex flex-col grow justify-center items-center">
        <div className="dialog">
          <span className="w-full h-full font-fredoka text-4xl underline underline-offset-8 uppercase">
            Words <strong>NOT</strong> on Stream
          </span>
          <span className="font-fredoka text-lg uppercase">
            choose an option:
          </span>

          <footer className="flex gap-4">
            <Link to="/wos/join">
              <Button color="pink" popup kind="outline" className="text-2xl">
                join room
              </Button>
            </Link>
            <Button popup color="green" kind="outline" className="text-2xl">
              create new room
            </Button>
          </footer>
        </div>
      </main>
    </LayoutMain>
  );
};

export default Home;
