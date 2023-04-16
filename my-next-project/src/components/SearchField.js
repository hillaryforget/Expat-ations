// We implemented to the parent --> Heading.js 
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete({ stateChanger, city_list }) {
  return (
    <>
      <div className='bg-white'> 
        <Autocomplete
          onChange = {(event, value) => stateChanger(value)}
          disablePortal
          id="combo-box-demo"
          options={city_list}
          sx={{ width: "100" }}
          renderInput={(params) => <TextField {...params} label="City" />}
        />
      </div>
    </>
  );
}