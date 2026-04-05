import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div style={{
      backgroundColor: "#0f172a",
      color: "#e5e7eb",
      minHeight: "100vh",
      fontFamily: "Arial"
    }}>

      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 60px",
        borderBottom: "1px solid #1e293b"
      }}>
        <h2>Robert Matsunaga</h2>

        <nav>
          <a href="#projetos" style={{marginRight:"20px", color:"#38bdf8"}}>Projetos</a>
          <a href="#contato" style={{color:"#38bdf8"}}>Contato</a>
        </nav>
      </header>

      <section style={{
        textAlign: "center",
        marginTop: "120px",
        padding: "0 20px"
      }}>

        <h1 style={{fontSize:"48px"}}>
          Robotics • Industrial Automation • Machine Vision
        </h1>

        <p style={{
          marginTop:"20px",
          fontSize:"20px",
          color:"#94a3b8"
        }}>
          Engenheiro especializado em robótica colaborativa,
          sistemas de visão industrial e integração de automação.
        </p>

        <div style={{marginTop:"40px"}}>

          <a href="#projetos" style={{
            padding:"12px 24px",
            background:"#38bdf8",
            color:"#0f172a",
            borderRadius:"6px",
            marginRight:"10px",
            textDecoration:"none"
          }}>
            Ver Projetos
          </a>

          <a href="https://linkedin.com" style={{
            padding:"12px 24px",
            border:"1px solid #38bdf8",
            borderRadius:"6px",
            color:"#38bdf8",
            textDecoration:"none"
          }}>
            LinkedIn
          </a>

        </div>

      </section>

    </div>
  )
}

export default App