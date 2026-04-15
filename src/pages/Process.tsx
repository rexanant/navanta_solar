import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  { num: "01", titleKey: "proc.s1.title", descKey: "proc.s1.desc" },
  { num: "02", titleKey: "proc.s2.title", descKey: "proc.s2.desc" },
  { num: "03", titleKey: "proc.s3.title", descKey: "proc.s3.desc" },
  { num: "04", titleKey: "proc.s4.title", itemKeys: ["proc.s4.i1", "proc.s4.i2", "proc.s4.i3", "proc.s4.i4"] },
  { num: "05", titleKey: "proc.s5.title", itemKeys: ["proc.s5.i1", "proc.s5.i2", "proc.s5.i3", "proc.s5.i4", "proc.s5.i5"] },
  { num: "06", titleKey: "proc.s6.title", itemKeys: ["proc.s6.i1", "proc.s6.i2", "proc.s6.i3"] },
  { num: "07", titleKey: "proc.s7.title", itemKeys: ["proc.s7.i1", "proc.s7.i2", "proc.s7.i3"] },
  { num: "08", titleKey: "proc.s8.title", itemKeys: ["proc.s8.i1", "proc.s8.i2", "proc.s8.i3", "proc.s8.i4"] },
];

const Process = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding bg-gradient-hero">
        <div className="mx-auto max-w-4xl">
          <SectionHeading label={t("proc.label")} title={t("proc.title")} description={t("proc.desc")} />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-5 rounded-xl border border-border bg-card p-6">
                <span className="text-3xl font-black text-primary/30">{step.num}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{t(step.titleKey)}</h3>
                  {step.descKey && <p className="mt-1 text-sm text-muted-foreground">{t(step.descKey)}</p>}
                  {step.itemKeys && (
                    <ul className="mt-2 space-y-1">
                      {step.itemKeys.map((key, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {t(key)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("hero.cta")}
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
