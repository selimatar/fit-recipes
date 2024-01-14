import TextBlock from "@/components/textBlock"
import Recipes from "@/components/recipes"
import Generic from "@/components/generic/generic";

export async function renderComponents(bodySections) {
  if (!bodySections || bodySections.length === 0) {
    return null;
  } else {
    return <ComponentRenderer component={bodySections} />;
  }
}

function ComponentRenderer({ component }) {
  if (!component || !component.sys || !component.sys.contentType || !component.sys.contentType.sys || !component.sys.contentType.sys.id) {
    console.error('Invalid component data:', component);
    return null;
  }

  switch (component.sys.contentType.sys.id) {
    case "text_block":
      return <TextBlock key={component.sys.id} title={component.fields.title} text={component.fields.text} />;
    case "recipe_group":
      return <Recipes key={component.sys.id} recipes={component.fields.recipes} />;
    case "generic_component":
      return <Generic />
    default:
      console.warn('Unrecognized component type:', component.sys.contentType.sys.id);
      return null;
  }
}
