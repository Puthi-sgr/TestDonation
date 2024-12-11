import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DonorProfiles from "@/components/DonorProfiles";
import BlogList from "@/components/BlogList";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <BlogList />
        <DonationSection />
        <DonorProfiles />
      </main>
    
      <Footer />
    </div>
  );
}
