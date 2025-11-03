// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "CyberSuraksha",
      subtitle: "Stay safe online – Learn about cyber threats",
      home: "Home",
      threats: "Threats",
      tips: "Tips",
      quiz: "Quiz",
      phish: "Phishing Demo",
      report: "Report",
      quickActions: "Quick Actions",
      takeQuiz: "Take Quiz",
      readThreats: "Read Threats",
      reportIncident: "Report Incident",
      whyIndiaSpecific: "Why India Specific",
      indiaSpecificExplanation:
        "India faces unique cyber threats. Learn to protect yourself.",
      topTips: ["Use strong passwords", "Enable 2FA", "Avoid suspicious links"],
      practicalSafetyTips: "Practical Safety Tips",
      threatsTitle: "Common Cyber Threats",
      threats: [
        {
          id: 1,
          title: "Phishing",
          desc: "Fake emails or messages to steal your data",
          steps: ["Check sender email", "Never click suspicious links"]
        },
        {
          id: 2,
          title: "Malware",
          desc: "Malicious software infecting your device",
          steps: ["Install antivirus", "Avoid untrusted downloads"]
        }
      ],
      practicalSteps: "Practical Steps",
      quiz: [
        {
          q: "What is phishing?",
          options: [
            { id: 1, t: "Fake emails to steal info" },
            { id: 2, t: "Secure network" }
          ],
          answer: 1
        }
      ],
      quickQuiz: "Quick Quiz",
      quizComplete: "Quiz Completed!",
      score: "You scored {{score}} out of {{total}}",
      retry: "Retry",
      phishingDemo: [
        {
          id: 1,
          title: "Suspicious Email Example",
          sender: "fake@bank.com",
          text: "Click here to verify your account"
        }
      ],
      markFake: "Mark as Fake",
      chooseMessage: "Select a message to analyze",
      phishingExplanation: {
        1: "This is a phishing email designed to steal login credentials."
      },
      reportTitle: "Report Cyber Incident",
      reportHint: "Fill details to report to authorities",
      incident: "Incident Description",
      contact: "Your Contact",
      state: "State",
      low: "Low",
      medium: "Medium",
      high: "High",
      submitReport: "Submit Report"
    }
  },
  ta: {
    translation: {
      title: "சைபர் பாதுகாப்பு",
      subtitle: "நீங்கள் ஆன்லைனில் பாதுகாப்பாக இருப்பது – சைபர் அச்சுறுத்தல்களை அறிக",
      home: "முகப்பு",
      threats: "அச்சுறுத்தல்கள்",
      tips: "உபாயங்கள்",
      quiz: "வினாடி வினா",
      phish: "ஃபிஷிங் டெமோ",
      report: "அறிக்கை",
      // Add other keys in Tamil...
    }
  }
  // Hindi can be added similarly
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
