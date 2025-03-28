import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/rentals')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Rentals</h2>
      <p>Rentals content goes here...</p>
    </div>
  )
}
