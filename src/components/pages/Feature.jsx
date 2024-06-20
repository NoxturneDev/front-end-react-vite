import Card from "./Card"

function Feature() {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-semibold">Feature</h1>
      <p className="mb-5 font text-base">Kami menawarkan fasilitas yang baik dan arsitek yang ternama</p>
        <div className="flex gap-x-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </section>
  )
}

export default Feature