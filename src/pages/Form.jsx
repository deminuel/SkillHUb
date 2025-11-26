import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application successful');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-md w-full max-w-md mx-auto">
      <h1 className="font-bold text-xl italic mb-2">
        Provide your CV and certificate
      </h1>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Upload CV:</span>
        <input
          required
          type="file"
          accept=".pdf,.doc,.docx"
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-semibold">Upload Certificate:</span>
        <input
          required
          type="file"
          accept=".pdf,.jpg,.png"
          className="border p-2 rounded"
        />
      </label>

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded w-44"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
