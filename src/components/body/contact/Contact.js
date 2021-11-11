import React from 'react'
import './contact.css'
import Separator from '../common/Separator'
import Socialmedia from '../socialmedia/Socialmedia'
import cv from '../../../Assets/updated_CV.pdf'
import CloudDownload from '../../../../node_modules/@mui/icons-material/CloudDownload';

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on social platforms</p>
                    <Socialmedia />
                </div>
                <div className="download">
                    <a download href={cv} >
                        <CloudDownload />Download Resume
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Contact
