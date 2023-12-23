import TextBlock from "@/components/textBlock"
import Recipes from "@/components/recipes"

export function renderComponents(bodySections) {
  console.log('component body', bodySections)
  if (bodySections && bodySections.length > 0) {
    return bodySections.map((data, index) => {
      return <ComponentResolver key={index} component={data} />;
    });
  }
  return [];
}

export default function ComponentRenderer({ component }) {
  switch (component.sys.contentType.sys.id) {
    case "text_block":
      console.log('text block returned')
      return <TextBlock data={component} />;
    case "recipe_group":
      return <Recipes data={component} />
    default:
    return null;
  }
}