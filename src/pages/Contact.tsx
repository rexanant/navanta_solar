import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const evalKeys = ["contact.e1", "contact.e2", "contact.e3", "contact.e4", "contact.e5", "contact.e6"];

const Contact = () => {
  const { t } = useLanguage();

  // ✅ State
  const [form, setForm] = useState({
    name: "",
    phone: "",
    bill: "",
    city: ""
  });

  // ✅ Status state (loading / success)
  const [status, setStatus] = useState(""); // "", "loading", "success"

  // ✅ Handle input change
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.phone) return;

    setStatus("loading");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyTQOsD4qqaztxhh34EFnOoIQkHNhmA-EHfRgpu2cyMIkjhSSJ1YseeM8CMcXrpSp7xuQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      setStatus("success");

      // clear form
      setForm({
        name: "",
        phone: "",
        bill: "",
        city: ""
      });

      // auto reset after 3 sec (optional smooth UX)
      setTimeout(() => {
        setStatus("");
      }, 3000);

    } catch (error) {
      console.error(error);
      setStatus("");
    }
  };

  return (
    <Layout>
      <section className="section-padding bg-gradient-hero">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            label={t("contact.label")}
            title={t("contact.title")}
            description={t("contact.desc")}
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
                {t("contact.evalTitle")}
              </h3>

              <div className="space-y-3">
                {evalKeys.map((key, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">
                      {t(key)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ✅ Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 rounded-xl border border-border bg-card p-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("contact.name")}
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-md border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("contact.phone")}
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  className="w-full rounded-md border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("contact.bill")}
                </label>
                <input
                  name="bill"
                  value={form.bill}
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-md border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="e.g. ₹2,500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("contact.city")}
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-md border border-border bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={t("contact.cityPlaceholder")}
                />
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Processing..."
                  : status === "success"
                  ? "Submitted Successfully"
                  : t("contact.submit")}
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                {t("contact.secondary")}
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;