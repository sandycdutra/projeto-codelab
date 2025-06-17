import React, { useState, useEffect } from 'react';
import './../css/accountingtable.css';

export default function AccountingTable({ categoryName }) {
    // 1 key for each category
    const localStorageKey = `accounting_data_${categoryName.toLowerCase().replace(/\s/g, '_')}`;

    // put data on local storage
    const [rows, setRows] = useState(() => {
        try {
            const storedData = localStorage.getItem(localStorageKey);
            return storedData ? JSON.parse(storedData) : [];
        } catch (error) {
            console.error("Erro ao carregar dados do localStorage:", error);
            return [];
        }
    });

    const [newRow, setNewRow] = useState({ title: '', value: '', quantity: '' });

    // when adding new row
    useEffect(() => {
        try {
            localStorage.setItem(localStorageKey, JSON.stringify(rows));
        } catch (error) {
            console.error("Couldn't save data on local storage:", error);
        }
    }, [rows, localStorageKey]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRow(prevRow => ({ ...prevRow, [name]: value }));
    };

    const addRow = () => {
        const value = parseFloat(newRow.value);
        const quantity = parseInt(newRow.quantity);
        
        if (!newRow.title || isNaN(value) || isNaN(quantity) || value <= 0 || quantity <= 0) {
            alert('Please enter valid data when adding a new row!');
            return;
        }

        const spent = value * quantity;
        const updatedRows = [...rows, { ...newRow, spent: spent.toFixed(2) }];
        setRows(updatedRows);
        
        // clear
        setNewRow({ title: '', value: '', quantity: '' });
    };

    const calculateTotalSpent = () => {
        return rows.reduce((total, row) => total + parseFloat(row.spent), 0).toFixed(2);
    };

    return (
        <div className="accounting-table-container">
            <h2>Expenses on {categoryName}</h2>

            <div className="add-entry-section">
                <h3>Add New Entry</h3>
                <div className="input-grid">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newRow.title}
                        onChange={handleInputChange}
                        className="input-field"
                    />
                    <input
                        type="number"
                        name="value"
                        placeholder="Value (ex 10.00)"
                        value={newRow.value}
                        onChange={handleInputChange}
                        className="input-field"
                    />
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity (ex 2)"
                        value={newRow.quantity}
                        onChange={handleInputChange}
                        className="input-field"
                    />
                    <button 
                        onClick={addRow}
                        className="add-row-button"
                    >
                        Add Row
                    </button>
                </div>
            </div>

            <table className="accounting-table">
                <thead>
                    <tr>
                        <th className="table-header">Title</th>
                        <th className="table-header">Value</th>
                        <th className="table-header">Quantity</th>
                        <th className="table-header">Spent (Reais)</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length === 0 ? ( 
                        <tr>
                            <td colSpan="4" className="no-entries-message">No entries yet.</td>
                        </tr>
                    ) : (
                        rows.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                                <td className="table-cell">{row.title}</td>
                                <td className="table-cell">R$ {parseFloat(row.value).toFixed(2)}</td>
                                <td className="table-cell">{row.quantity}</td>
                                <td className="table-cell">R$ {row.spent}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <div className="total-spent-display">
                Total Spent on {categoryName}: <span className="total-amount">R$ {calculateTotalSpent()}</span>
            </div>
        </div>
    );
}