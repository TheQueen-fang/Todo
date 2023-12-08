import React from 'react';
import {data,gender} from '../App'

function Child() {
    
    return (
       
        <>
         <data.Consumer>{
            (name) => {
                return (
                    <gender.Consumer>
                        {
                        (mygender) => {
                            return (
                                <p>name is :{name} and gender is {mygender}</p>
                           )
                        }
                    } </gender.Consumer>
                    )
            }
            }</data.Consumer>
        </>
       
    )
}
export default Child;