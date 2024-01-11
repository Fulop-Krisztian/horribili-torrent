function Searchbar({onDataReceived}) {
    const handleSearch = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                onDataReceived(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    return (
        <form className="form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <input name="search" type="text" className="search-bar" placeholder="Anything your heart desires..."
                aria-label="Search" />
            <button className="search-button" type="submit">Search</button>
        </form>
    );
}

export default Searchbar;