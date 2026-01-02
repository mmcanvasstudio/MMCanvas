/**
 * Loading component for the home page
 * Shows while page is loading
 */
export default function Loading(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
