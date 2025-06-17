import React, { useState } from 'react';
import AccountingTable from '../components/AccountingTable';
import TemporaryDrawer from '../components/TemporaryDrawer';

export default function Electronics () {

    const [electronicsData, setElectronicsData] = useState([]);
    
    //  handle data changes coming from the AccountingTable
    const handleelectronicsDataChange = (newData) => {
        setElectronicsData(newData);
        // save on local storage?
    };

    return (
        <div>
            <TemporaryDrawer />
            <AccountingTable
                categoryName="electronics"
                initialData={electronicsData}
                onDataChange={handleElectronicsDataChange}
            />
        </div>
    );
}