"use client";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Responsive Design",
    "SEO Optimization",
    "UI/UX Design",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

   const handleTwitter = () => {
    window.open('https://x.com/bnusmann22', '_blank');
  };

  const handleGithub = () => {
    window.open('https://github.com/bnusmann22', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/abdullahi-jamil-26b940275/', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/9160152870', '_blank');
  };
  return (
    <footer className="bg-background backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Just Jamil
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Sofware Engineer passionate about creating impactful digital solutions that address real-world problems.
            </p>
            <div className="flex space-x-4">
              <button onClick={handleWhatsApp} className="text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-110 active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                  />
                </svg>
              </button>
              <button onClick={handleLinkedIn} className="text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-110 active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
                  />
                </svg>
              </button>
              <button onClick={handleTwitter} className="text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-110 active:scale-95">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" fill="none">
                    <path fill="#1D9BF0" d="M13.567 5.144c.008.123.008.247.008.371 0 3.796-2.889 8.173-8.172 8.173v-.002A8.131 8.131 0 011 12.398a5.768 5.768 0 004.25-1.19 2.876 2.876 0 01-2.683-1.995c.431.083.875.066 1.297-.05A2.873 2.873 0 011.56 6.348v-.036c.4.222.847.345 1.304.36a2.876 2.876 0 01-.89-3.836 8.152 8.152 0 005.92 3 2.874 2.874 0 014.895-2.619 5.763 5.763 0 001.824-.697 2.883 2.883 0 01-1.262 1.588A5.712 5.712 0 0015 3.656a5.834 5.834 0 01-1.433 1.488z"/>
                  </svg>
              </button>
              <button onClick={handleGithub} className="text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-110 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                  <path fill="#3E75C3" d="M23.9985,0 C10.746,0 0,10.787092 0,24.096644 C0,34.740671 6.876,43.77183 16.4145,46.958412 C17.6145,47.179786 18.0525,46.435849 18.0525,45.797328 C18.0525,45.225068 18.0315,43.710086 18.0195,41.699648 C11.343,43.155898 9.9345,38.469394 9.9345,38.469394 C8.844,35.686405 7.2705,34.94548 7.2705,34.94548 C5.091,33.450075 7.4355,33.480194 7.4355,33.480194 C9.843,33.650366 11.1105,35.963499 11.1105,35.963499 C13.2525,39.645538 16.728,38.58234 18.096,37.964902 C18.3135,36.407754 18.9345,35.346062 19.62,34.743683 C14.2905,34.135281 8.688,32.069123 8.688,22.836167 C8.688,20.205279 9.6225,18.054788 11.1585,16.369634 C10.911,15.759726 10.0875,13.311058 11.3925,9.993458 C11.3925,9.993458 13.4085,9.345902 17.9925,12.46321 C19.908,11.928599 21.96,11.662047 24.0015,11.651505 C26.04,11.662047 28.0935,11.928599 30.0105,12.46321 C34.5915,9.345902 36.603,9.993458 36.603,9.993458 C37.9125,13.311058 37.089,15.759726 36.8415,16.369634 C38.3805,18.054788 39.309,20.205279 39.309,22.836167 C39.309,32.091712 33.6975,34.129257 28.3515,34.725612 C29.2125,35.469549 29.9805,36.939353 29.9805,39.18773 C29.9805,42.408949 29.9505,45.006706 29.9505,45.797328 C29.9505,46.441873 30.3825,47.191834 31.6005,46.9554 C41.13,43.762794 48,34.737659 48,24.096644 C48,10.787092 37.254,0 23.9985,0"/>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">📧 bn.usmannn22@gmail.com</div>
              <div className="text-muted-foreground">📱 +234 916 015 2870</div>
              <div className="text-muted-foreground">🌍 Abuja - Kano, Nigeria</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} `Just Jameel`. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => window.location.href = '/privacy'} className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => window.location.href = '/terms'} className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <div className="text-muted-foreground">Built with ❤️</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
