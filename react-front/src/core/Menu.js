import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { signout, isAutheticated } from "../auth";

const isActive = (history, path) => {
    if(history.location.pathname === path) return {color: "#ff9900"}
        else return {color: "#ffffff"}
    
}
                  

const Menu = ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, "/")} href="/">Home</Link>
            </li> 


            {!isAuthenticated() && ( 
             <>
                 <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/signin")} href="/signin">Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/signup")}  href="/signup">Sign up</Link>
                </li>
            </> 
            )}

            {isAuthenticated() && (
                <>
                  <li className="nav-item">
                            <a 
                                className="nav-link" 
                                style=
                                    {isActive(history, "/signup"),
                                     { cursor: "pointer", color: "#fff" }}
                                }
                                onClick={() => signout(() => history.push('/'))}
                                >
                                    Sign Out
                              </a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link">
                                {`${isAuthenticated().user.name}'s profile`}
                            </a>
                        </li>
            </>
            )}
           
        </ul>
    </div>
)

export default withRouter (Menu);
