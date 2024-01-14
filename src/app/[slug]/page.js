import client from "../contentfulClient";
import Banner from "@/components/banner";
import { renderComponents } from "@/helpers/componentRenderer";
import ContactForm from "@/components/contactForm";

async function getPageBySlug(slug) {
  try {
    const response = await client.getEntries({ content_type: 'page', 'fields.page_slug': slug });
    return response.items[0];
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    return null;
  }
}

async function getBodySectionsOfPage(entryId) {
  try {
    const response = await client.getEntry(entryId);
    return response; // Return the response itself
  } catch (error) {
    console.error('Error fetching page body field: ', error);
    return null; // Return null in case of error
  }
}

export default async function Page({ params }) {
  const page = await getPageBySlug(params.slug);

  // Check if the page and its body field exist
  if (!page || !page.fields.body) {
    return <div>Loading...</div>
  }

  const bodySections = await Promise.all(
    page.fields.body.map(async bodySection => {
      const sectionData = await getBodySectionsOfPage(bodySection.sys.id);
      return sectionData; // Return the section data fetched
    })
  );
  
  return (
    <main className="container mx-auto mt-8">
      <Banner />
      <div className="container bg mx-auto px-4">
        {bodySections.map((component, index) => (
          <div key={index}>
            {renderComponents(component)}
          </div>
        ))}
      </div>
    </main>
  );
}