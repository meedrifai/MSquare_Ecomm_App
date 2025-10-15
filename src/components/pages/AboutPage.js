// About Page
import React, { useState } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
const AboutPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div
        className="max-w-4xl mx-auto px-4"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <h1 className="text-4xl font-bold mb-8">{t.about.title}</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.about.story}</h2>
          <p className="text-gray-600 leading-relaxed">{t.about.storyText}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">{t.about.mission}</h2>
          <p className="text-gray-600 leading-relaxed">{t.about.missionText}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
