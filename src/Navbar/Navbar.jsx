import React, { Component } from 'react';
import SigninWithGoogleContainer from '../SignInWithGoogle/SigninWitGoogleContainer';
import ErrorBarContainer from '../ErrorBar/ErrorBarContainer';
import SocialUrl from './../Social/SocialUrl'
import github from './../Assets/github.svg'
import youtube from './../Assets/youtube.svg'
import print from './../Assets/print.svg'
import s from './Navbar.module.css';
import { htmlToPdf } from './../utils/htmlToPdf'

const pageHeightPixels = 750;
const pdfFileName = "Stickers to print.pdf";
const pageOrientation = "landscape";

const Navbar = ({ pdf, updateIsGeneratingPdf, updateIsShowIframe, updatePdfOutput }) => {

    let onClickPdf = async () => {
        updateIsGeneratingPdf(true);
        var pdfOutput = await htmlToPdf(pageHeightPixels, pageOrientation, pdf, pdfFileName);
        updatePdfOutput(pdfOutput);
        updateIsShowIframe(true);
        updateIsGeneratingPdf(false);
    }

    return (
        <div className={s.navbar}>

            <div className={s.main}>
                <p align="center">
                    <input type="image" onClick={onClickPdf} src={print} />
                </p>
            </div>
            <div>
             <p align="center">
                    <p>
                        <SocialUrl url="https://www.youtube.com/watch?v=C-FKXagcLRQ&list=PLQPXxMwGR_nkJyvzRnj8NGgHwgvpdipy4" icon={youtube} />
                    </p>
                    <p>
                        <SocialUrl url="https://github.com/fargutvest/EnglishWordsStickers" icon={github} />
                    </p>
                </p>
                <p>
                    <ErrorBarContainer />
                </p>
                <SigninWithGoogleContainer />
            </div>

        </div >
    );

}

export default Navbar;