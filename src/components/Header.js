import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    constructor() {
        //Base constructorı da çalıştırıyor.
        super();
        this.state = {
            isNavOpen: false
        }
    }
    buttonClick() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    render() {
        return (
            <header>
                <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand" href="#">EğitimBudur</a>
                    <button className="navbar-toggler" type="button" onClick={this.buttonClick.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" style={{ display: this.state.isNavOpen == true ? "block" : "none" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" activeClassName="active" >Ana Sayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/iletisim" className="nav-link" activeClassName="active">İletişim</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/hakkimizda" className="nav-link" activeClassName="active">Hakkımızda</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header