import { Navigate, useParams } from "react-router-dom";
import { PROJ } from "../data/content";
import { ComingSoonDemo } from "./ComingSoonDemo";
import { RagDemoPage } from "./RagDemoPage";
import { ProposalDemoPage } from "./ProposalDemoPage";
import { DocsDemoPage } from "./DocsDemoPage";
import { LeadsDemoPage } from "./LeadsDemoPage";
import { WorldCupDemoPage } from "./WorldCupDemoPage";
import { LlmInfraDemoPage } from "./LlmInfraDemoPage";
import { AinsaDemoPage } from "./AinsaDemoPage";

const FULL_DEMOS: Record<string, () => React.JSX.Element> = {
  rag: RagDemoPage,
  proposals: ProposalDemoPage,
  docs: DocsDemoPage,
  leads: LeadsDemoPage,
  worldcup: WorldCupDemoPage,
  "llm-infra": LlmInfraDemoPage,
  ainsa: AinsaDemoPage,
};

export function DemoPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJ.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/" replace />;

  const Full = slug ? FULL_DEMOS[slug] : undefined;
  if (Full) return <Full />;
  return <ComingSoonDemo project={project} />;
}
