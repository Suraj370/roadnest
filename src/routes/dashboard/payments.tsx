import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/payments')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Payments</h2>
      <p>Payments content goes here...</p>
    </div>
  )
}
