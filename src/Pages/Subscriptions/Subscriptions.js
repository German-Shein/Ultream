import Card from '../../Components/Card/Card';
import Grid from '../../Components/Grid/Grid';
import './Subscriptions.css';

const Subscriptions = () =>
{
	const Streaming_Services = 
	[
		{
			Name: "Amazon Prime Video",
			Logo: "../../Images/Amazon_Prime_Video_Logo.png"
		},
		{
			Name: "Apple TV Plus",
			Logo: "../../Images/Apple_TV_Plus_Logo.png"
		},
		{
			Name: "DirecTV Stream",
			Logo: "../../Images/DirecTV_Stream_Logo.png"
		},
		{
			Name: "Disney+",
			Logo: "../../Images/Disney+_Logo.png"
		},
		{
			Name: "FuboTV",
			Logo: "../../Images/FuboTV_Logo.png"
		},
		{
			Name: "HBO Max",
			Logo: "../../Images/HBO_Max_Logo.png"
		},
		{
			Name: "Hulu",
			Logo: "../../Images/Hulu_Logo.png"
		},
		{
			Name: "Netflix",
			Logo: "../../Images/Netflix_Logo.png"
		},
		{
			Name: "Sling TV",
			Logo: "../../Images/Sling_TV_Logo.png"
		},
		{
			Name: "YouTube TV",
			Logo: "../../Images/YouTube_TV_Logo.png"
		}
	];

	return (
		<div className="Subscriptions">
			<Grid>
				{Streaming_Services.map (Streaming_Service => <Card Description={Streaming_Service.Name} Image_URL={Streaming_Service.Logo}></Card>)}
			</Grid>
		</div>
	);
}

export default Subscriptions;