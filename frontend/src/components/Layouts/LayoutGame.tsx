const LayoutGame = () => {
  const messages = new Array(10).fill(1);
  return (
    <>
      <main className="game">
        <section className="game-wos"></section>
        <aside className="sidebar">
          <header className="sidebar-heading">
            <h3 className="heading-03">guess</h3>
          </header>
          <main className="chat">
            {messages.map((_, i) => (
              <span key={i} className="chat-message">
                <span className="chat-username chat-username--teal">
                  kironto
                </span>
                <span className="chat-guess">temperature</span>
              </span>
            ))}
          </main>
          <footer className="flex flex-col space-y-2">
            <input type="text" className="" />
            <section className="flex flex-row justify-between space-x-2 w-full">
              <span>gear</span>
              <button
                type="button"
                className="py-1 px-2 w-fit h-fit font-bold text-background uppercase bg-green rounded border border-gray-2 border-solid text-bold"
              >
                enter
              </button>
            </section>
          </footer>
        </aside>
      </main>
    </>
  );
};

export default LayoutGame;
