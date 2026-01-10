import { AboutHere } from "./components/AboutHere.widget";
import { HomeHero } from "./components/HomeHere.widget";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-10">
      <HomeHero />
      <AboutHere />
    </div>
  );
}
