import { HomeHere } from "./components/HomeHere.widget";
import { AboutHere } from "./components/AboutHere.widget";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-10">
      <HomeHere />
      <AboutHere />
    </div>
  );
}
