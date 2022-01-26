import locationIcon from "./assets/marker.png"


export default function Card(props){
    return(
        <section>
            <img className = "cover-img" src = {props.instance.image}></img>
            <div className = "content">
            <div className = "locationStuff"> 
                <img  className = "locationIcon" src = {locationIcon}></img>
                <h3 className = "location">{props.instance.location}</h3>
                <h3 className="greyLink"><a href={props.instance.googleMapsUrl}>View On Google Maps</a></h3>
            </div>
            <h1>{props.instance.title}</h1>
            <h2>{props.instance.startDate} - {props.instance.endDate}</h2>
           <p>{props.instance.description}</p>
            </div>
        </section>
    )
}