import React from 'react';
import LayoutMain from 'components/Layouts/LayoutMain';
import Button from 'components/Button';
import { useState } from 'react';

const Home: React.FC = () => {
  const [showJoinForm, setShowJoinForm] = useState<boolean>(false);
  const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
  return (
    <LayoutMain>
      <h1>HOME PAGE</h1>
      <main className="flex flex-col grow justify-center items-center">
        <div className="flex flex-col justify-center items-center p-4 w-fit min-w-[400px] h-fit text-background align-middle bg-lavender rounded">
          <header className="flex flex-col gap-4 p-2 w-full h-fit text-center">
            <span className="w-full h-full font-fredoka text-4xl underline underline-offset-8 uppercase">
              Words <strong>NOT</strong> on Stream
            </span>
            <span className="font-fredoka text-lg uppercase">
              choose an option:
            </span>
          </header>
          <footer className="flex gap-4">
            <Button
              color="lavender"
              popup
              kind="outline"
              className="text-2xl"
              onClick={() => {
                setShowJoinForm(!showJoinForm);
              }}
            >
              join room
            </Button>
            <Button popup color="rosewater" kind="outline" className="text-2xl">
              create new room
            </Button>
          </footer>
        </div>
      </main>
    </LayoutMain>
  );
};

export default Home;
