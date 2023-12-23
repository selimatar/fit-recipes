import client from "../contentfulClient"
import Banner from "@/components/banner"
import { renderComponents } from "@/helpers/componentRenderer";

async function getPageBySlug(slug) {
  try {
    const response = await client.getEntries({ content_type: 'page', 'fields.page_slug': slug});
    return response.items[0];
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    return null;
  }
}

async function getBodySectionsOfPage({ entryId }) {
  try {
    const response = await client.getEntry(entryId);
    return response
  } catch (error) {
    console.error('Error fetching page body field: ', error)
  }
}

export default async function Page({ params }) {
  const page = await getPageBySlug(params.slug);

  const bodySections = await Promise.all(
    page.fields.body.map(async bodySection => {
      return await getBodySectionsOfPage(bodySection.sys.id)
    }
  ))

  console.log('body sections', bodySections);
  
  return (
    <main className="container mx-auto mt-8">
      <Banner />
      <div className="container bg mx-auto px-4">
        {bodySections && bodySections.map(component => {
          renderComponents(component)
        })}
      </div>
    </main>
  );
}