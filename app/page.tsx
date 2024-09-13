"use client"
import { Copy, CopyCheck } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import etherscan from './assets/etherscan.png'
import debank from './assets/debank.png'
export default function Home() {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const ADDRESS = [
    '0x5F8a78AE34491E0e18d935C74000549d1a6cC16B',
    '0x56b975C687cA3591F20F1A4e3cB948321314aD84',
    '0x48eF4A156f8ED84B40e5bbD4D55F621877cF7A4d',
    '0xbAe2feb4043F7d1Eae73278cE74d371e886F7E7D',
    '0xD7b9572e04D92eE63F97926045166DAc3D9e3813',
    '0xc598b55970352dBE3D123D6eFbd434f307804b5C',
    '0x0D60A13073F7B7593e1EB8E7210C2B9B1B43d042'
  ]
  const showAddress = (address: string) => {
    return address.slice(0, 8) + '....' + address.slice(-5)
  }
  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address)
      .then(() => setCopySuccess(address))
      .catch(() => setCopySuccess(''));
  };
  const fetchData = async () => {
    try {
      console.log("api key: ", process.env.DEBANK_API)
      const response = await fetch(
        'https://pro-openapi.debank.com/v1/user/total_balance?id=0x5F8a78AE34491E0e18d935C74000549d1a6cC16B',
        {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'AccessKey': process.env.DEBANK_API ? process.env.DEBANK_API : '', // Replace with your actual AccessKey
          },
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log({ result })
      // setBalance(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set interval to fetch data every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mx-10">
      <p className="text-[25px] text-center text-slate-300 underline tracking-widest">Cipher Labs</p>
      <div className="w-full">
        <table className="table-auto text-white border-spacing-2 w-full border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-400 py-3 px-3">No</th>
              <th className="border border-slate-400 py-3 px-3">Address</th>
              <th className="border border-slate-400 py-3 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              ADDRESS.map((item: string, index: number) => {
                return <tr key={index}>
                  <td className="border border-slate-400 py-3 px-3 text-center">{index + 1}</td>
                  <td className="border border-slate-400 py-3 px-3 text-center">
                    {showAddress(item)}
                    <button onClick={() => copyToClipboard(item)} className="bg-transparent ml-3">
                      {(copySuccess === item) ? <CopyCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </td>
                  <td className="border border-slate-400 py-3 px-3">
                    <div className="flex justify-end items-center gap-3">
                      <a href={`https://etherscan.io/address/${item}`} target="_blank"><Image src={etherscan} alt="" width={20} height={20} /></a>
                      <a href={`https://debank.com/profile/${item}`} target="_blank"><Image src={debank} alt="" width={20} height={20} /></a>
                    </div>
                  </td>
                </tr>
              }
              )

            }
          </tbody>
        </table>
      </div>
    </div >
  );
}
