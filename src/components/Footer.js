import "./Footer.css";

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-left">
                <address>
                    <small>lorem</small>
                    <small>Lorem, ipsum.</small>
                    <small>Lorem, ipsum.</small>
                    <small>lorem<span>India</span></small>
                    <p>54623678</p>
                </address>
            </div>
            <div className="footer-right">
            <i class="fa-solid fa-truck-fast"></i>
            </div>
        </div>
    )
}

export default Footer;