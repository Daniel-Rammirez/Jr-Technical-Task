/* eslint-disable react/prop-types */

export function Cards({ loading, data, handleClick }) {
  const IMG_BASE = "https://s2.coinmarketcap.com/static/img/coins/64x64";
  const tokenPage = "http://localhost:5175/MyTokens";
  const url = document.URL;
  const dinamicButton = url == tokenPage ? "Rem" : "Add";
  // const imageUrl = `${IMG_BASE}/${id}.png`;
  return (
    <ul className="flex flex-col gap-2 w-64 mx-auto mt-4">
      {!loading &&
        data.map((card) => {
          return (
            <li
              className="flex gap-4 bg-neutral-700 w-72 pl-2 p-2 rounded cursor-pointer justify-between"
              key={card.cmc_rank}
            >
              <p className="text-white">#{card.cmc_rank}</p>
              <img className="w-7 h-7" src={`${IMG_BASE}/${card.id}.png`} />
              <div>
                <h3 className="text-white">{card.symbol}</h3>
                <p className="text-sm text-gray-600">{card.slug}</p>
              </div>
              <strong className="text-white">
                ${card.quote.USD.price.toFixed(2)}
              </strong>
              <button
                className="text-white"
                value={card.cmc_rank}
                onClick={handleClick}
              >
                {dinamicButton}
              </button>
            </li>
          );
        })}
    </ul>
  );
}
