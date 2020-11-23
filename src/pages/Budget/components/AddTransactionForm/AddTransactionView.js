import React from 'react';
import { useMutation, useQuery } from 'react-query';
import API from 'data/fetch';
import AddTransactionForm from './AddTransactionForm';

import { useHistory } from 'react-router-dom';


function AddTransactionView() {
    const { data: budget, refetch } = useQuery('budget', API.budget.fetchBudget);
    const { data: allCategories } = useQuery('allCategories', API.common.fetchAllCategories);

    const [mutate] = useMutation(API.budget.addTransaction)


    const history = useHistory();

    const handleOnSubmitAddTransaction = (values) => {
        mutate({
            budgetId: budget.id,
            data: values,
        }).then(() => refetch())
            .then(() => history.goBack())
    }

    return (
        <AddTransactionForm
            categories={allCategories}
            groupCategoriesBy={'parentCategory.name'}
            onSubmit={handleOnSubmitAddTransaction}
        />
    )
}
export default AddTransactionView;