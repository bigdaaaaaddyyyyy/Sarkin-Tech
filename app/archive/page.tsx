export const dynamic = 'force-dynamic';

export default function ArchivePage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 py-12 text-center">
      <div className="max-w-3xl rounded-3xl border border-border/50 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-primary mb-4">My Projects</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          This is a placeholder projects page. Add your completed work here to showcase what
          you’ve built.
        </p>
      </div>
    </section>
  );
}
