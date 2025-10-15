// FAQ Page
import { useLanguage } from "@/contexts/LanguageContext";

const FAQPage = () => {
  const { lang, t } = useLanguage();

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1
          className="text-4xl font-bold mb-8"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {t.faq.title}
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6"
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
