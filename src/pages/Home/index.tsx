import { coffes } from '../../utils/Coffees'
import { Banner } from './Banner'
import { FoodCard } from './FoodCard'

export function Home() {
  return (
    <main>
      <Banner />
      <main className="h-screen w-screen px-40 py-8">
        <h2 className="mb-14 text-3xl font-bold text-base-subtitle">
          Nossos Cafes
        </h2>
        <article className="grid grid-cols-4 grid-rows-4 gap-8">
          {coffes.map((coffe) => (
            <FoodCard key={coffe.title} coffe={coffe} />
          ))}
        </article>
      </main>
    </main>
  )
}
