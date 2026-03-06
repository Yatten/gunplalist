export default function KitPage({ params }: { params: { id: string } }) {

  return (
    <div className="p-10">
      <h1>Kit ID: {params.id}</h1>
    </div>
  )

}
