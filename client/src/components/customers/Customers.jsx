import { useEffect, useState } from 'react';
import './customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/customers')
      .then((res) => res.json())
      .then((customers) => setCustomers(customers));
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.length > 0 &&
          customers.map((customer) => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Customers;
