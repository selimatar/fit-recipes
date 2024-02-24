import client from "./contentfulClient";
import Banner from "../components/banner";
import { renderComponents } from "../helpers/componentRenderer";

async function getHomePage() {
  try {
    const entries = await client.getEntries({
      content_type: 'page', 
      'fields.internal_title': 'Home',
    });

    if (entries.items.length > 0) {
      return entries.items[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching home page:', error);
    return null;
  }
}

export default async function Home() {
  const homePage = await getHomePage();
  return (
    <main className="container mx-auto mt-8">
      <h2 className="text-2xl text-center font-bold mb-4">{homePage.fields.internal_title} Page</h2>
      <Banner />
      <div className="container bg mx-auto px-4">
        {homePage.fields.body && homePage.fields.body.map((component, index) => (
          <div key={index}>
            {renderComponents(component)}
          </div>
        ))}
      </div>
    </main>
  )
}