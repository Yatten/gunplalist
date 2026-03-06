import { supabase } from "@/lib/supabase"

export default async function KitsPage() {

  const { data } = await supabase
    .from('kits')
    .select('*')

  return (
    <div>
      <h1>Gunpla Kits</h1>

      {data?.map((kit) => (
        <div key={kit.id}>
          <h2>{kit.name}</h2>
          <p>Grade: {kit.grade}</p>
          <p>Scale: {kit.scale}</p>
        </div>
      ))}

    </div>
  )
}