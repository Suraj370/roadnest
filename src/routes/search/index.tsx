import { createFileRoute } from '@tanstack/react-router'
import { mockCarListings } from '../../mock/carMockData'
import { CarCard } from '../../components/Car/CarCard'
import { CarListing } from '../../types/types'
import SearchBar from '../../components/Search/SearchBar'
import SearchFilters from '../../components/Search/SearchFilter'
import MapComponent from '../../components/Map'
export const Route = createFileRoute('/search/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
  <div className="h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="pt-16">
          <SearchBar />
          <SearchFilters />
        </div>
      </div>

      <div className="flex-1 mt-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 overflow-y-auto">
              <h2 className="text-lg font-semibold mb-4">
                {mockCarListings.length} results out of 74
              </h2>
              <div className="space-y-4 pb-8">
                {mockCarListings.map((car: CarListing) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>

            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
