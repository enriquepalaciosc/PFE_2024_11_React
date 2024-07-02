/* imports core */
import React, { useState } from 'react'
import { Badge } from "reactstrap"

/* component: view */
function ColorFavoritoFragment({ color, datos }) {
    return (
        <>
            <h1>
                Color favorito<Badge>{color}</Badge>
            </h1>
        </>
    )
}

/* exportar */
export default ColorFavoritoFragment