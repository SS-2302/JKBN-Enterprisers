// Google Drive API utility functions
// 
// SETUP INSTRUCTIONS:
// ===================
// 1. Create a Google Cloud Project at https://console.cloud.google.com
// 2. Enable the Google Drive API
// 3. Create an API Key (Credentials → Create Credentials → API Key)
// 4. Create a folder in Google Drive and upload your project images
// 5. Right-click the folder → Share → Change to "Anyone with the link can view"
// 6. Copy the folder ID from the URL: https://drive.google.com/drive/folders/YOUR_FOLDER_ID
// 7. Update FOLDER_ID and API_KEY in the config below
// 8. Images will automatically update when you upload new ones to the folder!
//
// HOW IT WORKS:
// =============
// - Fetches ONLY images (jpg, png, gif, webp, etc.) from your Google Drive folder
// - Automatically sorts by upload date (newest first)
// - Home page shows 4 most recent images
// - All Projects page shows all images
// - Auto-updates when you add new images to the folder



const GOOGLE_DRIVE_CONFIG = {
  FOLDER_ID: '1VZnx8FztnbwK62Inx33xUB5c_ZlF4uSd',
  API_KEY: 'AIzaSyACvIVP_rxCv2ojUhsGkwXzt4YdGfv3BDY',
};

/**
 * Fetches images from a Google Drive folder
 * REQUIREMENTS:
 * 1. The folder must be set to "Anyone with the link can view"
 * 2. You need a Google API Key with Drive API enabled
 * 3. Replace FOLDER_ID and API_KEY in the config above
 * 
 * FEATURES:
 * - Fetches ONLY image files (jpg, png, gif, etc.)
 * - Automatically sorts by upload date (newest first)
 * - Auto-updates when new images are uploaded to the folder
 */
export async function fetchGoogleDriveImages() {
  try {
    // Check if configuration is set
    if (
  GOOGLE_DRIVE_CONFIG.FOLDER_ID === 'YOUR_FOLDER_ID_HERE' ||
  GOOGLE_DRIVE_CONFIG.API_KEY === 'YOUR_API_KEY_HERE'
) {
      console.warn('Google Drive API not configured. Using placeholder images.');
      return getPlaceholderImages();
    }

    // API call that fetches ONLY images from the specified folder
    // Filter: mimeType contains 'image/' (jpg, png, gif, webp, etc.)
    // Sorted by: createdTime descending (newest uploads first)
    const url = `https://www.googleapis.com/drive/v3/files?q='${GOOGLE_DRIVE_CONFIG.FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${GOOGLE_DRIVE_CONFIG.API_KEY}&fields=files(id,name,webContentLink,thumbnailLink,mimeType,createdTime,modifiedTime)&orderBy=createdTime desc`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Google Drive API error: ${response.status}`);
    }

    const data = await response.json();
    const files = data.files || [];

    // Additional client-side sort to ensure newest first (in case API orderBy doesn't work)
    const sortedFiles = files.sort((a, b) => {
      const dateA = new Date(a.createdTime || a.modifiedTime).getTime();
      const dateB = new Date(b.createdTime || b.modifiedTime).getTime();
      return dateB - dateA; // Most recent first
    });

    // Transform to our format - removes file extensions from titles
    return sortedFiles.map((file, index) => ({
        id: file.id,
        url: `https://wsrv.nl/?url=https://drive.google.com/uc?id=${file.id}&export=view`,
        thumbnail: `https://wsrv.nl/?url=https://drive.google.com/uc?id=${file.id}&export=view&w=400&h=300&fit=cover&q=70`,
        title: file.name.replace(/\.[^/.]+$/, ''),
        }));
    } catch (error) {
        console.error('Error fetching Google Drive images:', error);
        // Return placeholder images as fallback
        return getPlaceholderImages();
    }
}
/**
 * Placeholder images for when Google Drive is not configured
 */
function getPlaceholderImages(){
  return [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      title: 'Residential Solar Installation',
      type: 'On-Grid',
      location: 'Mumbai, Maharashtra',
      capacity: '5kW',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop',
      title: 'Commercial Solar Project',
      type: 'Hybrid',
      location: 'Delhi, NCR',
      capacity: '50kW',
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      title: 'Industrial Solar Plant',
      type: 'Off-Grid',
      location: 'Bangalore, Karnataka',
      capacity: '200kW',
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      title: 'Solar Water Heater Setup',
      type: 'Solar Heater',
      location: 'Pune, Maharashtra',
      capacity: '300L',
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
      title: 'Rooftop Solar System',
      type: 'On-Grid',
      location: 'Chennai, Tamil Nadu',
      capacity: '10kW',
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1466629437334-b4f6603563c5?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1466629437334-b4f6603563c5?w=400&h=300&fit=crop',
      title: 'Farm Solar Installation',
      type: 'Off-Grid',
      location: 'Jaipur, Rajasthan',
      capacity: '25kW',
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=300&fit=crop',
      title: 'Business Solar Solution',
      type: 'Hybrid',
      location: 'Hyderabad, Telangana',
      capacity: '75kW',
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=400&h=300&fit=crop',
      title: 'Villa Solar Panel Setup',
      type: 'On-Grid',
      location: 'Goa',
      capacity: '8kW',
    },
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1560416313-414b33c856a9?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1560416313-414b33c856a9?w=400&h=300&fit=crop',
      title: 'Warehouse Solar Grid',
      type: 'Off-Grid',
      location: 'Ahmedabad, Gujarat',
      capacity: '150kW',
    },
    {
      id: '10',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      title: 'Solar Heater Installation',
      type: 'Solar Heater',
      location: 'Kolkata, West Bengal',
      capacity: '200L',
    },
    {
      id: '11',
      url: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=300&fit=crop',
      title: 'Apartment Solar System',
      type: 'Hybrid',
      location: 'Noida, UP',
      capacity: '30kW',
    },
    {
      id: '12',
      url: 'https://images.unsplash.com/photo-1452896637763-b9e5d5e9b1d3?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1452896637763-b9e5d5e9b1d3?w=400&h=300&fit=crop',
      title: 'Educational Solar Grid',
      type: 'On-Grid',
      location: 'Chandigarh',
      capacity: '100kW',
    },
  ];
}