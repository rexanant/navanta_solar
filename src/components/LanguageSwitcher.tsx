import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "od" : "en")}
      className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-bold text-foreground transition-colors hover:text-primary"
      title={lang === "en" ? "Switch to Odia" : "Switch to English"}
    >
      <Globe className="h-4 w-4" />
      <span>{lang === "en" ? "ଓଡ଼ିଆ" : "EN"}</span>
    </button>
  );
};

export default LanguageSwitcher;
