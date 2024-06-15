import { Button } from "@/components/ui/button";

function Card({src, title, alamat}) {
  return (
		<div className="w-1/4 shadow-lg overflow-hidden">
			<div>
				<img src={src} alt="" />
			</div>
			<div className="p-5">
				<h1 className="font-bold text-2xl text-slate-700 mb-2">{title}</h1>
				<p className="mb-4 text-slate-600 text-sm">{alamat}</p>		
				<p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea tempore voluptate. Repellendus, beatae rerum voluptatum maxime aliquid omnis consequatur.</p>
				<Button className="mt-5 bg-blue-500 text-white hover:text-black">Mulai chat sekarang</Button>
			</div>
		</div>
  )
}

export default Card