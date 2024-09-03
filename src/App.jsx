import { PageLayout } from "./layouts/PageLayout";
import { User, Links, Buttons, Projects } from "./components/features";

export default function App() {
  return (
    <PageLayout>
        <User />
        <Links />
        <Buttons />
        <Projects />
    </PageLayout>
  );
};