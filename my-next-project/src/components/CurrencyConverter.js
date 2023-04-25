import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [conversionRate, setConversionRate] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = response.data;
        const currencyList = Object.keys(data.rates);
        setCurrencies(currencyList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const rate = response.data.rates[targetCurrency];
      setConversionRate(rate);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  return (
    <Container className="flex flex-col lg:flex-row">
      <div className="p-3">
        <Input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="1"
          step="any"
          className="inline-block border border-gray-500 px-4 py-2 rounded-md"
        />
        <Select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Select>
      </div>
      <Equals>=</Equals>
      <div className="p-3">
      <Input
        type="number"
        value={conversionRate ? amount * conversionRate : ""}
        readOnly
        className="inline-block border border-gray-500 px-4 py-2 rounded-md"
      />
      <Select value={targetCurrency} onChange={handleTargetCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Select>
      </div>

      <Button onClick={convertCurrency}>Convert</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 8px;
`;

const Select = styled.select`
  margin-right: 8px;
`;

const Equals = styled.span`
  margin-right: 8px;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;
