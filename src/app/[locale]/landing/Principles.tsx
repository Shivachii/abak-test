import { CheckCircle, Rocket, Target } from "lucide-react";

export default function CorePrinciples() {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Core Values */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-secondary text-sm font-bold tracking-widest uppercase">
              Our Core Values
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-primary mt-2">
              Fundamental Principles that Guide ABAK
            </p>
            <p className="mt-3 text-gray-700 text-base md:text-lg">
              The AhlulBayt Assembly is built upon six foundational principles
              that shape our mission, actions, and community.
            </p>
          </div>

          <div className="bg-tertiary/10 border-l-8 border-tertiary rounded-md shadow-sm p-6">
            <ul className="space-y-4">
              {[
                "Faithfulness to Ahlul Bayt (a.s) Teachings",
                "Unity and Peaceful Coexistence",
                "Inclusivity and Collaboration",
                "Community-Centered Service",
                "Empowerment through Knowledge",
                "Accountability and Transparency",
              ].map((principle, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-tertiary shrink-0" size={18} />
                  <span className="text-gray-800 font-medium leading-relaxed">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
        {/* Mission & Vision */}
        <div className="space-y-6">
          <h2 className="text-secondary text-sm font-bold tracking-widest uppercase">
            Our Mission & Vision
          </h2>
          <div className="p-5 rounded-xl shadow-sm border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-secondary" size={22} />
              <h3 className="text-xl font-semibold text-gray-600">Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To establish institutions and channels that propagate Islam to
              everyone, offering guidance for practicing the faith as taught by
              the Prophet (s.a.w.w) and his Ahlul Bayt (a.s).
            </p>
          </div>
          <div className="p-5 rounded-xl shadow-sm border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="text-secondary" size={22} />
              <h3 className="text-xl font-semibold text-gray-600">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To build a strong, prosperous community, improving the well-being
              of Kenyan society in all aspects of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
