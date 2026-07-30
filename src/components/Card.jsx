import { SquareArrowOutUpRight } from 'lucide-react'

function Card({ name, desc, link }) {

    return (
        <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <a href={link} target="_blank"><SquareArrowOutUpRight /></a>
                </div>
            </div>
        </div>
    )
}

export default Card