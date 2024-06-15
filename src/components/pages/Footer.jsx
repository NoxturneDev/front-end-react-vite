
function Footer() {
  return (
    <footer className="text-white">
			<div className="bg-slate-600 p-10 flex gap-x-5">
				<div className="w-1/3">
					<h1 className="font-bold text-2xl mb-3">UNIITEK</h1>
					<p className="text-base text-slate-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam rerum molestiae illo nisi, odit repellat perspiciatis expedita voluptate eos!</p>
				</div>
				<div className="w-1/3">
					<h1 className="font-bold text-2xl mb-3">Links</h1>
					<ul className="flex flex-col gap-y-4">
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">About</a>
						</li>
						<li>
							<a href="">Feature</a>
						</li>
						<li>
							<a href="">Contact</a>
						</li>
					</ul>
				</div>
				<div className="w-1/3">
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
			<div className="bg-slate-900 py-3 text-center">
				<p>© 2024 Copyright</p>
			</div>
    </footer>
  )
}

export default Footer