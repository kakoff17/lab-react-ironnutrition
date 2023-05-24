import { Input } from 'antd';

function Search({searchInput, setSearchInput}) {

    const handleSearch = (event) => {
        setSearchInput(event.target.value)
    }
  return (
    <div>
        <h2>Search</h2>        
        <Input placeholder="Busca la comida" value={searchInput} onChange={handleSearch}/>
    </div>
  )
}

export default Search;