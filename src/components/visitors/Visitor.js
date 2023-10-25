import "./VisitorsStyles.css"

function Visitors() {
  return (
    <div style={{marginBottom:"10px", backgroundColor: "#a19810"}}>
        <div style={{clear:"both"}} id="visitors1_see">
            <div className="visitors1_heading">
                <h2 className="visitors1_h2h">PIHAS-VISITORS</h2>
                <p className="visitors1_h2h2">(Trending and accesibility of our website 24/7)</p>
            </div>
            <div className="visitors1_list1">
                <div className="visitors">
                    <div className="visitors1_div online">1</div>
                    <div className="ctxt">Online</div>
                </div>
                <div className="visitors">
                    <div className="visitors1_div">116</div>
                    <div className="ctxt">Today</div>
                </div>
                <div className="visitors">
                    <div className="visitors1_div">122</div>
                    <div className="ctxt">Yesterday</div>
                </div>
                <div className="visitors">
                    <div className="visitors1_div">577</div>
                    <div className="ctxt">Week</div>
                </div>
                <div className="visitors">
                    <div className="visitors1_div">2684</div>
                    <div className="ctxt">Month</div>
                </div>
                <div className="visitors">
                    <div className="visitors1_div">36804</div>
                    <div className="ctxt">Year</div>
                </div>
                <div className="visitors">
                    <div className="visitors1_div">167733</div>
                    <div className="ctxt">Total</div>
                </div>
                <div className="visitors1_loadmore1">
                    <a href="https://saristz.ac.tz/oas/kam/home" style={{textDecoration:"none", fontSize:"18px"}} className="visitors1_loadmore">KAM - DSM</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Visitors;