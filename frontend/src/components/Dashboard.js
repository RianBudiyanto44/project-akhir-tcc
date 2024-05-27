// import React, { useState, useEffect } from 'react';
// import { createData, getData } from '../services/api';
// import DataItem from './DataItem';

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [newData, setNewData] = useState({ title: '', content: '' });
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await getData(token);
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCreate = async () => {
//     try {
//       await createData(newData, token);
//       setNewData({ title: '', content: '' });
//       fetchData();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newData.title}
//         onChange={(e) => setNewData({ ...newData, title: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Content"
//         value={newData.content}
//         onChange={(e) => setNewData({ ...newData, content: e.target.value })}
//       />
//       <button onClick={handleCreate}>Create</button>

//       {data.map(item => (
//         <DataItem key={item._id} item={item} fetchData={fetchData} token={token} />
//       ))}
//     </div>
//   );
// };

// export default Dashboard;
