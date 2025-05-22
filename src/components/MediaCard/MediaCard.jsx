import React from 'react';
import './MediaCard.scss';

// this component is responsible for displaying individual media items
// it receives the item prop from the MediaLoader component
const MediaCard = ({ item }) => {
	// Function to open image in new tab when clicked
	const handleImageClick = () => {
		if (item.links && item.links[0]) {
			window.open(item.links[0].href, '_blank');
		}
	};

	return (
		<div className='media-card'>
			{item.links && item.links[0] && (
				<div className='image-container'>
					<img
						src={item.links[0].href}
						alt={
							(item.data && item.data[0] && item.data[0].title) || 'NASA image'
						}
						onClick={handleImageClick}
						className='clickable-image'
					/>
				</div>
			)}
			<div className='media-info'>
				<h3>
					{(item.data && item.data[0] && item.data[0].title) || 'Untitled'}
				</h3>
				<p>
					{item.data && item.data[0] && item.data[0].description
						? item.data[0].description.substring(0, 150)
						: 'No description available'}
					{item.data &&
					item.data[0] &&
					item.data[0].description &&
					item.data[0].description.length > 150
						? '...'
						: ''}
				</p>
				<p className='date'>
					Date:{' '}
					{item.data && item.data[0] && item.data[0].date_created
						? item.data[0].date_created.split('T')[0]
						: 'Unknown'}
				</p>
			</div>
		</div>
	);
};

export default MediaCard;
