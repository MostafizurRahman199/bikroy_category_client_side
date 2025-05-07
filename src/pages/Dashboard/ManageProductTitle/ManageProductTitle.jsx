

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const url = "https://bikroycategory.vercel.app";

const ManageProductTitle = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(null);
  const [children, setChildren] = useState([]);
  const [newL1, setNewL1] = useState('');
  const [newTitle, setNewTitle] = useState('');

  // const url = "http://localhost:5000/api/categories"

  const fetchCategory = async () => {
    try {
      const res = await axios.get(`${url}/api/categories/${searchTerm.trim().toLowerCase()}`);
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
    await axios.post(`${url}/api/categories`, {
      name: newL1.toLowerCase(),
    });
    setNewL1('');
    Swal.fire('Success', 'L1 category created.', 'success');
  };

  const createChild = async () => {
    if (!newTitle || !category) return;
    await axios.post(`${url}/api/categories`, {
      name: newTitle.toLowerCase(),
      parentId: category._id,
    });
    setNewTitle('');
    fetchCategory();
    Swal.fire({
      icon: 'success',
      title: 'New Child Created',
      showConfirmButton: false,
      timer: 1000
    });
  };

  const updateChild = async (id, name) => {
    await axios.put(`${url}/api/categories/${id}`, { name });
    fetchCategory();
    Swal.fire({
      icon: 'success',
      title: 'Update Complete',
      showConfirmButton: false,
      timer: 1000
    });
  };




  const deleteChild = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    });
  
    if (result.isConfirmed) {
      try {
        await axios.delete(`${url}/api/categories/${id}`);
        fetchCategory();
        Swal.fire('Deleted!', 'The item has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error', 'Failed to delete item.', 'error');
      }
    } else {
      Swal.fire('Cancelled', 'Your data is safe.', 'info');
    }
  };



  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-black">Manage Categories</h1>

      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search category..."
          className="border px-3 py-2 rounded mr-2 text-black"
        />
        <button onClick={fetchCategory} className="bg-blue-500 text-white px-4 py-2 rounded ">Search</button>
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
                  className="border px-3 py-2 rounded flex-1 text-black"
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
                className="border px-3 py-2 rounded mr-2 text-black"
              />
              <button onClick={createChild} className="bg-green-500 text-white px-4 py-2 rounded">Add Child</button>
            </div>
          </div>
        </>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-black">Create New L1 Category</h3>
        <input
          type="text"
          value={newL1}
          onChange={(e) => setNewL1(e.target.value)}
          placeholder="New L1 title"
          className="border px-3 py-2 rounded mr-2 text-black"
        />
        <button onClick={createL1Category} className="bg-purple-500 text-white px-4 py-2 rounded">Create</button>
      </div>
    </div>
  );
};

export default ManageProductTitle;