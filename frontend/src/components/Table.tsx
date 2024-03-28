import { useEffect, useState } from 'react';
import { getRequest } from '../utils/axios';
import IProducts from '../interfaces/IProducts';

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

  return isLoading ? <p>Loading</p> : (
  <table className='m-auto text-center border-2 border-black'>
    <thead>
      <tr className='bg-slate-400'>
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
  )
}

export default Table;