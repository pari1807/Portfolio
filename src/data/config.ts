const config = {
  title: "Paritosh Pradhan | Full Stack Developer",
  description: {
    long: "Explore the portfolio of Paritosh Pradhan, a Full Stack Developer and AI & ML Enthusiast specializing in React, Node.js, and machine learning. Discover projects including Class Connect and Breast Cancer Prediction Model. Let's build something amazing together!",
    short:
      "Portfolio of Paritosh Pradhan — Full Stack Developer & AI/ML Enthusiast building modern web applications and intelligent systems.",
  },
  keywords: [
    "Paritosh Pradhan",
    "portfolio",
    "Full Stack Developer",
    "AI developer",
    "machine learning",
    "React",
    "Node.js",
    "Express",
    "TypeScript",
    "JavaScript",
    "Python",
    "MongoDB",
    "MySQL",
    "Docker",
    "LPU",
  ],
  author: "Paritosh Pradhan",
  email: "paritoshrahul6@gmail.com",
  site: "https://github.com/pari1807",

  githubUsername: "pari1807",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://github.com/pari1807",
    linkedin: "https://www.linkedin.com/in/paritosh-pradhan/",
    facebook: "https://github.com/pari1807",
    github: "https://github.com/pari1807",
  },
};
export { config };
