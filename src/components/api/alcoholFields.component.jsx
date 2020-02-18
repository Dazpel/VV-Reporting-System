function drugsArray(val) {
    let a = val;
    let filterData = [];
  
    switch (a) {
      case 'Yes':
        filterData = [
          'How were those obtained',
          'explain any condition that contributed to the incident',
          
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
  