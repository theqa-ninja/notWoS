import { SocketProvider } from 'context/SocketProvider';

function App() {
  return (
    <div className="bg-purple-200">
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Welcome to
          </h2>
          <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            not WoS
          </p>
        </div>
      </div>

      <div className="sidebar">
        sidebar
        <div className="sidebar-heading">inside heading</div>
      </div>
      <div className="sidebar-heading">outside heading</div>
    </div>
  );
}

export default App;
