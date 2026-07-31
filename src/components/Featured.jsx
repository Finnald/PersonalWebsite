import { SquareArrowOutUpRight } from 'lucide-react'

function Featured({ name, desc, link }) {

    return (
        <div
            className="hero w-screen h-[35vh]"
            style={{
                backgroundImage: "url('/featured.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-3 text-3xl">Featured Project</h1>
                    <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                    <p className="mb-5">
                        {desc}
                    </p>
                    <a href={link} target="_blank"><button className="btn btn-primary">Visit Project</button></a>
                </div>
            </div>
        </div>
    )
}

export default Featured