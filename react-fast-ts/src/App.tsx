
import CreateProdyct from './components/CreateProduct';
import ErrorMsx from './components/ErrorMsg';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/Product';
import { useProducts } from './hooks/products';

function App() {

const {products, isLoading, error} = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1 className='mb-2'>Products:</h1>
      {error && <ErrorMsx errorText={error}></ErrorMsx>}
      {isLoading && <Loader></Loader>}
      {products.map((product) => <Product product={product} key={product.id}></Product>)}

      <Modal title="Title of modal">
        <CreateProdyct></CreateProdyct>
      </Modal>
    </div>
  );
}

export default App;
