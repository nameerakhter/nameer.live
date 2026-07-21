import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Root,
  errorComponent: RootError,
})

function Root() {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  )
}

function RootError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-xl font-medium">Something went wrong</h1>
      <p className="max-w-md text-sm opacity-70">{error.message}</p>
      <button
        type="button"
        className="rounded border px-4 py-2 text-sm"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  )
}
