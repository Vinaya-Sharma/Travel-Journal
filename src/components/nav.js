
import globe from "./assets/globe.png"

export default function Nav(){
    return(
    <nav>
        <div>
        <span><img src={globe} alt ="globe"></img></span>
        <span><p className="white">my travel journal.</p></span>
        </div>
    </nav>
    )
}