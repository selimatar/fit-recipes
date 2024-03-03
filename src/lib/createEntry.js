import axios from 'axios';

export async function createEntry(fields, contentType) {
  try {
    let apiUrl = `https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries`;

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CONTENTFUL_MANAGAMENT_API_KEY}`,
      'X-Contentful-Content-Type': contentType
    };

    const data = {
      fields: fields
    };
    axios.post(apiUrl, data, { headers })
  } catch (error) {
    console.error('Error updating entry:', error);
  }
}