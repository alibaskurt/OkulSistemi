
import React from 'react';

const SignUpView = ({ onViewChange }) => (
    <div>
        <form className="form-inline">
            <div className="form-group mb-2">
                <input style={{ width: "400px", marginRight: "10px" }} type="text" className="form-control" placeholder="E-Posta" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Kayıt Ol!</button>
        </form>
        <p>
            Yoksa üye misiniz?<br />
            O zaman giriş yapmak için  <b><u><a href="#" style={{ fontSize: "18px" }} onClick = {e => {
                e.preventDefault();
                onViewChange(1);
            }}> tıklayınız</a></u></b>
        </p>
    </div>
)

export default SignUpView