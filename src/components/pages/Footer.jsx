
function Footer() {
  return (
    <footer className="text-white">
			<div className="bg-blue-500 px-36 py-20 flex gap-x-10">
				<div className="w-1/3">
					<h1 className="font-bold text-2xl mb-3">UNIITECT</h1>
					<p className="text-base text-slate-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam rerum molestiae illo nisi, odit repellat perspiciatis expedita voluptate eos!</p>
				</div>
				<div className="w-1/3 flex items-center justify-center">
					<div>
					<h1 className="font-bold text-2xl mb-3">Contact</h1>
					<ul className="flex flex-col gap-y-4">
						<li>
							<a href="">Phone: +62 81818182 </a>
						</li>
						<li>
							<a href="">Email: uniitek@gmail.com</a>
						</li>
						<li>
							<a href="">Jakarta, Indonesia</a>
						</li>
					</ul>
					</div>
				</div>
				<div className="w-1/3">
					<h1 className="font-bold text-2xl mb-3">Social Media</h1>
					<ul className="flex flex-col gap-y-4">
						<li>
							<a href="">Instagram: @uniitek_id </a>
						</li>
						<li>
							<a href="">Twitter: @uniitek_id</a>
						</li>
						<li>
							<a href="">Tiktok: @uniitek_id</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-blue-400 py-3 text-center">
				<p>© 2024 Copyright</p>
			</div>
    </footer>
  )
}

export default Footer