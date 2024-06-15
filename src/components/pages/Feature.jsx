import Card from "./Card"

function Feature() {
  return (
    <section className="py-10 px-32">
      <h1 className="text-3xl font-semibold mb-3">Servis Interior</h1>
      <p className="mb-5 text-slate-700 text-base">Kami menawarkan fasilitas yang baik dari arsitek ternama</p>
        <div className="flex gap-x-10">
          <Card src="../../../src/assets/img/img1.jpg" alamat="jalan panglima polim" title="Kreasi Homedecor" />
          <Card src="../../../src/assets/img/img2.jpg" alamat="jalan alpukat raya" title="Indo Design" />
          <Card src="../../../src/assets/img/img3.jpg" alamat="jalan anggrek 12" title="Creative Decor" />
          <Card src="../../../src/assets/img/img4.jpg" alamat="Jalan Ciater Raya" title="Home Desinng" />
        </div>
    </section>
  )
}

export default Feature