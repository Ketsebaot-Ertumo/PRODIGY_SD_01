
import React, { useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState('C');
  const [results, setResults] = useState({});

  const convertTemperature = () => {
    if (isNaN(value)) {
      alert('Invalid temperature value.');
      return;
    }

    if (!value) {
      alert('Please enter a conversion number!');
      return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === 'C') {
      celsius = parseFloat(value);
      fahrenheit = celsius * 9/5 + 32;
      kelvin = celsius + 273.15;
    } else if (unit === 'F') {
      fahrenheit = parseFloat(value);
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit + 459.67) * 5/9;
    } else if (unit === 'K') {
      kelvin = parseFloat(value);
      celsius = kelvin - 273.15;
      fahrenheit = kelvin * 9/5 - 459.67;
    }

    setResults({
      celsius: celsius.toFixed(2),
      fahrenheit: fahrenheit.toFixed(2),
      kelvin: kelvin.toFixed(2)
    });

  };

      // Add this useEffect hook to reset the results when the value changes
    useEffect(() => {
      setResults({});
    }, [unit]);

  const getConversionResults = () => {
        if (unit === 'C') {
          return (
            <>
              <div className="bg-gray-200 p-4 rounded-xl border border-blue-500">
                <p>= {results.fahrenheit}  &deg;F</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-xl border border-blue-500">
                <p>= {results.kelvin} K</p>
              </div>
            </>
          );
        } else if (unit === 'F') {
          return (
            <>
              <div className="bg-gray-200 p-4 rounded-xl border border-blue-500">
                <p>= {results.celsius}  &deg;C</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-xl border border-blue-500">
                <p>= {results.kelvin} K</p>
              </div>
            </>
          );
        } else if (unit === 'K') {
          return (
            <>
              <div className="bg-gray-200 p-4 rounded">
                <p>= {results.celsius}  &deg;C</p>
              </div>
              <div className="bg-gray-200 p-4 rounded">
                <p>= {results.fahrenheit}  &deg;F</p>
              </div>
            </>
          );
        }
      

    return null;
  };

  return (
    <div className="container pt-20 sm:pb-[50%] bg-white-grey p-10">

        <h1 className="text-4xl font-semibold text-center p-10 pt-0">Temperature Converter</h1>

        <div className='sm:flex justify-center pt-10'>
        <div className='border border-blue-500 bg-white p-10 rounded-t-xl sm:rounded-l-xl sm:w-[30%]'>
          <h1 className="text-2xl font-semibold text-center">Enter Temperature</h1>
          <div className="flex mb-4 justify-center mt-20">
            <input
              type="number"
              step="any"
              className="border border-gray-300 rounded-l-xl px-4 py-2 w-1/2"
              placeholder="Enter temperature value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-r-xl px-4 py-2 bg-white"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="C">&deg;C</option>
              <option value="F">&deg;F</option>
              <option value="K">K</option>
            </select>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-l-xl rounded-r-xl ml-[33%] mt-5"
            onClick={convertTemperature}
          >
            Convert
          </button>
        </div>
          
        <div className='bg-blue-500 p-10 rounded-b-xl sm:rounded-r-xl sm:w-[30%] border border-blue-500'>
          {/* {results && ( */}
            <div className="sm:mt-20 text-center  items-center justify-center">
              {/* <p>{value}&deg; {unit} is equal to:</p> */}
              <div className="grid grid-cols-1 gap-5">
                {getConversionResults()}
              </div>
            </div>
          {/* )} */}
        </div>
    </div>
    </div>
  );
};

export default App;


















// import React, { useState } from 'react';

// const App = () => {
//   const [value, setValue] = useState('');
//   const [unit, setUnit] = useState('C');
//   const [results, setResults] = useState({});

//   const convertTemperature = () => {
//     if (isNaN(value)) {
//       alert('Invalid temperature value.');
//       return;
//     }

//     if (!value) {
//       alert('Please enter a conversion number!');
//       return;
//     }

//     let celsius, fahrenheit, kelvin;

//     if (unit === 'C') {
//       celsius = parseFloat(value);
//       fahrenheit = celsius * 9/5 + 32;
//       kelvin = celsius + 273.15;
//     } else if (unit === 'F') {
//       fahrenheit = parseFloat(value);
//       celsius = (fahrenheit - 32) * 5/9;
//       kelvin = (fahrenheit + 459.67) * 5/9;
//     } else if (unit === 'K') {
//       kelvin = parseFloat(value);
//       celsius = kelvin - 273.15;
//       fahrenheit = kelvin * 9/5 - 459.67;
//     }

//     setResults({
//       celsius: celsius.toFixed(2),
//       fahrenheit: fahrenheit.toFixed(2),
//       kelvin: kelvin.toFixed(2)
//     });
//   };

//   const getConversionResults = () => {
//         if (unit === 'C') {
//           return (
//             <>
//               <div className="bg-gray-200 p-4 rounded-xl border border-blue-500">
//                 <p>= {results.fahrenheit}  &deg;F</p>
//               </div>
//               <div className="bg-gray-200 p-4 rounded-xl border border-blue-500">
//                 <p>= {results.kelvin} K</p>
//               </div>
//             </>
//           );
//         } else if (unit === 'F') {
//           return (
//             <>
//               <div className="bg-gray-200 p-4 rounded-xl border border-blue-500">
//                 <p>= {results.celsius}  &deg;C</p>
//               </div>
//               <div className="bg-gray-200 p-4 rounded-xl border border-blue-500">
//                 <p>= {results.kelvin} K</p>
//               </div>
//             </>
//           );
//         } else if (unit === 'K') {
//           return (
//             <>
//               <div className="bg-gray-200 p-4 rounded">
//                 <p>= {results.celsius}  &deg;C</p>
//               </div>
//               <div className="bg-gray-200 p-4 rounded">
//                 <p>= {results.fahrenheit}  &deg;F</p>
//               </div>
//             </>
//           );
//         }

//     return null;
//   };

//   return (
//     <div className="container pt-20 sm:pb-[50%] bg-white-grey p-10">

//         <h1 className="text-4xl font-semibold text-center p-10 pt-0">Temperature Converter</h1>

//         <div className='sm:flex justify-center pt-10'>
//         <div className='border border-blue-500 bg-white p-10 rounded-t-xl sm:rounded-l-xl sm:w-[30%]'>
//           <h1 className="text-2xl font-semibold text-center">Enter Temperature</h1>
//           <div className="flex mb-4 justify-center mt-20">
//             <input
//               type="number"
//               step="any"
//               className="border border-gray-300 rounded-l-xl px-4 py-2 w-1/2"
//               placeholder="Enter temperature value"
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//             />
//             <select
//               className="border border-gray-300 rounded-r-xl px-4 py-2 bg-white"
//               value={unit}
//               onChange={(e) => setUnit(e.target.value)}
//             >
//               <option value="C">&deg;C</option>
//               <option value="F">&deg;F</option>
//               <option value="K">K</option>
//             </select>
//           </div>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-l-xl rounded-r-xl ml-[33%] mt-5"
//             onClick={convertTemperature}
//           >
//             Convert
//           </button>
//         </div>
          
//         <div className='bg-blue-500 p-10 rounded-b-xl sm:rounded-r-xl sm:w-[30%] border border-blue-500'>
//           {results && (
//             <div className="sm:mt-20 text-center  items-center justify-center">
//               {/* <p>{value}&deg; {unit} is equal to:</p> */}
//               <div className="grid grid-cols-1 gap-5">
//                 {getConversionResults()}
//               </div>
//             </div>
//           )}
//         </div>
//     </div>
//     </div>
//   );
// };

// export default App;



