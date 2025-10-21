export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-black text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">
       CineCraft
      </h1>
      <p className="max-w-2xl mx-auto mb-8 text-lg">
        Meet Your AI-Powered Film Studio.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#signup" className="bg-white text-black font-semibold px-8 py-3 rounded shadow hover:bg-gray-100">
          Create a Film
        </a>
        <a href="#learn-more" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black">
          See How It Works
        </a>
      </div>
    </section>
  );
}
