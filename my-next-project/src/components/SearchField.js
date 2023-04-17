import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete({ stateChanger, city_list }) {
  return (
    <>
      <div className='bg-white w-full md:w-96'>
        <Autocomplete
          onChange={(event, value) => stateChanger(value)}
          disablePortal
          id="combo-box-demo"
          options={city_list}
          renderInput={(params) => <TextField {...params} label="City" fullWidth />}
        />
      </div>
    </>
  );
}
