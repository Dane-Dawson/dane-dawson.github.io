import "./SearchBar.css"

export default function SearchBar() {
    return (
      <div className="searchbar-main-div">
        <input className="searchbar-input" placeholder="Find a repository..."></input>
        <span> Filter by language:</span>
        <select placeholder="Type">
        <option value="javascript">JavaScript</option>
        </select>
      </div>
    );
  }