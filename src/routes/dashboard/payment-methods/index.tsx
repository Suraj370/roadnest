import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/payment-methods/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/payment-methods/"!</div>
}
