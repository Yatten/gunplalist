import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        GunplaList
      </h1>

      <p className="mt-4 text-gray-600">
        Track your Gunpla collection
      </p>

      <a
        href="/kits"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Browse Kits
      </a>

    </main>
  )
}