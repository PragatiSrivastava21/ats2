import { Layout } from "@/components/Layout";
import { Hero } from "@/sections/Hero";
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
