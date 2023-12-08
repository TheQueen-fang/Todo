import { useContext } from "react"
import {data,gender} from '../App'

function Child() {
    let M_name = useContext(data);
    let M_gender = useContext(gender);
    return (
        <>
            <p>{M_name} and { M_gender}</p>
        </>
        
    )
}
export default Child;