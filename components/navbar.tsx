import Link from "next/link"
import { signIn, signOut, useSession } from 'next-auth/react'
import DiscordUserInformation from "./discord/discord_user"

export default function Navbar(props: any) {

    const { data: session } = useSession()

    return (
        <nav className="navbar navbar-expand-lg fixed-top nav-header" >
            <div className="container-fluid">

                {!session &&
                    <>
                        <button className='btn btn-primary' onClick={() => signIn('discord')}>
                            <i className="fa-brands fa-discord"></i> Sign in
                        </button>
                    </>
                }

                {session &&
                    <>
                        <button className='btn btn-danger' onClick={() => signOut()}><i className="fa-brands fa-discord"></i> Sign out</button>
                        <DiscordUserInformation user={session.user}/>
                    </>
                }
                <button className="navbar-toggler navbar-dark burger-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarScroll">
                    <ul className="navbar-nav navbar-nav-scroll">
                        <li className="nav-item">
                            <Link href="/" className="nav-link text-color4">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/cv" className="nav-link text-color4">CV</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projects" className="nav-link text-color4">Projects</Link>
                        </li>
                        {session &&
                            (
                                <li className="nav-item">
                                    <Link href="/profile" className="nav-link text-color4">Profile</Link>
                                </li>
                            )}
                        <li className="nav-item">
                            <Link href="/impressum" className="nav-link text-color4">Impressum</Link>
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                </div>
                            <a href="/Lebenslauf.pdf" target="_blank" className="btn cv-button"><b>Download CV</b></a>
            </div>
        </nav>
    )
}