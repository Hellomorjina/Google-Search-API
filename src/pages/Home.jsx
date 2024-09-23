
import { useEffect } from "react";
import uscFecth from "../hooks/uscFecth";
import Looder from "../componets/Looder"


export default function Home() {

  // Search engine ID =`315fffee6b98c4dac`

          const [results,lodding,error,getResults] = uscFecth()
  useEffect(() => {
    setTimeout(() => {
      getResults("react JS");
    },2000);
  }, []);


  // if (error) {
  //   return <h2>samething went wrong</h2>
  // }
  // if (lodding) {
  //   return <div className='flex justify-center'>
  //       <Looder/>
  //   </div>
  // }
  
  return (
    <div><header className="bg-white dark:bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">Blog Posts</h1>
  
          <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
          </p>
        </div>
  
        <div className="flex items-center gap-4">
          <button
            className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:text-gray-200"
            type="button"
          >
            <span className="text-sm font-medium"> View Website </span>
  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
  
          <button
            className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            type="button"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  </header>
    
    <div className='w-[400px] text-5xl text-primary mx-auto'>
    {""}
    {lodding && <Looder/> }
    {error && <h1>{error}</h1>}
     {results.length > 0 && <div>{results.length}</div>}</div>
    </div>
  )
}
