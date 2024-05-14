import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/pay', { customer });
      console.log("response: ", response.data)
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error initiating payment', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Pay with PayPal</button>
    </form>
  )
}

export default App
