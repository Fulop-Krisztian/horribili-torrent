export async function uploadPost(postDataToSend) {
    try {
        const formData = new FormData();
        for (const key in postDataToSend) {
            formData.append(key, postDataToSend[key]);
        }

        const response = await fetch('https://krissssz.ddns.net/upload.php', {
            method: 'POST',
            body: formData,
        });

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
