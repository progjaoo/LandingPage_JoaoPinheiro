import RadioLogo from "@/components/RadioLogo";
import AudioPlayer from "@/components/AudioPlayer";
import SocialLinks from "@/components/SocialLinks";
import bgDesktop from "@/assets/bg-desktop.png";
import bgMobile from "@/assets/bg-mobile.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Orange Background */}
      <section 
        className="relative bg-primary py-12 md:py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${bgDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Mobile background */}
        <div 
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${bgMobile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 container mx-auto max-w-5xl">
          {/* Logo */}
          <div className="mb-8 md:mb-12 animate-fade-in">
            <RadioLogo />
          </div>

          {/* Main Tagline */}
          <h1 className="text-hero text-white text-center mb-8 md:mb-10 animate-fade-in px-4">
            A rádio de todas
            <br />
            as igrejas que toca
            <br />
            o som do céu!
          </h1>

          {/* Social Links */}
          <div className="mb-8 md:mb-12 animate-fade-in">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Audio Player Section - Overlapping */}
      <section className="relative -mt-8 md:-mt-10 px-4 z-20 animate-scale-in">
        <AudioPlayer />
      </section>

      {/* About Section */}
      <section className="bg-background py-12 md:py-16 px-4 flex-1">
        <div className="container mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            A Rádio 89.1 Maravilha FM é a sua companhia diária, levando até você muito mais do que música: transmitimos fé, esperança e a Palavra de Deus, sempre com uma programação de excelência feita para abençoar e transformar vidas.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed">
            Somos uma emissora cristã com a missão de compartilhar o Evangelho da Paz e estar ao seu lado em todos os momentos, trazendo mensagens de amor, inspiração e alegria.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed">
            Em Belo Horizonte, sintonize 89.1 FM e viva a experiência de ter a Maravilha FM como parte da sua rotina. Porque aqui, cada canção e cada palavra são preparadas especialmente para você!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
            {/* Logo */}
            <div className="scale-75 md:scale-90">
              <RadioLogo />
            </div>

            {/* Contact Info */}
            <div className="text-white text-center md:text-right space-y-2">
              <p className="text-sm md:text-base font-medium">
                Rua Fernandes Tourinho, 487 - Savassi Belo Horizonte/MG | Cep 30.112-000
              </p>
              <p className="text-sm md:text-base">
                Whatsapp:{" "}
                <a 
                  href="https://wa.me/5531999982089" 
                  className="font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (31) 99998-2089
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
