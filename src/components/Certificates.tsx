import { Award, Shield, Leaf, CheckCircle } from "lucide-react";

export default function Certificates() {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description:
        "Quality Management System certification ensuring consistent quality across all operations.",
      category: "Quality Management",
      image:
        "https://clv.vn/wp-content/uploads/2019/12/chung-nhan-iso-90001-2015.jpg",
    },
    {
      icon: Shield,
      title: "OEKO-TEX Standard 100",
      description:
        "International certification for textiles tested for harmful substances.",
      category: "Product Safety",
      image:
        "https://trungquy.com.vn/wp-content/uploads/2023/10/OEKO-TEX-Standart-100-1132x800.png",
    },
    {
      icon: Leaf,
      title: "GOTS Certified",
      description:
        "Global Organic Textile Standard for organic fiber processing and manufacturing.",
      category: "Sustainability",
      image: "https://tqc.vn/pic/Service/images/chung-nhan-gots-1.jpg",
    },
    {
      icon: CheckCircle,
      title: "WRAP Certification",
      description:
        "Worldwide Responsible Accredited Production ensuring ethical manufacturing.",
      category: "Social Compliance",
      image:
        "https://tqc.vn/pic/Service/images/chung-nhan-wrap-1-1659087719.jpg",
    },
  ];

  const partners = [
    { name: "Nike", region: "USA" },
    { name: "Adidas", region: "Europe" },
    { name: "H&M", region: "Sweden" },
    { name: "Zara", region: "Spain" },
    { name: "Uniqlo", region: "Japan" },
    { name: "GAP", region: "USA" },
  ];

  return (
    <section id="certificates" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Certifications & Quality
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Internationally Recognized Standards
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated by leading international
            certifications and trusted by global brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group overflow-hidden min-h-[320px] flex flex-col justify-end"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">
                    {cert.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-slate-200 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Trusted by Leading Global Brands
            </h3>
            <p className="text-lg text-slate-600">
              We're proud to be the manufacturing partner of choice for renowned
              international companies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-50 rounded-xl p-6 mb-3 hover:bg-blue-50 transition-colors">
                  <div className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {partner.name}
                  </div>
                </div>
                <div className="text-sm text-slate-500">{partner.region}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-xl font-semibold text-blue-100">
              Quality Inspection
            </div>
            <p className="text-blue-200 mt-3">
              Every garment undergoes rigorous quality control
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">98%+</div>
            <div className="text-xl font-semibold text-slate-300">
              On-Time Delivery
            </div>
            <p className="text-slate-400 mt-3">
              Reliable delivery schedules you can count on
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">Zero</div>
            <div className="text-xl font-semibold text-green-100">
              Child Labor
            </div>
            <p className="text-green-200 mt-3">
              Ethical practices throughout our supply chain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
