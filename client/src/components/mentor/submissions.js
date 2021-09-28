//React
import React, { useEffect } from 'react';
//Assets
import noSubmission from '../../assets/images/pitch-submission.png';
//Components
import YellowButton from '../YellowButton'

export default function Submissions({ pitchData }) {
    return (
        <section className="rightColumn">
            {
                pitchData.length > 0 
                ? (
                <div className="container py-5">
                    <div>
                        <h1 className="heading pb-2">Submissions</h1>
                        <span className="underline"></span>
                    </div>
                    {
                        pitchData.slice(0, 2).map((pitch, index) => (
                            <div className="pitchCard" key={index}>
                                <div>
                                    <img src={noSubmission} alt="submission-card" width="200px"/>
                                </div>

                                <div>
                                    <div>
                                        <h5>{pitch.name}</h5>
                                        <h6>Created by: {pitch.author}</h6>

                                        <YellowButton text={"Review Pitch"}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <YellowButton text={"View All Pitches"}/>
                </div>
                )
                : (
                <div className="container py-5">
                    <div>
                        <h1 className="heading pb-2">Submissions</h1>
                        <span className="underline"></span>
                    </div>
    
                    <div className="text-center">
                        <div className="text-center pb-3">
                            <img src={noSubmission} className="img-fluid" width="500px"/>
                            <h4 className="dashH4">No active pitch submissions.</h4>
                        </div>
                    </div>
                </div>
                )
            }
        </section>
    )
}
