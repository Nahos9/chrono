import "./chrono.scss"

function Chrono() {
  return (
    <div className="container-chrono anime">
        <div className="config">
            <div className="btns">
                <button className="btn-moins">-</button>
                 <span>Durée : 30 minutes</span>
                <button className="btn-plus">+</button>
            </div>
            <div className="btn-pause">
                <button className="btn-moins">-</button>
                <span>Pause : 5 minutes</span>
                <button className="btn-plus">+</button>
            </div>
        </div>
      <h1>30:00</h1>
      <div className="controls">
        <button className="reset">Reset</button>
        <button className="play">Play</button>
      </div>
    </div>
  )
}

export default Chrono