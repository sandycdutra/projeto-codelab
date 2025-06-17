import React, { useState } from 'react';
import AccountingTable from '../components/AccountingTable';
import TemporaryDrawer from '../components/TemporaryDrawer';

export default function Clothing () {
    return (
        <div>
            <TemporaryDrawer />
            <AccountingTable
                categoryName="Clothing"
            />
        </div>
    );
}