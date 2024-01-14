const ContactForm = () => {

  return (
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;