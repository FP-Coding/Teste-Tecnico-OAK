import { useEffect, useState } from 'react';
import { getRequest } from '../utils/axios';
import IProducts from '../interfaces/IProducts';
import { Circles } from 'react-loader-spinner'
import RegisterModal from './Register.modal';

function Table () {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts[]>([]);
  
  useEffect(() => {
    const request = async () => {
      setIsLoading(true);
      const responseProducts: IProducts[] = await getRequest('/products');
      setTimeout(() => setIsLoading(false), 1000);
      return setProducts(responseProducts);
    };
    request();
  }, [setIsLoading])

  return isLoading ? <Circles /> : (
  <div className='flex flex-col gap-8 w-full items-center'>
    <table className='m-auto w-full text-center border-2 border-black dark:bg-gray-700 text-white'>
      <thead>
        <tr className='bg-blue-700'>
          <th className='w-[20%] border-2 border-black'>Nome</th>
          <th className='w-[20%] border-2 border-black'>Valor</th>
        </tr>
      </thead>
      <tbody>
        { products.map(({ id, name, price }: IProducts) => {
          return (
          <tr key={id}>
            <td className='border-2 border-black'>{name}</td>
            <td className='border-2 border-black'>{price.toFixed(2)}</td>
          </tr>
          )
        }) }
      </tbody>
    </table>
    <RegisterModal/>
  </div>
  )
}

export default Table;