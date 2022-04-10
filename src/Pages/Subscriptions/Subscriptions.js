import Card from '../../Components/Card/Card';
import Grid from '../../Components/Grid/Grid';
import { Logos } from '../../Components/Logos';
import './Subscriptions.css';

const Subscriptions = () =>
{
	const Streaming_Services = 
	[
		{
			Name: "Amazon Prime Video",
			Logo: Logos.Amazon_Prime_Video
		},
		{
			Name: "Apple TV Plus",
			Logo: Logos.Apple_TV_Plus
		},
		{
			Name: "DirecTV Stream",
			Logo: Logos.DirecTV_Stream
		},
		{
			Name: "Disney+",
			Logo: Logos.Disney_Plus
		},
		{
			Name: "FuboTV",
			Logo: Logos.FuboTV
		},
		{
			Name: "HBO Max",
			Logo: Logos.HBO_Max
		},
		{
			Name: "Hulu",
			Logo: Logos.Hulu
		},
		{
			Name: "Netflix",
			Logo: Logos.Netflix
		},
		{
			Name: "Sling TV",
			Logo: Logos.Sling_TV
		},
		{
			Name: "YouTube TV",
			Logo: Logos.YouTube_TV
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