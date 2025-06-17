import React, { useState } from 'react';
import AccountingTable from '../components/AccountingTable';
import TemporaryDrawer from '../components/TemporaryDrawer';

export default function Electronics () {
    return (
        <div>
            <TemporaryDrawer />
            <AccountingTable
                categoryName="electronics"
            />
        </div>
    );
}