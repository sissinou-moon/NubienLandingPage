export default function Footer() {
    return (
        <div className='bg-black relative z-20 md:px-15 px-5 pb-10' >
            <footer className="footer md:h-110 h-95  border border-white/20 rounded-3xl p-8">
                <div className="flex flex-col gap-5 border-b border-white/20 pb-5 mb-5">
                    <a href="/" className="footer-logo">
                        <img src="https://framerusercontent.com/images/PDnQxgl1tNjGL6DZbMAh0HAtEU.png" alt="Logo" />
                    </a>

                    <p className="footer-text">
                        Made remotely with 💜 and passion <br />
                        - Westhill Studio.
                    </p>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Pages</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Social</h4>
                        <ul>
                            <li><a href="https://x.com/MandroDesign" target="_blank">Twitter (X)</a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">Thread</a></li>
                            <li><a href="https://www.youtube.com/" target="_blank">LinkedIn</a></li>
                            <li><a href="https://www.framer.com/?via=westhill97" target="_blank">Codili</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Subscribe</h4>
                        <form className="footer-form">
                            <input type="email" placeholder="Enter your email..." />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>

    )
}