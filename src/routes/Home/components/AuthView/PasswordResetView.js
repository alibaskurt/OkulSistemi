
import React from 'react';

const PasswordResetView = ({onViewChange}) => (
    <div>
        <form className="form-inline">
            <div className="form-group mb-2">
                <input style={{ width: "400px", marginRight: "10px" }} type="text" className="form-control" placeholder="E-Posta" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Şifre Al!</button>
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

export default PasswordResetView