import { PageLayout } from "./layouts/PageLayout";
import { User, Buttons, Projects } from "./components/features";

export default function App() {
  return (
    <PageLayout>
        <User />
        <Buttons />
        <Projects />
    </PageLayout>
  );
};