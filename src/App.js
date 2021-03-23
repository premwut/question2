import React, { useState } from 'react';
import axios from 'axios';

import Table from './Table';

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [], term: '' };
  }
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { data } = await axios.get('https://api.publicapis.org/categories');
    this.setState({ data });
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.term} onChange={(e) => this.onInputChange(e)} />
        <hr/>
        <Table categories={this.state.data} term={this.state.term} />
      </div>
    )
  }
}

export default App;
