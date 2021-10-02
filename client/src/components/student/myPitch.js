//React
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../Q&A/Header';
import ChooseYourBusiness from './ChooseYourBusiness';

//
import noPitchImage from '../../assets/images/no-pitch-image.png';

//
import YellowButton from '../YellowButton'

export default function MyPitch() {
    return (
        <section className="rightColumn">
            <div className="container py-5 dashNav" >
                <div>
                    <h1 className="heading pb-2">My Profile</h1>
                    <span className="underline"></span>
                </div>

                <div className="text-center">
                    <div className="text-center pb-3">
                        <img src={noPitchImage} className="img-fluid"/>
                        <h4 className="dashH4">You have no active pitches.</h4>
                    </div>
                    <Link>
                        <YellowButton 
                            href={"/student/create-pitch"}
                            text={"Create New Pitch"}
                        />
                        <ChooseYourBusiness/>
                    </Link>
                </div>
            </div>
        </section>
    )
}
