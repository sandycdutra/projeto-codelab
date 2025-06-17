import React, { useState } from 'react';
import AccountingTable from '../components/AccountingTable';
import TemporaryDrawer from '../components/TemporaryDrawer';

export default function Groceries() {
    return (
        <div>
            <TemporaryDrawer />
            <AccountingTable
                categoryName="Groceries"
            />
        </div>
    );
}