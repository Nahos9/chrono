import "./chrono.scss"
export default function Chrono(){

    return(
        <>
            <div className="container-chrono anime">
                <div className="config">
                    <div className="btns">
                        <button className="btn-moins">-</button>
                        <span>Miniutes : 5</span>
                        <button className="btn-plus">+</button>
                    </div>
                    <div className="">
                    <button className="btn-moins">-</button>
                        <span>Pause : 5</span>
                        <button className="btn-plus">+</button>
                    </div>
                </div>
               <h1>30:00</h1>
               <div className="controls">
                <button className="play">Play</button>
                <button className="reset">Reset</button>
               </div>
            </div>
        </>
    )
}