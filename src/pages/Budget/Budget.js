import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from './Budget.css';
import { Button, LoadingIndicator, Modal, DetailsModal, SuspenseErrorBundary } from 'components';
import { Route, Switch } from 'react-router-dom';
import BudgetContext from 'data/context/budget.context'
const BudgetTransactionList = React.lazy(() => import('pages/Budget/components/BudgetTransactionList'));
const BudgetCategoryList = React.lazy(() => import('pages/Budget/components/BudgetCategoryList'))
const AddTransactionView = React.lazy(() => import('pages/Budget/components/AddTransactionForm'))
const ShowTransactionDetails = React.lazy(() => import('./components/ShowTransactionDetails/ShowTransactionDetails'))

function Budget({ selectedTransactionId }) {
    // useEffect(() => {
    //     // fetchBudgetedCategories(1)
    //     // fetchBudget(1)
    //     // fetchAllCategories()
    // }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories]);

    // const isLoaded = useMemo(() => (!!commonState && Object.keys(commonState).length === 0) && (!!budgetState && Object.keys(budgetState).length === 0),
    //     [commonState, budgetState]
    // );
    const [showTransaction, setShowTransaction] = useState()



    return (
        <BudgetContext.BudgetProvider >
            <Grid>
                <section>
                    <SuspenseErrorBundary>
                        <BudgetCategoryList />
                    </SuspenseErrorBundary>
                </section>
                <section>
                    <SuspenseErrorBundary>
                        <Button to="/budget/transactions/new" variant="regular" >Add new transaction</Button>
                        <Button variant="regular" onClick={() => setShowTransaction(!showTransaction)} >{showTransaction ? 'Hide transactions' : 'Show transaction'}</Button>
                        {showTransaction && <BudgetTransactionList />}

                    </SuspenseErrorBundary>
                </section>
            </Grid>

            <Switch>
                <Route path="/budget/transactions/new">
                    <Modal>
                        <AddTransactionView />
                    </Modal>
                </Route>
                <Route path="/budget/transactions/details">
                    <DetailsModal>
                        <ShowTransactionDetails
                            transaction={selectedTransactionId}
                        />
                    </DetailsModal>
                </Route>
            </Switch>
        </BudgetContext.BudgetProvider>
    )
}

export default connect(state => {
    return {
        selectedTransactionId: state.budget.selectedTransactionId,
    }
}
)(Budget)

