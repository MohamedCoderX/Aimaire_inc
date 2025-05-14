export default function ScrollingText() {
    return (
      <div className="relative overflow-hidden w-full bg-white py-3 ">
        {/* Fading edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
  
        {/* Scrolling text */}
        <div className="flex animate-marquee space-x-12">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="md:text-4xl text-2xl font-bold text-gray-800 whitespace-nowrap">
              Retail stores - Interior design - Design Models - Commercial Equipments
            </span>
          ))}
        </div>
      </div>
    );
  }
  