import axios from 'axios';

async function createFormEntry(fields) {
  try {
    let apiUrl = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries`;

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CONTENTFUL_MANAGAMENT_API_KEY}`,
      'X-Contentful-Content-Type': "contact_form"
    };

    const data = {
      fields: fields
    };
    await axios.post(apiUrl, data, { headers })
  } catch (error) {
    console.error('Error updating entry:', error);
  }
}

export default async function ContactFrom () {

  async function handleSubmit (formData) {
    //send the data via api
    'use server'
    const fields = {
      "first_name": {
        "en-US": formData.get('first_name')
      },
      "last_name": {
        "en-US": formData.get('last_name')
      },
      "email_adress": {
        "en-US": formData.get('email')
      },
      "subject": {
        "en-US": formData.get('subject')
      },
      "description": {
        "en-US": formData.get('description')
      }
    }
    
    if(fields) {
      await createFormEntry(fields)
    }
  }

  return (
    <form action={handleSubmit} className="max-w-md mx-auto my-8">
      <div className="mb-4">
        <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your first name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your last name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter the subject"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          type="text"
          id="description"
          name="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter the description"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
}