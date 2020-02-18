import React, { Component } from 'react';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  SimpleGrid,
  Box,
  Select,
  Text,
  Textarea
} from '@chakra-ui/core';
//import dayjs from 'dayjs';
import './form.styles.css';
import ButtonSucess from '../button/buttonSuccess.component';
import '../button/button.styles.css';
import './form.styles.css';
import allegationArray from '../api/data.component';
import extraAllegationArray from '../api/filterData.component';

var uniqid = require('uniqid');
//let currentDate = dayjs().format();

export default class incidentReport extends Component {
  documentData;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearState = this.clearState.bind(this);

    this.state = {
      mainAllegation: '',
      specificAllegation: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  handleChangeChoice = e => {
    this.handleChange(e);

    switch (e.target.name) {
      case 'f7':
        if (
          e.target.value === 'Sexual Assault' ||
          'Sexual Assault - Rape' ||
          'Sexual Touching' ||
          'Jump Ship - Crew' ||
          'Jump Ship - Passenger' ||
          'Missed ship in port - Missing ashore' ||
          'Missing on Turnaround - Access control system' ||
          'Not located after 60 minutes of initial report' ||
          'Man Overboard'
        ) {
          this.setState({ mainAllegation: e.target.value });
          this.setState({ specificAllegation: e.target.value });
        } else {
          this.setState({ mainAllegation: e.target.value });
        }

        break;
      case 'f8':
        this.setState({ specificAllegation: e.target.value });
        break;

      default:
        break;
    }
  };

  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault();

    var key = uniqid();
    console.log(key);

    localStorage.setItem('document', JSON.stringify(this.state));
    //alert("Form key identifier is: "+ key + ".  Use this identifier if you want to retrieve this data later");
    //document.getElementById('personalInjury').reset();
  }

  // React Life Cycle
  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
    let form = document.getElementById('personalInjury');
    let formElements = form.elements;

    if (localStorage.key('document')) {
      const savedData = JSON.parse(localStorage.getItem('document')); // get and parse the saved data from localStorage
      for (const element of formElements) {
        if (element.name in savedData) {
          element.value = savedData[element.name];
        }
      }
    }
  }

  clearState() {
    localStorage.clear();
    document.getElementById('personalInjury').reset();
  }

  render() {
    function print() {
      window.print();
    }

    function checkState(state) {
      let checkMe = [
        'Counterfeit Currency Fraud',
        'Sexual Assault',
        'Sexual Assault - Rape',
        'Sexual Touching',
        'Jump Ship - Crew',
        'Jump Ship - Passenger',
        'Missed ship in port - Missing ashore',
        'Missing on Turnaround - Access control system',
        'Not located after 60 minutes of initial report',
        'Man Overboard',
        'Sexual Assault',
        'Sexual Assault - Rape',
        'Sexual Touching'
      ];

      let a = '';

      console.log(checkMe.indexOf(state));
      checkMe.indexOf(state) !== -1 ? (a = true) : (a = false);

      return a;
    }

    let allegationInputs = [];

    return (
      <Box margin="2rem">
        <form onSubmit={this.handleFormSubmit} id="personalInjury">
          <FormControl>
            <SimpleGrid
              id="mainGrid"
              minChildWidth="315px"
              spacing={10}
              columns={2}
              bg="white"
            >
              <Text fontSize="3xl" className="formTitle">
                Incident Report
              </Text>
              <Box>
                <FormLabel htmlFor="f2">Name of Ship</FormLabel>
                <Select name="f2" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="ScarletLady">Scarlet Lady</option>
                  <option value="DeathStar">Death Star</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f3">Date and Time of Incident:</FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                    type="date"
                    name="f3a"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    type="time"
                    name="f3b"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f4">
                  Date incident was reported on
                </FormLabel>

                <Input
                  type="date"
                  name="f4a"
                  placeholder="name"
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="f5">Incident reported by</FormLabel>
                <Select name="f5" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Crew">Crew</option>
                  <option value="Passenger">Passenger</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Other">Other</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="f6">Person entering this report:</FormLabel>
                <SimpleGrid width="100%" columns={3}>
                  <Input
                    name="f6a"
                    placeholder="first name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    name="f6b"
                    placeholder="last name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="10px"
                    name="f6c"
                    placeholder="position"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f7">Main allegation category</FormLabel>
                <Select
                  name="f7"
                  onChange={e => {
                    this.handleChange(e);
                    this.handleChangeChoice(e);
                  }}
                >
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Physical Security">Physical Security</option>
                  <option value="Crew Conduct Policy Violation">
                    Crew Conduct Policy Violation
                  </option>
                  <option value="Crime">Crime</option>
                  <option value="Missing Person">Missing Person</option>
                  <option value="Self Destructive Threat">
                    Self Destructive Threat
                  </option>
                  <option value="Passenge Conduct Violation">
                    Passenge Conduct Violation
                  </option>
                  <option value="Death">Death</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="f8">Specific Incident Allegation</FormLabel>
                <Select
                  name="f8"
                  onChange={e => {
                    this.handleChange(e);
                    this.handleChangeChoice(e);
                  }}
                >
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  {allegationArray(this.state.mainAllegation).map((x, y) => (
                    <option key={y}>{x}</option>
                  ))}
                </Select>
              </Box>

              {checkState(this.state.specificAllegation)
                ? ((allegationInputs = extraAllegationArray(
                    this.state.specificAllegation
                  )),
                  allegationInputs.map((x, y) => (
                    <Box key={y}>
                      <FormLabel htmlFor={y + 'a'}>{x}</FormLabel>
                      <Input
                        name={y + 'a'}
                        placeholder={x}
                        onChange={this.handleChange}
                      />
                    </Box>
                  )))
                : console.log('Nothing Here')}


<Box>
                <FormLabel htmlFor="f9">Did the incident involve any property/alcohol/drugs</FormLabel>
                <Select name="f9" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Box>
              

              <Box>
                <FormLabel htmlFor="f9">Primary incident location</FormLabel>
                <Select name="f9" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Public Pax Area">Public Pax Area</option>
                  <option value="Crew Area">Crew Area</option>
                  <option value="Pax/Crew Cabin">Pax/Crew Cabin</option>
                  <option value="Ashore">Ashore</option>
                  <option value="Other">Other</option>
                </Select>
              </Box>
              


              <Box>
                <FormLabel htmlFor="f9">Ship Location</FormLabel>
                <Select name="f9" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="At sea">At sea</option>
                  <option value="In port">In port</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f10">Nearest point of Land and Distance from it</FormLabel>
                <Input
                type='number'
                min="0"
                  name="f10a"
                  placeholder="Nautical Miles"
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="f3">LON/LAT</FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                    
                    name="f3a"
                    placeholder="LON"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                   
                    name="f3b"
                    placeholder="LAT"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f3">Next Port Scheduled</FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                    type="date"
                    name="f3a"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    type="time"
                    name="f3b"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f3">Next US Port Scheduled</FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                    type="date"
                    name="f3a"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    type="time"
                    name="f3b"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f3">Embarkation Port and Date</FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                    type="date"
                    name="f3a"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    type="time"
                    name="f3b"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f3">Disembarkation Port and Date</FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                    type="date"
                    name="f3a"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    type="time"
                    name="f3b"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f6">
                  Number of pax and crew onboard
                </FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                  type="number"
                  min="0"
                    name="f6a"
                    placeholder="Pax Onboard"
                    onChange={this.handleChange}
                  />
                  <Input
                  type="number"
                  min="0"
                    marginLeft="5px"
                    name="f6b"
                    placeholder="Crew  Onboard"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f10">Charter / Special Group</FormLabel>
                <Input
                  name="f10a"
                  placeholder="Group"
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="f9">Voyage Destination</FormLabel>
                <Select name="f9" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Miami">Miami</option>
                  <option value="Genoa">Genoa</option>
                  <option value="Bimini">Bimini</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f10">Voyage Length</FormLabel>
                <Input
                  name="f10a"
                  placeholder="Length"
                  onChange={this.handleChange}
                />
              </Box>
              <Box gridColumn="span 2">
                <FormLabel htmlFor="f14">Incident Synopsis</FormLabel>
                <Textarea
                  name="f14"
                  onChange={this.handleChange}
                  placeholder="Describe the incident"
                />
              </Box>
            </SimpleGrid>
          </FormControl>
          <SimpleGrid columns={3} width="100%" className="btnToCenter">
            <ButtonSucess type="submit" />
            <Button onClick={print} className="btnBasic" variantColor="blue">
              Print
            </Button>
            <Button
              onClick={this.clearState}
              className="btnBasic"
              variantColor="red"
            >
              Clear Form
            </Button>
          </SimpleGrid>
        </form>
      </Box>
    );
  }
}
