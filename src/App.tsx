import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="bg-primary min-h-[100vh] flex flex-col py-10 px-5">
      <div className="flex items-center gap-5">
        <img src="/activity.png" alt="tailwindcss logo" className="w-5 h-5" />
        <h1 className="text-xl text-white">Trending Assets</h1>
      </div>
      <Card />
    </div>
  );
}

export default App;
