import Link from 'next/link';
import client from '../app/contentfulClient';

async function getRecipeImage(thumbnail) {
  if(!thumbnail) {
    return null;
  }

  try {
    const response = await client.getEntry(thumbnail.sys.id);
    return response.fields.image.fields.file;
  } catch (error) {
    console.error('Error while fetching recipe image: ', error);
    return null;
  }
}

export default async function Recipe({recipe}) {
  const {slug, title, alt_text, description, thumbnail} = recipe.fields;
  const recipeImage = await getRecipeImage(thumbnail);

  return ( 
    <div className="bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {/* Will have a look for using next/img instead of pure img html component */}
      <img
        src={recipeImage ? 'https:' + recipeImage.url : ''}
        alt={alt_text}
        className="w-full h-40 object-cover mt-3 rounded-md mb-2"
      />
      <p className="text-gray-400 truncate">{description}</p>
      <Link href={"/recipes/" + slug}>
        <p className="text-m mt-3">Let's Cook -{'>'}</p>
      </Link>
    </div>
  );
}