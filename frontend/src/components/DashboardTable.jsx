import React, { useState, useEffect, useCallback } from 'react';

import './../css/accountingtable.css';

const CATEGORIES = [
    'Groceries',
    'Clothing',
    'Electronics',
];

export default function DashboardTable() {
    const [categoryTotals, setCategoryTotals] = useState([]);

    // get and calculate
    const fetchAllCategoryTotals = useCallback(() => {
        const totals = [];

        try {
            CATEGORIES.forEach(category => {
                // key
                const localStorageKey = `accounting_data_${category.toLowerCase().replace(/\s/g, '_')}`;
                const storedData = localStorage.getItem(localStorageKey);
                let categoryRows = [];

                if (storedData) {
                    try {
                        categoryRows = JSON.parse(storedData);
                    } catch (parseError) {
                        console.error(`Parsing error '${category}':`, parseError);
                    }
                }

                // total expenses
                const totalSpent = categoryRows.reduce((sum, row) => sum + parseFloat(row.spent || 0), 0).toFixed(2);
                
                totals.push({
                    categoryName: category,
                    totalSpent: totalSpent
                });
            });
            setCategoryTotals(totals);
        } catch (error) {
            console.error("Error when loading data:", error);
            setCategoryTotals([]);
        }
    }, []);

    useEffect(() => {
        fetchAllCategoryTotals();

        const handleStorageChange = (event) => {
            if (event.key && event.key.startsWith('accounting_data_')) {
                console.log("Detectada mudança no localStorage, atualizando totais.");
                fetchAllCategoryTotals();
            }
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [fetchAllCategoryTotals]);

    // calculate the total of all categories
    const totalTotal = categoryTotals.reduce((sum, data) => sum + parseFloat(data.totalSpent), 0).toFixed(2);

    return (
        <div className="accounting-table-container">
            <h2>Total expenses</h2>

            <table className="accounting-table">
                <thead>
                    <tr>
                        <th className="table-header">Category</th>
                        <th className="table-header">Total Spent (Reais)</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryTotals.length === 0 ? (
                        <tr>
                            <td colSpan="2" className="no-entries-message">No categories found or no expenses recorded.</td>
                        </tr>
                    ) : (
                        categoryTotals.map((data, index) => (
                            <tr key={data.categoryName} className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                                <td className="table-cell">{data.categoryName}</td>
                                <td className="table-cell">R$ {data.totalSpent}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <div className="total-spent-display">
                Total Spent: {totalTotal}
            </div>
        </div>
    );
}