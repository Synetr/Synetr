import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Synetr</h1>
      <p className="text-muted-foreground text-center max-w-md">
        Smart Event Planning. Seamless Collaboration.
      </p>
      <div className="flex gap-4">
        <Button>Get started</Button>
        <Button variant="outline">Learn more</Button>
      </div>
    </div>
  )
}

export default App
