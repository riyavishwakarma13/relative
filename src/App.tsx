import './App.css';

function App() {
  return (
    <div className="bg-primary min-h-[100vh] flex flex-col py-10 px-5">
      <div className="flex items-center gap-5">
        <img src="/activity.png" alt="tailwindcss logo" className="w-5 h-5" />
        <h1 className="text-xl text-white">Trending Assets</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-[100px] h-[100px] card-bg rounded-full flex items-center justify-center">
        <img src="/Bitcoin SV (BSV).png" alt="tailwindcss logo" className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}

export default App;
