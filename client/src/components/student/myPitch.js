//React
import React, { useState } from 'react';

//
import noPitchImage from '../../assets/images/no-pitch-image.png';

//
import YellowButton from '../YellowButton'

export default function MyPitch() {
    return (
        <section className="rightColumn">
            <div className="container py-5 dashNav" >
                <div className="text-start">
                    <h1 className="heading pb-2">My Profile</h1>
                    <span className="underline"></span>
                </div>

                <div className="text-center">
                    <div className="text-center">
                        <img src={noPitchImage} className="img-fluid"/>
                        <h4 className="dashH4">You have no active pitches</h4>
                    </div>
                    <YellowButton 
                        href={"/dashboard/student/create-pitch"}
                        text={"Create New Pitch"}
                    />
                </div>
            </div>
        </section>
    )
}
