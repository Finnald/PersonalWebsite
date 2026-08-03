import { SquareArrowOutUpRight } from 'lucide-react'

function Hobby({ category, name, desc, image }) {

    return (
        <div class="card bg-base-300 w-128 max-h-128 shadow-sm">

            <div class="card-body">
                <p>{category}</p>
                <h2 class="card-title">
                    {name}
                </h2>
                <p>{desc}</p>
                <div class="card-actions justify-end">
                </div>
            </div>
            <figure>
                <img
                    src={image} className="" />
            </figure>
        </div>
    )
}

export default Hobby