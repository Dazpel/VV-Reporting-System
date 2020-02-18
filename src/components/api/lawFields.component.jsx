function lawArray(val) {
    let a = val;
    let filterData = [];
  
    switch (a) {
      case 'Yes':
        filterData = [
          'Officer reported to',
          'Agency name',
          'Case number (if applicable)',
          'Port agent',
          
        ];
        break;
      case 'No':
      filterData = [
        'Reason',
        'Preliminary outcome of notification',
        'Reported by',
        'LE Agency notified via?',
      ];
      break;
  
      default:
        break;
    }
  
    return filterData;
  }
  
  function lawFields(val) {
    return lawArray(val);
  }
  
  export default lawFields;
  