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
    case 'Jump Ship - Crew':
    case 'Jump Ship - Passenger':
    case 'Missed ship in port - Missing ashore':
    case 'Missing on Turnaround - Access control system':
    case 'Not located after 60 minutes of initial report':
    case 'Man Overboard':
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
