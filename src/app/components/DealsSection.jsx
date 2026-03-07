import { useState, useEffect, useRef } from 'react';
import {deals} from '../data/deals';
import { ChevronLeft, ChevronRight, Phone, Zap } from 'lucide-react';


export function DealsSection() {
  const cardsToShow = 4; // Show 4 cards at a time
  const cardWidth = 285; // 265px card + 20px gap
  const autoScrollInterval = 2000; // Auto-scroll every 3 seconds
  const startIndex = deals.length; // Start from the middle set
  
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  
  // Create extended array with clones for infinite effect
  const extendedDeals = [...deals, ...deals, ...deals];
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  }, autoScrollInterval);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // Reset to the corresponding position in the middle set
      if (currentIndex >= startIndex + deals.length) {
        setCurrentIndex(startIndex);
      } else if (currentIndex < startIndex) {
        setCurrentIndex(startIndex + deals.length - 1);
      }
    }, 500); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  const translateX = -(currentIndex * cardWidth);

  return (
    <section 
      className="py-16 relative overflow-hidden px-6"
      style={{
        background: 'linear-gradient(113.177deg, rgba(209, 213, 220, 0.1) 0%, rgba(51, 51, 51, 0.1) 99.662%)',
      }}
    >
      <div className="max-w-337.5 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4 bg-[rgba(108,201,62,0.1)] px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-[#fecd3f] fill-[#fecd3f]" />
            <span className="text-sm font-bold text-[#6cc93e] uppercase tracking-wider">
              Limited Time Offers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[#333] mb-4">
            <span className="text-[#fecd3f] font-bold">Exclusive </span>
            <span className="text-[#6cc93e] font-bold">Deals & Packages</span>
          </h2>
          <p className="text-[#333] text-base max-w-3xl mx-auto">
            Save big on solar installations with our ongoing offers, combo packages, and seasonal discounts
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12 px-5">
          {/* Navigation Arrow Left */}
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-12 w-12 h-12 bg-[#6cc93e] hover:bg-[#5ab84f] rounded-full shadow-lg flex items-center justify-center transition-colors z-10 disabled:opacity-50 cursor-pointer"
            aria-label="Previous deal"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-5"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              }}
            >
              {extendedDeals.map((deal, index) => (
                <div
                  key={`${deal.id}-${index}`}
                  className="shrink-0 w-66.25"
                >
                  <div className="bg-linear-to-b from-[#273a69] via-[#15203b] to-[#060a12] border border-[#314158] rounded-2xl p-6  relative overflow-hidden hover:border-[#6cc93e] transition-all duration-300">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {deal.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-[15.5px] font-bold text-[#6cc93e] mb-8">
                      {deal.subtitle}
                    </p>

                    {/* Price */}
                    <div className="mb-1">
                      <p className="text-xl font-bold text-[#6cc93e]">
                        {deal.price}
                      </p>
                    </div>

                    {/* Original Price */}
                    <div className="mb-3">
                      <p className="text-base text-[#62748e] line-through decoration-solid">
                        {deal.originalPrice}
                      </p>
                    </div>

                    {/* Savings */}
                    <div className="mb-4">
                      <p className="text-xs font-bold text-[#fecd3f]">
                        Save {deal.savings}
                      </p>
                    </div>

                    {/* Validity */}
                    <p className="text-[11px] text-[#90a1b9]">
                      Valid till April 15, 2026
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow Right */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-12 w-12 h-12 bg-[#6cc93e] hover:bg-[#5ab84f] rounded-full shadow-lg flex items-center justify-center transition-colors z-10 disabled:opacity-50 cursor-pointer"
            aria-label="Next deal"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[#333] text-sm mb-4">
            Want to know more about these offers? Contact us for details!
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#6cc93e] hover:bg-[#5ab84f] text-white font-bold text-[15.5px] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}