export interface Topic {
  id: string;
  name: string;
  nameHi: string;
  completed: boolean;
}

export interface Subject {
  id: string;
  name: string;
  nameHi: string;
  icon: string;
  topics: Topic[];
}

export interface Exam {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  icon: string;
  color: string;
  subjects: Subject[];
}

export const allExams: Exam[] = [
  {
    id: "ssc-cgl",
    name: "SSC CGL",
    nameHi: "SSC CGL",
    description: "Combined Graduate Level Examination",
    descriptionHi: "संयुक्त स्नातक स्तरीय परीक्षा",
    icon: "🏛️",
    color: "217 91% 60%",
    subjects: [
      {
        id: "quant", name: "Quantitative Aptitude", nameHi: "गणित", icon: "📐",
        topics: [
          { id: "q1", name: "Number System", nameHi: "संख्या पद्धति", completed: false },
          { id: "q2", name: "Simplification", nameHi: "सरलीकरण", completed: false },
          { id: "q3", name: "Percentage", nameHi: "प्रतिशत", completed: false },
          { id: "q4", name: "Ratio & Proportion", nameHi: "अनुपात एवं समानुपात", completed: false },
          { id: "q5", name: "Average", nameHi: "औसत", completed: false },
          { id: "q6", name: "Profit and Loss", nameHi: "लाभ और हानि", completed: false },
          { id: "q7", name: "Time and Work", nameHi: "समय और कार्य", completed: false },
          { id: "q8", name: "Time Speed Distance", nameHi: "समय चाल दूरी", completed: false },
          { id: "q9", name: "Mixture & Alligation", nameHi: "मिश्रण एवं एलिगेशन", completed: false },
          { id: "q10", name: "Simple Interest", nameHi: "साधारण ब्याज", completed: false },
          { id: "q11", name: "Compound Interest", nameHi: "चक्रवृद्धि ब्याज", completed: false },
          { id: "q12", name: "Algebra", nameHi: "बीजगणित", completed: false },
          { id: "q13", name: "Geometry", nameHi: "ज्यामिति", completed: false },
          { id: "q14", name: "Trigonometry", nameHi: "त्रिकोणमिति", completed: false },
          { id: "q15", name: "Mensuration", nameHi: "क्षेत्रमिति", completed: false },
          { id: "q16", name: "Data Interpretation", nameHi: "आंकड़ों की व्याख्या", completed: false },
        ],
      },
      {
        id: "reasoning", name: "Reasoning", nameHi: "तर्कशक्ति", icon: "🧠",
        topics: [
          { id: "r1", name: "Analogy", nameHi: "सादृश्यता", completed: false },
          { id: "r2", name: "Classification", nameHi: "वर्गीकरण", completed: false },
          { id: "r3", name: "Coding Decoding", nameHi: "कोडिंग डिकोडिंग", completed: false },
          { id: "r4", name: "Blood Relation", nameHi: "रक्त संबंध", completed: false },
          { id: "r5", name: "Direction", nameHi: "दिशा", completed: false },
          { id: "r6", name: "Series", nameHi: "श्रृंखला", completed: false },
          { id: "r7", name: "Venn Diagram", nameHi: "वेन आरेख", completed: false },
          { id: "r8", name: "Puzzle", nameHi: "पहेली", completed: false },
          { id: "r9", name: "Syllogism", nameHi: "न्याय निगमन", completed: false },
          { id: "r10", name: "Clock", nameHi: "घड़ी", completed: false },
          { id: "r11", name: "Calendar", nameHi: "कैलेंडर", completed: false },
          { id: "r12", name: "Missing Number", nameHi: "लुप्त संख्या", completed: false },
        ],
      },
      {
        id: "english", name: "English", nameHi: "अंग्रेजी", icon: "📝",
        topics: [
          { id: "e1", name: "Reading Comprehension", nameHi: "पठन बोध", completed: false },
          { id: "e2", name: "Cloze Test", nameHi: "क्लोज टेस्ट", completed: false },
          { id: "e3", name: "Error Detection", nameHi: "त्रुटि पहचान", completed: false },
          { id: "e4", name: "Sentence Improvement", nameHi: "वाक्य सुधार", completed: false },
          { id: "e5", name: "Fill in the Blanks", nameHi: "रिक्त स्थान भरें", completed: false },
          { id: "e6", name: "Synonyms", nameHi: "पर्यायवाची", completed: false },
          { id: "e7", name: "Antonyms", nameHi: "विलोम शब्द", completed: false },
          { id: "e8", name: "Idioms & Phrases", nameHi: "मुहावरे और लोकोक्तियाँ", completed: false },
          { id: "e9", name: "One Word Substitution", nameHi: "एक शब्द प्रतिस्थापन", completed: false },
          { id: "e10", name: "Active Passive", nameHi: "कर्तृ कर्म वाच्य", completed: false },
          { id: "e11", name: "Direct Indirect Speech", nameHi: "प्रत्यक्ष अप्रत्यक्ष कथन", completed: false },
        ],
      },
      {
        id: "ga", name: "General Awareness", nameHi: "सामान्य जागरूकता", icon: "🌍",
        topics: [
          { id: "g1", name: "History", nameHi: "इतिहास", completed: false },
          { id: "g2", name: "Geography", nameHi: "भूगोल", completed: false },
          { id: "g3", name: "Polity", nameHi: "राजव्यवस्था", completed: false },
          { id: "g4", name: "Economy", nameHi: "अर्थव्यवस्था", completed: false },
          { id: "g5", name: "Physics", nameHi: "भौतिक विज्ञान", completed: false },
          { id: "g6", name: "Chemistry", nameHi: "रसायन विज्ञान", completed: false },
          { id: "g7", name: "Biology", nameHi: "जीव विज्ञान", completed: false },
          { id: "g8", name: "Static GK", nameHi: "स्थैतिक सामान्य ज्ञान", completed: false },
          { id: "g9", name: "Current Affairs", nameHi: "करंट अफेयर्स", completed: false },
        ],
      },
    ],
  },
  {
    id: "ssc-chsl",
    name: "SSC CHSL",
    nameHi: "SSC CHSL",
    description: "Combined Higher Secondary Level",
    descriptionHi: "संयुक्त उच्चतर माध्यमिक स्तर",
    icon: "📋",
    color: "142 71% 45%",
    subjects: [
      {
        id: "quant", name: "Quantitative Aptitude", nameHi: "गणित", icon: "📐",
        topics: [
          { id: "cq1", name: "Number System", nameHi: "संख्या पद्धति", completed: false },
          { id: "cq2", name: "Percentage", nameHi: "प्रतिशत", completed: false },
          { id: "cq3", name: "Ratio & Proportion", nameHi: "अनुपात एवं समानुपात", completed: false },
          { id: "cq4", name: "Average", nameHi: "औसत", completed: false },
          { id: "cq5", name: "Profit and Loss", nameHi: "लाभ और हानि", completed: false },
          { id: "cq6", name: "Time and Work", nameHi: "समय और कार्य", completed: false },
          { id: "cq7", name: "Time Speed Distance", nameHi: "समय चाल दूरी", completed: false },
          { id: "cq8", name: "Simple & Compound Interest", nameHi: "साधारण एवं चक्रवृद्धि ब्याज", completed: false },
          { id: "cq9", name: "Geometry", nameHi: "ज्यामिति", completed: false },
          { id: "cq10", name: "Trigonometry", nameHi: "त्रिकोणमिति", completed: false },
          { id: "cq11", name: "Mensuration", nameHi: "क्षेत्रमिति", completed: false },
          { id: "cq12", name: "Data Interpretation", nameHi: "आंकड़ों की व्याख्या", completed: false },
          { id: "cq13", name: "Algebra", nameHi: "बीजगणित", completed: false },
        ],
      },
      {
        id: "reasoning", name: "Reasoning", nameHi: "तर्कशक्ति", icon: "🧠",
        topics: [
          { id: "cr1", name: "Analogy", nameHi: "सादृश्यता", completed: false },
          { id: "cr2", name: "Classification", nameHi: "वर्गीकरण", completed: false },
          { id: "cr3", name: "Coding Decoding", nameHi: "कोडिंग डिकोडिंग", completed: false },
          { id: "cr4", name: "Series", nameHi: "श्रृंखला", completed: false },
          { id: "cr5", name: "Blood Relation", nameHi: "रक्त संबंध", completed: false },
          { id: "cr6", name: "Direction", nameHi: "दिशा", completed: false },
          { id: "cr7", name: "Venn Diagram", nameHi: "वेन आरेख", completed: false },
          { id: "cr8", name: "Puzzle", nameHi: "पहेली", completed: false },
          { id: "cr9", name: "Non-Verbal Reasoning", nameHi: "अशाब्दिक तर्क", completed: false },
          { id: "cr10", name: "Mirror & Water Image", nameHi: "दर्पण एवं जल प्रतिबिम्ब", completed: false },
        ],
      },
      {
        id: "english", name: "English", nameHi: "अंग्रेजी", icon: "📝",
        topics: [
          { id: "ce1", name: "Reading Comprehension", nameHi: "पठन बोध", completed: false },
          { id: "ce2", name: "Error Detection", nameHi: "त्रुटि पहचान", completed: false },
          { id: "ce3", name: "Sentence Improvement", nameHi: "वाक्य सुधार", completed: false },
          { id: "ce4", name: "Fill in the Blanks", nameHi: "रिक्त स्थान भरें", completed: false },
          { id: "ce5", name: "Synonyms & Antonyms", nameHi: "पर्यायवाची एवं विलोम", completed: false },
          { id: "ce6", name: "Idioms & Phrases", nameHi: "मुहावरे और लोकोक्तियाँ", completed: false },
          { id: "ce7", name: "One Word Substitution", nameHi: "एक शब्द प्रतिस्थापन", completed: false },
          { id: "ce8", name: "Active Passive", nameHi: "कर्तृ कर्म वाच्य", completed: false },
          { id: "ce9", name: "Direct Indirect", nameHi: "प्रत्यक्ष अप्रत्यक्ष", completed: false },
          { id: "ce10", name: "Spelling Correction", nameHi: "वर्तनी सुधार", completed: false },
        ],
      },
      {
        id: "ga", name: "General Awareness", nameHi: "सामान्य जागरूकता", icon: "🌍",
        topics: [
          { id: "cg1", name: "History", nameHi: "इतिहास", completed: false },
          { id: "cg2", name: "Geography", nameHi: "भूगोल", completed: false },
          { id: "cg3", name: "Polity", nameHi: "राजव्यवस्था", completed: false },
          { id: "cg4", name: "Economy", nameHi: "अर्थव्यवस्था", completed: false },
          { id: "cg5", name: "Science", nameHi: "विज्ञान", completed: false },
          { id: "cg6", name: "Static GK", nameHi: "स्थैतिक सामान्य ज्ञान", completed: false },
          { id: "cg7", name: "Current Affairs", nameHi: "करंट अफेयर्स", completed: false },
        ],
      },
    ],
  },
  {
    id: "ssc-mts",
    name: "SSC MTS",
    nameHi: "SSC MTS",
    description: "Multi Tasking Staff",
    descriptionHi: "मल्टी टास्किंग स्टाफ",
    icon: "📦",
    color: "38 92% 50%",
    subjects: [
      {
        id: "reasoning", name: "Reasoning", nameHi: "तर्कशक्ति", icon: "🧠",
        topics: [
          { id: "mr1", name: "Analogy", nameHi: "सादृश्यता", completed: false },
          { id: "mr2", name: "Classification", nameHi: "वर्गीकरण", completed: false },
          { id: "mr3", name: "Coding Decoding", nameHi: "कोडिंग डिकोडिंग", completed: false },
          { id: "mr4", name: "Series", nameHi: "श्रृंखला", completed: false },
          { id: "mr5", name: "Direction", nameHi: "दिशा", completed: false },
          { id: "mr6", name: "Blood Relation", nameHi: "रक्त संबंध", completed: false },
          { id: "mr7", name: "Venn Diagram", nameHi: "वेन आरेख", completed: false },
          { id: "mr8", name: "Non-Verbal", nameHi: "अशाब्दिक", completed: false },
          { id: "mr9", name: "Mirror Image", nameHi: "दर्पण प्रतिबिम्ब", completed: false },
        ],
      },
      {
        id: "numerical", name: "Numerical Aptitude", nameHi: "संख्यात्मक अभिरुचि", icon: "🔢",
        topics: [
          { id: "mn1", name: "Number System", nameHi: "संख्या पद्धति", completed: false },
          { id: "mn2", name: "HCF & LCM", nameHi: "म.स. एवं ल.स.", completed: false },
          { id: "mn3", name: "Percentage", nameHi: "प्रतिशत", completed: false },
          { id: "mn4", name: "Ratio & Proportion", nameHi: "अनुपात", completed: false },
          { id: "mn5", name: "Average", nameHi: "औसत", completed: false },
          { id: "mn6", name: "Profit and Loss", nameHi: "लाभ और हानि", completed: false },
          { id: "mn7", name: "Time and Work", nameHi: "समय और कार्य", completed: false },
          { id: "mn8", name: "Time Speed Distance", nameHi: "समय चाल दूरी", completed: false },
        ],
      },
      {
        id: "english", name: "English", nameHi: "अंग्रेजी", icon: "📝",
        topics: [
          { id: "me1", name: "Error Detection", nameHi: "त्रुटि पहचान", completed: false },
          { id: "me2", name: "Sentence Completion", nameHi: "वाक्य पूर्ति", completed: false },
          { id: "me3", name: "Synonyms & Antonyms", nameHi: "पर्यायवाची एवं विलोम", completed: false },
          { id: "me4", name: "Idioms & Phrases", nameHi: "मुहावरे", completed: false },
          { id: "me5", name: "Spelling Correction", nameHi: "वर्तनी सुधार", completed: false },
          { id: "me6", name: "Comprehension", nameHi: "गद्यांश", completed: false },
        ],
      },
      {
        id: "ga", name: "General Awareness", nameHi: "सामान्य जागरूकता", icon: "🌍",
        topics: [
          { id: "mg1", name: "History", nameHi: "इतिहास", completed: false },
          { id: "mg2", name: "Geography", nameHi: "भूगोल", completed: false },
          { id: "mg3", name: "Polity", nameHi: "राजव्यवस्था", completed: false },
          { id: "mg4", name: "Science", nameHi: "विज्ञान", completed: false },
          { id: "mg5", name: "Current Affairs", nameHi: "करंट अफेयर्स", completed: false },
        ],
      },
    ],
  },
  {
    id: "ssc-gd",
    name: "SSC GD",
    nameHi: "SSC GD",
    description: "General Duty Constable",
    descriptionHi: "जनरल ड्यूटी कांस्टेबल",
    icon: "🛡️",
    color: "0 84% 60%",
    subjects: [
      {
        id: "reasoning", name: "Reasoning", nameHi: "तर्कशक्ति", icon: "🧠",
        topics: [
          { id: "gr1", name: "Analogy", nameHi: "सादृश्यता", completed: false },
          { id: "gr2", name: "Classification", nameHi: "वर्गीकरण", completed: false },
          { id: "gr3", name: "Coding Decoding", nameHi: "कोडिंग डिकोडिंग", completed: false },
          { id: "gr4", name: "Series", nameHi: "श्रृंखला", completed: false },
          { id: "gr5", name: "Direction", nameHi: "दिशा", completed: false },
          { id: "gr6", name: "Blood Relation", nameHi: "रक्त संबंध", completed: false },
          { id: "gr7", name: "Venn Diagram", nameHi: "वेन आरेख", completed: false },
          { id: "gr8", name: "Non-Verbal", nameHi: "अशाब्दिक", completed: false },
        ],
      },
      {
        id: "math", name: "Elementary Mathematics", nameHi: "प्रारंभिक गणित", icon: "🔢",
        topics: [
          { id: "gm1", name: "Number System", nameHi: "संख्या पद्धति", completed: false },
          { id: "gm2", name: "Percentage", nameHi: "प्रतिशत", completed: false },
          { id: "gm3", name: "Ratio & Proportion", nameHi: "अनुपात", completed: false },
          { id: "gm4", name: "Average", nameHi: "औसत", completed: false },
          { id: "gm5", name: "Profit and Loss", nameHi: "लाभ और हानि", completed: false },
          { id: "gm6", name: "Time and Work", nameHi: "समय और कार्य", completed: false },
          { id: "gm7", name: "Time Speed Distance", nameHi: "समय चाल दूरी", completed: false },
          { id: "gm8", name: "SI & CI", nameHi: "साधारण एवं चक्रवृद्धि ब्याज", completed: false },
          { id: "gm9", name: "Geometry & Mensuration", nameHi: "ज्यामिति एवं क्षेत्रमिति", completed: false },
        ],
      },
      {
        id: "english-hindi", name: "English / Hindi", nameHi: "अंग्रेजी / हिंदी", icon: "📝",
        topics: [
          { id: "ge1", name: "Error Detection", nameHi: "त्रुटि पहचान", completed: false },
          { id: "ge2", name: "Fill in the Blanks", nameHi: "रिक्त स्थान", completed: false },
          { id: "ge3", name: "Synonyms & Antonyms", nameHi: "पर्यायवाची एवं विलोम", completed: false },
          { id: "ge4", name: "Idioms & Phrases", nameHi: "मुहावरे", completed: false },
          { id: "ge5", name: "Comprehension", nameHi: "गद्यांश", completed: false },
          { id: "ge6", name: "One Word Substitution", nameHi: "एक शब्द प्रतिस्थापन", completed: false },
        ],
      },
      {
        id: "ga", name: "General Awareness", nameHi: "सामान्य जागरूकता", icon: "🌍",
        topics: [
          { id: "gg1", name: "History", nameHi: "इतिहास", completed: false },
          { id: "gg2", name: "Geography", nameHi: "भूगोल", completed: false },
          { id: "gg3", name: "Polity", nameHi: "राजव्यवस्था", completed: false },
          { id: "gg4", name: "Economy", nameHi: "अर्थव्यवस्था", completed: false },
          { id: "gg5", name: "Science", nameHi: "विज्ञान", completed: false },
          { id: "gg6", name: "Current Affairs", nameHi: "करंट अफेयर्स", completed: false },
        ],
      },
    ],
  },
];
