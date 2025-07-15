import AESPSection from "./AESP";
import QardhSection from "./Qardh";

export function FinancialSection({ data }) {
  return (
    <section className="bg-slate-50">
      <div className="px-4 py-8 text-center flex flex-col gap-4">
        <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
          {data.title}
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
          {data.subtitle}
        </h3>
        <p className="md:text-center text-justify text-gray-500 max-w-3xl mx-auto mt-2 text-lg leading-relaxed">
          {data.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <QardhSection data={data.qardh} />
        <AESPSection data={data.aesp} />
      </div>
    </section>
  );
}
