import { useState } from 'react'
import { useDash } from '../../../../context/DashboardContext';

export const EmailCode = ({ setSwitchValue, Email }) => {
  const { EmailCodeVer } = useDash()

  const [Code, setCode] = useState(null);
  const [Error, setError] = useState(null);

  const SetTheError = (Error) => {
    setError(Error)
    setTimeout(() => {
      setError(null)
    }, 5000);
  }

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await EmailCodeVer(localStorage.getItem('authToken'), Code,Email)
      console.log(res);
      if (res?.response?.data?.error !== undefined) {
        SetTheError(res.response.data.error)
      } else {
        setSwitchValue(6);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleForm} className='w-100 h-100'>
      <span>Cambio de Email</span>
      {Error && <h4 className="my-2 text-red-500">{Error}</h4>}
      <div className="input-class w-100 mt-4">
        <input value={Code} onChange={(e) => setCode(e.target.value)} type='text' id='Nombres' name='Nombres' placeholder=' ' autoComplete='off' className='input-form' />
        <label htmlFor="Nombres" className='label-form'>Codigo</label>
      </div>
      <button className={`w-1/2 h-10 mx-auto outline-none text-white border-none mt-4 ${Error ? 'bg-[#C90000]' : 'bg-[#323643]'}`} type="submit">Enviar</button>
    </form>
  )
}
