import {Button} from "@/components/ui/button"


function About() {
  return (
    <section className="px-10 py-10 bg-gradient-to-r from-gray-50 to-gray-100">
			<h1 className="text-3xl font-semibold mb-5">About US</h1>
      <div className="flex justify-center items-center">
				<div className="w-1/2">
					<h1 className="font-bold mb-2 text-3xl">UNIITEK</h1>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore consectetur nisi nulla sint libero perspiciatis quo at eaque, laboriosam itaque amet. Ut saepe inventore, culpa placeat dolorem illum. Voluptate, veniam.</p>
					<Button className="mt-4 bg-blue-500 text-white hover:text-black border border-blue-500 hover:border-black">See More</Button>
					<Button className="mt-4 mx-4 border border-transparent hover:border-black">See More</Button>
				</div>
				<div className="w-1/2">
					<img className="rounded-xl w-1/2 mx-auto" src="https://github.com/vercel.png" alt="" />
				</div>
      </div>
    </section>
  )
}

export default About