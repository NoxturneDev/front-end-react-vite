import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

function Contact() {
	return (
		<section className="p-10">
				<h1 className="font-semibold text-3xl mb-8">Contact us</h1>
				<div className="flex gap-x-5 w-full">
					<div className="w-1/2 flex flex-col justify-between py-2">
							<Input className="py-8" type="text" id="name" placeholder="Your Name" />
							<Input className="py-8" type="text" id="phone-number" placeholder="Your Phone Number" />
							<Input className="py-8" type="email" id="email" placeholder="Your Email" />
					</div>
					<div className="w-1/2">
						<textarea className="w-full p-3 border border-black rounded-md" placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea>
					</div>
				</div>
				<Button className="bg-blue-500 text-white border border-blue-500 hover:border-black hover:text-black mt-2">Submit</Button>
		</section>
	)
}

export default Contact