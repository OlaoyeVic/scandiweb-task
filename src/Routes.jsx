import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Women from './components/Women'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Women} />
                    {/* <Route path='/men' component={men} />
                    <Route path='/kids' component={kids} /> */}
                </Switch>
            </Router>
        )
    }
}
export default Routes