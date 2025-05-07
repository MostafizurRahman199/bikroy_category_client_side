
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useDarkMode } from "../../../Context/DarkModeContext";

const url = "https://bikroycategory.vercel.app";



// Arrow icons using SVG (no external package)
const ChevronRight = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
    <path d="M6 4l4 4-4 4" />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
    <path d="M4 6l4 4 4-4" />
  </svg>
);

// Folder icons
const Folder = () => (
  <svg width="16" height="16" fill="currentColor" className="text-green-400">
    <path d="M2 4a2 2 0 012-2h4l2 2h4a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" />
  </svg>
);



const TreeNode = ({ node, level = 0, refreshTree }) => {
    const [expanded, setExpanded] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [confirmName, setConfirmName] = useState("");

    const [editing, setEditing] = useState(false);
    const [editName, setEditName] = useState("");

   



        const handleUpdate = async () => {
        try {
            await axios.put(`${url}/api/categories/${node._id}`, {
            name: editName.trim(),
            });
            Swal.fire('Updated!', 'Category name updated successfully.', 'success');
            setEditing(false);
            refreshTree(); // reload tree
        } catch (err) {
            Swal.fire('Error', 'Failed to update category.', 'error');
        }
        };



  
    const handleDelete = async () => {
      if (confirmName.trim().toLowerCase() !== node.name.toLowerCase()) {
        Swal.fire('Wrong Spell', 'Write correct Spell.', 'error');
        return;
      }
      try {
        await axios.delete(`${url}/api/categories/${node._id}`);
        refreshTree(); // Reload tree after deletion
        Swal.fire('Deleted!', 'This L1 Category has been Deleted', 'success');

      } catch (err) {
        alert("Error deleting category.");
      }
    };
  
    return (
      <div className="ml-4 mt-2">
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded relative group">
          {/* Toggle icon */}
          {node.children.length > 0 ? (
            <div onClick={() => setExpanded(!expanded)} className="cursor-pointer">
              {expanded ? <ChevronDown /> : <ChevronRight />}
            </div>
          ) : (
            <div className="w-4 h-4" />
          )}
  
          <Folder />
  
          {/* Category name */}
  


                <div className="flex-1" style={{ marginLeft: `${level * 8}px` }}>
                {editing ? (
                    <div className="flex gap-2">
                    <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border px-2 py-1 rounded text-sm"
                    />
                    <button
                        onClick={handleUpdate}
                        className="text-white bg-blue-500 hover:bg-blue-600 px-2 rounded text-sm"
                    >
                        Save
                    </button>
                    </div>
                ) : (
                    <span className="font-semibold text-gray-800">{node.name}</span>
                )}
                </div>

  
          {/* Only show 3-dot menu for root categories */}
          {!node.parentId && (
            <div className="relative">
              <button
                onClick={() => {
                  setShowOptions(!showOptions);
                  setShowDeleteConfirm(false);
                  setConfirmName("");
                }}
                className="text-gray-500 hover:text-black"
              >
                ⋮
              </button>
  
      


                    {showOptions && (
                    <div className="absolute right-0 mt-2 bg-white border rounded shadow p-2 z-10">
                        <button
                        onClick={() => {
                            setShowDeleteConfirm(true);
                            setShowOptions(false);
                        }}
                        className="text-red-600 hover:underline block w-full text-left"
                        >
                        Delete
                        </button>
                        <button
                        onClick={() => {
                            setEditing(true);
                            setEditName(node.name);
                            setShowOptions(false);
                        }}
                        className="text-blue-600 hover:underline block w-full text-left mt-1"
                        >
                        Update
                        </button>
                    </div>
                    )}



            </div>
          )}
        </div>
  
        {/* Confirm delete UI */}
        {showDeleteConfirm && (
          <div className="ml-8 mt-1">
            <input
              type="text"
              placeholder={`Type "${node.name}" to confirm`}
              value={confirmName}
              onChange={(e) => setConfirmName(e.target.value)}
              className="border p-1 rounded text-sm mr-2"
            />
            <button
              onClick={handleDelete}
              className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm"
            >
              Confirm Delete
            </button>
          </div>
        )}
  
        {/* Render children if expanded */}
        {expanded &&
          node.children.map((child) => (
            <TreeNode key={child._id} node={child} level={level + 1} refreshTree={refreshTree} />
          ))}
      </div>
    );
  };
  
  




const SeeCategoryTress = () => {


  const { darkMode } = useDarkMode();
    const [treeData, setTreeData] = useState([]);
  
    const fetchAndBuildTree = async () => {
      try {
        const res = await axios.get(`${url}/api/categories-all`);
        const categories = res.data;
  
        const map = {};
        categories.forEach((cat) => {
          map[cat._id] = { ...cat, children: [] };
        });
  
        const tree = [];
        categories.forEach((cat) => {
          if (cat.parentId) {
            map[cat.parentId]?.children.push(map[cat._id]);
          } else {
            tree.push(map[cat._id]);
          }
        });
  
        setTreeData(tree);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    useEffect(() => {
      fetchAndBuildTree();
    }, []);
  
    return (
      <div className="p-6 w-11/12 mx-auto bg-white rounded-2xl shadow-lg mt-10 border border-gray-200">
        <h2 className={`${
      darkMode ? 'text-[#1a1919]' : 'text-black'
    } text-3xl font-bold mb-6 border-b pb-2`}>📂 Category Tree</h2>
        {treeData.length === 0 ? (
          <p className="text-gray-500">No categories available.</p>
        ) : (
          treeData.map((node) => (
            <TreeNode key={node._id} node={node} refreshTree={fetchAndBuildTree} />
          ))
        )}
      </div>
    );
  };
  
export default SeeCategoryTress;
