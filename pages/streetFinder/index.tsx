import axios from "axios"
import { Fragment, useState } from "react"

export default function StreetFinder() {
    const [streets, setStreets] = useState([])

    let streetHandler = async (e) => {
        let s = await getStreets(e.target.value);
        setStreets(s);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="form-outline">
                    <input type="search" id="form1" className="form-control" placeholder="Straßen Name" aria-label="Search" onChange={streetHandler} style={{marginBottom:'1rem'}}/>
                </div>
                <div className="css-table d-flex justify-content-center" style={{ display: 'flex', gap: '0.5rem', flexWrap:'wrap' }}>
                    {streets.map(x => {
                        return (
                            <div className="block" style={{ padding: '1rem', margin: '0', minWidth:'15rem' }}>
                                <div className="css-table-row">
                                    <div>Straße:</div>
                                    <div>{x.streetName}</div>
                                </div>
                                <div className="css-table-row">
                                    <div>PLZ:</div>
                                    <div>{x.postcode}</div>
                                </div>
                                <div className="css-table-row">
                                    <div>Bezirk:</div>
                                    <div>{x.district}</div>
                                </div>
                                <div className="css-table-row">
                                    <div>Stadt:</div>
                                    <div>{x.townName}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

async function getStreets(streetName: string) {
    const url = window.location.origin
    let streets = await axios.get(`${url}/api/streets/name?streetName=${streetName}`).then(x => { return x.data })
    return streets;
}