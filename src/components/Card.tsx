const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <div className="w-[100px] h-[100px] card-bg rounded-full flex items-center justify-center relative">
        <img
          src="/Bitcoin SV (BSV).png"
          alt="tailwindcss logo"
          className="w-12 h-12 absolute"
        />
      </div>
      <div className="card-image ">
        <h1 className="text-secondary font-semibold">Bitcoin (BTC)</h1>
        <div className="w-[80%] flex gap-4 items-center justify-end bg-primary rounded-full px-4 py-1">
          <p className="text-white  font-semibold">$31,812.80</p>
          <p className={`text-green-500`}>+10%</p>
        </div>
        <p className="text-secondary text-sm">Price</p>
        <div className="w-[80%] bg-primary rounded-full px-4 py-1">
          <p className="text-white text-center  font-semibold">$60,000</p>
        </div>
        <p className="text-secondary font-semibold text-sm">TVL</p>
        <div className=" bg-primary rounded-full px-3 py-2 flex gap-3">
          <img
            src="/Bitcoin SV (BSV).png"
            alt="tailwindcss logo"
            className="w-6 h-6 "
          />
          <img
            src="/Bitcoin SV (BSV).png"
            alt="tailwindcss logo"
            className="w-6 h-6 "
          />
          <img
            src="/Bitcoin SV (BSV).png"
            alt="tailwindcss logo"
            className="w-6 h-6 "
          />
        </div>
        <p className="text-sm text-secondary font-semibold">Popular pairs</p>
      </div>
    </div>
  );
};

export default Card;
