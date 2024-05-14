import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        address: '',
    });
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiYTVmODlkNjMyNmFkNDExYTNmNyIsInN0YXR1cyI6IkZVTExfTUVNQkVSU0hJUCIsInJvbGUiOiJNRU1CRVIiLCJpYXQiOjE3MTU2NjcxODYsImV4cCI6MTcxNTc1MzU4Nn0.jDqE9Lpf3s429hZkHG71vgtHjCZ-V1ZntiCCuR-DmBw'); // Replace with your actual token
    const navigate = useNavigate(); // Initialize useHistory hook

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
            const url = "YOUR_URL"
            const response = await axios.post(`${url}`, {
                customer,
                product: "664305d087b48b774ac5142b",
                price: 12100,
                paymentMethod: "PAYPAL",
                rank: "REGULAR"
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Purchase successful:', response.data);
            // Redirect to success page after successful purchase
            // navigate('/success');
            window.location.href = response.data.redirectUrl;
        } catch (error) {
            console.error('Purchase error:', error);
            // Handle error response, show an error message to the user, etc.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <div>
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
            </div> */}
            <button type="submit" style={{margin: 20, backgroundColor: "#003087", color: "white"}}>Pay with PayPal</button>
        </form>
    );
};

export default PaymentForm;
