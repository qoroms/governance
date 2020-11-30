import React from "react";
import "../../../styles/footer.css"

const Footer = () => {
    return (
        <footer id="footer" className="landing">
            <div className="container-large">
                {/* <div className="row top">
                    <div className="col-sm-2 logo mobile-hide">
                        <a href="/" className="mark" />
                    </div>
                    <div className="col-xs-12 logo mobile-only">
                        <a href="/" className="brand" />
                    </div>
                    <div className="col-sm-8 col-xs-12 row links-holder">
                        <div className="col-sm-3 col-xs-6 links">
                            <p>Protocol</p>
                            <a href="/markets">Markets</a>
                            <a href="/prices">Prices</a>
                            <a href="/developers">Developers</a>
                            <a href="/docs">Docs</a>
                        </div>
                        <div className="col-sm-3 col-xs-6 links">
                            <p>Governance</p>
                            <a href="/governance">Overview</a>
                            <a href="/governance/zoracle">COMP</a>
                            <a href="/governance/leaderboard">Leaderboard</a>
                            <a rel="external" href="https://www.zoracle.xyz/">
                                Forums
                            </a>
                        </div>
                        <div className="col-sm-3 col-xs-6 links">
                            <p>Company</p>
                            <a href="/about">About</a>
                            <a href="/about#jobs">Careers</a>
                        </div>
                    </div>
                    <div className="mobile-hide col-xs-2 text-right">
                        <a
                            className="dapp button"
                            rel="external"
                            href="https://app.compound.finance/"
                        >
                            App
                        </a>
                    </div>
                </div> */}

                <div className="row" style={{ marginTop: "4%" }}>
                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h4 className="header">About Zoracles</h4>
                            <p className="info">
                                Zoracles partners with DeFi projects using Open Oracle with
                                zero-knowledge proofs to provide confidential data to smart contracts.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h4 className="header">Quick Links</h4>
                            <ul className="stack-link">
                                <li><a href="https://zoracles.com">Home</a></li>
                                <li>
                                    <a
                                        href="https://finance.yahoo.com/news/zoracles-develops-next-generation-oracle-093003499.html?guccounter=1&amp;guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&amp;guce_referrer_sig=AQAAABB1kCfe07jcqCQcmla2GXEHe_i1jXF1Siyf702Sd7MCKdHUjd3LTk5XdP8_PiI_raEAUOc03x9vgwYu7PJJ-L6Kc-g0FqDpBzfNoPUWSCLclAuow6M39K46V--gL3gGoJr5YIEoxRvYdUvMqoYqsPBcaovCYrVSGI5KSWMDbe8i">
                                        Press
                                    </a>
                                </li>
                                <li>
                                    <a href="#features">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/zoracles">
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3" id="contact">
                        <div className="footer-widget">
                            <h4 className="header">More Links</h4>
                            <ul className="stack-link">
                                <li>
                                    <a href="https://discord.gg/DSYQYAqEUX">
                                        Discord
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/zoracles">
                                        Telegram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/z0racles">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.reddit.com/r/Zoracles/">
                                        Reddit
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h4 className="header">Subscribe</h4>
                            <form action="#">
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                    <button className="btn btn-subscribe">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row copyright">
                    <div className="col-md-6">
                        <div className="footer-widget">
                            <p className="copyright info">
                                © 2020 <a href="https://zoracles.com/">
                                    Zoracles Protocol
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
