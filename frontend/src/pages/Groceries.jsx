import React, { useState } from 'react';
import AccountingTable from '../components/AccountingTable';
import TemporaryDrawer from '../components/TemporaryDrawer';

export default function Groceries() {

    const [groceriesData, setGroceriesData] = useState([]);

    //  handle data changes from the AccountingTable
    const handleGroceriesDataChange = (newData) => {
        setGroceriesData(newData);
        // save on local storage?
    };

    return (
        <div>
            <TemporaryDrawer />
            <AccountingTable
                categoryName="Groceries"
                initialData={groceriesData}
                onDataChange={handleGroceriesDataChange}
            />
        </div>
    );
}