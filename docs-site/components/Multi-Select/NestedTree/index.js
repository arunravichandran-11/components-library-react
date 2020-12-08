import React from 'react';
import '../multi-select.scss';
import CheckboxList from './check-list';
import PropTypes from 'prop-types';

class NestedTree extends React.Component {  
    constructor(props){
      super(props);

      this.selectedItems = [];
      this.state = {
        selectedOptions: {},
        selectedItems: {},
        newObject: {}
      }
    }

    filterResult = (subOptions) => {
      return subOptions.filter((subOption) => {
        if(subOption.selected) {
          return subOption;
        }
      });
    }

    checkChildren = (options) => {

        // let res = options.subOptions.filter((subOption) => {
        //   if(subOption.selected) {
        //     return subOption;
        //   }
        // });


        if(options.subOptions) {
          this.checkChildren(options.subOptions);
        } else {
          let res = this.filterResult(options);
        }

        // console.log('filtered', res);

        // let newObject = {
        //   id: options.id,
        //   subOptions: res
        // };


        // if(selectedChild) {
        //   // someting is selected - so add paarent;
        //   let filtered = options.subOptions.filter((option) => option.selected);

        //   let newObj = {
        //     ...options.id,
        //     ...options.name,
        //     selected:
        //   }
        // } else {

        //   console.log('po', options);
        // }
    }

    handleCheckListChange = (selectedOptions, selectedItems) => {

      // console.log('outside', selectedOptions);

      if(selectedOptions) {
        let data = this.checkChildren(selectedOptions);
        // console.log('res', data);
      }

      // if(selectedOptions)
      

      // this.setState({selectedItems});

      if(this.props.selectedItems) {
        this.props.selectedItems({selectedItems});
      }
    }



    addSelectedId = (child) => {
        child.subOptions.map((sub) => {
          if(sub.selected) {
            child.selectedIds = [...sub.id];
          } else {
            child.selectedIds = []
          }
        });
    }

    checkParent(parent) {
      if(parent.subOptions.every((child) => child.selected)){
        parent.selected = true;
      } else if(parent.subOptions.some((child) => child.selected)) {
        parent.selected = 'partial';
      } else {
        parent.selected = false;
      }
    }
    
    processSelection(parent, child, isChildSelected, originalData) {

      if(child.subOptions.length > 0) {
        this.addSelectedId(child);
      } else {
        child.selected = isChildSelected;

        this.checkParent(parent);
      }

      

      // child.selected = isChildSelected;
      // this.setState(new Object());
    }

    processFiltered(filtered) {
      filtered.map((item) => {
        if(item.subOptions) {

        } else {

        }
      })

      for(var i=0; i<filtered.length; i++) {
        if(filtered.subOptions) {

        }
      }
    }

    attachChild = (parent, result) => {

      let filtered = parent.subOptions ? parent.subOptions.filter((option) => {
        if(option.selected === 'selected' || option.selected === 'partial') {
          return option;
        }
      }) : parent.length > 0 ? parent.filter((option) => {
        if(option.selected === 'selected' || option.selected === 'partial') {
          return option;
        };
      }) : [];

      filtered.forEach((item) => {
        this.attachChild(item, {});
      });
      var newArray = filtered.map((item) => {
        return {
          id: item.id,
          name: item.name,
          selectedChild: item.selectedChild
        }
      });

      parent.selectedChild = newArray;
      if(parent.selectedChild.length == 0) {
        this.sendResponse({});
      } else {
        this.sendResponse(
          {
              id: parent.id,
              name: parent.name,
              selectedChild: parent.selectedChild
            }
        );
      }
    }

    sendResponse = (resData) => {

      var responseObj = Object.assign({}, this.props.selectedOptions, resData);

      this.props.selectedItems(responseObj);
    } 

    getResult = (res) => {
      console.log('res', res);
      this.selectedItems = {
        ...res,
      };
    }

    getFilter = (subOptions) => {
      return subOptions.filter((option) => (option.selected === 'selected' || option.selected === 'partial'));
    }

    nestedLoop(obj) {
      const res = {};
      function recurse(obj, current) {
        if(obj.subOptions) {
          let filtered = obj.subOptions.filter(option => ((option.selected === 'selected') || option.selected === 'partial'));
          if(filtered.length > 0) {
            current[obj.id] = {};
            filtered.forEach((item) => {
              if(item.selected === 'selected' || item.selected === 'partial') {
                current[obj.id][item.id] = {};
                recurse(item, current[obj.id]);
              }
            });
          }
          
        }
      }
      recurse(obj, res);
    
      console.log('response', JSON.stringify(res, null, 3));
      return res;
  }
  

    filterSelected = (data) => {

      let selectedResult = this.nestedLoop(data);

      console.log('sselected Result', selectedResult);

      this.props.selectedItems(selectedResult);
      
      // console.log('ths.props.dat', data);

      // let res = this.getFilter(data.subOptions);

      // var filtered = this.getFilter(data.subOptions);
    
      // data.subOptions.map((eachOption) => {
      //   if(eachOption.selected == 'selected' || eachOption.selected == 'partial') {
      //     // eachOption = undefined;
      //     console.log('eac', eachOption);
      //     this.selectedItems.push(eachOption);
      //   } else {
      //     console.log('else', eachOption);
      //   }
      // });

      // this.selectedItems = [...filtered];

      // console.log('data after', data, this.selectedItems);;




      // if(res.selected === 'partial') {
      //   this.filterSelected(res);
      // } else {
      //   console.log('else', res);
      // }

      // let filter = data.subOptions ? data.subOptions.filter((option) => {

      //   if(option.selected === 'selected' || option.selected === 'partial') {
      //     return option;
      //   }
      // }) : [];

      // console.log('filter', res);

      // if(filter.length > 0) {
      //   let result = this.filterSelected(filter);
      // }

      // data.selectedItems = [...filter];

      // this.getResult(res);


      // let subOptions = parent.subOptions;

      // if(parent.subOptions && parent.subOptions.length > 0) {
      //   for (let i = 0; i < subOptions.length; i++) {
      //     if (subOptions[i].selected === 'selected') {
      //         console.log('sib', subOptions[i].id);
      //         var selectedIds = [];
      //         selectedIds.push(subOptions[i].id);
      //         var selectedObj = {
      //           id: parent.id,
      //           name: parent.name,
      //           selectedChild: [...selectedIds]
      //         }
      //         parent.selectedItem = selectedObj;
      //     }
      //   }
      //   console.log(parent);
      // }
    }

    processSelectedData = (obj, parent) => {
      console.log('obj', obj, parent);

      this.filterSelected(this.props.data);


        // if(parent.selected === 'selected' || parent.selected === 'partial') {
        //   if(parent.subOptions && parent.subOptions.length > 0) {
        //     let resp = this.attachChild(parent, {});
        //   }
        // } else {

        //   if(parent.subOptions && parent.subOptions.length > 0) {
        //     this.attachChild(parent);  
        //   } else {
        //     if(parent.selected === 'selected') {
        //       this.attachChild(data);
        //     }
        //   }
        // }
  
    }
    render() {
      const {data, title, align} = this.props;
      

      return (

          <div className="multi-select-container nested-tree-container">
             <h2 className="title">{title}</h2>
             <CheckboxList
               options={data}
               align={align}
               onSelect = {this.processSelectedData}
               selectedOptions={this.state.selectedItems} 
              />
           </div>
       )
    }
}  

NestedTree.propTypes = {
  // data: PropTypes.array,
  title: PropTypes.string,
  selectedItems: PropTypes.func,
};

export default NestedTree;
