import { ArrowRight, CheckCircle } from "lucide-react";
import contImg from "../assets/container-ship.png";

export default function Hero() {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={contImg}
          alt="Garment Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              ISO 9001:2015 Certified Manufacturer
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Garment Manufacturing for Global Brands
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
            With over 15 years of experience, we deliver high-quality textile
            products to international markets. From design to delivery, we
            ensure excellence at every step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToQuote}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("production");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg border border-white/30"
            >
              View Our Capabilities
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">
                500,000+ units/month capacity
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">
                Export to 25+ countries
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">
                OEKO-TEX certified
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
