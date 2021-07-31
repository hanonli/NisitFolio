import React from 'react';

class SearchLanding1 extends React.Component {
  render() {
    return (
      <div className="app_search">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <form class="d-flex" >
          <input class="form-control btn-search-box" id="stupidSearch" type="search" placeholder="ค้นหาบุคคลและผลงานคุณภาพได้ที่นี่" aria-label="Search" />
          <button class="btn btn-search yellow fixld" type="submit" id="width_button" >
            <img src="assets/images/search.png" alt="" id="btnstupidSearch" />
          </button>
        </form>        
      </div>


    );
  }
}

export default SearchLanding1;