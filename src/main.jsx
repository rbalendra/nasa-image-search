import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Set the document title
document.title = 'NASA Space Search';

// Update favicon
const favicon = document.querySelector('link[rel="icon"]');
if (favicon) {
	// Update existing favicon if it exists
	favicon.href = '/space-favicon.ico';
} else {
	// Create a new favicon link if it doesn't exist
	const newFavicon = document.createElement('link');
	newFavicon.rel = 'icon';
	newFavicon.href = '/space-favicon.ico';
	document.head.appendChild(newFavicon);
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
