import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Signup"!</div>
}
