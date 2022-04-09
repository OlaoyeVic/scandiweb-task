import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import All from './components/All'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={All} />
                    {/* <Route path='/men' component={men} />
                    <Route path='/kids' component={kids} /> */}
                </Switch>
            </Router>
        )
    }
}
export default Routes