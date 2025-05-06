import React, { useEffect, useState } from "react";

function Home() {
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [Loading, setLoading] = useState(false);
  async function fetchData() {
    try {

      setLoading(true);
      const raw = await fetch("https://fakestoreapi.com/users");
      if (!raw.ok) {
        throw new Error("something went wrong");
      }
      const data = await raw.json();
      console.log(data);
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
    <div className="border border-gray-100 rounded-lg m-10 p-10 shadow-md flex flex-col justify-center items-center ">
      <h2 className="text-2xl text-indigo-400 mb-5 ">USER REGISTRY</h2>
      <table
        className="border border-gray-400 rounded-lg shadow-lg w-full text-left"
        border="1"
        cellPadding="10"
        cellSpacing="0"
      >
        <thead>
          <tr className="bg-gray-500 text-white text-lg">
            <th className="p-3">ID</th>
            <th className="p-3">Username</th>
            <th className="p-3">Email</th>
            <th className="p-3">Password</th>
          </tr>
        </thead>
        <tbody>
          {dataFromAPI.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b border-gray-300 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200 transition-all`}
            >
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.username}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">{item.password}</td>
            </tr>
          ))}
        </tbody>
        {Loading && (
          <tfoot>
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-600">
                Data is loading, please wait...
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

export default Home;
