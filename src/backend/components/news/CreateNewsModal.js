// import React, { useState } from 'react';

// const CreateNewsModal = ({ showModal, closeModal }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic to handle the form submission
//     console.log('Form submitted:', formData);
//     // Close the modal after submission
//     closeModal();
//   };

//   return (
//     <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${showModal ? '' : 'hidden'}`}>
//       <div className="bg-gray-800 bg-opacity-75 w-full h-full absolute"></div>
//       <div className="bg-white p-8 rounded shadow-md z-10">
//         <h2 className="text-2xl font-bold mb-4">CREATE NEWS</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-2 rounded"
//               rows="4"
//               required
//             />
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateNewsModal;


import React, { useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

const CreateNewsModal = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // If validation passes, add your logic to handle the form submission
      console.log('Form submitted:', formData);
      // Close the modal after submission
      closeModal();
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${showModal ? '' : 'hidden'}`}>
      <div className="bg-gray-800 bg-opacity-75 w-full h-full absolute"></div>
      <div className="bg-white p-4 md:p-8 rounded shadow-md z-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">CREATE NEWS</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
              rows="4"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          <button type="submit" className="bg-[#a19810] text-white px-4 py-2 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewsModal;
