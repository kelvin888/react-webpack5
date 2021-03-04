import React from 'react'
import { Recipes } from './Recipes'
import header from '../images/header.png'

export const App = () => {
    return (
        <div>
            <img src={header} alt="header" />
            <Recipes />
        </div>
    )
}
