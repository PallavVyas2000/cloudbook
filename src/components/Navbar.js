import React from 'react'
import logo from '../logo512.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    React.useEffect(() => {
    }, [location]);
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link to="#" class="navbar-brand">
                        <img src={logo} height="40" alt="CloudBook" />
                    </Link>
                    <div className="d-flex align-items-center navtitle">
                        Cloudbook
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-md-auto gap-2">
                            <li class="nav-item rounded">
                                <Link class="nav-link active" aria-current="page" to="/"><i class="bi bi-house-fill me-2"></i>Home</Link>
                            </li>
                            <li class="nav-item rounded">
                                <Link class="nav-link" to="/about"><i class="bi bi-people-fill me-2"></i>About</Link>
                            </li>
                            <li class="nav-item rounded">
                                <Link class="nav-link" to="#"><i class="bi bi-telephone-fill me-2"></i>Contact</Link>
                            </li>
                            <li class="nav-item dropdown rounded">
                                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-fill me-2"></i>Profile</Link>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="#">Account</Link></li>
                                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><Link class="dropdown-item" to="#">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
