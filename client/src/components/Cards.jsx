/* eslint-disable react/prop-types */

export function Cards({ loading, data, handleClick }) {
  return (
    <ul className="flex flex-col gap-2 w-64 mx-auto mt-4">
      {!loading &&
        data.map((card) => {
          return (
            <li
              className="flex gap-4 bg-neutral-700 w-72 pl-2 p-2 rounded justify-between cursor-pointer"
              key={card.cmc_rank}
            >
              <p className="text-white">#{card.cmc_rank}</p>
              <img src={card.icon} />
              <div>
                <h3 className="text-white">{card.symbol}</h3>
                <p className="text-sm text-gray-600">{card.slug}</p>
              </div>
              <strong className="text-white">
                ${card.quote.USD.price.toFixed(2)}
              </strong>
              <button value={card.cmc_rank} onClick={handleClick}>
                Add
              </button>
            </li>
          );
        })}
    </ul>
  );
}
