import {addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expsense action object', () => {
  const action = removeExpense( { id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should edit an expense action object', () => {
  const action = editExpense('123', { note: 'Hello' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'Hello'
    }
  });
});