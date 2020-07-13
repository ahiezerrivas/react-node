import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Menu = (props) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link " href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/signin">Sign in</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
                
            </li>
            {JSON.stringify(props.history)}
        </ul>
    </div>
)

export default withRouter (Menu);

