// src/pages/CyberSurakshaApp_FullTranslation.jsx
import React, { useState, useCallback } from "react";
import "tailwindcss/tailwind.css";

// ============================================================================
// COMPLETE ENGLISH & TAMIL TRANSLATIONS - FULL PAGE
// ============================================================================
const translations = {
  en: {
    // Navigation & Layout
    title: "CyberSuraksha",
    subtitle: "Stay safe online – Learn about cyber threats",
    home: "Home",
    threats: "Threats",
    tips: "Tips",
    quiz: "Quiz",
    phish: "Phishing",
    report: "Report",
    resources: "Resources",
    stats: "Statistics",
    advancedTopics: "Advanced Topics",
    
    // Hero Section
    heroTitle: "Protect Yourself from Cyber Threats",
    heroSubtitle: "Learn, Identify, and Report cybercrime in India",
    getStarted: "Get Started",
    takeQuiz: "Take Quiz",
    readThreats: "Read Threats",
    learnTips: "Learn Tips",
    reportIncident: "Report Incident",
    
    // Home Cards
    quizDesc: "Test your cybersecurity knowledge",
    threatsDesc: "Learn about common cyber threats",
    tipsDesc: "Get practical safety tips",
    reportDesc: "Report incidents to authorities",
    resourcesDesc: "Access helpful resources and guides",
    statsDesc: "View cybercrime statistics and data",
    advancedDesc: "Deep dive into advanced cybersecurity topics",
    
    // Emergency Contacts
    emergencyContacts: "Emergency Contacts",
    cybercrimeHelpline: "Cybercrime Helpline",
    helpline1930: "24/7 helpline for reporting cybercrimes",
    onlinePortal: "Online Portal",
    portalDesc: "Official Indian cybercrime reporting portal",
    rbiPhishing: "RBI Phishing Reports",
    rbiDesc: "Report phishing and fraud attempts to RBI",
    
    // Threats Page
    threatsTitle: "Common Cyber Threats in India",
    basicThreats: "Basic Threats",
    advancedThreatsLabel: "Advanced Threats",
    realExample: "Real Example",
    protectionSteps: "Protection Steps",
    warning: "Warning",
    
    // Basic Threats
    phishingAttacks: "Phishing Attacks",
    phishingDesc: "Fraudulent emails or messages designed to steal personal information by impersonating legitimate organizations.",
    phishingExample: "Fake bank email asking to verify account with a link that looks like your bank's website.",
    phishingWarning: "Phishing targets human psychology - verify senders through alternate channels",
    
    ransomware: "Ransomware",
    ransomwareDesc: "Malicious software that encrypts your files and demands payment to restore access.",
    ransomwareExample: "Your computer files suddenly encrypted and a pop-up demanding ₹50,000 appears.",
    ransomwareWarning: "Keep backups offline; never pay ransom as it funds further attacks",
    
    malware: "Malware & Viruses",
    malwareDesc: "Malicious software designed to damage, disable, or steal your data.",
    malwareExample: "A fake antivirus app infects your device and steals banking information.",
    malwareWarning: "Download only from official sources; maintain updated antivirus",
    
    digitalArrest: "Digital Arrest Scam",
    digitalArrestDesc: "Fraudsters pose as police/CBI officials claiming your account is linked to crimes.",
    digitalArrestExample: "Video call from someone claiming to be a CBI officer threatening legal action unless you pay ₹2 lakhs.",
    digitalArrestWarning: "Police never conduct initial contact via video call - hang up immediately",
    
    investmentScam: "Investment/Trading Scams",
    investmentScamDesc: "Fraudsters promise high returns through fake trading apps and platforms.",
    investmentScamExample: "Fake investment app showing ₹10 lakh profit on ₹10,000, asking to deposit ₹5 lakhs to unlock withdrawal.",
    investmentScamWarning: "No investment app guarantees returns; verify through SEBI-registered advisors",
    
    simSwap: "SIM Swap Fraud",
    simSwapDesc: "Attackers convince telecom companies to switch your phone number to a new SIM card.",
    simSwapExample: "Your phone suddenly loses signal, and fraudsters access your OTPs and banking apps.",
    simSwapWarning: "Add SIM PIN with telecom provider; this is catastrophic if compromised",
    
    upiQrScam: "UPI & QR Code Scams",
    upiQrScamDesc: "Fraudsters share fake QR codes that debit money instead of receiving payments.",
    upiQrScamExample: "Scammer sends QR code claiming to receive payment, but scanning it debits ₹5,000 from your account.",
    upiQrScamWarning: "Never scan QR codes from unknown sources; create QR to receive, never to send",
    
    ecommerceFraud: "E-commerce/Online Shopping Fraud",
    ecommerceFraudDesc: "Fake websites with misspelled URLs, counterfeit products, and refund scams.",
    ecommerceFraudExample: "Website looks identical to Flipkart but URL is flipkartt.in - charges your card but never delivers.",
    ecommerceFraudWarning: "Check URL carefully; legitimate sites use HTTPS with padlock",
    
    socialMediaScam: "Social Media Investment Scams",
    socialMediaScamDesc: "Stock market scams through social media promising guaranteed high returns.",
    socialMediaScamExample: "Facebook group claiming insider stock tips leading to ₹50,000 to ₹1 crore investments.",
    socialMediaScamWarning: "Investment groups on social media are typically scams - verify with SEBI",
    
    iotVulnerability: "IoT Device Vulnerabilities",
    iotVulnerabilityDesc: "Smart devices with default passwords and weak security allowing unauthorized access.",
    iotVulnerabilityExample: "Hacked smart home camera streaming live to strangers; compromised smart speaker stealing voice commands.",
    iotVulnerabilityWarning: "Change ALL default passwords on smart devices immediately",

    // Advanced Threats
    bec: "Business Email Compromise (BEC)",
    becDesc: "Sophisticated social engineering attacks targeting employees through spoofed email accounts.",
    becExample: "Attacker impersonates CEO demanding urgent wire transfer, creating nearly identical email domain.",
    becWarning: "Average loss of $130,000+ per incident; 95% more likely to succeed than standard phishing.",

    supplyChain: "Supply Chain Attacks",
    supplyChainDesc: "Attackers compromise vendors/suppliers to gain access to larger target organizations.",
    supplyChainExample: "SolarWinds breach (2020) infected 18,000 organizations through compromised software updates.",
    supplyChainWarning: "Supply chain attacks affect thousands of organizations simultaneously.",

    zeroDay: "Zero-Day Vulnerabilities & Exploits",
    zeroDayDesc: "Unknown security flaws with no available patch, exploited before vendors know about them.",
    zeroDayExample: "Attackers discover vulnerability in widely-used software and exploit it before patch exists.",
    zeroDayWarning: "Can remain undetected for months; affects billions of users simultaneously.",

    apt: "Advanced Persistent Threats (APT)",
    aptDesc: "Prolonged, targeted cyberattacks where intruders gain access and remain undetected for extended periods.",
    aptExample: "Nation-state actors maintain network access for months/years exfiltrating data gradually.",
    aptWarning: "Average dwell time (undetected presence) was 207 days in 2023.",

    dnsSpoof: "DNS Spoofing/Hijacking",
    dnsSpoofDesc: "Redirecting users to fake websites by compromising DNS records.",
    dnsSpoofExample: "User types bank.com but DNS returns attacker's server, user sees perfect replica of bank website.",
    dnsSpoofWarning: "DNS hijacking is invisible to users - always verify website security.",

    bluetoothAttack: "Bluetooth & Wireless Attacks",
    bluetoothDesc: "Exploiting weak security in Bluetooth and WiFi connections for data theft.",
    bluetoothExample: "Attacker creates fake AirportFreeWiFi network to intercept traffic from connected users.",
    bluetoothWarning: "Disable Bluetooth/WiFi when not in use; use VPN on public networks.",

    wateringHole: "Watering Hole Attacks",
    wateringHoleDesc: "Compromising legitimate websites frequented by target users to deliver malware.",
    wateringHoleExample: "US military contractors infected through defense industry blogs they regularly visited.",
    wateringHoleWarning: "Keep browser, plugins, and antivirus updated; avoid public WiFi.",

    credentialStuffing: "Credential Stuffing",
    credentialStuffingDesc: "Automated attacks using stolen username/password combinations from previous breaches.",
    credentialStuffingExample: "Attacker uses 2.3 billion stolen credentials attempting access across multiple services.",
    credentialStuffingWarning: "Password reuse across services makes this highly effective.",

    // Tips Page
    tipsTitle: "Practical Safety Tips",
    allTips: "All Tips",
    passwordSecurity: "Password Security",
    bankingSecurity: "Banking Security",
    socialMediaSecurity: "Social Media Security",
    emailPhishing: "Email & Phishing",
    deviceSecurity: "Device Security",
    iotSecurity: "IoT & Smart Device Security",
    cloudSecurity: "Cloud Security",
    workFromHome: "Work-from-Home Security",
    childrenOnlineSafety: "Children's Online Safety",
    digitalPaymentSecurity: "Digital Payment Security",

    // Advanced Topics
    encryption: "Cryptography & Encryption",
    networkSecurity: "Network Security",
    authentication: "Authentication Methods",
    incidentResponse: "Incident Response",

    // Quiz
    quizTitle: "Cybersecurity Quiz",
    question: "Question",
    quizComplete: "Quiz Complete!",
    yourScore: "Your Score",
    explanation: "Explanation",
    retakeQuiz: "Retake Quiz",
    nextQuestion: "Next Question",
    finish: "Finish",
    
    // Phishing
    phishingTitle: "Phishing Detection Demo",
    markAsPhishing: "Mark as Phishing",
    markAsLegitimate: "Mark as Legitimate",
    phishingExplanation: "Why this is phishing",
    correct: "Correct!",
    incorrect: "Incorrect",
    
    // Report
    reportTitle: "Report Cyber Incident",
    incidentType: "Incident Type",
    contactInfo: "Contact Information",
    description: "Description",
    selectState: "Select State",
    severity: "Severity",
    submitReport: "Submit Report",
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical",
    phishingEmail: "Phishing Email",
    onlineFraud: "Online Fraud",
    identityTheft: "Identity Theft",
    accountHacking: "Account Hacking",
    ransomwareAttack: "Ransomware",
    digitalArrestScam: "Digital Arrest Scam",
    investmentFraud: "Investment Fraud",
    email: "Email",
    phone: "Phone",
    
    // Statistics
    statsTitle: "Cybercrime Statistics in India",
    lossesIn2024: "Losses in 2024",
    complaintsReceived: "Complaints Received",
    amountFrozen: "Amount Frozen",
    amountRecovered: "Amount Recovered",
    topAffectedStates: "Top Affected States",
    threatsBreakdown: "Threats Breakdown",
    cases: "Cases",
    
    // Resources
    resourcesTitle: "Resources & Guides",
    helplineServices: "Helpline Services",
    governmentResources: "Government Resources",
    bankingResources: "Banking Safety Resources",
    educationalMaterials: "Educational Materials",
    footer: "Your Cyber Security Awareness Platform",
    footerSubtitle: "Stay safe online | Report incidents | Learn & Protect",
  },
  ta: {
    // Navigation & Layout
    title: "சைபர் சுரக்ஷை",
    subtitle: "இணையத்தில் பாதுகாப்பாக இருங்கள் – சைபர் அச்சுறுத்தல்களைப் பற்றி அறியுங்கள்",
    home: "முகப்பு",
    threats: "அச்சுறுத்தல்கள்",
    tips: "குறிப்புகள்",
    quiz: "வினாடி வினா",
    phish: "மீன்பிடித்தல்",
    report: "புகார்",
    resources: "வளங்கள்",
    stats: "புள்ளிவிவரங்கள்",
    advancedTopics: "வளர்ந்த தலைப்புகள்",
    
    // Hero Section
    heroTitle: "சைபர் அச்சுறுத்தல்களிலிருந்து உங்களைப் பாதுகாத்துக் கொள்ளுங்கள்",
    heroSubtitle: "கற்றுக் கொள்ளுங்கள், கண்டறியுங்கள் மற்றும் இந்தியாவில் சைபர் குற்றத்தைப் புகாரளிக்கவும்",
    getStarted: "தொடங்குங்கள்",
    takeQuiz: "வினாடி வினா எடுங்கள்",
    readThreats: "அச்சுறுத்தல்களைப் படிக்கவும்",
    learnTips: "குறிப்புகளைக் கற்றுக் கொள்ளுங்கள்",
    reportIncident: "சம்பவத்தைப் புகாரளிக்கவும்",
    
    // Home Cards
    quizDesc: "உங்கள் சைபர் பாதுகாப்பு அறிவைச் சோதிக்கவும்",
    threatsDesc: "பொதுவான சைபர் அச்சுறுத்தல்களைப் பற்றி அறியுங்கள்",
    tipsDesc: "நடைமுறை பாதுகாப்பு குறிப்புகளைப் பெறுங்கள்",
    reportDesc: "சம்பவங்களை அதிகாரிகளிடம் புகாரளிக்கவும்",
    resourcesDesc: "உதவிக்குறிப்புகள் மற்றும் வழிகாட்டிகளைப் பெறுங்கள்",
    statsDesc: "சைபர் குற்ற புள்ளிவிவரங்கள் மற்றும் தரவைப் பார்க்கவும்",
    advancedDesc: "வளர்ந்த சைபர் பாதுகாப்பு தலைப்புக்களில் ஆழமாக நுழையுங்கள்",
    
    // Emergency Contacts
    emergencyContacts: "அவசர தொடர்புகள்",
    cybercrimeHelpline: "சைபர் குற்ற உதவி வரிசை",
    helpline1930: "சைபர் குற்றங்களைப் புகாரளிப்பதற்கான 24/7 உதவி வரிசை",
    onlinePortal: "ஆன்லைன் போர்ட்டல்",
    portalDesc: "இந்திய சைபர் குற்ற புகாரளிப்பு போர்ட்டல்",
    rbiPhishing: "RBI மீன்பிடித்தல் புகாரங்கள்",
    rbiDesc: "RBI க்கு மீன்பிடித்தல் மற்றும்欺lஐப் புகாரளிக்கவும்",
    
    // Threats Page
    threatsTitle: "இந்தியாவில் பொதுவான சைபர் அச்சுறுத்தல்கள்",
    basicThreats: "அடிப்படை அச்சுறுத்தல்கள்",
    advancedThreatsLabel: "வளர்ந்த அச்சுறுத்தல்கள்",
    realExample: "உண்மையான உதாரணம்",
    protectionSteps: "பாதுகாப்பு நடவடிக்கைகள்",
    warning: "எச்சரிக்கை",
    
    // Basic Threats
    phishingAttacks: "மீன்பிடித்தல் தாக்குதல்கள்",
    phishingDesc: "ஆக்ஞ்ஜை பாஸ்பத்தில் உள்ள தகவலைத் திருடுவதற்கு வடிவமைக்கப்பட்ட জালமான மின்னஞ்சல்கள் அல்லது செய்திகள்.",
    phishingExample: "உங்கள் வங்கியின் வலைத்தளத்தைப் போல் இருக்கும் இணைப்பைக் கொண்டு கணக்கைச் சரிபார்க்க வேண்டிய জால ஆங்கில மின்னஞ்சல்.",
    phishingWarning: "மீன்பிடித்தல் மனோவிஞ்ஞான குணங்களை இலக்கு வையாகக் கொள்கிறது - மாற்றுக் கால்வாய்களில் அனுப்புபவரைச் சரிபார்க்கவும்",
    
    ransomware: "மீண்டும் மொத்த மென்பொருள்",
    ransomwareDesc: "உங்கைப் கோப்புகளை குறிய்ப்பாக்கி அணுக மறுக்கினால் கணக்கு பணம் கேட்கிறது.",
    ransomwareExample: "உங்கைப் கணினி கோப்புகள் திடீரென்று குறிய்ப்பாக்கப்பட்டு ₹50,000 பணம் கேட்டு வரும் பாப்-அப் தோன்றுகிறது.",
    ransomwareWarning: "ஆஃப்லைனில் பிக்கப்ப்ப் வைக்கவும்; மீண்டும் மொத்த பணம் கொடுக்க வேண்டாம் என்பதால் கூடிய தாக்குதல்களுக்கு நிதி வருகிறது",
    
    malware: "பொல்லாத மென்பொருள் & வைரஸ்",
    malwareDesc: "உங்கைப் தகவல்களைச் சேதப்படுத்த, முடக்க அல்லது திருட வடிவமைக்கப்பட்ட பொல்லாத மென்பொருள்.",
    malwareExample: "ஒரு செய்கிய வைரஸ்-நீக்கும் அப்ளிகேசன் உங்கைப் சாதனத்தைத் தொற்றுதல் மற்றும் ஆங்கிலம் தகவல்களைத் திருடுகிறது.",
    malwareWarning: "அதிகாரிக் கணக்கேற்றங்கள் மட்டுமே பதிவிறக்கவும்; வாய்ப்பு வைரஸ்-நீக்கியை புதுப்பிக்கவும்",
    
    digitalArrest: "஡ிஜிட்டல் கைது மோசடி",
    digitalArrestDesc: "மோசடி செய்பவர்கள் போலிஸ் மற்றும் CBI அதிகாரிகளாக போலி செய்து உங்கைக் கணக்கு குற்றத்துடன் இணைக்கப்பட்டுள்ளது என்று கூறுகிறார்கள்.",
    digitalArrestExample: "CBI அதிகாரி என்று பொய்யாக கூறும் ஒருவர் வீடியோ அழைப்பூடன் ₹2 லட்சம் பணம் கொடுக்க வேண்டாம் என்று அச்சுறுத்துகிறார்.",
    digitalArrestWarning: "போலிஸ் ஆரம்ப தொடர்பு வீடியோ அழைப்பூடன் செய்ய மாட்டார்கள் - உடனே அழைப்பை வெட்டிவிடுங்கள்",
    
    investmentScam: "முதலீட்டு/வாணிக மோசடிகள்",
    investmentScamDesc: "மோசடி செய்பவர்கள் செய்கிய வாணிக அப்ளிகேசன்கள் மற்றும் தளங்கள் மூலம் அதிக லாபம் வழங்க வாக்குறுதி கொடுக்கிறார்கள்.",
    investmentScamExample: "செய்கிய முதலீட்ட அப்ளிகேசன் ₹10,000 இல் ₹10 லட்சம் லாபம் காட்டுகிறது, ₹5 லட்சம் டিபாசிட் செய்ய வேண்டும் என்று கேட்கிறது.",
    investmentScamWarning: "எந்த முதலீட்ட அப்ளிகேசனும் லாபம் உறுதி செய்ய மாட்டாது; SEBI-பதிவுசெய்த ஆலோசனையாளர்களூடன் சரிபார்க்கவும்",
    
    simSwap: "SIM மாற்றுவு மோசடி",
    simSwapDesc: "தாக்கல்குரியவர்கள் தொலைத்தொடர்புசெய்யுங்கள் கம்பனிகளை உங்கைத் தொலைபேசி எண்ணை புதிய SIM கையிலிருக்கும் மாற்ற சமாதான செய்கிறார்கள்.",
    simSwapExample: "உங்கைத் தொலைபேசி திடீரென்று சிக்னல் இழந்து, மோசடி செய்பவர்கள் உங்கைத் OTP மற்றும் ஆங்கில நிதிக்கணக்கு அப்ளிகேசன்களை அணுகிறார்கள்.",
    simSwapWarning: "தொலைத்தொடர்புசெய்யுங்கள் வழங்குநரூடன் SIM PIN சேர்க்கவும்; இது குறிப்பு செய்யப்பட்டிருந்தால் பயங்கரமாக இருக்கிறது",
    
    upiQrScam: "UPI & QR குறுந்கோட்டு மோசடிகள்",
    upiQrScamDesc: "மோசடி செய்பவர்கள் பணத்தை விபரத்து செய்பவற்றுக்கு பணம் பெற்றிலாது விலை கொடுத்துவிடும் QR குறுந்கோட்டுகளைப் பகிர்ந்துகொள்கிறார்கள்.",
    upiQrScamExample: "மோசடி செய்பவர் பணம் பெற தகுறுங்கள் என்று QR குறுந்கோட்டை அனுப்புகிறார்கள், ஆனால் ஸ்கேன் செய்தால் உங்கைக் கணக்கிலிருந்து ₹5,000 கடன் செய்யப்பட்டுவிடுகிறது.",
    upiQrScamWarning: "அறியாதவர்களுக்கு QR குறுந்கோட்டு ஸ்கேன் செய்க வேண்டாம்; பணம் பெற QR உருவாக்குங்கள், கொடுக்க வேண்டாம்",
    
    ecommerceFraud: "மின் வர்த்தக/ஆன்லைன் வாங்கல் மோசடிகள்",
    ecommerceFraudDesc: "தவறாக ஆக்ஞ்ஜை URL-கள், கட்டுபொருட்கள் மற்றும் மேல்நிலைக்கு பணம் திருப்பித்துக் கேட்கும் தெய்வத்தொடர்புள் தளங்கள்.",
    ecommerceFraudExample: "வலைத்தளம் Flipkart வளையத் தேவையிருந்தும் URL flipkartt.in இல் இருப்பதால் - உங்கைக் கார்டுக்குக் கட்டணம் வசூல் செய் கூட பொருட்கள் பெற்றிலாது.",
    ecommerceFraudWarning: "URL ஐ கவனமாக சரிபார்க்கவும்; ஆக்ஞ்ஜை தளங்கள் HTTPS மற்றும் பாதைக் சாவி ஆயுளகம் உபயோகிக்கின்றன",
    
    socialMediaScam: "சமூக ஊடக முதலீட்டு மோசடிகள்",
    socialMediaScamDesc: "சூக்ष்ம வர்த்தக மோசடிகள் சமூக ஊடகத்தூடன் அதிக லாபம் வாக்குறுதி கொடுக்கிறது.",
    socialMediaScamExample: "Facebook குழு உள்நாட நிலைக் குறிப்புகளை வழங்கும் ₹50,000 விதமாக ₹1 கோடி முதலீட்டுக்கு வழிவகை செய்கிறது.",
    socialMediaScamWarning: "சமூக ஊடகத்தில் முதலீட்ட குழுக்கள் வழக்கமாக மோசடிகள் - SEBI உடன் சரிபார்க்கவும்",
    
    iotVulnerability: "IoT சாதனம் பலவீனங்கள்",
    iotVulnerabilityDesc: "ஆக்ஞ்ஜை கடவுச்சொல்லுடன் புத்திசாலி சாதனங்கள் மற்றும் பலவீனமான பாதுகாப்பு அங்கீகரிக்கப்பட்ட அணுக்கம் அனுமதிக்கிறது.",
    iotVulnerabilityExample: "ஹ্যাக் செய்யப்பட்ட புத்திசாலி வீட்டு ক்যாமேரா விலை பார்ப்பவர்களுக்கு நேரலை ஸ்ட்ரீம் செய்கிறது; அணுக்கப்பட்ட புத்திசாலி பேச்சிமுங்கள் குரல் கட்டளைகளை திருடுகிறது.",
    iotVulnerabilityWarning: "புத்திசாலி சாதனங்களிற் அனைத்து ஆக்ஞ்ஜை கடவுச்சொல்லைமாற்றவும் உடனே",

    // Advanced Threats
    bec: "ஆங்கில மின்னஞ்சல் உடன்படிக்கை (BEC)",
    becDesc: "பணிக்கான் மூலம் ஊக்கப்பட்ட மின்னஞ்சல் கணக்குகளைக் கொண்டு மேல் சமூக பொறியியல் தாக்குதல்கள்.",
    becExample: "தாக்கல்குரியவர் CEO ஆக போல் செய்து உடனடி கம்பி மேல்நிலைக்கு கேட்டு, ஏறக்குறைய ஒரே மாதிரி மின்னஞ்சல் களம் உருவாக்குகிறது.",
    becWarning: "சராசரியாக $130,000+ ஒற்றை சம்பவ நஷ்டம்; வழக்கமான மீன்பிடித்தல் விட 95% அதிகம் வெற்றிபெற வாய்ப்பு.",

    supplyChain: "விநியோக இணை தாக்குதல்கள்",
    supplyChainDesc: "தாக்கல்குரியவர்கள் விற்பனாளர்/பரிவர்தகம் செய்பவர்கள் ஒருங்கிணைக்க பெரிய লக்ష்য வழங்குனராக அணுக்குகிறார்கள்.",
    supplyChainExample: "SolarWinds மேல்நிலை (2020) 18,000 கட்டமைப்புக் மெருபிற்று மென்பொருள் புதுப்பிப்பூடன் தொற்றுப்பட்டது.",
    supplyChainWarning: "விநியோக இணை தாக்குதல்கள் ஆயிரக்கணக்கான கட்டமைப்பைக் குறிவையாக கொள்கின்றன.",

    zeroDay: "ஆக்ஞ்ஜை-நாட் பலவீனங்கள் & பயன்படுத்துதல்கள்",
    zeroDayDesc: "பெடவுற்ற தகவல் இல்லாதுவரை பெடவுற்ற பாதுகாப்பு குறைவுகள், விற்பனாளர்கள் அறிவதற்கு முன் பயன்படுத்தப்படுகிறது.",
    zeroDayExample: "தாக்கல்குரியவர்கள் விரிஞ்சான-பயன்படுத்துமென்பொருளில் குறைவு கண்டறிந்து, பொதுதளத்திற்கு முன் பயன்படுத்துகிறார்கள்.",
    zeroDayWarning: "மாதங்களுக்கு அணுக்க சக்தியுடைய;ல்லையிலாத பாதுகாப்பான பயனாளிகள் குறை பாதிப்பு।",

    apt: "வளர்ந்த கலைவிசிலாளி அச்சுறுத்தல்கள் (APT)",
    aptDesc: "நீண்டநாட், கட்ட வாய்ப்பு தாக்குதல்கள் தாக்கல்குரியவர்கள் அணுக்கம் வைத்து நீண்ட கால அணுக்கக் கீழ் இருக்கிறது.",
    aptExample: "நாட்டு-அரசு தொழிலாளர்கள் நான்கு-ஆண்டு அணுக்கம் வைத்து தரவை தெரிந்து பெரும்வாக்கு வாதைமாறுவுதல் கொட்டு.",
    aptWarning: "சராசரி வாசல் நேரம் (அணுக்கத்தற்கு அறிவிப்பாக இல்லாத இருப்பு) 2023 இல் 207 நாட்கள்.",

    dnsSpoof: "DNS கைவினை/தடுக்க",
    dnsSpoofDesc: "DNS பதிவுகளை உடைமையாக்குவதுவடன் பயனாளிகளை செய்கிய தளங்களுக்கு திசைமாற்றம்.",
    dnsSpoofExample: "பயனாளி ஆங்கில மின்னஞ்சல் வகையை தட்ட செய்கிறார் ஆனால் DNS தாக்கல்குரியவரின் சேவக கணக்கை திருப்பித்துக்கொள், பயனாளி ஆங்கில வங்கி தளத்தின் செய்கிய பிரதியைப் பார்க்கிறார்.",
    dnsSpoofWarning: "DNS கைவினை பயனாளிகளுக்கு அறிவிப்பாக இல்லாது - தளம் பாதுகாப்பு எப்போதும் சரிபார்க்கவும்.",

    bluetoothAttack: "Bluetooth & கம்பிகளிட்ட தாக்குதல்கள்",
    bluetoothDesc: "Bluetooth மற்றும் WiFi இணைப்பு பலவீனமான பாதுகாப்பு தகவல் திருட்டை பயன்படுத்த.",
    bluetoothExample: "தாக்கல்குரியவர் செய்கிய AirportFreeWiFi நெட்வொர்க் உருவாக்க இணைந்த பயனாளிகளிலிருந்து ট்রাஃபிக் சேகரிக்க.",
    bluetoothWarning: "பயன்படுத்தாத்ப Bluetooth/WiFi முடக்குங்கள்; பொதுவான நெட்வொர்க்கில் VPN பயன்படுத்துங்கள்।",

    wateringHole: "நீர்- குழாய் தாக்குதல்கள்",
    wateringHoleDesc: "பயனாளிகளை வழிமுறை விநியோகஒ செய்ய வழைய வழக்கமான தளங்களை முறுக்க ஈ।",
    wateringHoleExample: "US இராணுவ சதிசெய்பவர்கள் தகுறுங்கள் கற்பிப்பக்கள் நெட்வொர்க் விணைத்தளங்களுடன் தொற்றுப்பட்டது.",
    wateringHoleWarning: "பிரவுசர், உபகரணங்கள் மற்றும் வைரஸ் கட்டுப்பாடு புதுப்பிக்கவும்; பொதுவான WiFi தவிர்க்கவும்।",

    credentialStuffing: "கணக்கு தொகுத்தற்பொல்",
    credentialStuffingDesc: "நெடுநாள மோசடி மூலம் ஆற்றப்பட்ட பயனாளி பெயர்/கடவுச்சொல் உபயோகிக்கு தாக்குதல்கள்।",
    credentialStuffingExample: "தாக்கல்குரியவர் 2.3 பில்லியன் செய்கிய கணக்கு பிரயாசம் பல சேவைகளுக்கு முயலுகிறார்.",
    credentialStuffingWarning: "சேவைகளுக்கு கடவுச்சொல் மீண்டும் பயன்பாடு இந்த அতிவிரைந்த பயனுள் செய்கிறது।",

    // Tips Page
    tipsTitle: "நடைமுறை பாதுகாப்பு குறிப்புகள்",
    allTips: "அனைத்து குறிப்புகள்",
    passwordSecurity: "கடவுச்சொல் பாதுகாப்பு",
    bankingSecurity: "வங்கி பாதுகாப்பு",
    socialMediaSecurity: "சமூக ஊடக பாதுகாப்பு",
    emailPhishing: "மின்னஞ்சல் & மீன்பிடித்தல்",
    deviceSecurity: "சாதனம் பாதுகாப்பு",
    iotSecurity: "IoT & புத்திசாலி சாதனம் பாதுகாப்பு",
    cloudSecurity: "கொள்ளம் பாதுகாப்பு",
    workFromHome: "வீட்டிலிருந்து வேலை பாதுகாப்பு",
    childrenOnlineSafety: "குழந்தை ஆன்லைன் பாதுகாப்பு",
    digitalPaymentSecurity: "ডিজিটাল கொடுக்க பாதுகாப்பு",

    // Advanced Topics
    encryption: "ரகசியமணி & சாவை",
    networkSecurity: "நெட்வொர்க் பாதுகாப்பு",
    authentication: "அநுமানம் முறைகள்",
    incidentResponse: "சம்பவம் பிரதिबन",

    // Quiz
    quizTitle: "சைபர் பாதுகாப்பு வினாடி வினா",
    question: "கேள்வி",
    quizComplete: "வினாடி வினா சரியாக!",
    yourScore: "உங்கள் மதிப்பெண்",
    explanation: "விளக்கம்",
    retakeQuiz: "வினாடி வினா மீண்டும் எடுங்கள்",
    nextQuestion: "அடுத்த கேள்வி",
    finish: "முடிக்கவும்",
    
    // Phishing
    phishingTitle: "மீன்பிடித்தல் கண்டறிதல் ஆய்",
    markAsPhishing: "மீன்பிடித்தல் என குறிக்கவும்",
    markAsLegitimate: "ஆக்ஞ்ஜை என குறிக்கவும்",
    phishingExplanation: "இது ஏன் மீன்பிடித்தல்",
    correct: "சரியாக!",
    incorrect: "தவறு",
    
    // Report
    reportTitle: "சைபர் சம்பவம் புகாரளிக்கவும்",
    incidentType: "சம்பவம் வகை",
    contactInfo: "தொடர்பு தகவல்",
    description: "விளக்கம்",
    selectState: "மாநிலத்தைத் தெரிவு செய்யவும்",
    severity: "கடுமை",
    submitReport: "புகாரளிக்கவும்",
    low: "குறைந்த",
    medium: "நடுவு",
    high: "அதிகம்",
    critical: "தீவிரம்",
    phishingEmail: "மீன்பிடித்தல் மின்னஞ்சல்",
    onlineFraud: "ஆன்லைன் மோசடி",
    identityTheft: "அடையாள திருட்டு",
    accountHacking: "கணக்கு கடத்தல்",
    ransomwareAttack: "மீண்டும் மொத்த தாக்குதல்",
    digitalArrestScam: "஡ிஜிட்டல் கைது மோசடி",
    investmentFraud: "முதலீட்ட மோசடி",
    email: "மின்னஞ்சல்",
    phone: "தொலைபேசி",
    
    // Statistics
    statsTitle: "இந்தியாவில் சைபர் குற்ற புள்ளிவிவரங்கள்",
    lossesIn2024: "2024 இல் நஷ்டங்கள்",
    complaintsReceived: "பெற்ற புகாரங்கள்",
    amountFrozen: "உறைவிக்கப்பட்ட தொகை",
    amountRecovered: "மீட்டெடுக்கப்பட்ட தொகை",
    topAffectedStates: "மிக பாதிக்கப்பட்ட மாநிலங்கள்",
    threatsBreakdown: "அச்சுறுத்தல்கள் தகிர்வு",
    cases: "வழக்குகள்",
    
    // Resources
    resourcesTitle: "வளங்கள் & வழிகாட்டிகள்",
    helplineServices: "உதவி வரிசை சேவைகள்",
    governmentResources: "அரசு வளங்கள்",
    bankingResources: "வங்கி பாதுகாப்பு வளங்கள்",
    educationalMaterials: "கற்பிப்பு பொருட்கள்",
    footer: "உங்கள் சைபர் பாதுகாப்பு விழிப்பு தளம்",
    footerSubtitle: "ஆன்லைனில் பாதுகாப்பாக இருங்கள் | சம்பவங்களைப் புகாரளிக்கவும் | கற்றுக் கொள்ளுங்கள் & பாதுகாப்பு",
  },
};

// ============================================================================
// CUSTOM TRANSLATION HOOK
// ============================================================================
const useTranslation = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const t = useCallback(
    (key) => {
      const value = translations[language]?.[key];
      return value !== undefined ? value : key;
    },
    [language]
  );

  const changeLanguage = useCallback((newLang) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  }, []);

  return { t, language, changeLanguage };
};

// ============================================================================
// THEME & CONSTANTS
// ============================================================================
const THEME = {
  colors: {
    primary: "from-indigo-700 to-sky-600",
    secondary: "bg-indigo-600",
    accent: "bg-amber-500",
    success: "bg-emerald-500",
    danger: "bg-red-500",
    neutral: "bg-gray-200",
  },
  transitions: "transition-all duration-300",
  rounded: "rounded-2xl",
};

const VIEWS = {
  HOME: "home",
  THREATS: "threats",
  TIPS: "tips",
  QUIZ: "quiz",
  REPORT: "report",
  PHISH: "phish",
  RESOURCES: "resources",
  STATS: "stats",
  ADVANCED: "advanced",
};

// ============================================================================
// THREATS DATA
// ============================================================================
const threatsData = [
  // Basic Threats
  {
    id: "phishing",
    title: "phishingAttacks",
    desc: "phishingDesc",
    example: "phishingExample",
    warning: "phishingWarning",
    category: "basic",
  },
  {
    id: "ransomware",
    title: "ransomware",
    desc: "ransomwareDesc",
    example: "ransomwareExample",
    warning: "ransomwareWarning",
    category: "basic",
  },
  {
    id: "malware",
    title: "malware",
    desc: "malwareDesc",
    example: "malwareExample",
    warning: "malwareWarning",
    category: "basic",
  },
  {
    id: "digitalArrest",
    title: "digitalArrest",
    desc: "digitalArrestDesc",
    example: "digitalArrestExample",
    warning: "digitalArrestWarning",
    category: "basic",
  },
  {
    id: "investmentScam",
    title: "investmentScam",
    desc: "investmentScamDesc",
    example: "investmentScamExample",
    warning: "investmentScamWarning",
    category: "basic",
  },
  {
    id: "simSwap",
    title: "simSwap",
    desc: "simSwapDesc",
    example: "simSwapExample",
    warning: "simSwapWarning",
    category: "basic",
  },
  {
    id: "upiQr",
    title: "upiQrScam",
    desc: "upiQrScamDesc",
    example: "upiQrScamExample",
    warning: "upiQrScamWarning",
    category: "basic",
  },
  {
    id: "ecommerce",
    title: "ecommerceFraud",
    desc: "ecommerceFraudDesc",
    example: "ecommerceFraudExample",
    warning: "ecommerceFraudWarning",
    category: "basic",
  },
  {
    id: "socialMedia",
    title: "socialMediaScam",
    desc: "socialMediaScamDesc",
    example: "socialMediaScamExample",
    warning: "socialMediaScamWarning",
    category: "basic",
  },
  {
    id: "iot",
    title: "iotVulnerability",
    desc: "iotVulnerabilityDesc",
    example: "iotVulnerabilityExample",
    warning: "iotVulnerabilityWarning",
    category: "basic",
  },

  // Advanced Threats
  {
    id: "bec",
    title: "bec",
    desc: "becDesc",
    example: "becExample",
    warning: "becWarning",
    category: "advanced",
  },
  {
    id: "supplyChain",
    title: "supplyChain",
    desc: "supplyChainDesc",
    example: "supplyChainExample",
    warning: "supplyChainWarning",
    category: "advanced",
  },
  {
    id: "zeroDay",
    title: "zeroDay",
    desc: "zeroDayDesc",
    example: "zeroDayExample",
    warning: "zeroDayWarning",
    category: "advanced",
  },
  {
    id: "apt",
    title: "apt",
    desc: "aptDesc",
    example: "aptExample",
    warning: "aptWarning",
    category: "advanced",
  },
  {
    id: "dnsSpoofing",
    title: "dnsSpoof",
    desc: "dnsSpoofDesc",
    example: "dnsSpoofExample",
    warning: "dnsSpoofWarning",
    category: "advanced",
  },
  {
    id: "bluetooth",
    title: "bluetoothAttack",
    desc: "bluetoothDesc",
    example: "bluetoothExample",
    warning: "bluetoothWarning",
    category: "advanced",
  },
  {
    id: "wateringHole",
    title: "wateringHole",
    desc: "wateringHoleDesc",
    example: "wateringHoleExample",
    warning: "wateringHoleWarning",
    category: "advanced",
  },
  {
    id: "credentialStuffing",
    title: "credentialStuffing",
    desc: "credentialStuffingDesc",
    example: "credentialStuffingExample",
    warning: "credentialStuffingWarning",
    category: "advanced",
  },
];

// ============================================================================
// TIPS DATA
// ============================================================================
const tipsData = [
  {
    category: "passwordSecurity",
    tips: [
      "Use 12+ characters with uppercase, lowercase, numbers, and special characters",
      "Never reuse passwords across different services",
      "Use passphrases like 'CorrectHorseBatteryStaple!' - easier to remember, harder to crack",
      "Change passwords every 90 days for critical accounts",
      "Use a password manager (Bitwarden, 1Password, LastPass) for secure storage",
      "Enable multi-factor authentication on all important accounts",
      "Avoid dictionary words, personal information, keyboard patterns (qwerty)",
    ],
  },
  {
    category: "bankingSecurity",
    tips: [
      "Always check URL for HTTPS and padlock icon before entering credentials",
      "Verify certificates by clicking padlock - ensure bank name matches",
      "Use bank's official website or app, never through search engine links",
      "Enable transaction alerts on SMS and email for every transaction",
      "Set up geo-location restrictions for login alerts from unusual locations",
      "Use separate card for online vs. in-person transactions when possible",
      "Monitor credit reports annually at free.annualcreditreport.com",
      "Freeze credit when not needed to prevent identity theft",
    ],
  },
  {
    category: "socialMediaSecurity",
    tips: [
      "Don't share pets' names, mother's maiden name - these are security questions",
      "Avoid posting vacation photos that show empty house (burglary risk)",
      "Review privacy settings - restrict past posts visibility",
      "Disable third-party app access that doesn't need it",
      "Be suspicious of love scams that rapidly escalate relationships",
      "Never conduct financial transactions on social media",
      "Verify person's identity through video call before trusting",
      "Check if your credentials have been compromised: haveibeenpwned.com",
    ],
  },
  {
    category: "emailPhishing",
    tips: [
      "Never click links in unexpected emails - copy to address bar instead",
      "Hover over links to see actual destination URL",
      "Check sender email address carefully - not just display name",
      "Watch for generic greetings (Dear Customer vs. Dear John)",
      "Verify through official contact numbers for urgent requests",
      "Use email authentication tools (DMARC, SPF, DKIM checks)",
      "Report phishing instead of forwarding - use 'Report Phishing' button",
      "Look for misspelled domains (companyy.com vs company.com)",
    ],
  },
  {
    category: "deviceSecurity",
    tips: [
      "Enable automatic OS updates - install immediately",
      "Use screen lock with strong PIN/password (6+ digits)",
      "Enable full-device encryption on all devices",
      "Download only from official app stores",
      "Review app permissions - grant only what's necessary",
      "Disable auto-save passwords except in password manager",
      "Use privacy screen on devices in shared spaces",
      "Regular device backups for disaster recovery",
    ],
  },
  {
    category: "iotSecurity",
    tips: [
      "Change default passwords on ALL smart devices immediately",
      "Put IoT devices on separate WiFi network from main computers",
      "Check for manufacturer firmware updates quarterly",
      "Disable unnecessary features (microphones, cameras in unused devices)",
      "Review connected app permissions regularly",
      "Disable remote access if not needed",
      "Use strong WiFi password (16+ characters, WPA3 encryption)",
      "Disable WPS (WiFi Protected Setup) on router",
    ],
  },
  {
    category: "cloudSecurity",
    tips: [
      "Never use 'anyone with link' sharing on sensitive documents",
      "Audit cloud storage permissions regularly",
      "Enable two-factor authentication on cloud accounts",
      "Check cloud provider security certifications (SOC 2)",
      "Backup important data locally - don't rely only on cloud",
      "Review connected apps and integrations monthly",
      "Use strong, unique passwords for cloud accounts",
      "Disconnect unused cloud integrations",
    ],
  },
  {
    category: "workFromHome",
    tips: [
      "Change router default admin password and SSID name",
      "Use VPN for all remote work connections",
      "Enable firewall on work computer",
      "Use separate device for work if possible",
      "Enable full-disk encryption on work devices",
      "Use privacy screen in shared spaces",
      "Cover webcam when not in use",
      "Don't store sensitive work files locally",
    ],
  },
  {
    category: "childrenOnlineSafety",
    tips: [
      "Enable parental controls on children's devices",
      "Restrict app downloads and in-app purchases",
      "Limit screen time with device controls",
      "Monitor online activity without being invasive",
      "Teach children about online predators and scams",
      "Create guest WiFi network for their devices",
      "Use kid-safe browsers and search engines",
      "Establish rules about sharing personal information online",
    ],
  },
  {
    category: "digitalPaymentSecurity",
    tips: [
      "Never scan QR codes from unknown sources",
      "Create QR to receive payment, never to send",
      "Check UPI recipient details before confirming payment",
      "Enable transaction limits on digital wallets",
      "Disable auto-pay for unverified merchants",
      "Keep UPI PIN secure - never share with anyone",
      "Verify merchant apps from official app stores",
      "Monitor payment app activity regularly for fraud",
    ],
  },
];

// ============================================================================
// ADVANCED TOPICS
// ============================================================================
const advancedTopics = [
  {
    id: "encryption",
    title: "encryption",
    sections: [
      {
        heading: "Symmetric Encryption",
        content: "Single key encrypts and decrypts (AES-256 is current standard). Fast but requires secure key distribution.",
      },
      {
        heading: "Asymmetric Encryption",
        content: "Two keys: public (encrypt) and private (decrypt). Solves key distribution but slower than symmetric.",
      },
      {
        heading: "Hashing Functions",
        content: "One-way conversion to fixed-length string (SHA-256, SHA-512). Cannot be reversed; used for passwords.",
      },
      {
        heading: "End-to-End Encryption",
        content: "Messages encrypted on sender's device, decrypted only by recipient. Service providers cannot read content.",
      },
    ],
  },
  {
    id: "networkSecurity",
    title: "networkSecurity",
    sections: [
      {
        heading: "Firewalls",
        content: "Filter network traffic based on rules. Stateful firewalls track connection states; NGFWs use deep packet inspection.",
      },
      {
        heading: "IDS/IPS",
        content: "IDS detects attacks and alerts; IPS actively blocks threats. Can use signature-based or anomaly-based detection.",
      },
      {
        heading: "Network Segmentation",
        content: "Divide network into zones with different security levels. Limits lateral movement if one segment compromised.",
      },
      {
        heading: "Zero Trust Architecture",
        content: "Never trust, always verify. Every access request authenticated/authorized. Continuous monitoring of user behavior.",
      },
    ],
  },
  {
    id: "authentication",
    title: "authentication",
    sections: [
      {
        heading: "2FA (Two-Factor Authentication)",
        content: "Combines two factors: something you know (password), have (phone), or are (biometric). Much stronger than single password.",
      },
      {
        heading: "Biometric Authentication",
        content: "Fingerprint (99.99% accurate), facial recognition, iris scan. Difficult to forge but privacy concerns exist.",
      },
      {
        heading: "Multi-Factor Authentication (MFA)",
        content: "Three or more factors exponentially increase security. Industry standard for high-value accounts.",
      },
      {
        heading: "Passwordless Authentication",
        content: "Hardware keys, Windows Hello, mobile app notifications. Future of authentication without password vulnerability.",
      },
    ],
  },
  {
    id: "incidentResponse",
    title: "incidentResponse",
    sections: [
      {
        heading: "Phase 1: Detection",
        content: "Identify compromise - unusual account activity, security alerts, system performance degradation.",
      },
      {
        heading: "Phase 2: Containment",
        content: "Disconnect affected device, change passwords from clean device, notify relevant institutions.",
      },
      {
        heading: "Phase 3: Eradication",
        content: "Remove malware, close unauthorized access, patch vulnerabilities that allowed compromise.",
      },
      {
        heading: "Phase 4: Recovery",
        content: "Monitor for re-infection, restore from clean backups, implement preventive measures.",
      },
    ],
  },
];

// ============================================================================
// QUIZ QUESTIONS
// ============================================================================
const quizQuestions = [
  {
    question: "What should you do if you receive a suspicious email asking to verify your bank account?",
    options: [
      "Click the link and verify immediately",
      "Never click links in emails; call your bank on official number",
      "Forward to your friends to check",
      "Reply asking for more information",
    ],
    correct: 1,
    explanation: "Never click links in unexpected emails. Always verify through official channels by calling the organization directly.",
  },
  {
    question: "Which password is most secure?",
    options: [
      "Password123",
      "MyDog_2024",
      "CorrectHorseBatteryStaple!",
      "Admin123456",
    ],
    correct: 2,
    explanation: "Passphrases with random words are more secure than complex passwords. Longer passwords are exponentially harder to crack.",
  },
  {
    question: "What is SIM Swap fraud?",
    options: [
      "Switching your phone to a different network",
      "Attackers convincing telecom to transfer your number to their SIM card",
      "Changing your phone model",
      "Losing your SIM card",
    ],
    correct: 1,
    explanation: "SIM Swap is when attackers convince telecom companies to transfer your phone number to their SIM, gaining OTP/account access.",
  },
  {
    question: "What is the most important step for IoT device security?",
    options: [
      "Never using IoT devices",
      "Changing default passwords immediately",
      "Keeping device near router",
      "Only using WiFi, not cellular",
    ],
    correct: 1,
    explanation: "Default passwords are well-known; changing them immediately is critical. Default credentials are primary IoT vulnerability.",
  },
  {
    question: "How should you handle a phishing email?",
    options: [
      "Forward it to others to verify",
      "Reply to the sender asking to stop",
      "Use the 'Report Phishing' button; don't forward",
      "Delete without any action",
    ],
    correct: 2,
    explanation: "Use 'Report Phishing' button to notify the email provider. Never forward phishing emails as they may deceive recipients.",
  },
  {
    question: "What does HTTPS padlock indicate?",
    options: [
      "The website is completely safe",
      "Your connection is encrypted and certificate verified",
      "Website has been visited before",
      "Website owner is verified",
    ],
    correct: 1,
    explanation: "HTTPS with padlock means connection is encrypted. However, always verify certificate details match the organization.",
  },
  {
    question: "Which is most dangerous regarding cryptocurrency payments?",
    options: [
      "Using exchange platforms",
      "Irreversible transactions - cannot be reversed once sent",
      "High market volatility",
      "Account creation process",
    ],
    correct: 1,
    explanation: "Cryptocurrency transactions are irreversible. Once sent to wrong address, funds are permanently lost.",
  },
  {
    question: "What is credential stuffing?",
    options: [
      "Forgetting multiple passwords",
      "Automated attacks using stolen credentials from other breaches",
      "Creating strong passwords",
      "Resetting password too often",
    ],
    correct: 1,
    explanation: "Credential stuffing uses stolen usernames/passwords (from 2.3B+ compromised credentials) to attempt unauthorized access.",
  },
];

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================
const Button = ({ onClick, children, variant = "primary", className = "", disabled = false }) => {
  const variantStyles = {
    primary: `${THEME.colors.secondary} text-white hover:bg-indigo-700`,
    secondary: `${THEME.colors.accent} text-white hover:bg-amber-600`,
    neutral: `${THEME.colors.neutral} text-gray-800 hover:bg-gray-300`,
    success: `${THEME.colors.success} text-white hover:bg-emerald-600`,
    danger: `${THEME.colors.danger} text-white hover:bg-red-600`,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg font-semibold ${THEME.transitions} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 ${THEME.transitions} hover:shadow-xl ${className}`}>
    {children}
  </div>
);

// ============================================================================
// MAIN APP
// ============================================================================
export default function CyberSurakshaApp() {
  const { t, language, changeLanguage } = useTranslation();
  const [currentView, setCurrentView] = useState(VIEWS.HOME);
  const [expandedThreat, setExpandedThreat] = useState(null);
  const [selectedTipCategory, setSelectedTipCategory] = useState("passwordSecurity");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({});
  const [threatFilter, setThreatFilter] = useState("basic");
  const [selectedAdvancedTopic, setSelectedAdvancedTopic] = useState("encryption");

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleQuizAnswer = (optionIndex) => {
    if (selected[currentQuestion] !== undefined) return;
    const isCorrect = optionIndex === quizQuestions[currentQuestion].correct;
    setSelected({ ...selected, [currentQuestion]: optionIndex });
    if (isCorrect) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRetakeQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelected({});
  };

  // ==================== VIEWS ====================

  const HomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-sky-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-4">{t("heroTitle")}</h1>
        <p className="text-2xl mb-8 opacity-90">{t("heroSubtitle")}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: "🎯", label: "readThreats", action: () => navigateTo(VIEWS.THREATS) },
            { icon: "📚", label: "learnTips", action: () => navigateTo(VIEWS.TIPS) },
            { icon: "🧠", label: "takeQuiz", action: () => { setCurrentView(VIEWS.QUIZ); setQuizStarted(false); } },
            { icon: "📢", label: "reportIncident", action: () => navigateTo(VIEWS.REPORT) },
          ].map((action, idx) => (
            <Card key={idx} className="text-center cursor-pointer hover:scale-105 bg-white bg-opacity-10" onClick={action.action}>
              <div className="text-4xl mb-4">{action.icon}</div>
              <p className="text-lg font-semibold">{t(action.label)}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-red-600 bg-opacity-20 rounded-lg p-8 border-2 border-red-400">
          <h2 className="text-2xl font-bold mb-6">{t("emergencyContacts")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">{t("cybercrimeHelpline")}</h3>
              <p className="text-xl font-mono">1930</p>
              <p className="text-sm mt-2">{t("helpline1930")}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{t("onlinePortal")}</h3>
              <p className="text-sm">cybercrime.gov.in</p>
              <p className="text-sm mt-2">{t("portalDesc")}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{t("rbiPhishing")}</h3>
              <p className="text-sm">phishing@rbi.org.in</p>
              <p className="text-sm mt-2">{t("rbiDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ThreatsView = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t("threatsTitle")}</h1>

        <div className="flex gap-4 mb-8">
          <Button variant={threatFilter === "basic" ? "primary" : "neutral"} onClick={() => setThreatFilter("basic")}>
            {t("basicThreats")}
          </Button>
          <Button variant={threatFilter === "advanced" ? "primary" : "neutral"} onClick={() => setThreatFilter("advanced")}>
            {t("advancedThreatsLabel")}
          </Button>
        </div>

        <div className="grid gap-6">
          {threatsData
            .filter((threat) => threat.category === threatFilter)
            .map((threat) => (
              <Card key={threat.id} className="cursor-pointer" onClick={() => setExpandedThreat(expandedThreat === threat.id ? null : threat.id)}>
                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{t(threat.title)}</h3>
                <p className="text-gray-700 mb-4">{t(threat.desc)}</p>

                {expandedThreat === threat.id && (
                  <div className="mt-6 border-t pt-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-2">📌 {t("realExample")}:</h4>
                      <p className="bg-blue-50 p-4 rounded text-gray-700">{t(threat.example)}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2">⚠️ {t("warning")}:</h4>
                      <p className="bg-red-50 p-4 rounded text-red-700">{t(threat.warning)}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
        </div>
      </div>
    </div>
  );

  const TipsView = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t("tipsTitle")}</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {tipsData.map((tipGroup) => (
            <Button key={tipGroup.category} variant={selectedTipCategory === tipGroup.category ? "primary" : "neutral"} onClick={() => setSelectedTipCategory(tipGroup.category)}>
              {t(tipGroup.category)}
            </Button>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-indigo-50 to-blue-50">
          {tipsData
            .filter((tipGroup) => tipGroup.category === selectedTipCategory)
            .map((tipGroup) => (
              <div key={tipGroup.category}>
                <h2 className="text-3xl font-bold text-indigo-600 mb-6">{t(selectedTipCategory)}</h2>
                <ul className="space-y-4">
                  {tipGroup.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-2xl">✓</span>
                      <p className="text-gray-700 text-lg">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </Card>
      </div>
    </div>
  );

  const QuizView = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {!quizStarted ? (
          <Card className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-indigo-600">{t("quizTitle")}</h1>
            <p className="text-xl text-gray-600 mb-8">{t("quizDesc")}</p>
            <Button onClick={() => setQuizStarted(true)} variant="success">
              {t("takeQuiz")}
            </Button>
          </Card>
        ) : score === quizQuestions.length ? (
          <Card className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-emerald-600">{t("quizComplete")}</h1>
            <div className="text-6xl font-bold text-emerald-500 mb-4">{score}/{quizQuestions.length}</div>
            <p className="text-2xl font-bold mb-8">{t("yourScore")}: {Math.round((score / quizQuestions.length) * 100)}%</p>
            <Button onClick={handleRetakeQuiz} variant="primary">
              {t("retakeQuiz")}
            </Button>
          </Card>
        ) : (
          <Card>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-gray-600">
                  {t("question")} {currentQuestion + 1}/{quizQuestions.length}
                </span>
                <div className="w-64 bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{quizQuestions[currentQuestion].question}</h2>

              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(idx)}
                    disabled={selected[currentQuestion] !== undefined}
                    className={`w-full p-4 text-left rounded-lg font-semibold transition-all ${
                      selected[currentQuestion] === undefined
                        ? "bg-gray-100 hover:bg-indigo-100 cursor-pointer"
                        : selected[currentQuestion] === idx
                        ? idx === quizQuestions[currentQuestion].correct
                          ? "bg-emerald-500 text-white"
                          : "bg-red-500 text-white"
                        : idx === quizQuestions[currentQuestion].correct
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {selected[currentQuestion] !== undefined && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="font-bold mb-2">💡 {t("explanation")}:</p>
                  <p className="text-gray-700">{quizQuestions[currentQuestion].explanation}</p>
                </div>
              )}

              {selected[currentQuestion] !== undefined && (
                <Button onClick={handleNextQuestion} variant="primary" className="w-full mt-6">
                  {currentQuestion === quizQuestions.length - 1 ? t("finish") : t("nextQuestion")}
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );

  const ReportView = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t("reportTitle")}</h1>

        <Card>
          <form className="space-y-6">
            <div>
              <label className="block font-bold mb-2">{t("incidentType")}</label>
              <select className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600">
                <option>{t("phishingEmail")}</option>
                <option>{t("onlineFraud")}</option>
                <option>{t("identityTheft")}</option>
                <option>{t("accountHacking")}</option>
                <option>{t("ransomwareAttack")}</option>
                <option>{t("investmentFraud")}</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold mb-2">{t("email")}</label>
                <input type="email" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block font-bold mb-2">{t("phone")}</label>
                <input type="tel" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600" placeholder="+91" />
              </div>
            </div>

            <div>
              <label className="block font-bold mb-2">{t("selectState")}</label>
              <select className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600">
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Telangana</option>
              </select>
            </div>

            <div>
              <label className="block font-bold mb-2">{t("severity")}</label>
              <div className="flex gap-4">
                {["low", "medium", "high", "critical"].map((level) => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="severity" className="w-4 h-4" />
                    <span className="capitalize">{t(level)}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold mb-2">{t("description")}</label>
              <textarea className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 h-32 resize-none" placeholder="Describe the incident..." />
            </div>

            <Button variant="primary" className="w-full">
              {t("submitReport")}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );

  const AdvancedView = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t("advancedTopics")}</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {advancedTopics.map((topic) => (
            <Button key={topic.id} variant={selectedAdvancedTopic === topic.id ? "primary" : "neutral"} onClick={() => setSelectedAdvancedTopic(topic.id)}>
              {t(topic.title)}
            </Button>
          ))}
        </div>

        <Card>
          {advancedTopics
            .filter((topic) => topic.id === selectedAdvancedTopic)
            .map((topic) => (
              <div key={topic.id}>
                <h2 className="text-3xl font-bold text-indigo-600 mb-6">{t(topic.title)}</h2>
                <div className="space-y-6">
                  {topic.sections.map((section, idx) => (
                    <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{section.heading}</h3>
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </Card>
      </div>
    </div>
  );

  const StatsView = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t("statsTitle")}</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-br from-red-50 to-red-100">
            <h3 className="text-2xl font-bold text-red-600 mb-2">{t("lossesIn2024")}</h3>
            <p className="text-4xl font-bold text-red-700">₹25,000+ {t("crore")}</p>
          </Card>

          <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">{t("complaintsReceived")}</h3>
            <p className="text-4xl font-bold text-orange-700">6,29,000+</p>
          </Card>

          <Card className="text-center bg-gradient-to-br from-amber-50 to-amber-100">
            <h3 className="text-2xl font-bold text-amber-600 mb-2">{t("amountFrozen")}</h3>
            <p className="text-4xl font-bold text-amber-700">₹8,500+</p>
          </Card>

          <Card className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100">
            <h3 className="text-2xl font-bold text-emerald-600 mb-2">{t("amountRecovered")}</h3>
            <p className="text-4xl font-bold text-emerald-700">₹2,800+</p>
          </Card>
        </div>
      </div>
    </div>
  );

  const ResourcesView = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t("resourcesTitle")}</h1>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">{t("helplineServices")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-2xl font-bold mb-4">🚨 {t("cybercrimeHelpline")}</h3>
              <p className="text-lg font-mono mb-2">1930</p>
              <p className="text-gray-700">24/7 {t("helpline1930")}</p>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold mb-4">📱 {t("onlinePortal")}</h3>
              <p className="text-lg font-mono mb-2">cybercrime.gov.in</p>
              <p className="text-gray-700">File complaints and track status</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );

  // ==================== RENDER ====================

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-2xl font-bold text-indigo-600">{t("title")}</h1>

          <div className="flex items-center gap-3 flex-wrap">
            {[
              { icon: "🏠", label: "home", view: VIEWS.HOME },
              { icon: "⚠️", label: "threats", view: VIEWS.THREATS },
              { icon: "📚", label: "tips", view: VIEWS.TIPS },
              { icon: "🧠", label: "quiz", view: VIEWS.QUIZ },
              { icon: "🎓", label: "advancedTopics", view: VIEWS.ADVANCED },
              { icon: "📊", label: "stats", view: VIEWS.STATS },
              { icon: "🔗", label: "resources", view: VIEWS.RESOURCES },
            ].map((nav) => (
              <button
                key={nav.view}
                onClick={() => navigateTo(nav.view)}
                className={`px-3 py-2 rounded-lg font-semibold ${THEME.transitions} ${
                  currentView === nav.view
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-indigo-100"
                }`}
                title={t(nav.label)}
              >
                {nav.icon}
              </button>
            ))}

            <Button variant={language === "en" ? "primary" : "neutral"} onClick={() => changeLanguage("en")} className="px-3 py-2">
              EN
            </Button>
            <Button variant={language === "ta" ? "primary" : "neutral"} onClick={() => changeLanguage("ta")} className="px-3 py-2">
              TA
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentView === VIEWS.HOME && <HomeView />}
        {currentView === VIEWS.THREATS && <ThreatsView />}
        {currentView === VIEWS.TIPS && <TipsView />}
        {currentView === VIEWS.QUIZ && <QuizView />}
        {currentView === VIEWS.REPORT && <ReportView />}
        {currentView === VIEWS.ADVANCED && <AdvancedView />}
        {currentView === VIEWS.STATS && <StatsView />}
        {currentView === VIEWS.RESOURCES && <ResourcesView />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">CyberSuraksha - {t("footer")}</p>
          <p className="text-sm text-gray-400">{t("footerSubtitle")}</p>
        </div>
      </footer>
    </div>
  );
}
