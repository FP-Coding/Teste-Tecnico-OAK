import { useState } from 'react';
import Form from './Form';

export default function RegisterModal() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <button onClick={() => setIsHidden(!isHidden)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Cadastrar Produto
      </button>
      <div id="register-modal" className={`${isHidden ? 'hidden' : '' }  overflow-y-auto fixed overflow-x-hidden bg-[#111827] w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
          <div className="relative p-4 m-auto  max-w-md max-h-full">
              <div className="relative top-20 rounded-lg dark:bg-gray-700 shadow-lg shadow-gray-500">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Crie um novo produto
                      </h3>
                      <button type="button" onClick={() => setIsHidden(true)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="register-modal">
                          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>
                  <Form controlModalHidden={setIsHidden}/>
              </div>
          </div>
      </div> 
    </>
  )
}