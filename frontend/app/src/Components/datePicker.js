import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import thLocale from 'date-fns/locale/th';

export default function BasicDatePicker() {
  const [locale, setLocale] = React.useState('th');
  const [value, setValue] = React.useState(new Date());
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={thLocale}>
      <DatePicker
		value={value}
		onChange={(newValue) => {
		  setValue(newValue);
		}}
		renderInput={(params) => <TextField {...params} />}
	  />
    </LocalizationProvider>
  );
}