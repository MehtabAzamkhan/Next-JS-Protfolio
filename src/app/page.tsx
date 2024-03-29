import Animat from "./components/Animat";
import CourseSection from "./components/CourseSection";
import HeroSection from "./components/HeroSection";
import Moving from "./components/Moving";
import Webinar from "./components/Webinar";
import Why from "./components/Why";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.88] antialiased bg-grid-white/[0.03]">
      <HeroSection />
      <CourseSection />
      <Why />
      <Moving />
      <Webinar />
      <Animat />
    </main>
  );
}
