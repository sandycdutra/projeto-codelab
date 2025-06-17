import React, { useState } from 'react';
import AccountingTable from '../components/AccountingTable';
import TemporaryDrawer from '../components/TemporaryDrawer';

export default function Clothing () {

    const [clothingData, setClothingData] = useState([]);
    
    //  handle data changes coming from the AccountingTable
    const handleClothingDataChange = (newData) => {
        setClothingData(newData);
        // save on local storage?
    };

    return (
        <div>
            <TemporaryDrawer />
            <AccountingTable
                categoryName="Clothing"
                initialData={clothingData}
                onDataChange={handleClothingDataChange}
            />
        </div>
    );
}