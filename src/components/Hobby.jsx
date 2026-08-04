import { SquareArrowOutUpRight } from 'lucide-react'

function Hobby({ category, name, desc, image }) {

    return (
        <div class="card bg-base-300 w-80 sm:w-80 2xl:w-128 max-h-128 shadow-2xl">
            <div class="card-body h-64 2xl:h-40">
                <p>{category}</p>
                <h2 class="card-title">{name}</h2>
                <p>{desc}</p>
                <div class="card-actions justify-end"></div>
            </div>

            <figure class="relative h-64 w-full overflow-hidden bg-black">
                {/* <!-- Blurred background --> */}
                <img
                    src={image}
                    className="absolute inset-0 h-full w-full object-cover blur-xl scale-110 opacity-60"
                    alt=""
                />
                {/* <!-- Main image --> */}
                <img
                    src={image}
                    className="relative h-full w-full object-contain"
                    alt={name}
                />
            </figure>
        </div>
    )
}

export default Hobby