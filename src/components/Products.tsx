import { Shirt, Wind, Briefcase, Baby } from 'lucide-react';

export default function Products() {
  const productCategories = [
    {
      icon: Shirt,
      title: 'Casual Wear',
      description: 'T-shirts, polo shirts, hoodies, and everyday apparel',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
      materials: ['100% Cotton', 'Cotton Blends', 'Organic Cotton'],
      moq: '5,000 units'
    },
    {
      icon: Briefcase,
      title: 'Workwear & Uniforms',
      description: 'Corporate uniforms, safety wear, and professional attire',
      image: 'https://images.pexels.com/photos/7382389/pexels-photo-7382389.jpeg',
      materials: ['Polyester Blends', 'Durable Fabrics', 'Hi-Vis Materials'],
      moq: '3,000 units'
    },
    {
      icon: Wind,
      title: 'Sportswear & Activewear',
      description: 'Athletic apparel, gym wear, and performance clothing',
      image: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg',
      materials: ['Moisture-wicking', 'Stretch Fabrics', 'Quick-dry'],
      moq: '3,000 units'
    },
    {
      icon: Baby,
      title: 'Kids & Baby Wear',
      description: 'Safe, comfortable clothing for children of all ages',
      image: 'https://images.pexels.com/photos/7869556/pexels-photo-7869556.jpeg',
      materials: ['Soft Cotton', 'Hypoallergenic', 'OEKO-TEX Certified'],
      moq: '5,000 units'
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Product Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Diverse Garment Solutions for Global Markets
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to finished product, we manufacture a wide range of high-quality garments tailored to your specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6 text-lg">{category.description}</p>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900 mb-2">Available Materials:</div>
                      <div className="flex flex-wrap gap-2">
                        {category.materials.map((material, idx) => (
                          <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <div className="text-sm text-slate-600">Minimum Order Quantity</div>
                      <div className="text-lg font-bold text-slate-900">{category.moq}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Custom Manufacturing Solutions</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't see exactly what you need? We specialize in custom garment manufacturing to bring your unique designs to life with precision and quality.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('quote');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
