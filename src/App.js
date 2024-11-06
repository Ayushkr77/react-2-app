import React from 'react';
import Products from './Components/Products';
import NewProduct from './Components/NewProduct';

const App=()=>{
  const products=[
    {
      id:'p1',
      title:'Nirma',
      amount:'100',
      date:new Date(2021,7,9)
    },
    {
      id:'p2',
      title:'Surf Excel',
      amount:'200',
      date:new Date(2021,2,7)
    },
    {
      id:'p3',
      title:'Tide',
      amount:'300',
      date:new Date(2021,2,9)
    },
    {
      id:'p4',
      title:'Maggi',
      amount:'25',
      date:new Date(2021,6,5)
    }
  ];

  function printProductData(data) {
    console.log("I am inside App.js");
    console.log(data);
  }

  return (
    <div>
      <NewProduct ayush={printProductData}/>
      <Products items={products}/>
    </div>
  );
}

export default App;