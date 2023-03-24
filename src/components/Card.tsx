interface Props {
  headerImage: string;
  title: string;
  coinPrice: string;
  coinPercentage: number;
  price: string;
  popularPairs: string[];
}

const Card = ({
  coinPercentage,
  coinPrice,
  headerImage,
  popularPairs,
  price,
  title,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <div className="w-[100px] h-[100px] card-bg rounded-full flex items-center justify-center relative">
        <img src={headerImage} alt={title} className="w-12 h-12 absolute" />
      </div>
      <div className="card-image ">
        <h1 className="text-secondary font-semibold">{title}</h1>
        <div className="w-[80%] flex gap-4 items-center justify-end bg-primary rounded-full px-4 py-1">
          <p className="text-white  font-semibold">{coinPrice}</p>
          <p
            className={
              coinPercentage >= 0
                ? `text-green-500 font-semibold`
                : `text-red-500 font-semibold`
            }
          >
            {coinPercentage}%
          </p>
        </div>
        <p className="text-secondary text-sm">Price</p>
        <div className="w-[80%] bg-primary rounded-full px-4 py-1">
          <p className="text-white text-center  font-semibold">{price}</p>
        </div>
        <p className="text-secondary font-semibold text-sm">TVL</p>
        <div className=" bg-primary rounded-full px-3 py-2 flex gap-3">
          {popularPairs.map((pair, index) => (
            <img key={index} src={pair} alt={title} className="w-6 h-6 " />
          ))}
        </div>
        <p className="text-sm text-secondary font-semibold">Popular pairs</p>
      </div>
    </div>
  );
};

export default Card;
