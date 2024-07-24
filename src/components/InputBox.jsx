import React, { useId } from 'react'

const InputBox = ({
    label,
    amount ,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    disableAmount  = false, 
    disableCurrency = false,
    className = "",

}) => {


    const amountInputId = useId();
    const handleInputChange = (e)=>{
    const value  = Number(e.target.value);
    if(value >=0){
        onAmountChange && onAmountChange(value)
    }
    }
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
    <div className="w-1/2">
        <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
            {label}
        </label>
        <input
             id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            value={amount}
            disabled={disableAmount}
            onChange={handleInputChange}
            min="0"
        />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
          
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={disableCurrency}
        >
            
               {currencyOptions.map((currency) =>(
                 <option key={currency} value={currency}>
                 {currency}
             </option>
               ))}
        
        </select>
    </div>
</div>
  )
}

export default InputBox