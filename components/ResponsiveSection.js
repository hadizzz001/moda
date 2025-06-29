"use client";

const ResponsiveSection = () => {
  return (
    <div className="md:max-w-[1000px] md:mx-auto mb-20">
      <div className="flex flex-col md:flex-row gap-4 p-6">
        
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <h1 className="text-4xl myBlack">Milano Moda</h1>
          <p className="text-gray-600">
            Step into your forever with elegance and grace. At Milano Moda, all kind of dresses is designed for the modern woman—where timeless silhouettes meet thoughtful craftsmanship. Every gown is created with care, blending couture detailing, comfort, and individuality for your walk down the aisle and beyond. From intimate ceremonies to grand celebrations, Milano Moda dresses are made to carry you beautifully through every moment of your love story.
          </p>
          <a
            href="/shop"
            className="inline-flex items-center text-black bg-white border border-black px-4 py-2 rounded hover:bg-gray-100 transition w-[10em]"
          >
            Shop now
            <span className="ml-2">→</span>
          </a>
        </div>

        <div className="flex-1 flex gap-4 justify-center md:justify-end">
          <div className="relative w-1/2 h-[240px] md:w-[200px]">
            <img
              src="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750612132/0c0c647e-8444-4f28-b899-5a186cab56f6_tkzh5q.jpg"
              alt="img 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="relative w-1/2 h-[240px] md:w-[200px]">
            <img
              src="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750612132/38caca0e-a069-4fff-8fa0-fc9ffaf83eae_hdhuxr.jpg"
              alt="img 2"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ResponsiveSection;
