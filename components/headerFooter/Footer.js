export default function Footer(props) {
    return (
        <footer>
            <div className="footer-container">
                <h1 aria-label="Contact us">Contact us</h1>
                <p><a href="mailto:email@coffee.uw.edu" aria-label="Send an email to xchang3@uw.edu"><span className="material-icons">email</span> xchang3@uw.edu</a></p>
                <p><a href="tel:555-123-4567" aria-label="Call us at 206-832-6277"><span className="material-icons">phone</span> 206-832-6277</a></p>
                <p>&copy; Furever Home 2023</p>
            </div>
        </footer>
    );
}
