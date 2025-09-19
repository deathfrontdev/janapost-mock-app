import { useState } from "react";
import { apiCollections } from "../mocks/apiCollection";

function Home() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">API Collections</h1>
      
      <div className="space-y-4">
        {apiCollections.map((collection) => (
          <div key={collection.name} className="border rounded-lg shadow">
            <button
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold"
              onClick={() => toggleCategory(collection.name)}
            >
              {collection.name}
            </button>
            {openCategory === collection.name && (
              <div className="px-6 py-3 text-gray-500 italic">
                Endpoints will appear here...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
