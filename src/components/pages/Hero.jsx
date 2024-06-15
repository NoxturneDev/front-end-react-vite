import { Button } from "@/components/ui/button";

export default function e() {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="absolute">
        <div className="container mx-auto md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-3">Welcome to the React.js Starter test satu duua tiga empat lima enam</h1>
          <p className="text-lg md:text-xl text-center text-white mb-3">A simple, opinionated starter template for React.js with Tailwind CSS</p>
        </div>
        <div className="container mx-auto px-4 md:px-0 space-y-4">
          <div className="flex flex-col justify-center md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <Button className="bg-blue-500 hover:text-black" asChild>
              <a href="/docs" className="flex items-center justify-center w-full md:w-auto bg-blue-500 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors">
                Get Started
              </a>
            </Button>
            <Button className="bg-white" asChild>
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
      </div>
      <video className="w-full" autoPlay muted loop>
        <source src="../../../src/assets/video/test.mp4" />
      </video>

    </section>
  );
}
