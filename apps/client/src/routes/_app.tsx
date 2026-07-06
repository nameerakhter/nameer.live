import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import AppShell from '@/components/app-shell'
import { authClient } from '@/lib/auth'

export const Route = createFileRoute('/_app')({
  head: () => ({ meta: [{ title: 'Fullstack Starter' }] }),
  beforeLoad: async () => {
    const { data } = await authClient.getSession()
    if (!data?.user) {
      throw redirect({ to: '/login', replace: true })
    }
    return { user: data.user }
  },
  component: () => {
    return <AppLayout />
  },
})

function AppLayout() {
  const { user } = Route.useRouteContext()

  return (
    <AppShell user={user}>
      <Outlet />
    </AppShell>
  )
}
