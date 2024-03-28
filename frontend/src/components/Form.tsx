import { ChangeEvent, useEffect, useState } from 'react';
import Input from './Input';
import { postRequest } from '../utils/axios';
import IProducts from '../interfaces/IProducts';

interface PropsForm{
  controlModalHidden(status: boolean): void
}

export default function Form ({ controlModalHidden }: PropsForm) {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [priceInput, setPriceInput] = useState<number>(0);
  const [availabilityCheckBox, setAvailabilityCheckBox] = useState(true);
  const [isValidData, setIsValidData] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if(!nameInput || !descriptionInput || priceInput <= 0) {
      return setIsValidData(false);
    }
    return setIsValidData(true);
  }, [nameInput, descriptionInput, priceInput])

  const resetForm = () => {
    setNameInput('');
    setDescriptionInput('');
    setPriceInput(0);
    return setAvailabilityCheckBox(true);
  }

  const createProduct = async () => {
    const convertedPrice = Number(priceInput.toFixed(2).replace(',','.'))
  
    const response = await postRequest<IProducts>('/products', { 
      name: nameInput, 
      description: descriptionInput, 
      availability: availabilityCheckBox, 
      price: convertedPrice
    });

    if (response.message) {
      return setErrorMessage(response.message)
    }
    
    controlModalHidden(true)
    resetForm()
    window.location.reload()
    return response;
  }

  return (
    <form className="flex flex-col w-[35%] m-auto my-8 items-center">
      <Input
      id="name-input"
      fieldName="Nome"
      fieldValue={nameInput}
      setFieldValue={setNameInput}
      />
      <Input
      id="description-input"
      fieldName="Descrição"
      fieldValue={descriptionInput}
      setFieldValue={setDescriptionInput}
      />
      <label 
      className="mb-4 flex justify-between w-[350px] text-sm font-medium text-gray-900 dark:text-white items-center"
      htmlFor="price-input"
      >
        <p>
        Valor
        </p>
        <input 
          id="price-input"
          value={priceInput} 
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => setPriceInput(Number(target.value))}
          type="number"
          min={0}
          className="bg-gray-50 appearance-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[70%] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
      </label>
      <label htmlFor="availability-checkbox" className='mb-4 flex w-[350px] gap-4 text-sm font-medium text-gray-900 dark:text-white items-center'>
      <input 
      type='checkbox' 
      checked={availabilityCheckBox} 
      id="availability-checkbox"
      onChange={({ target }: ChangeEvent<HTMLInputElement>) => { setAvailabilityCheckBox(target.checked) }}
      />
      <p>
      Disponível
      </p>
      </label>
      { errorMessage && <p>{errorMessage}</p> }
      <button
      type="button"
      onClick={async () => {
        return createProduct()
      }}
      disabled={!isValidData}
      className='p-2 m-4 bg-green-400 rounded border-solid border-2 border-black disabled:opacity-40 hover:opacity-70'
      >
        Cadastrar
      </button>
    </form>
  )
}