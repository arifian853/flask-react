import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("http://localhost:5000/data").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programming: data.programming,
        });
      })
    );
  }, []);
  return (
    <>
      <div>

      </div>

      <table className="card">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date</th>
            <th>Programming Language</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>{data.name}</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>{data.age}</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>{data.date}</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>{data.programming}</td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default App
