import axios from "axios";
import { useEffect, useState } from "react";

function Component(){
    const [value, setValue] = useState('');

  async function getCurrencies() {
    const result = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    /* const result = await axios.get('https://belarusbank.by/api/kursExchange'); */
    const arrayOfEmployers = result.data.data;
    console.log(arrayOfEmployers);
    setValue(JSON.stringify(arrayOfEmployers))
  }

useEffect(() => {
  const intervalId = setInterval(() => {
    getCurrencies();
  }, 5000); // 5 секунд

  return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
}, []);

  return (
    <div className="App">
      <h1>Employers</h1>
      <p>{value}</p>
    </div>
  );
}
export default Component