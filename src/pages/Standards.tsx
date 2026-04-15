import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stdKeys = ["std.s1", "std.s2", "std.s3", "std.s4", "std.s5", "std.s6", "std.s7", "std.s8", "std.s9"];

const Standards = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding bg-gradient-hero">
        <div className="mx-auto max-w-3xl">
          <SectionHeading label={t("std.label")} title={t("std.title")} description={t("std.desc")} />
          <div className="space-y-3">
            {stdKeys.map((key, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/90">{t(key)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Standards;
