import React from "react";
import { authContent } from "../data/data";
const AuthModal = ({ open, close, mode, switchMode, onLoginSuccess }) => {
  const authtext = authContent[mode];
  if (!open || !authtext) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/60 px-4 py-8">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-xl md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase text-orange-600">
              {authtext.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              {authtext.title}
            </h2>
            <p className="mt-3 text-sm text-gray-600">{authtext.description}</p>
          </div>
          <button onClick={close} className="text-gray-500 hover:text-gray-700">
            Close
          </button>
        </div>
        <form className="space-y-4">
          {authtext.fields.map((field) => (
            <label className="block" key={field.label}>
              <span className="mb-2 block text-sm font-semibold text-gray-700">
                {field.label}
              </span>
              <input className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500" type={field.type} placeholder={field.placeholder} />
            </label>
          ))}
          <button type="button" onClick={() => { if (mode === "login") { onLoginSuccess?.(); }}} className="w-full rounded-2xl bg-orange-600 px-4 py-3 text-white transition hover:bg-orange-700">
            {authtext.primaryLabel}
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-gray-600">
          {authtext.secondaryText}
          <button onClick={switchMode} className="ml-4 font-semibold text-orange-600 hover:text-orange-700">
            {authtext.secondaryAction}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;