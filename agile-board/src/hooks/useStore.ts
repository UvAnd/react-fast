import { useContext } from 'react';
import { StoreContext } from '../index';

export default function useStore(): any {
  return useContext(StoreContext);
}
