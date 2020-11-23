
export const fetchBudget = async () => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}/budgets/1/?_embed=transactions`);
    console.log(process.env.REACT_APP_API_URL)
    const data = await response.json();
    return data;
}

export const fetchBudgetedCategories = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/budgets/1/budgetCategories`);
    const data = await response.json();
    return data;
}

export const addTransaction = async ({ budgetId, data }) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/budgets/${budgetId}/transactions`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });


    return await response.json();
}

