// import React, { useState } from 'react';
// import axios from 'axios';

// const ManageProductTitle = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState(null);
//   const [children, setChildren] = useState([]);
//   const [newTitle, setNewTitle] = useState('');
//   const [newL1, setNewL1] = useState('');

//   const fetchCategory = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/categories/${searchTerm}`);
//       setCategory(res.data.parent);
//       setChildren(res.data.children);
//     } catch (err) {
//       console.error(err);
//       setCategory(null);
//       setChildren([]);
//     }
//   };

//   const createChild = async () => {
//     if (!newTitle || !category) return;
//     await axios.post('http://localhost:5000/api/categories', {
//       name: newTitle,
//       parentId: category._id,
//     });
//     setNewTitle('');
//     fetchCategory();
//   };

//   const createL1Category = async () => {
//     if (!newL1) return;
//     await axios.post('http://localhost:5000/api/categories', { name: newL1 });
//     setNewL1('');
//   };

//   const updateChild = async (id, name) => {
//     await axios.put(`http://localhost:5000/api/categories/${id}`, { name });
//     fetchCategory();
//   };

//   const deleteChild = async (id) => {
//     await axios.delete(`http://localhost:5000/api/categories/${id}`);
//     fetchCategory();
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">🛠️ Manage Product Categories</h2>

//       {/* Top Inputs */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         {/* Create L1 */}
//         <div className="flex flex-col">
//           <label className="text-sm mb-1 font-medium text-gray-600">Create L1 Category</label>
//           <div className="flex">
//             <input
//               type="text"
//               placeholder="New L1 category..."
//               value={newL1}
//               onChange={(e) => setNewL1(e.target.value)}
//               className="flex-1 border border-gray-300 px-3 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-green-400"
//             />
//             <button
//               onClick={createL1Category}
//               className="bg-green-500 text-white px-4 rounded-r hover:bg-green-600 transition"
//             >
//               Create
//             </button>
//           </div>
//         </div>

//         {/* Search Category */}
//         <div className="flex flex-col">
//           <label className="text-sm mb-1 font-medium text-gray-600">Search Category</label>
//           <div className="flex">
//             <input
//               type="text"
//               placeholder="Search category..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-1 border border-gray-300 px-3 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400"
//             />
//             <button
//               onClick={fetchCategory}
//               className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition"
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Create Subcategory */}
//       {category && (
//         <div className="mb-6">
//           <h3 className="font-semibold text-gray-700 mb-2">Create subcategory for: <span className="text-blue-600">{category.name}</span></h3>
//           <div className="flex">
//             <input
//               type="text"
//               placeholder="New subcategory title"
//               value={newTitle}
//               onChange={(e) => setNewTitle(e.target.value)}
//               className="flex-1 border border-gray-300 px-3 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-green-400"
//             />
//             <button
//               onClick={createChild}
//               className="bg-green-500 text-white px-4 rounded-r hover:bg-green-600 transition"
//             >
//               Create
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Children List */}
//       {children.length > 0 && (
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-gray-700">Child Categories</h3>
//           <div className="space-y-3">
//             {children.map((child) => (
//               <div key={child._id} className="flex items-center gap-2">
//                 <input
//                   type="text"
//                   value={child.name}
//                   onChange={(e) =>
//                     setChildren((prev) =>
//                       prev.map((c) => (c._id === child._id ? { ...c, name: e.target.value } : c))
//                     )
//                   }
//                   className="flex-1 border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
//                 />
//                 <button
//                   onClick={() => updateChild(child._id, child.name)}
//                   className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => deleteChild(child._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageProductTitle;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const ManageProductTitle = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState(null);
//   const [children, setChildren] = useState([]);
//   const [newTitle, setNewTitle] = useState('');
//   const [newL1, setNewL1] = useState('');

//   const fetchCategory = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/categories/${searchTerm.trim()}`);
//       setCategory(res.data.parent);
//       setChildren(res.data.children);
//     } catch (err) {
//       console.error(err);
//       setCategory(null);
//       setChildren([]);
//       Swal.fire('Not Found', 'No matching category found.', 'error');
//     }
//   };

//   const createChild = async () => {
//     if (!newTitle || !category) return;
//     await axios.post('http://localhost:5000/api/categories', {
//       name: newTitle,
//       parentId: category._id,
//     });
//     setNewTitle('');
//     fetchCategory();
//   };

//   const createL1Category = async () => {
//     if (!newL1) return;
//     await axios.post('http://localhost:5000/api/categories', {
//       name: newL1,
//     });
//     setNewL1('');
//     Swal.fire('Created', 'L1 category created successfully.', 'success');
//   };

//   const updateChild = async (id, name) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'Save changes to this category?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, Save it!',
//     });

//     if (result.isConfirmed) {
//       await axios.put(`http://localhost:5000/api/categories/${id}`, { name });
//       fetchCategory();
//       Swal.fire('Saved!', 'Category updated.', 'success');
//     }
//   };

//   const deleteChild = async (id) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'Delete this category?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, Delete it!',
//     });

//     if (result.isConfirmed) {
//       await axios.delete(`http://localhost:5000/api/categories/${id}`);
//       fetchCategory();
//       Swal.fire('Deleted!', 'Category has been removed.', 'success');
//     }
//   };

//   return (
//     <div className="p-6 w-11/12 mx-auto bg-white rounded-xl shadow space-y-6 mt-10">
//       <h2 className="text-2xl font-bold text-center text-gray-800">Manage Product Titles</h2>

//       <div className="flex flex-col sm:flex-row justify-between gap-4">
//         {/* Create L1 */}
//         <div className="flex gap-2 w-full">
//           <input
//             type="text"
//             placeholder="New L1 category..."
//             value={newL1}
//             onChange={(e) => setNewL1(e.target.value)}
//             className="border px-3 py-1 rounded w-full"
//           />
//           <button
//             onClick={createL1Category}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
//           >
//             Create L1
//           </button>
//         </div>

//         {/* Search */}
//         <div className="flex gap-2 w-full">
//           <input
//             type="text"
//             placeholder="Search category..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border px-3 py-1 rounded w-full"
//           />
//           <button
//             onClick={fetchCategory}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {category && (
//         <div className="flex gap-2">
//           <input
//             type="text"
//             placeholder="New subcategory title"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//             className="border px-3 py-2 rounded w-full"
//           />
//           <button
//             onClick={createChild}
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//           >
//             Create Sub
//           </button>
//         </div>
//       )}

//       {children.length > 0 && (
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Child Categories of: {category?.name}</h3>
//           {children.map((child) => (
//             <div key={child._id} className="flex gap-2 items-center">
//               <input
//                 type="text"
//                 value={child.name}
//                 onChange={(e) =>
//                   setChildren((prev) =>
//                     prev.map((c) =>
//                       c._id === child._id ? { ...c, name: e.target.value } : c
//                     )
//                   )
//                 }
//                 className="border px-3 py-2 rounded flex-1"
//               />
//               <button
//                 onClick={() => updateChild(child._id, child.name)}
//                 className="bg-yellow-400 hover:bg-yellow-500 px-3 py-2 rounded"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => deleteChild(child._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageProductTitle;




// (Replace the full component with this)
// === FRONTEND (React + Axios + SweetAlert) ===
// Filename: ManageProductTitle.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageProductTitle = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(null);
  const [children, setChildren] = useState([]);
  const [newL1, setNewL1] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const fetchCategory = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/categories/${searchTerm.trim().toLowerCase()}`);
      setCategory(res.data.parent);
      setChildren(res.data.children);
    } catch (err) {
      setCategory(null);
      setChildren([]);
      Swal.fire('Not Found', 'No matching category found.', 'error');
    }
  };

  const createL1Category = async () => {
    if (!newL1) return;
    await axios.post('http://localhost:5000/api/categories', {
      name: newL1.toLowerCase(),
    });
    setNewL1('');
    Swal.fire('Success', 'L1 category created.', 'success');
  };

  const createChild = async () => {
    if (!newTitle || !category) return;
    await axios.post('http://localhost:5000/api/categories', {
      name: newTitle.toLowerCase(),
      parentId: category._id,
    });
    setNewTitle('');
    fetchCategory();
  };

  const updateChild = async (id, name) => {
    await axios.put(`http://localhost:5000/api/categories/${id}`, { name });
    fetchCategory();
  };

  const deleteChild = async (id) => {
    await axios.delete(`http://localhost:5000/api/categories/${id}`);
    fetchCategory();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Categories</h1>

      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search category..."
          className="border px-3 py-2 rounded mr-2"
        />
        <button onClick={fetchCategory} className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </div>

      {category && (
        <>
          <h3 className="text-lg font-semibold">Children of: {category.name}</h3>
          <div className="space-y-2">
            {children.map((child) => (
              <div key={child._id} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={child.name}
                  onChange={(e) =>
                    setChildren((prev) =>
                      prev.map((c) =>
                        c._id === child._id ? { ...c, name: e.target.value } : c
                      )
                    )
                  }
                  className="border px-3 py-2 rounded flex-1"
                />
                <button onClick={() => updateChild(child._id, child.name)} className="bg-yellow-500 px-3 py-2 rounded">Save</button>
                <button onClick={() => deleteChild(child._id)} className="bg-red-500 text-white px-3 py-2 rounded">Delete</button>
              </div>
            ))}

            <div className="mt-4">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="New child title"
                className="border px-3 py-2 rounded mr-2"
              />
              <button onClick={createChild} className="bg-green-500 text-white px-4 py-2 rounded">Add Child</button>
            </div>
          </div>
        </>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Create New L1 Category</h3>
        <input
          type="text"
          value={newL1}
          onChange={(e) => setNewL1(e.target.value)}
          placeholder="New L1 title"
          className="border px-3 py-2 rounded mr-2"
        />
        <button onClick={createL1Category} className="bg-purple-500 text-white px-4 py-2 rounded">Create</button>
      </div>
    </div>
  );
};

export default ManageProductTitle;