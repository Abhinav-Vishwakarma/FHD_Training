import React, { useState, useEffect } from 'react';

function Dashboard() {
  
  const [jsonData, setJsonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  async function fetchData() {
    try {
      const serverResponse = await fetch('https://fakestoreapi.com/products');
      const data = await serverResponse.json();
      setJsonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
     
    } finally {
      setIsLoading(false); 
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

 
  return (
    <div className='container'>
      {jsonData.map((e)=>{
        return (
          <div className='productCard' key={e.id}> 
            <img src={e.image} /> 
            <h1>{e.title}</h1>
            <h3>${e.price}</h3>
            <div>
              <h5>⭐{e.rating.rate}</h5>
              <h5>📚{e.rating.count}</h5>
            </div>
            <h4>{e.category}</h4>
            <p>{e.description}</p>

           
          </div>
        )
      })}
    </div>
  );
}

export default Dashboard;