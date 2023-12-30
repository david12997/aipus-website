'use client';
import React from 'react';
import Select from 'react-select';

const stylesSelect = {
  control: (provided: any, state: any) => ({
    ...provided,
    minHeight: '60px',
    width: '100%',
    backgroundColor: '#EFEFEF',
    color: '#6e6e6e',
    fontWeight: "bold",
    fontSize: "20px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: '#6e6e6e',
    fontWeight: "bold",
    fontSize: "20px",
  }),
};

const currencyOptions = [
    { value: 'USD', label: 'USD' },
    { value: 'CAD', label: 'CAD'},
    { value: 'EUR', label: 'EUR' },
    { value: 'COP', label: 'COP' },
    { value: 'MXN', label: 'MXN' },
    { value: 'GBP', label: 'GBP' },
    { value: 'ARS', label: 'ARS' },
    { value: 'BRL', label: 'BRL' },
    { value: 'CLP', label: 'CLP' },
  // Agrega más divisas aquí
];

const CurrencySelect = () => {
  const [selectedOption, setSelectedOption] = React.useState(currencyOptions[3]);

  const handleChange = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <Select
      id="currency"
      instanceId={"currency"}
      styles={stylesSelect}
      options={currencyOptions}
      value={selectedOption}
      onChange={handleChange}
      className="w-[100%] mt-2"
      classNamePrefix="select"
      defaultValue={currencyOptions[3]}
      
    />
  );
};

export default CurrencySelect;