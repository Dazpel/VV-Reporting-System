import React from 'react';
import { FormLabel, Box, Select } from '@chakra-ui/core';

function categories(a) {
  
var x = a; 

  var physical = [
    'Bomb Threat',
    'Breach of Security',
    'Breach of Security - Attempted',
    'Prohibited item onboard - Ammunition',
    'Prohibited item onboard - Firearm',
    'Prohibited item detected ashore - AmmoFirearm',
    'Stowaway',
    'Suspicious Object',
    'Other'
  ];

  var crew = [
    'Alcohol Policy Violation',
    'Disorderly Conduct',
    'Drug Use',
    'Fighting',
    'Fraternization w/ Passenger',
    'General Harassment',
    'Sexual Harassment ',
    'Unauthorized Access',
    'Underage Drinking',
    'Verbal Altercation',
    'Other'
  ];

  var crime = [
    'Arson',
    'Assault w/ Minor /No injury - Domestic Violence',
    'Assault w/ Minor /No injury - Other then Domestic',
    'Assault w/ serious bodily injury - Domestic Violence',
    'Assault w/ serious bodily injury - Other then Domestic',
    'Attempted Murder',
    'Counterfeit Currency Fraud',
    'Drugs - Possession onboard',
    'Drugs - Possession going ashore',
    'Drugs - Possession while attempting to board',
    'Drugs - Suspected Trafficking',
    'Drugs - Trafficking',
    'Firing or Tampering with the Vessel',
    'Fraud under $10,000',
    'Fraud over $10,000',
    'Hate Crime',
    'Homicide',
    'Indecent Exposure',
    'Kidnapping',
    'Robbery Ashore - Minor or no injury',
    'Robbery Ashore - w/ serious bodily injury',
    'Sexual Assault',
    'Sexual Assault - Rape',
    'Sexual Touching',
    'Suspected Child Pornography',
    'Theft -  under $1000 ',
    'Theft -  between $1000 to $10,000',
    'Theft - $10,000 and over',
    'Threat of Violence',
    'Vandalism',
    'Other'
  ];

  var missing = [
    'Jump Ship - Crew',
    'Jump Ship - Passenger',
    'Missed ship in port - Missing ashore',
    'Missing on Turnaround - Access control system',
    'Not located after 60 minutes of initial report',
    'Man Overboard'
  ];

  var destructive = ['Threat by Action', 'Written/Verbal Threat'];

  var serious = [
    'Dangerous Behaviour',
    'Disorderly Conduct',
    'Fighting',
    'Fraternization with Crew',
    'General Harassment',
    'Providing alcohol to a person under 21',
    'Sexual Harassment',
    'Sexual Touching - Unintentional  Accidental',
    'Solicitation',
    'Unauthorized access - Passenger in Crew areas',
    'Unauthorized access - Passenger in other passenger areas',
    'Underage Drinking',
    'Verbal Altercation',
    'Other'
  ];

  var death = [
    'Explainable Death',
    'Suicide',
    'Unexplained Death - Not suspicious',
    'Unexplained Death - Suspicious'
  ];

  var selected = a;
  var list = [];

  if (selected === null) {
    console.log('waiting for selection on main allegation category');
  } else {
   

    switch (a) {
      case 'Physical Security':
        list = physical;
        break;
  
      case 'Crew Conduct Policy Violation':
        list = crew;
        break;
  
      case 'Crime':
        list = crime;
        break;
  
      case 'Missing Person':
        list = missing;
        break;
  
      case 'Self Destructive Threat':
        list = destructive;
        break;
  
      case 'Passenger Conduct Violation':
        list = serious;
        break;
  
      case 'Death':
        list = death;
        break;
      default:
        break;
    }
  }
  return list
}

function mapOptions(val) {
  
  return (
    
    categories(val)

  );
}

export default mapOptions;

Object.entries(lawFields(this.state.lawEnforcement))
                      .map((obj)=>obj.map((objs, y)=>(console.log(objs, y))))