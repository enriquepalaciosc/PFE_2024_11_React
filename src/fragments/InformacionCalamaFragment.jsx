/* core: react, reactstrap  */
import React, { useState } from 'react'
import {
    Button,
    Card,
    CardTitle,
    CardText
} from "reactstrap"

/* view: component */
function InformacionCalamaFragment() {
    return (
        <>
            <h1>Soy un fragmento 💀</h1>
            <Card body>
                <CardTitle tag="h5">
                    Special Title Treatment
                </CardTitle>
                <CardText>
                    With supporting text below as a
                    natural lead-in to additional
                    content.
                </CardText>
                <Button>
                    Go somewhere
                </Button>
            </Card>

            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

/* exportarlo! */
export default InformacionCalamaFragment
