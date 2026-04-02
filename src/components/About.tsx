import { Users, TrendingUp, Globe as Globe2, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "2,000+", label: "Skilled Workers" },
    { icon: TrendingUp, value: "15+", label: "Years Experience" },
    { icon: Globe2, value: "25+", label: "Export Countries" },
    { icon: Award, value: "100%", label: "Quality Guaranteed" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                About Our Company
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Leading Garment Manufacturer in Vietnam
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Song Huong Imex is a premier garment manufacturing company
                specializing in high-quality apparel production for
                international brands. With state-of-the-art facilities and a
                dedicated team of professionals, we've established ourselves as
                a trusted partner in the global textile industry.
              </p>
              <p>
                Our commitment to excellence extends beyond production. We
                invest heavily in modern machinery, sustainable practices, and
                continuous workforce training to ensure that every piece meets
                the highest international standards.
              </p>
              <p>
                From concept to delivery, we work closely with our clients to
                bring their vision to life, offering competitive pricing without
                compromising on quality or ethical manufacturing practices.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-3" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://dntt.mediacdn.vn/197608888129458176/2024/11/19/det-mayy-17320240805941368396085.png"
                  alt="Manufacturing Process"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://dntt.mediacdn.vn/197608888129458176/2026/3/20/xuat-nhap-khau-177397705054634268701.jpg"
                  alt="Quality Control"
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="https://thuonghieuvaphapluat.vn/Images/minhpv/2024/07/28/amazon-import-export.jpg"
                  alt="Factory Floor"
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
                <img
                  src="https://cafefcdn.com/203337114487263232/2021/10/11/photo1633945989963-1633945990063460575616.jpg"
                  alt="Team Work"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="text-sm font-semibold mb-1">Trusted Partner</div>
              <div className="text-2xl font-bold">50+ Global Brands</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
