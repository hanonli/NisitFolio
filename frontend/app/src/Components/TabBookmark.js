import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class TabBookmark extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        activeTab: this.props.children[0].props.label,
      };
    }
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }

    render() {
        const {
          onClickTabItem,
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;
    
        return (
		<div class="tab-inline bookmark-tabs-fixed">
		<div class="container-fluid">
		<div class="row">
          <div className="tabs">
			<div class="col">
				<ol className="tab-list">
				  {children.map((child) => {
					const { label } = child.props;
		
					return (
					  <Tab
						activeTab={activeTab}
						key={label}
						label={label}
						onClick={onClickTabItem}
					  />
					);
				  })}
				<div class="float-end">
					<img src="assets/images/outline_grid_view_black_48dp 2.png" alt="" width="40" height="40"/>
					  <button class="btn btn-cta-primary round grey dropdown-toggle tab-dropdown-pad" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						เรียงตามล่าสุด
					  </button>
					  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a class="dropdown-item" href="#">เรียงตามความนิยม</a></li>
						<li><a class="dropdown-item" href="#">เรียงตามล่าสุด</a></li>
						<li><a class="dropdown-item" href="#">เรียงตามตัวอักษร</a></li>
					  </ul>

					จำนวน 44 รายการ
				</div>
							

				</ol>
				</div>
				<div className="tab-content bookmark-content-scroll">
				  {children.map((child) => {
					if (child.props.label !== activeTab) return undefined;
					return child.props.children;
				  })}
				</div>
			</div>
          </div>
		  </div>
		  </div>
        );
      }
    }
    
    export default TabBookmark;