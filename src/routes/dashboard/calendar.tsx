import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Calender</h2>
      <p>Calender content goes here...</p>
    </div>
  );}
