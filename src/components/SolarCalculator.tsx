import React, { useState } from "react";

export default function SolarCalculator() {
  const [bill, setBill] = useState("");
  const [rate, setRate] = useState("7");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const billNum = Number(bill);
    const rateNum = Number(rate);
    if (!billNum || !rateNum) return;
    const units = billNum / rateNum;
    let plantKW = Math.floor((units / (3.6 * 30)) * 2) / 2;
    if (plantKW < 0.5) plantKW = 0.5;
    const monthlyGen = Math.round(plantKW * 3.6 * 30);
    const annualGen = monthlyGen * 12;
    const lifeGen = annualGen * 25;
    const saveMon = Math.round(monthlyGen * rateNum);
    const saveAnn = saveMon * 12;
    const saveLife = saveAnn * 25;
    const co2 = Math.round(lifeGen * 0.00082);
    const trees = Math.round(co2 * 1.61);
    setResult({
      plantKW,
      monthlyGen,
      annualGen,
      lifeGen,
      saveMon,
      saveAnn,
      saveLife,
      co2,
      trees,
    });
  };

  return (
    <section className="w-full px-6 py-20 bg-[#071a3a] text-white">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">
            Solar Savings <span className="text-[#F5A623]">Calculator</span>
          </h2>
          <p className="text-white/60 mt-2">
            Estimate your savings, generation, and ROI instantly
          </p>
        </div>

        {/* CARD */}
        <div className="bg-[#0c234d] border border-white/10 rounded-2xl p-8 shadow-lg">
          {/* INPUTS */}
          <div className="space-y-4">
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="Enter your monthly electricity bill (₹)"
              className="w-full p-4 rounded-lg bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
            />
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Electricity rate (₹ per unit, usually 6–8)"
              className="w-full p-4 rounded-lg bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
            />
            <button
              onClick={calculate}
              className="w-full bg-[#F5A623] text-black py-4 rounded-xl font-semibold hover:bg-[#e5941f] transition"
            >
              Calculate My Savings
            </button>
          </div>

          {/* RESULTS */}
          {result && (
            <div className="mt-10 space-y-6 animate-fade-in">
              {/* INFO */}
              <p className="text-sm text-white/60 text-center">
                1 kWp solar plant generates approx. 3.6 kWh/day (based on 5.5 sunlight hours)
              </p>

              {/* PLANT SIZE */}
              <div className="bg-[#071a3a] p-6 rounded-xl text-center">
                <p className="text-white/60">Recommended Plant Size</p>
                <p className="text-3xl font-bold text-[#F5A623]">
                  {result.plantKW} kW
                </p>
                <p className="text-sm text-white/50 mt-1">
                  Based on your current usage
                </p>
              </div>

              {/* GENERATION */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Electricity Generation
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    Monthly: {result.monthlyGen} kWh
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    Annual: {result.annualGen.toLocaleString("en-IN")} kWh
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    Lifetime: {result.lifeGen.toLocaleString("en-IN")} kWh
                  </div>
                </div>
              </div>

              {/* SAVINGS */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Financial Savings
                </h3>
                <p className="text-sm text-white/60 mb-2">
                  Based on ₹{rate}/unit (no increase assumed)
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    Monthly: ₹ {result.saveMon.toLocaleString("en-IN")}
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    Annual: ₹ {result.saveAnn.toLocaleString("en-IN")}
                  </div>
                  <div className="bg-[#F5A623] text-black p-4 rounded-lg font-semibold">
                    Lifetime: ₹ {result.saveLife.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              {/* ECO */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Environmental Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    CO₂ Reduced: {result.co2} tonnes
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    Trees Equivalent: {result.trees}
                  </div>
                </div>
              </div>

              {/* WHATSAPP CTA */}
              <a
                href="https://wa.me/917749023376"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full mt-6 py-4 rounded-full text-white font-semibold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #25D366, #1ebe5d)",
                  boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)",
                }}
              >
                <span>📱</span>
                Get Free Solar Plan on WhatsApp
              </a>

              {/* DISCLAIMER */}
              <p className="text-xs text-white/50 text-center mt-4">
                The above calculation is indicative. Actual savings may vary based on location and usage.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
