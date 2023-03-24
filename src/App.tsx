import "./App.css";
import Card from "./components/Card";

const cardValues = [
  {
    headerImage: "/Bitcoin SV (BSV).png",
    title: "Bitcoin (BTC)",
    coinPrice: "$31,812.80",
    coinPercentage: +10,
    price: "$60,000",
    popularPairs: [
      "/Solana (SOL).png",
      "/Ethereum (ETH).png",
      "/Binance Coin (BNB).png",
    ],
  },
  {
    headerImage: "/Solana (SOL).png",
    title: "Solana (SOL)",
    coinPrice: "$32.83",
    coinPercentage: -12.32,
    price: "$60,000",
    popularPairs: [
      "/Bitcoin SV (BSV).png",
      "/Ethereum (ETH).png",
      "/Binance Coin (BNB).png",
    ],
  },
  {
    headerImage: "/Ethereum (ETH).png",
    title: "Ethereum (ETH)",
    coinPrice: "$1,466.45",
    coinPercentage: -11.93,
    price: "$60,000",
    popularPairs: [
      "/Solana (SOL).png",
      "/Bitcoin SV (BSV).png",
      "/Binance Coin (BNB).png",
    ],
  },
  {
    headerImage: "/Binance Coin (BNB).png",
    title: "Binance USD (BUSD)",
    coinPrice: "$1.00",
    coinPercentage: 0.26,
    price: "$60,000",
    popularPairs: [
      "/Solana (SOL).png",
      "/Ethereum (ETH).png",
      "/Binance Coin (BNB).png",
    ],
  },
  {
    headerImage: "/SHIBA INU (SHIB).png",
    title: "Shiba Inu (SHIB)",
    coinPrice: "$0.00000001948",
    coinPercentage: -8.1,
    price: "$60,000",
    popularPairs: [
      "/Solana (SOL).png",
      "/Ethereum (ETH).png",
      "/Binance Coin (BNB).png",
    ],
  },
];

function App() {
  return (
    <div className="bg-primary min-h-[100vh] flex flex-col py-20 px-5">
      <div className="flex items-center gap-5">
        <img src="/activity.png" alt="tailwindcss logo" className="w-5 h-5" />
        <h1 className="text-xl text-white">Trending Assets</h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center my-20 ">
        {cardValues.map((cardValue, index) => (
          <Card key={index} {...cardValue} />
        ))}
      </div>
    </div>
  );
}

export default App;
