import { Link } from "react-router-dom";

export default function Navigetion(): JSX.Element {
  return (
    <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
      <span className="font-bold">React</span>

      <span>
        <Link className="mr-2" to="/">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}