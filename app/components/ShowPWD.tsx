import React, { useEffect, useState } from 'react'

type Props = { index: number, address: string }

export default function ShowPWD({ index, address }: Props) {
    const [copySuccess, setCopySuccess] = useState<string | null>(null);
    const [showStatus, setShowStatus] = useState(false)
    useEffect(() => {
        setShowStatus(false)
        setCopySuccess('')
    }, [index, address])
    const PASSWORD = [
        'wkfurwkrkd73',
        'wkfurwkrkd1213',
        'wkfurwkrkd110',
        'wkfurwkrkd223',
        'wkfurwkrkd28',
        'wkfurwkrkd2001',
        'wkfurwkrkd1972',
        'wkfurwkrkd1967',
    ]
    const BaseKey = [
        'a31586b46ecdefbd105bbf72e89a75fb2064ba00bb90460bc411e81bfb4c6551b',
        'a917935fe148a7019c4edbcbd4c75566546b12b19334d57f8286665d20bc5e892',
        'abba9717885ab3e63f7b48da48b6ca3158bc99299caefd74a22a4217c93bdb391',
        'ae941e3c0bdfedda84332f4adcbf9e90d19da1b170e6970067ca4290b4e5d9426',
        'ac451aed9b30a31aa2a215a5580bedf75491c4a0cb370ee8295bfd15f3a3855b7',
        'a47000437883f1905bece24956e025165126b67d328bfac3aca8636a55810ab7b',
        'a17beed00fb7f2c8e5ef0e677377a6584e26a318e83530355f8665f0620838b47',
        'ad615bf1432518c223d4555b6a6719c81fff9ac4006e4f18902b5c756dd9d5895'
    ]
    const showAddress = (address: string) => {
        return address.slice(0, 8) + '....' + address.slice(-6)
    }
    const handleChange = (e) => {
        if (e.target.value === PASSWORD[index]) {
            setShowStatus(true)
        } else {
            setShowStatus(false)
        }
    }
    const copyToClipboard = (address: string) => {
        navigator.clipboard.writeText(address)
            .then(() => setCopySuccess(address))
            .catch(() => setCopySuccess(''));
    };

    return (
        <div className='py-5 gap-3 text-center md:w-1/4 w-full border border-white rounded-md flex flex-col justify-center items-center text-white'>
            <div className='flex flex-row justify-between md:w-4/6 w-3/4 items-center'>
                <span>Address:</span>
                <p>{showAddress(address)}</p>
            </div>
            <div className='flex flex-row justify-between md:w-4/6 w-3/4 items-center'>
                <span>Password:</span>
                {!showStatus && <input className='md:w-[200px] w-[150px] outline-none bg-slate-400 text-slate-950 rounded-sm my-1 text-center' type='password' onChange={(e) => handleChange(e)} />}
                {showStatus && <input className='md:w-[200px] w-[150px] outline-none bg-slate-400 text-slate-950 rounded-sm my-1 text-center' type='text' value={'Success'} />}
            </div>
            {showStatus && <button className='md:w-4/6 w-3/4 bg-slate-600 rounded-sm hover:bg-slate-400 active:bg-slate-300' onClick={() => copyToClipboard(BaseKey[index])}>Click this button!</button>}
            {copySuccess && <span className='text-red-600 text-[10px]'>Copy pv key successfully!</span>}
        </div>
    )
}