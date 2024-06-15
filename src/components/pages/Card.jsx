import { Button } from "@/components/ui/button";

function Card() {
  return (
		<div className="w-1/4 shadow-lg rounded-md">
			<div>
				<img src="https://github.com/vercel.png" alt="" />
			</div>
			<div className="p-3">
				<h1 className="font-bold text-2xl mb-2">Bapak arsitek</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea tempore voluptate. Repellendus, beatae rerum voluptatum maxime aliquid omnis consequatur.</p>
				<Button className="mt-3 bg-blue-500 text-white hover:text-black">Mulai chat sekarang</Button>
			</div>
		</div>
  )
}

export default Card