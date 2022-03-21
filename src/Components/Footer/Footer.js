import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () =>
{
	const Menu =
	[
        {
			Label: "About Us",
			Path: "/about-us"
		},
        {
			Label: "Terms & Conditions",
			Path: "/terms-and-conditions"
		},
		{
			Label: "FAQs and Help",
			Path: "/help"
		},
		{
			Label: "Contact Us",
			Path: "/contact-us"
		},
		{
			Label: "Careers",
			Path: "/careers"
		}
	];

	return (
		<footer>
            <p className="Copyright">© {new Date ().getFullYear ()} Ultream, Inc.</p>
			<nav className="Menu">
				{
					Menu.map (Menu_Item => <Link className="Menu_Item" to={Menu_Item.Path}>{Menu_Item.Label}</Link>)
				}
			</nav>
		</footer>
	);
}

export default Footer;