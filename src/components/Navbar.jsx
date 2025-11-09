const Navbar = () => {
    const navLinks = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

    return (
        <nav className="main-nav">
            <ul>
                {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <a href="#">{link}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar;