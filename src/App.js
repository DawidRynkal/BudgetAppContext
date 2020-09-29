import React, { Suspense } from 'react';
import './index.css';
import GlobalStyle from 'index.css'
import { Navigation, Wrapper, LoadingIndicator, Button } from 'components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Budget from './pages/Budget'


function App() {


  return (
    <Suspense fallback="Loading..">
      <GlobalStyle />
      <Router>
        <Navigation
          items={
            [
              { content: "HomePage", to: "/" },
              { content: "BudgetPage", to: "/budget" }
            ]}
          RightElement={(
            <div>
              <Button variant="regular" >pl</Button>
              {/* <Button variant="regular">en</Button> */}
            </div>
          )}
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              HomePage
          </Route>
            <Route path="/budget">
              <Budget />
            </Route>
          </Switch>
        </Wrapper>
      </Router>

    </Suspense>
  );
}

export default App;
