import TextBlock from "../components/textBlock"
import Recipes from "../components/recipes"
import Generic from "../components/generic/generic";

export async function renderComponents(bodySections, key) {
  if (!bodySections || bodySections.length === 0) {
    console.error('Invalid component data to render:', component);
    return null;
  } 
  
  switch (bodySections.sys.contentType.sys.id) {
    case "text_block":
      return <TextBlock key={bodySections.sys.id} title={bodySections.fields.title} text={bodySections.fields.text} />;
    case "recipe_group":
      return <Recipes key={bodySections.sys.id} recipes={bodySections.fields.recipes} />;
    case "generic_component":
      return <Generic key={bodySections.sys.id} data={bodySections}/>
    default:
      console.warn('Unrecognized component type:', bodySections.sys.contentType.sys.id);
      return null;
  }

}