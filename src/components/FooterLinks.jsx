import '../styles/Footer.css'

const FooterLinks = () => {
    const footerData = [
        {
            title: "DC COMICS",
            links: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"]
        },
        {
            title: "DC",
            links: ["Terms Of Use", "Privacy Policy", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]
        },
        {
            title: "SITES",
            links: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"]
        },
        {
            title: "SHOP",
            links: ["Shop DC", "Shop DC Collectibles"]
        },
    ]

    return (
        <div className="footer-top">
            <div className="link-section">
                {footerData.map((col, index) => (
                    <div className="link-columm" key={index}>
                        <h3>{col.title}</h3>
                        <ul>
                            {col.links.map((link, linkIndex) => (
                                <li key={linkIndex} about="#">{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="dc-logo-bg">

            </div>
        </div>
    );
};

export default FooterLinks;