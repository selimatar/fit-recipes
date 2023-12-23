import Link from 'next/link';

const Recipe = ({recipe}) => {
  const {slug, title, alt_text, description} = recipe.fields;
  return ( 
    <div className="bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <img
        src={''}
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
 
export default Recipe;