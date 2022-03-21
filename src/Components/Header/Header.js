import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>
{
	const Menu =
	[
		{
			Label: "Subscriptions",
			Name: "Subscriptions",
			Path: "/subscriptions"
		},
		{
			Label: "TV Shows",
			Name: "TV_Shows",
			Path: "/tv-shows"
		},
		{
			Label: "Movies",
			Name: "Movies",
			Path: "/movies"
		},
		{
			Label: "Your Favorites",
			Name: "Your_Favorites",
			Path: "/favorites"
		},
		{
			Label: "Recommendations",
			Name: "Recommendations",
			Path: "/recommendations"
		},
		{
			Label: "New",
			Name: "New",
			Path: "/new"
		}
	];

	return (
		<header>
			<div className="Logo">
				<Link to='/'><span>Ultream</span></Link>
			</div>
			<nav className="Menu">
				{
					Menu.map (Menu_Item => <Link className="Menu_Item" to={Menu_Item.Path}>{Menu_Item.Label}</Link>)
				}
			</nav>
		</header>
	);
}

export default Header;