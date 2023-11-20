import React from 'react';
import { Link } from 'gatsby';
import logo from '../../static/img/logo.svg';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import youtube from '../img/social/youtube.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="HATS" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              <Link className="navbar-item" to="/tiny-homes">
                Tiny Homes Program
              </Link>
              <Link className="navbar-item" to="/latest_news">
                Latest News
              </Link>
              <Link className="navbar-item" to="/research-reports">
                Research & Reports
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end">
              <div className="container">
                <div className="social">
                  <a
                    title="facebook"
                    href="https://www.facebook.com/HamiltonTinyShelters"
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a
                    title="instagram"
                    href="https://www.instagram.com/hamiltontinyshelters/"
                  >
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a
                    title="youtube"
                    href="https://youtube.com/channel/UCToxMvBcplHL4ZzCzQ9RuQQ"
                  >
                    <img
                      src={youtube}
                      alt="Youtube"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
