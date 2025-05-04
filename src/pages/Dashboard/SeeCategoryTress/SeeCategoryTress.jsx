import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TreeNode = ({ node, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="ml-4 mt-2">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {node.children.length > 0 && (
          <span className="text-gray-600">{expanded ? '▼' : '▶'}</span>
        )}
        <span className={`font-medium`} style={{ marginLeft: `${level * 10}px` }}>
          {node.name}
        </span>
      </div>
      {expanded &&
        node.children.map((child) => (
          <TreeNode key={child._id} node={child} level={level + 1} />
        ))}
    </div>
  );
};

const SeeCategoryTress = () => {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    const fetchAndBuildTree = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/categories-all');
        const categories = res.data;

        // Step 1: Map categories by ID
        const map = {};
        categories.forEach((cat) => {
          map[cat._id] = { ...cat, children: [] };
        });

        // Step 2: Build the tree
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
        console.error('Error fetching categories:', error);
      }
    };

    fetchAndBuildTree();
  }, []);

  return (
    <div className="p-6 w-11/12 mx-auto bg-white rounded-xl shadow mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Tree</h2>
      {treeData.length === 0 ? (
        <p className="text-gray-600">No categories available.</p>
      ) : (
        treeData.map((node) => <TreeNode key={node._id} node={node} />)
      )}
    </div>
  );
};

export default SeeCategoryTress;
