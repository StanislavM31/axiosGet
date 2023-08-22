import axios from "axios";
import { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Component() {
  const [value, setValue] = useState([]);

  async function getCurrencies() {
    debugger;
    const result = await axios.get(
      "https://dummy.restapiexample.com/api/v1/employees"
    );

    /* https://api.coindesk.com/v1/bpi/currentprice.json */
    /* const result = await axios.get('https://belarusbank.by/api/kursExchange'); */
    const arrayOfEmployers = result.data.data;
    debugger;
    console.log(arrayOfEmployers);
    setValue(arrayOfEmployers);
  }

  useEffect(() => {
    debugger;
    getCurrencies();
  }, []);

  return (
    <div className="App">
      <h1>Employers</h1>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>

          {value.map((el) => {
          return <MenuItem >{el.employee_name}</MenuItem>

        })}
        </Select>
    </div>
  );
}
export default Component;
