import React from 'react';

class SearchLanding1 extends React.Component {
  render() {
    return (
      <form class="d-flex" >
        <input class="form-control btn-search-box home" id="stupidSearch" type="search" placeholder="ค้นหาบุคคลและผลงานคุณภาพได้ที่นี่" aria-label="Search" />
        <button class="btn btn-search yellow" type="submit" >
          <img src="assets/images/search.png" alt="" id="btnstupidSearch" />
        </button>
      </form>

    );
  }
}

export default SearchLanding1;