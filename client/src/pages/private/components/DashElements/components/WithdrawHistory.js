import React, { useEffect, useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext';

export const WithdrawHistory = ({ accNum }) => {
    const { getAccountsHistory } = useDash();
    const [accountHistory, setAccountHistory] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getAccountsHistory(localStorage.getItem('authToken'), accNum);
            setAccountHistory(res.data.data[1][0].Withdraws)
        })()
    }, []);

    return (
        <div className='flex flex-col-reverse justify-between text-center mx-auto'>
            {
                accountHistory.length !== 0 ?
                    accountHistory.map((el, i) => {
                        return (

                            <div className='flex flex-row w-[90%] h-[5rem] border-cover-2 rounded-lg mb-4 mx-auto'>
                                <div className='w-[10%] h-full'>
                                    <div className='bg-[#D6D6D6] h-[40%] table mb-0 rounded-tl-lg'>
                                        <span className='table-cell align-middle'>N°</span>
                                    </div>
                                    <div className='h-[60%] table mb-0'>
                                        <span className='table-cell align-middle text-[1.3rem]'>{i + 1}</span>
                                    </div>
                                </div>
                                <div className='w-[45%] h-full border-left-division'>
                                    <div className='bg-[#D6D6D6] h-[40%] table mb-0'>
                                        <span className='table-cell align-middle'>Monto</span>
                                    </div>
                                    <div className='h-[60%] table mb-0'>
                                        <span className='table-cell align-middle'>${el.Amount}</span>
                                    </div>
                                </div>
                                <div className='w-[45%] h-full border-left-division'>
                                    <div className='bg-[#D6D6D6] h-[40%] table mb-0 rounded-tr-lg'>
                                        <span className='table-cell align-middle'>Fecha de realización</span>
                                    </div>
                                    <div className='h-[60%] table mb-0'>
                                        <span className='table-cell align-middle'>{new Date(el.Date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>


                            // <div key={i} className='border-solid border-1 border-rose-500 m-[2rem]'>
                            //     <p>{i + 1}</p>
                            //     <p>${el.Amount}</p>
                            //     <p>{new Date(el.Date).toLocaleDateString()}</p>
                            // </div>
                        )
                    })
                    :
                    <div>No hay registro de retiros aún</div>
            }
        </div>
    )
}
