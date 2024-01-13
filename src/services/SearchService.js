export async function searchPosts(searchTerm) {
  try {
    const response = await fetch(`https://krissssz.ddns.net/search.php?search=${searchTerm}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
}