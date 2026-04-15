import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SolarCalculator from "@/components/SolarCalculator";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-solar.jpg";
import engineeringImg from "@/assets/engineering-approach.jpg";
import tataImg from "@/assets/tata-confidence.jpg";
import workflowImg from "@/assets/workflow-install.jpg";
import homeownerImg from "@/assets/happy-homeowner.jpg";
import {
  ShieldCheck, Zap, FileCheck, Clock, Wrench, AlertTriangle,
  CheckCircle2, ArrowRight, ArrowUpRight, Building2, Gauge, SunMedium,
  ClipboardCheck, HardHat, Activity,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const fearIcons = [AlertTriangle, Zap, Wrench, FileCheck, Clock, ShieldCheck];
const fearKeys = ["why.fear1", "why.fear2", "why.fear3", "why.fear4", "why.fear5", "why.fear6"];
const tataKeys = ["tata.p1", "tata.p2", "tata.p3", "tata.p4", "tata.p5"];
const engIcons = [Gauge, Building2, SunMedium, HardHat, Zap, FileCheck];
const engKeys = ["eng.p1", "eng.p2", "eng.p3", "eng.p4", "eng.p5", "eng.p6"];
const postKeys = ["post.p1", "post.p2", "post.p3", "post.p4", "post.p5", "post.p6"];

const Index = () => {
  const { t } = useLanguage();

  const workflow = [
    { step: "01", titleKey: "wf.s1.title", descKey: "wf.s1.desc" },
    { step: "02", titleKey: "wf.s2.title", descKey: "wf.s2.desc" },
    { step: "03", titleKey: "wf.s3.title", descKey: "wf.s3.desc" },
    { step: "04", titleKey: "wf.s4.title", descKey: "wf.s4.desc" },
    { step: "05", titleKey: "wf.s5.title", descKey: "wf.s5.desc" },
    { step: "06", titleKey: "wf.s6.title", descKey: "wf.s6.desc" },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Solar panels on residential rooftop" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#000028]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">

              {/* LEFT CONTENT */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl break-words">
                <h1 className="text-3xl leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-6xl font-extrabold md:text-7xl">
                  {t("hero.title1.new")}{" "}
                  <br className="hidden sm:block" />
                  <span className="text-[hsl(var(--primary))]">{t("hero.title2.new")}</span>
                </h1>

                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                  {t("hero.subtitle.new")}
                </p>

                {/* CTA BUTTONS */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="rounded-xl bg-[hsl(var(--primary))] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[hsl(var(--primary))]/90 hover:shadow-xl sm:text-base">
                      {t("hero.cta1")}
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="rounded-xl border-2 border-white/30 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:text-base">
                      {t("hero.cta2")}
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* RIGHT SIDE (SOCIAL PROOF) */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col items-start gap-6 lg:items-end">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar key={i} className="h-10 w-10 border-2 border-white/80">
                        <AvatarImage src={`https://i.pravatar.cc/40?img=${i + 10}`} />
                        <AvatarFallback className="bg-muted text-xs">U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>

                  <div className="text-white">
                    <span className="text-2xl font-bold">500+</span>
                    <p className="text-sm text-white/70">{t("hero.social")}</p>
                  </div>
                </div>

                {/* CONSULTATION CTA */}
                <Link to="/contact" className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                  <span className="text-sm font-semibold text-white sm:text-base">{t("hero.cta3")}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--primary))] transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={t("why.label")} title={t("why.title")} description={t("why.desc")} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fearKeys.map((key, i) => {
              const Icon = fearIcons[i];
              return (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-foreground/90">{t(key)}</p>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">{t("why.footer")}</p>
        </div>
      </section>

      {/* SOLAR CALCULATOR */}
      <SolarCalculator />

      {/* TATA-BACKED CONFIDENCE */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={t("tata.label")} title={t("tata.title")} description={t("tata.desc")} />
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overflow-hidden rounded-xl border border-border shadow-card">
              <img src={tataImg} alt="Tata Power Solar panel on rooftop" className="h-full w-full object-cover" />
            </motion.div>
            <div>
              {tataKeys.map((key, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 border-b border-border py-4 last:border-0">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">{t(key)}</span>
                </motion.div>
              ))}
              <p className="mt-6 text-sm italic text-muted-foreground">{t("tata.footer")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING APPROACH */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={t("eng.label")} title={t("eng.title")} description={t("eng.desc")} />
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {engKeys.map((key, i) => {
                const Icon = engIcons[i];
                return (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 rounded-lg border border-primary/10 bg-primary/5 p-5">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm font-medium text-foreground/90">{t(key)}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overflow-hidden rounded-xl border border-border shadow-card">
              <img src={engineeringImg} alt="Solar panel mounting engineering" className="h-full w-full object-cover" />
            </motion.div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">{t("eng.footer")}</p>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={t("wf.label")} title={t("wf.title")} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:border-primary/30">
                <span className="text-3xl font-black text-primary/20 transition-colors group-hover:text-primary/40">{item.step}</span>
                <h3 className="mt-2 text-lg font-bold text-foreground">{t(item.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs font-semibold uppercase tracking-widest text-primary">{t("wf.footer")}</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <SectionHeading label={t("timeline.label")} title={t("timeline.title")} description={t("timeline.desc")} align="left" />
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overflow-hidden rounded-xl border border-border shadow-card">
              <img src={workflowImg} alt="Solar engineer inspecting installation" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINANCING */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading label={t("fin.label")} title={t("fin.title")} description={t("fin.desc")} />
        </div>
      </section>

      {/* POST-INSTALLATION */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={t("post.label")} title={t("post.title")} />
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {postKeys.map((key, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 rounded-md border border-border bg-muted/50 px-4 py-3">
                <ClipboardCheck className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground/90">{t(key)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={homeownerImg} alt="Happy homeowner with solar rooftop" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="absolute inset-0 bg-glow animate-glow-pulse" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionHeading label={t("cta.label")} title={t("cta.title")} />
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t("cta.primary")}
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                {t("cta.secondary")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
