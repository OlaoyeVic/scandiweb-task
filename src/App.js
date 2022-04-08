import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';
import Header from './components/Header';
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Routes />
      </div>
    )
  }
}
export default App;