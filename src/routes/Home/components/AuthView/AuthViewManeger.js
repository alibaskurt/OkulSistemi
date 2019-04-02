import React from 'react';
import LoginView from './LoginView'
import SignUpView from './SignUpView'
import PasswordResetView from './PasswordResetView'



class AuthViewManeger extends React.Component {

    constructor() {
        super();

        //1 : Giriş Ekranı
        //2 : Kayıt Ekranı
        //3 : Şifre Reset Ekranı
        this.state = {
            currentView: 1
        }
    }
    changeView(newView) {
        this.setState({ currentView : newView });
    }

    render() {
        let view;
        if (this.state.currentView === 1) {
            view = <LoginView onViewChange={this.changeView.bind(this)} />
        }
        if (this.state.currentView === 2) {
            view = <SignUpView onViewChange={this.changeView.bind(this)}/>
        }
        if (this.state.currentView === 3) {
            view = <PasswordResetView onViewChange={this.changeView.bind(this)}/>
        }
        return view
    }
}

export default AuthViewManeger;