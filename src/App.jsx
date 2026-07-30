import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import { } from 'lucide-react'
import data from './assets/data.json'
import { Mail } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* navbar  */}
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src="./assets/favicon.png" className="w-14 h-14" />
            <a className="btn btn-ghost text-xl">finnald</a>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="https://au.linkedin.com/in/finn-parry-578397271" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg></a></li>
            <li><a href="https://github.com/Finnald/" target="_blank"><svg aria-hidden="true" fill="white" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
            <li>
              <a
                href="mailto:contact@finnald.com"
                className="text-sm text-base-content/70 hover:text-base-content"
              >
                <Mail size={28} strokeWidth={2} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* page layout  */}
      <div className="flex flex-col justify-center p-20 items-center">

        {/* projects section */}
        <h1 className="text-4xl font-semibold pb-2">Projects</h1>
        <p className="font-light pb-10">These should hopefully fill out over time...</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {data.projects.map(project => (
            <Card name={project.name} desc={project.description} link={project.link} />
          ))}

        </div>

        {/* later sections  */}


      </div>
    </>
  )
}

export default App
