import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {label && (
      <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {label}
      </span>
    )}
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">{title}</h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
