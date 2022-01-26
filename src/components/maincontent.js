import Card from "./Card"
import Data from "../data"

export default function MainContent(){
    const data = Data
    const elements = data.map(instance => {
        return(<Card key = {instance.id} instance = {instance}/>)
    })

    return (<div>{elements}</div>)
}
