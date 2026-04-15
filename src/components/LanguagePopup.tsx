import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const LanguagePopup = () => {
  const { showPopup, setLang, dismissPopup } = useLanguage();

  const handleSelect = (lang: "en" | "od") => {
    setLang(lang);
    dismissPopup();
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/60 backdrop-blur-sm"
            onClick={() => handleSelect("en")}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[90vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-8 shadow-2xl"
          >
            <div className="mb-6 flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                ଭାଷା ବାଛନ୍ତୁ / Choose Language
              </h2>
              <p className="text-sm text-muted-foreground">
                Would you like to view this website in Odia?
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="hero"
                size="lg"
                className="w-full text-base"
                onClick={() => handleSelect("od")}
              >
                ଓଡ଼ିଆ (Odia)
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="w-full text-base"
                onClick={() => handleSelect("en")}
              >
                English
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LanguagePopup;
