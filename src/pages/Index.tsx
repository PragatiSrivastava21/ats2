import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
import { TowerSlider } from "@/sections/TowerSlider";
import { Services } from "@/sections/Services";
import { ProblemSolution } from "@/sections/ProblemSolution";
import { Process } from "@/sections/Process";
import { WorkPreview } from "@/sections/WorkPreview";
import { Trust } from "@/sections/Trust";
import { CtaBlock } from "@/sections/CtaBlock";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TowerSlider />
      <Services />
      <ProblemSolution />
      <Process />
      <WorkPreview />
      <Trust />
      <CtaBlock />
    </Layout>
  );
};

export default Index;
