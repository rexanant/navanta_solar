import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import navantaLogo from "@/assets/navanta-logo.png";

const navKeys = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.process", path: "/process" },
  { key: "nav.standards", path: "/standards" },
  { key: "nav.contact", path: "/contact" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3">
              <img src={navantaLogo} alt="Navanta Solar" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-[#0A2540] leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#F5A623]">{t("footer.nav")}</h4>
            <div className="flex flex-col gap-2">
              {navKeys.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-[#0A2540] transition-colors hover:text-[#F5A623]"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#F5A623]">{t("footer.contact")}</h4>
            <p className="text-sm text-[#0A2540] leading-relaxed">
              {t("footer.contactDesc")}
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-[#0A2540]">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
