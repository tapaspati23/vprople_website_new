import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-2xl font-bold">Hello VProPle!</h1>
      <Button>get started</Button>
    </div>
  );
}
