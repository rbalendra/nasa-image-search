import React, { useEffect, useState } from 'react';
import { fetchApi } from '../../utils/FetchApi';
import MediaCard from '../MediaCard/MediaCard';
import SearchBar from '../SearchBar/SearchBar';
import './MediaLoader.scss';

const MediaLoader = () => {
	/* --------------------- // State variables -------------------- */
	const [mediaItems, setMediaItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searchQuery, setSearchQuery] = useState('moon');

	/* --------------------- // Fetch data from the NASA API -------------------- */
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await fetchApi(searchQuery);
				console.log('Media items:', data);
				setMediaItems(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [searchQuery]);

	/* --------------------- // Handle search -------------------- */
	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	/* --------------------- // Render media items -------------------- */
	return (
		<div className='media-container'>
			<h1>NASA Image Search</h1>
			<SearchBar onSearch={handleSearch} />

			{loading && (
				<div className='loading'>
					Searching NASA media for "{searchQuery}"...
				</div>
			)}
			{error && <div className='error'>Error: {error.message}</div>}

			{!loading && !error && (
				<>
					{mediaItems.length === 0 ? (
						<div className='no-results'>
							No images found for "{searchQuery}"
						</div>
					) : (
						<div className='media-grid'>
							{mediaItems.map((item, index) => (
								<MediaCard key={index} item={item} /> // passing the item prop to MediaCard
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default MediaLoader;
