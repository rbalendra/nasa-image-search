const NASA_API_URL = 'https://images-api.nasa.gov';
// const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export async function fetchApi(searchQuery = 'moon') {
	try {
		const url = `${NASA_API_URL}/search?q=${searchQuery}&media_type=image`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		console.log('NASA API response:', data); // Log the full response for debugging
		return data.collection?.items || [];
	} catch (error) {
		console.error('Error fetching data:', error);
		return [];
	}
}
