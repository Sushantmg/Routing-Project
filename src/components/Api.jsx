import React, { useEffect, useState } from "react";
 
function Home() {
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [Loading,setLoading]= useState(false);
  async function fetchData() {
    try {
      setLoading(true);
      const raw = await fetch("https://fakestoreapi.com/users");
      if (!raw.ok) {
        throw new Error("something went wrong");
        
      }
      const data = await raw.json();
      console.log(data)
      setLoading(false);
      setDataFromAPI(data); 
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
    <h2>User Table</h2>
    <table border="1"  cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>email</th>
          <th>password</th>
        </tr>
      </thead>
      <tbody>
        {dataFromAPI.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            
          </tr>
        ))}
      </tbody>
      {Loading && <>Data is loading please wait for a while.......</>}{" "}
    </table>
  </div>
);
  
  

}
 
export default Home;