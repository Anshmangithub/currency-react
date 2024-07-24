import { useState } from 'react'
import InputBox from './components/InputBox';
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setconvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
 

  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setconvertedAmount(amount);
  }

  const convert = ()=>{
     setconvertedAmount(amount * currencyInfo[to]);
  }

   
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                   convert();
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                       currencyOptions={options}
                       onCurrencyChange={(currency) => setFrom(currency)}
                       selectCurrency={from}
                       onAmountChange={(amount) => setAmount(amount)}
                        
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                    />
                </div>
                <button type="submit" className="w-full mb-3 bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert  {from.toUpperCase()} to {to.toUpperCase()}
                </button>
                <button className='text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => { window.location.reload()}}>Refresh Page</button>

            </form>
        </div>
    </div>
</div>
  )
}

export default App
