import React from 'react';
import { Link } from "react-router-dom";

class SearchLanding1 extends React.Component {
  render() {
    return (
      <div className="app_search">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <form class="d-flex sf" >
          <input class="form-control btn-search-box" id="stupidSearch" type="search" placeholder="ค้นหาบุคคลและผลงานคุณภาพได้ที่นี่" aria-label="Search" />
          <div class="d-flex">
            <button class="btn btn-search btn-search-static yellow" type="submit" >
              <img src="assets/images/search.png" alt="" id="btnstupidSearch" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
            </button>
          </div>
        </form>
      </div>


    );
  }
}

export default SearchLanding1;