import React, { useState } from "react";
import ShowCase from '../assets/ShowCaseImage.avif'
import { menuDetails, dishes } from '../data/data.jsx'

const Showcase = ({ orders, addOrder }) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
    <div>
    <div className="bg-amber-50 w-full flex md:flex-row sm:flex-col pt-8 md:py-8 px-4">
      <div className="sm:w-full md:w-1/2">
        <p className="text-orange-600 text-lg font-semibold mb-4">Fresh and tasty</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          Enjoy delicious meals made with fresh ingredients
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 w-2/3">
          Experience warm service, beautiful dishes, and a comfortable place for family and friends.
        </p>
        <div className="mt-8 p-4 flex gap-4 w-2/3">
          <button onClick={() => setShowMenu(true)} className="bg-orange-600 w-35 h-13 rounded-xl text-white">Order Now</button>
          <button onClick={() => setShowMenu(true)} className="bg-gray-200 w-35 h-13 rounded-xl">View Menu</button>
        </div>
      </div>
      <div className=" sm:w-full md:w-1/2 flex justify-center items-center">
        <img src={ShowCase} alt="" className="w-5/6" />
      </div>
    </div>
    {showMenu && (
      <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50" onClick={() => setShowMenu(false)}>
        <div className="bg-white p-8 rounded-lg max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>
          <p className="text-orange-600 text-sm font-semibold mb-2">Featured Menu</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Take a closer look at today's popular dishes
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          This demo menu overview gives costumers a quick look at the restaraunt's featured meals before ordering.
        </p>
          <div className="grid md:grid-cols-3 gap-6">
            {menuDetails.map(item => {
              const dish = dishes.find((dishItem) => dishItem.name === item.name) || {
                name: item.name,
                price: item.price,
                description: item.description,
              };
              const alreadyAdded = orders?.some((order) => order.dish?.name === dish.name || order.name === dish.name);

              return (
                <div key={item.id} className="bg-orange-50 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-lg font-bold text-orange-600">{item.price}</p>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-sm text-gray-500">Serves: {item.serving}</p>
                  <p className="text-sm text-gray-500">Prep Time: {item.prepTime}</p>
                  <ul className="text-sm text-gray-500 mt-2">
                    {item.extras.map((extra, index) => (
                      <li key={index}>• {extra}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => addOrder?.(dish)}
                    disabled={alreadyAdded}
                    className={`mt-4 w-full rounded-3xl px-4 py-3 text-sm font-semibold text-white transition ${alreadyAdded ? "bg-slate-300 text-slate-600" : "bg-orange-500 hover:bg-orange-600"}`}
                  >
                    {alreadyAdded ? "Added" : "Add to My Orders"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default Showcase;