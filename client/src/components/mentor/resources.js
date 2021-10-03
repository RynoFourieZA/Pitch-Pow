import React from 'react';
import WriteComments from "./Comments";


export default function Resources() {
    return (
        <section className="rightColumn">
            <WriteComments />
            <div className="container py-5">
                <div>
                    <h1 className="heading pb-2">Resources</h1>
                    <span className="underline"></span>
                </div>

                <div className="text-center">
                    <div className="text-center pb-3">
                        <h4 className="dashH4">Here we will have resources.</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
