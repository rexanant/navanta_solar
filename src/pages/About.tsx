import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const principleKeys = ["about.a1", "about.a2", "about.a3", "about.a4", "about.a5", "about.a6"];
const philKeys = ["about.phil1", "about.phil2", "about.phil3"];

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding bg-gradient-hero">
        <div className="mx-auto max-w-3xl">
          <SectionHeading label={t("about.label")} title={t("about.title")} description={t("about.desc")} />
          <div className="space-y-3">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">{t("about.approach")}</p>
            {principleKeys.map((key, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/90">{t(key)}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">{t("about.epc")}</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading label={t("about.phil.label")} title={t("about.phil.title")} />
          <div className="grid gap-4 sm:grid-cols-3">
            {philKeys.map((key, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-lg font-bold text-foreground">{t(key)}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-muted-foreground">{t("about.phil.footer")}</p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
