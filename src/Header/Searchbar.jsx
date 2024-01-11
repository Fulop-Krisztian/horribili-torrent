function Searchbar() {
    return (
        <form class="form" action="search.php" method="get">
            <input name="search" type="text" class="search-bar" placeholder="Anything your heart desires..."
                aria-label="Search"></input>
            <button class="search-button" type="submit" style="cursor: pointer;">Search</button>
        </form>
    );
}

export default Searchbar