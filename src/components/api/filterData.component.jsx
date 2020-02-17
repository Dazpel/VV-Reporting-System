

function allegationFilter(val) {
  let a = val;
  let filterData = [];

  switch (a) {
    case 'Counterfeit Currency Fraud':
      filterData = [
        'Serial No',
        'Denomination',
        'Series',
        'Pax/Crew',
        'Source/Suspicious'
      ];
      break;
    case 'Missing Person':
      filterData = ['Was the person found?', 'Exact Location'];
      break;
    case 'Sexual Assault':
    case 'Sexual Assault - Rape':
    case 'Sexual Touching':
      filterData = [
        'Delivered Survivor Support Guide?',
        'By who',
        'ID',
        'Date',
        'Time',
        'Witness by who'
      ];
      break;

    default:
      break;
  }

  return filterData;
}

function extraAllegationArray(val) {

  return allegationFilter(val);

}

export default extraAllegationArray;
