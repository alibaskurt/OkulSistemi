import React from 'react';
import { connect } from 'react-redux';
import { userInit } from 'store/userReducer'; //UserReducure içerisindeki userInit methodu alındı. (Bu bizim Action Oluşturma methodumuz idi.)

class LoginView extends React.Component {

  constructor() {
    super();
    //Componentin statesi redux la alakası yok
    this.state = {
      email: "",
      password: ""
    }
  }

  emailChanged(e) {
    this.setState({
      email: e.target.value
    })
  }

  passwordChanged(e) {
    this.setState({
      password: e.target.value
    })
  }

  onUserClick() {
    //HTTP CALL (Girilen bilgileri Api ye gonder sonuc al)
    const user = {
      name: "Ali Başkurt",
      email: "ali.han.baskurt@gmail.com",
      password: "123",
      age: 27,
      gender: "male"
    }
    this.props.loginUserData(user);

  }

  render() {
    const onViewChange = this.props.onViewChange;

    if (this.props.userData.name) {
      return (
        <div>Login Oldu</div>
      )
    }
    else {
      return (
        <div>
          <form className="form-inline">
            <div className="form-group mb-2">
              <input type="text" className="form-control" placeholder="E-Posta" value={this.state.email} onChange={this.emailChanged.bind(this)} />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <input type="password" className="form-control" placeholder="Şifre" value={this.state.password} onChange={this.passwordChanged.bind(this)} />
            </div>
            <button type="button" className="btn btn-primary mb-2" onClick={this.onUserClick.bind(this)} >Giriş Yap</button>
            <a href="#" onClick={e => {
              e.preventDefault();
              onViewChange(3);
            }}>Şifremi Unuttum</a>
          </form>

          <p>
            Henüz üye olmadınız mı?<br />
            Ücretsiz kayıt olmak için  <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
              e.preventDefault();
              onViewChange(2);
            }}>tıklayınız</a></u></b>
          </p>
        </div>
      )
    }
  }

}

//Action Creater methodunu alıp componentin propertisine bağlama ve state güncelleme
const mapDispatchToProps = (dispatch) => {
  return {
    loginUserData: (UserObjesi) => dispatch(userInit(UserObjesi))
  }
}

//State i alıp propertye bağlama
const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
}


//Connect 2 paremtre alır 1.si-> state i propsa bağlama , 2.si -> Action crearteri Propsa bağlama
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
//Connect functiyonu yeni bir funksiyon döndürdüğü için LoginView componentını verdik sonuna

//export default LoginView