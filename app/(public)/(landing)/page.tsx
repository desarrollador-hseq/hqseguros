import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";
import { Service1 } from "./_components/services/service-1";
import { Service2 } from "./_components/services/service-2";
import { Service3 } from "./_components/services/service-3";
import { Service4 } from "./_components/services/service-4";
import { Service5 } from "./_components/services/service-5";
import { Service6 } from "./_components/services/service-6";
import { Benefits } from "./_components/services/benefits";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "./_components/contact-form";

const Home = async () => {
  return (
    <div className="grid ">
      <Header />
      <Hero />
      <Separator />
      <div className="px-2" id="services-section">
        <Service1 />
        <Separator />
        <Service2 />
        <Separator />
        <Service3 />
        <Separator />
        <Service4 />
        <Separator />
        <Service5 />
        <Separator />
        <Service6 />
        <Separator />

        <Benefits />
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
