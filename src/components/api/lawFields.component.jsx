function lawArray(val) {
  let a = val;
  let filterData = {};

  switch (a) {
    case 'Yes':
      filterData = {
        1: {
          name: 'Officer reported to',
          type: 'text',
          placeholder: 'Name of Officer',
          key: 1
        },
        2: {
          name: 'Agency name',
          type: 'text',
          placeholder: 'e.g FBI',
          key: 2
        },
        3: {
          name: 'Case number (if applicable)',
          type: 'number',
          placeholder: '#',
          key: 3
        },
        4: {
          name: 'Port agent',
          type: 'text',
          placeholder: 'Name',
          key: 4
        }
      };
      break;
    case 'No':
      filterData = {
        1: {
          name: 'Reason',
          type: 'text',
          placeholder: 'Name of Officer',
          key: 1
        },
        2: {
          name: 'Preliminary outcome of notification',
          type: 'text',
          placeholder: 'e.g FBI',
          key: 2
        },
        3: {
          name: 'Reported by',
          type: 'number',
          placeholder: '#',
          key: 3
        },
        4: {
          name: 'LE Agency notified via?',
          type: 'text',
          placeholder: 'Name',
          key: 4
        },
        5: {
          name: 'Date of Notification',
          type: 'date',
          placeholder: 'date',
          key: 5
        },
        6: {
          name: 'Time of Notification',
          type: 'time',
          placeholder: 'time',
          key: 6
        }
      };
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
