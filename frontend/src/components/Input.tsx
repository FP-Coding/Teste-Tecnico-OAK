import { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  fieldName: string;
  fieldValue: string,
  setFieldValue(value: string): void,
}

export default function Input({ id, fieldName, fieldValue, setFieldValue }: InputProps) {
  return (
    <label 
    className="mb-4 flex justify-between w-[350px] text-sm font-medium text-gray-900 dark:text-white items-center"
    htmlFor={ id }
    > 
      <p>
      {fieldName}
      </p>
      <input 
        id={ id } 
        value={fieldValue} 
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => setFieldValue(target.value)}
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[70%] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
    </label>
  )
}