import Link from "next/link";

const Header = () => {
    return <header className="header">
        <div className="header-content">
            <div className="header-content-left">
                <Link href="/">
                    <a>
                        <h1>Flat Logo</h1>
                    </a>
                </Link>
            </div>
            <div className="header-content-center">
                #menu
            </div>
            <div>
                #user
            </div>
        </div>
    </header>;
};

export default Header;