import { Button } from "@/components/ui/button";

export default function e() {
  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-20 bg-gradient-to-r from-gray-50 to-gray-100 space-y-10 px-10">
      <div className="container mx-auto md:px-0 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">Welcome to the React.js Starter test satu duua tiga empat lima enam</h1>
        <p className="text-lg md:text-xl text-center text-gray-600">A simple, opinionated starter template for React.js with Tailwind CSS</p>
      </div>
      <div className="container mx-auto px-4 md:px-0 space-y-4">
        <div className="flex flex-col justify-center md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <Button className="bg-blue-500 hover:text-black" asChild>
            <a href="/docs" className="flex items-center justify-center w-full md:w-auto bg-blue-500 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors">
              Get Started
            </a>
          </Button>
          <Button asChild>
            <a
              href="
          "
              className="flex items-center justify-center w-full md:w-auto bg-gray-100 text-gray-900 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Learn More
            </a>
          </Button>
        </div>
      </div>

      <video className="rounded-xl" autoPlay muted loop>
        <source src="../../../src/assets/video/test.mp4" />
      </video>

    </section>
  );
}
