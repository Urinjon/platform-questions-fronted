import { Container } from "@shared/widgets/Container.widget";
import { UIFrame } from "@shared/widgets/UIFrame.widget";
import { HomeHere } from "./components/HomeHere.widget";



export default function HomePage() {
  return (
   <Container>
    <HomeHere />
    <UIFrame />
   </Container>
  );
}
