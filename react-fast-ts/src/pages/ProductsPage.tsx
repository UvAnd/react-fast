import { useContext } from 'react';
import CreateProdyct from '../components/CreateProduct';
import ErrorMsx from '../components/ErrorMsg';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Product from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

export default function ProductsPage(): JSX.Element {

  const {products, isLoading, error, addProducts} = useProducts();
  const {isModalOpen, open: openModal, close: closeModal} = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProducts(product);
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <div className='flex mb-4'>
        <h1 >Products:</h1>
        <button className='ml-auto py-2 px-4 border bg-yellow-400' onClick={() => openModal()}>Create Product</button>
      </div>
      {error && <ErrorMsx errorText={error}></ErrorMsx>}
      {isLoading && <Loader></Loader>}
      {products.map((product) => <Product product={product} key={product.id}></Product>)}

      {isModalOpen && (
        <Modal title="Title of modal" onClose={() => closeModal()}>
          <CreateProdyct onCreate={createHandler}></CreateProdyct>
        </Modal>
      )}

    </div>
  );
}