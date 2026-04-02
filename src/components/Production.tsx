import { Factory, Settings, Truck, Shield } from "lucide-react";

export default function Production() {
  const capabilities = [
    {
      icon: Factory,
      title: "Modern Facilities",
      description:
        "50,000 sqm factory with climate-controlled environments and advanced machinery from Japan and Germany.",
      specs: [
        "500+ Industrial Sewing Machines",
        "Automated Cutting Systems",
        "24/7 Production Capability",
      ],
    },
    {
      icon: Settings,
      title: "Advanced Technology",
      description:
        "State-of-the-art equipment ensuring precision, efficiency, and consistent quality in every production run.",
      specs: [
        "CAD/CAM Design Systems",
        "Digital Fabric Inspection",
        "Automated Quality Control",
      ],
    },
    {
      icon: Truck,
      title: "Logistics Excellence",
      description:
        "Streamlined supply chain management with reliable delivery to any destination worldwide.",
      specs: [
        "On-time Delivery 98%+",
        "Global Shipping Partners",
        "Real-time Tracking",
      ],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous multi-stage quality control process ensuring every garment meets international standards.",
      specs: [
        "ISO 9001:2015 Certified",
        "OEKO-TEX Standard 100",
        "Pre-shipment Inspection",
      ],
    },
  ];

  return (
    <section id="production" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Production Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            World-Class Manufacturing Infrastructure
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our cutting-edge facilities and experienced workforce enable us to
            handle orders of any scale with precision and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.specs.map((spec, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <img
                src="https://bcp.cdnchinhphu.vn/334894974524682240/2025/7/24/may1-1648463782387872713547-17211081581021440831969-1753350912560741299137.jpeg"
                alt="Production Facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Production Capacity
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    500,000+
                  </div>
                  <div className="text-slate-600 font-medium">
                    Units per month
                  </div>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    2,000+
                  </div>
                  <div className="text-slate-600 font-medium">
                    Skilled workers
                  </div>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    15-30
                  </div>
                  <div className="text-slate-600 font-medium">
                    Days lead time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
