import React, { Component } from 'react';
import './GSheet.css';

class GSheet extends Component{
    render () {
        return(
            <div className="main">
            <iframe className = "gsheet"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT-ytLL4ZqRuAngT0EkfBusGoWnuVwFu_hTt_k55oCoKN8mZxBwCskoit2s8F0gC5vT_aMFpj0OLCvI/pubhtml?widget=true&amp;headers=true">
            </iframe>
            </div>
        )
    }
}

export default GSheet