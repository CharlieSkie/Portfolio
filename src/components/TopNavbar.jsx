function TopNavbar({ toggleSidebar }) {
    return (
        <nav className="navbar">
            <h1>Portfolio</h1>
            <button onClick={toggleSidebar}>☰ Menu</button>
        </nav>
    )
}
export default TopNavbar;   