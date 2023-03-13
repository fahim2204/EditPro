import Link from "next/link";
import ProjectsData from "../../data/projects.json";
import { useSession } from "next-auth/react";
import { BiUserCircle } from "react-icons/bi";
import { signOut } from "next-auth/react";

const Navbar = ({ navbarRef, bgTransparent }) => {
  const { data: session } = useSession();

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light style-5 ${
        bgTransparent ? "bg-transparent" : ""
      }"`}
      ref={navbarRef}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" href="/">
         <img className="zoom" src="/img/logo.webp" alt="logo" height={30} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-md-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PRODUCTS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                {ProjectsData.projects.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link className="dropdown-item" href={item.route}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pricing">
                PRICING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/page-portfolio-5">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {session?.user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {session.user.image ? <><img className="rounded-circle border shadow-sm" src={session.user.image} height={35} alt="avatar" /></>:<BiUserCircle className="fs-4" />}
                  
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown1"
                >
                  <li className="text-center">{session.user.name}</li>
                  <li className="text-center fs-10px mb-2">{session.user.email}</li>
                  <li>
                    <Link className="nav-link fw-light py-1" href="/login">
                      My Dashboard
                    </Link>
                  </li>
                  <li>
                    <span className="nav-link fw-light py-1" onClick={signOut}>
                      Sign Out
                    </span>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link border px-1 rounded fw-light border-primary d-inline" href="/login">
                  Log in / Sign up
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
