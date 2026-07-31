import { SquareArrowOutUpRight } from 'lucide-react'

function Hobby({ name, desc, image }) {

    return (
        <div class="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                    src={image} />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    Card Title
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}

export default Hobby