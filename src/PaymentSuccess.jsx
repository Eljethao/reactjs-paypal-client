import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess = () => {
    const location = useLocation();
    // const history = useHistory();
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiYTVmODlkNjMyNmFkNDExYTNmNyIsInN0YXR1cyI6IkZVTExfTUVNQkVSU0hJUCIsInJvbGUiOiJNRU1CRVIiLCJpYXQiOjE3MTU2NjcxODYsImV4cCI6MTcxNTc1MzU4Nn0.jDqE9Lpf3s429hZkHG71vgtHjCZ-V1ZntiCCuR-DmBw'); 

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const payerId = params.get('PayerID');
        const paymentId = params.get('paymentId');
        console.log("payerId: ", payerId)
        console.log("paymentId: ", paymentId)

        const url= "YOUR_URL"
        if (payerId && paymentId) {
            axios.post(`${url}`, {payerId, paymentId},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
                .then(response => {
                    console.log('Payment successful:', response.data);
                    // Redirect to a confirmation page or display success message
                    // history.push('/confirmation'); // Adjust the path as necessary
                })
                .catch(error => {
                    console.error('Payment success handling error:', error);
                    // Handle error, redirect to an error page or display error message
                });
        }
    }, [location.search]);

    return (
        <div>
            <h2>Payment Success</h2>
            <p>Your payment was successful. Thank you for your purchase!</p>
        </div>
    );
};

export default PaymentSuccess;
