import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSumary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSumary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;