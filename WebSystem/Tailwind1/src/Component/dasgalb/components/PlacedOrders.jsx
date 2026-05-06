import React from "react";
import { dishes } from "../data/data";

const PlacedOrders = ({ open, close }) => {
  if (!open) return null;

  const orders = [
    {
      id: "FH-2048",
      name: "Grilled Steak",
      status: "Preparing",
      eta: "15 min",
      total: "$18",
      dish: dishes.find((item) => item.name === "Grilled Steak"),
    },
    {
      id: "FH-2041",
      name: "Healthy Salad",
      status: "Delivered",
      eta: "Completed",
      total: "$10",
      dish: dishes.find((item) => item.name === "Healthy Salad"),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 min-h-screen w-full overflow-auto bg-slate-900/90 p-0">
      <div className="min-h-screen w-full bg-amber-50 p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-orange-600">My Orders</p>
            <h1 className="text-3xl font-bold text-slate-900">Your recent food orders</h1>
            <p className="mt-3 text-sm text-slate-600">Review your current and previous orders with quick status updates.</p>
          </div>
          <button onClick={close} className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-amber-50 text-sm font-semibold">
            Back to Home
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {orders.map((order) => (
            <div key={order.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-orange-600">Order {order.id}</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{order.name}</h2>
                </div>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-slate-600">Estimated time: {order.eta}</p>
              <div className="mt-6 rounded-3xl bg-amber-50 p-4 text-sm text-slate-700 shadow-sm">
                Total: <span className="font-semibold text-slate-900">{order.total}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">Popular dishes</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {dishes.slice(0, 3).map((dish) => (
              <div key={dish.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={dish.image} alt={dish.name} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900">{dish.name}</h3>
                    <span className="text-sm font-semibold text-orange-600">{dish.price}</span>
                  </div>
                  <p className="text-sm text-slate-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacedOrders;