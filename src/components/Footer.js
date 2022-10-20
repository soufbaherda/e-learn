import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import {
    IoLogoInstagram,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoGoogle,
} from "react-icons/io";


export default function Footer() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
            <MDBContainer className='pt-4'>
                <section className='mb-4'>
                    <MDBBtn style={{ backgroundColor: '#3b5998' }} href='#'>
                        <IoLogoFacebook/>
                    </MDBBtn>

                    <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                        <IoLogoInstagram/>
                    </MDBBtn>

                    <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                        <IoLogoGoogle/>
                    </MDBBtn>

                    <MDBBtn className='m-1' style={{ backgroundColor: 'black' }} href='#'>
                        <IoLogoGithub/>
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022  Copyright:
                <a className='text-dark' >
                    E-Learn
                </a>
            </div>
        </MDBFooter>
    );
}