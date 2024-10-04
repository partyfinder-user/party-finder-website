import Main from "@/components/Layouts/Main";
import BgGlassmorphism from "@/components/Helpers/BgGlassmorphism";

export default function Home() {
  return (
    <Main>
      <BgGlassmorphism />
      <div className="relative overflow-hidden">
        <div className="h-96">Index</div>
      </div>
    </Main>
  );
}
