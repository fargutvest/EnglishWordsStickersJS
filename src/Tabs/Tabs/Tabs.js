import React, { Component } from 'react';
import Stickers from './../Stickers/Stickers.js';
import List from './../List/List.js';
import GSheet from './../GSheet/GSheet.js';
import GDriveAPI from './../GDriveAPI/GDriveAPI.js';
import s from './Tabs.module.css';
import {
  BrowserRouter,
  Route, NavLink
} from "react-router-dom";

class Tabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className={s.tabpanel}>
            <div className={`${s.tab} ${s.tab1}`}>
              <NavLink to="/stickers" activeClassName={s.active}>Stickers</NavLink>
            </div>
            <div className={`${s.tab} ${s.tab2}`}>
              <NavLink to="/list" activeClassName={s.active}>List</NavLink>
            </div>
            <div className={`${s.tab} ${s.tab3}`}>
              <NavLink to="/gsheet" activeClassName={s.active}>GSheet</NavLink>
            </div>
            <div className={`${s.tab} ${s.tab4}`}>
              <NavLink to="/gdriveapi" activeClassName={s.active}>GDriveAPI</NavLink>
            </div>
          </div>

          <div className={s.tabcontent}>
            <Route path='/stickers' render={(props) => <Stickers {...props} passRef={this.props.passRef} shared_var={this.props.shared_var} />} />
            <Route path="/list" render={(props) => <List {...props} shared_var={this.props.shared_var} />} />
            <Route path="/gsheet" component={GSheet} />
            <Route path="/gdriveapi" render={(props) => <GDriveAPI {...props} ShareSpreedSheetId={this.props.ShareSpreedSheetId} />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Tabs;