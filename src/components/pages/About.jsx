import {Button} from "@/components/ui/button"


function About() {
  return (
    <section className="pt-36 pb-36 py-10 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="flex justify-center items-center">
				<div className="w-1/2">
					<h1 className="text-3xl font-bold mb-5">About US</h1>
					<h1 className="font-semibold mb-2 text-3xl">UNIITECT</h1>
					<p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore consectetur nisi nulla sint libero perspiciatis quo at eaque, laboriosam itaque amet. Ut saepe inventore, culpa placeat dolorem illum. Voluptate, veniam.</p>
					<Button className="mt-4 bg-blue-500 text-white hover:text-black border border-blue-500 hover:border-black">See More</Button>
				</div>
				<div className="w-1/3">
					<img className="w-2/3 mx-auto" src="../../../src/assets/img/img5.jpg" alt="" />
				</div>
      </div>
    </section>
  )
}

export default About