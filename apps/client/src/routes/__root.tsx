import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'

import { ErrorMessage } from '@/components/ui/error-message'

export const Route = createRootRoute({
  component: () => <Root />,
  errorComponent: ({ error, reset }) => {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <ErrorMessage
          title="Failed to load application"
          error={error}
          onReset={reset}
          showBackHomeLink={false}
        />
      </div>
    )
  },
})

function Root() {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  )
}
