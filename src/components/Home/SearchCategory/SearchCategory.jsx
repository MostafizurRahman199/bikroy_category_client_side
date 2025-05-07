

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDarkMode } from '../../../Context/DarkModeContext';

// const SearchCategory = () => {
//   const url = import.meta.env.VITE_API_BASE_URL;
//   const [query, setQuery] = useState('');
//   const [categories, setCategories] = useState([]);
//     const {darkMode} = useDarkMode()

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (query.trim() === '') {
//         setCategories([]);
//         return;
//       }

//       axios
//         .get(`${url}/api/categories-chain-search/${query}`)
//         .then((res) => {
//           if (Array.isArray(res.data)) {
//             setCategories(res.data);
//           } else {
//             setCategories([]);
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//           setCategories([]);
//         });
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [query]);

//   const highlightMatch = (text) => {
//     if (!query) return text;

//     const regex = new RegExp(`(${query})`, 'ig');
//     const parts = text.split(regex);

//     return parts.map((part, i) =>
//       regex.test(part) ? (
//         <span key={i} style={{ color: '#FF0000', fontWeight: 'bold' }}>
//           {part}
//         </span>
//       ) : (
//         <span key={i}>{part}</span>
//       )
//     );
//   };

//   const renderChain = () => {
//     if (!Array.isArray(categories) || categories.length === 0) {
//       return <div className="text-gray-500 mt-4">No matching categories found.</div>;
//     }

//     const grouped = {};
//     categories.forEach((cat) => {
//       const parentId = cat.parentId ? cat.parentId.toString() : 'root';
//       if (!grouped[parentId]) grouped[parentId] = [];
//       grouped[parentId].push(cat);
//     });

//     const buildTree = (parentId = 'root', depth = 0) => {
//       if (!grouped[parentId]) return null;

//       return grouped[parentId].map((cat, index) => {
//         const isRoot = parentId === 'root';
//         return (
//           <div
//             key={cat._id}
//             className={`pl-${depth * 4} py-1 ${
//               isRoot
//                 ? `bg-${index % 2 === 0 ? 'blue-50' : 'green-50'} rounded-md mb-2`
//                 : ''
//             }`}
//           >
//             <div className={`ml-${depth * 4} text-sm ${isRoot ? 'font-semibold text-black' : 'text-gray-800'}`}>
//               {depth > 0 && '↳'} {highlightMatch(cat.name)}
//             </div>
//             {buildTree(cat._id.toString(), depth + 1)}
//           </div>
//         );
//       });
//     };

//     return buildTree();
//   };

//   return (
//     <div className={`min-h-[400px] w-10/12 mx-auto p-6 bg-white shadow-lg rounded-md my-6`}>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Categories</h2>
//       <input
//         type="text"
//         placeholder="Start typing to search..."
//         className={`${darkMode == true ? " text-white bg-black" : "bg-white text-black" }  w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009877] transition`}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <div className="mt-6">{renderChain()}</div>
//     </div>
//   );
// };

// export default SearchCategory;










import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDarkMode } from '../../../Context/DarkModeContext';

const SearchCategory = () => {
  const url = import.meta.env.VITE_API_BASE_URL;
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() === '') {
        setCategories([]);
        return;
      }

      axios
        .get(`${url}/api/categories-chain-search/${query}`)
        .then((res) => {
          if (Array.isArray(res.data)) {
            setCategories(res.data);
          } else {
            setCategories([]);
          }
        })
        .catch((err) => {
          console.error(err);
          setCategories([]);
        });
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const highlightMatch = (text) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'ig');
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} style={{ color: '#FF0000', fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const renderChain = () => {
    if (!Array.isArray(categories) || categories.length === 0) {
      return <div className="text-gray-500 mt-4">No matching categories found.</div>;
    }

    const grouped = {};
    categories.forEach((cat) => {
      const parentId = cat.parentId ? cat.parentId.toString() : 'root';
      if (!grouped[parentId]) grouped[parentId] = [];
      grouped[parentId].push(cat);
    });

    const buildTree = (parentId = 'root', depth = 0, rootIndex = 0) => {
      if (!grouped[parentId]) return null;

      return grouped[parentId].map((cat, index) => {
        const isRoot = parentId === 'root';
        const backgroundColor = isRoot
          ? index % 2 === 0
            ? 'bg-blue-50'
            : 'bg-green-50'
          : '';

        return (
          <div
            key={cat._id}
            className={`py-2 px-3 rounded-md mb-1 ${isRoot ? backgroundColor : ''}`}
          >
            <div className={`ml-${depth * 4} text-sm ${isRoot ? 'font-semibold text-black' : 'text-gray-800'}`}>
              {depth > 0 && '↳'} {highlightMatch(cat.name)}
            </div>
            {buildTree(cat._id.toString(), depth + 1)}
          </div>
        );
      });
    };

    return buildTree();
  };

  return (
    <div className={`min-h-[400px] w-10/12 mx-auto p-6 bg-white shadow-lg rounded-md my-6`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Categories</h2>
      <input
        type="text"
        placeholder="Start typing to search..."
        className={`${
          darkMode ? 'text-white bg-black' : 'bg-white text-black'
        } w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009877] transition`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="mt-6">{renderChain()}</div>
    </div>
  );
};

export default SearchCategory;

