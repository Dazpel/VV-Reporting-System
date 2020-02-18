function drugsArray(val) {
    let a = val;
    let filterData = [];
  
    switch (a) {
      case 'Yes':
        filterData = [
          'How were the drugs/alcohol obtained?',      
        ];
        break;
  
      default:
        break;
    }
  
    return filterData;
  }
  
  function alcoholFields(val) {

    return drugsArray(val);

  }
  
  export default alcoholFields;
  