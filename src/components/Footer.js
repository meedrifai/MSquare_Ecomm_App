// Footer
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p
              className="text-gray-400 mt-4"
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              Élégance Marocaine Contemporaine
            </p>
          </div>

          <div dir={lang === "ar" ? "rtl" : "ltr"}>
            <h3 className="font-bold mb-4">Navigation</h3>
            <div className="space-y-2 text-gray-400">
              <p>Accueil</p>
              <p>Boutique</p>
              <p>À Propos</p>
              <p>Contact</p>
            </div>
          </div>

          <div dir={lang === "ar" ? "rtl" : "ltr"}>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>+212 6XX XXX XXX</p>
              <p>contact@khalys.ma</p>
              <p>Casablanca, Maroc</p>
            </div>
          </div>

          <div dir={lang === "ar" ? "rtl" : "ltr"}>
            <h3 className="font-bold mb-4">Suivez-nous</h3>
            <div className="space-y-2 text-gray-400">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>TikTok</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 KHALYS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;