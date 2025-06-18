// components/ResponsiveSection.js
"use client"; 

const ResponsiveSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6">
      
      <div className="flex-1 flex flex-col justify-center space-y-4">
        <h1 className="text-4xl  myBlack">Milano Moda</h1>
        <p className="text-gray-600">
          Step into your forever with elegance and grace. At Milano Moda, our bridal dress collection is designed for the modern woman—where timeless silhouettes meet thoughtful craftsmanship. Every gown is created with care, blending couture detailing, comfort, and individuality for your walk down the aisle and beyond. From intimate ceremonies to grand celebrations, Milano Moda dresses are made to carry you beautifully through every moment of your love story.
        </p>
        <a
          href="/shop"
          className="inline-flex items-center text-black bg-white border border-black px-4 py-2 rounded hover:bg-gray-100 transition w-[10em]"
        >
          Shop now
          <span className="ml-2">→</span>
        </a>
      </div>

      
      <div className="flex-1 flex gap-4">
        <div className="relative w-1/2 h-[240px]">
          <img
            src="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750179058/portrait-gorgeous-woman-wearing-beautiful-white-dress-staircase-inside-her-house_144962-18725_vvw290.webp"
            alt="img 1"
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="relative w-1/2 h-[240px]">
          <img
            src="https://res.cloudinary.com/dmyudwjwx/image/upload/v1750179058/back-view-woman-posing-ethereal-environment_23-2151113656_scjmmi.webp"
            alt="img 2"
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSection;
