import { useState } from "react";
import { IProduct } from "../models";

interface IProductProps {
  product: IProduct
}

export default function Product({product}: IProductProps): JSX.Element {

  const [shouldShowDetails, setShouldShowDetails] = useState(false);

  const btnBgClassName =  shouldShowDetails ? 'bg-yellow-400' : 'bg-blue-400';
  const btnClasses =  ['py-2 px-4 border ', btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <p className="font-bold">{product.title}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setShouldShowDetails(!shouldShowDetails)}
      >
        { shouldShowDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {shouldShowDetails && (
        <div>
          <p>{product.description}</p>
          <p>Rating: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
        </div>
      )}
    </div>
  );
}