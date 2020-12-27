import React, { useState, useEffect } from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      ' http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    )
      .then((resp) => resp.json())
      .then((data) => setData(data));
    setIsLoading(false);
  }, []);
  return (
    <div className="App">
      <div className="container">{isLoading ? <Loader /> : <Table data={data} />}</div>
    </div>
  );
}

export default App;
