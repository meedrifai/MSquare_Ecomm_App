// Contact Page
import { useLanguage } from "@/contexts/LanguageContext";
import React, { useState } from 'react';

const ContactPage = () => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    alert("Message envoyé!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1
          className="text-4xl font-bold mb-8"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {t.contact.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium"
              >
                {t.contact.send}
              </button>
            </div>
          </form>

          <div
            className="bg-white rounded-xl shadow-lg p-8"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <h2 className="text-2xl font-bold mb-6">{t.contact.info}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">{t.contact.phone}</h3>
                <p className="text-gray-600">+212 6XX XXX XXX</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-600">contact@khalys.ma</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">{t.contact.address}</h3>
                <p className="text-gray-600">Casablanca, Maroc</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">{t.contact.hours}</h3>
                <p className="text-gray-600">Lun - Sam: 9h - 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
