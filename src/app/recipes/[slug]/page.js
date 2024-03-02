export default async function RecipeDetailPage({ props }) {
  const { slug } = props;
  return (
    <main className="container mx-auto mt-8">
      <h2 className="text-2xl text-center font-bold mb-4">{ slug } Detail Page</h2>
    </main>
  )
}