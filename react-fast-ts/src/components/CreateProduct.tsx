
import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import ErrorMsx from "./ErrorMsg";

const productData: IProduct  = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 3.9,
    count: 120
  }
}

interface ICreateProductProps {
  onCreate(product: IProduct): void,
}

export default function CreateProdyct({onCreate}: ICreateProductProps): JSX.Element {

  const [valueTitle, setValueTitle] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!valueTitle.trim().length) {
      setErrorMsg('Pls add the title to product');
      return;
    }

    productData.title = valueTitle;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

    onCreate(response.data);
  }

  const changeHandler =  (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValueTitle(event.target.value);
    setErrorMsg('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="border py-2 px-4 mb-2 w-full outline-0"
        type="text"
        placeholder="Enter prod title..."
        value={valueTitle}
        onChange={changeHandler}
      ></input>

      {errorMsg && <ErrorMsx errorText={errorMsg}></ErrorMsx>}

      <button className="py-2 px-4 border bg-yellow-400 hover:text-white" type="submit">Create</button>
    </form>
  );
}