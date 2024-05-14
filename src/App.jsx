import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import PaymentSuccess from './PaymentSuccess';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<PaymentForm />} />
                <Route path="/success" element={<PaymentSuccess />} />
            </Routes>
        </Router>
    );
};

export default App;
