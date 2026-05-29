import React, { useState } from "react";
import { authContent } from "../data/data";

const AuthModal = ({ open, close, mode, switchMode, onLoginSuccess }) => {
  const authtext = authContent[mode];
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open || !authtext) {
    return null;
  }

  const handleInputChange = (e, fieldLabel) => {
    setFormData({
      ...formData,
      [fieldLabel]: e.target.value,
    });
    setError("");
  };

  const validateForm = () => {
    for (const field of authtext.fields) {
      if (!formData[field.label] || !formData[field.label].trim()) {
        setError(`${field.label} is required`);
        return false;
      }
    }

    if (mode === "signup") {
      const emailField = authtext.fields.find((f) => f.type === "email");
      if (emailField && !formData[emailField.label].includes("@")) {
        setError("Please enter a valid email");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;
    setLoading(true);
    try {
      const nameField = authtext.fields.find((f) => f.label === "Name" || f.label === "Full Name");
      const emailField = authtext.fields.find((f) => f.type === "email");
      const userName = formData[nameField?.label || "Name"];
      const userEmail = formData[emailField?.label || "Email"];
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      const userData = {
        name: userName,
        email: userEmail,
        phone: formData["Phone Number"] || formData["Phone"] || "",
        guests: formData["Guests"] || "",
        date: formData["Date"] || "",
        password: formData["Password"] || "",
        favoriteDish: formData["Favorite Dish"] || "",
        mode: mode,
        ...formData,
      };
      // Call success callback with user data
      onLoginSuccess?.(userData);
      setFormData({});
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/60 px-4 pt-8 pb-8">
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
        <form onSubmit={handleSubmit} className="space-y-4">
          {authtext.fields.map((field) => (
            <label className="block" key={field.label}>
              <span className="mb-2 block text-sm font-semibold text-gray-700">
                {field.label}
              </span>
              <input className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500" type={field.type} placeholder={field.placeholder} value={formData[field.label] || ""} onChange={(e) => handleInputChange(e, field.label)} disabled={loading} />
            </label>
          ))}
          {error && (
            <p className="text-sm text-red-600 font-medium">{error}</p>
          )}
          <button type="submit" disabled={loading} className="w-full rounded-2xl bg-orange-600 px-4 py-3 text-white transition hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? "Loading..." : authtext.primaryLabel}
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-gray-600">
          {authtext.secondaryText}
          <button onClick={() => { switchMode(); setFormData({}); setError(""); }} className="ml-4 font-semibold text-orange-600 hover:text-orange-700">
            {authtext.secondaryAction}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;