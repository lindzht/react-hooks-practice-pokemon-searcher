import React, {useState} from "react";

function Search({searchFunction}) {

  // const [searchResult, setSearchResult] = useState("")


  // const handleSearchResults = (e)=> {
  //   setSearchResult(e.target.value);
  // }
  
  function searchValue (e){
    searchFunction(e.target.value);
  }



  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={searchValue} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
