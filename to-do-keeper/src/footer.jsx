import React from 'react';
const Footer = () => {
    return(
        <div className="footer">
            <footer>
                <p> {new Date().toLocaleDateString()} </p>
            </footer>
        </div>
    )    
}
export default Footer;