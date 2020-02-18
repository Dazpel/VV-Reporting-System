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
  Textarea,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/core';
//import dayjs from 'dayjs';
import './form.styles.css';
import ButtonSucess from '../button/buttonSuccess.component';
import '../button/button.styles.css';
import './form.styles.css';
import allegationArray from '../api/data.component';
import extraAllegationArray from '../api/filterData.component';
import lawFields from '../api/lawFields.component';
import alcoholFields from '../api/alcoholFields.component';

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
      specificAllegation: '',
      lawEnforcement: '',
      alcoholDrugsInvolved: '',
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
        case 'f9':
        this.setState({ alcoholDrugsInvolved: e.target.value });
        break;
        case 'f30':
        this.setState({ lawEnforcement: e.target.value });
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
            <Accordion defaultIndex={[0]} allowMultiple>

              <AccordionItem>
                <AccordionHeader
                  className="accordionStyle"
                  _expanded={{
                    bg: '#3182ce',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    1. Incident Report
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  <SimpleGrid
                    id="mainGrid"
                    minChildWidth="315px"
                    spacing={10}
                    columns={2}
                    bg="white"
                  >
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
                      <FormLabel htmlFor="f3">
                        Date and Time of Incident:
                      </FormLabel>
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
                      <FormLabel htmlFor="f6">
                        Person entering this report:
                      </FormLabel>
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
                      <FormLabel htmlFor="f7">
                        Main allegation category
                      </FormLabel>
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
                        <option value="Physical Security">
                          Physical Security
                        </option>
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
                      <FormLabel htmlFor="f8">
                        Specific Incident Allegation
                      </FormLabel>
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
                        {allegationArray(this.state.mainAllegation).map(
                          (x, y) => (
                            <option key={y}>{x}</option>
                          )
                        )}
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
                      <FormLabel htmlFor="f9">
                        Did the incident involve any property/alcohol/drugs
                      </FormLabel>
                      <Select name="f9" onChange={this.handleChangeChoice}>
                        <option value="0" isDisabled>
                          Please select...
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Select>
                    </Box>

                    <Box>
                      <FormLabel htmlFor="f10">
                        Primary incident location
                      </FormLabel>
                      <Select name="f10" onChange={this.handleChange}>
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
                      <FormLabel htmlFor="f11">Ship Location</FormLabel>
                      <Select name="f11" onChange={this.handleChange}>
                        <option value="0" isDisabled>
                          Please select...
                        </option>
                        <option value="At sea">At sea</option>
                        <option value="In port">In port</option>
                      </Select>
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f12">
                        Nearest point of Land and Distance from it
                      </FormLabel>
                      <Input
                        type="number"
                        min="0"
                        name="f12a"
                        placeholder="Nautical Miles"
                        onChange={this.handleChange}
                      />
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f13">LON/LAT</FormLabel>
                      <SimpleGrid width="100%" columns={2}>
                        <Input
                          name="f13a"
                          placeholder="LON"
                          onChange={this.handleChange}
                        />
                        <Input
                          marginLeft="5px"
                          name="f13b"
                          placeholder="LAT"
                          onChange={this.handleChange}
                        />
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f14">Next Port Scheduled</FormLabel>
                      <SimpleGrid width="100%" columns={2}>
                        <Input
                          type="date"
                          name="f14a"
                          placeholder="name"
                          onChange={this.handleChange}
                        />
                        <Input
                          marginLeft="5px"
                          type="time"
                          name="f14b"
                          placeholder="name"
                          onChange={this.handleChange}
                        />
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f15">Next US Port Scheduled</FormLabel>
                      <SimpleGrid width="100%" columns={2}>
                        <Input
                          type="date"
                          name="f15a"
                          placeholder="name"
                          onChange={this.handleChange}
                        />
                        <Input
                          marginLeft="5px"
                          type="time"
                          name="f15b"
                          placeholder="name"
                          onChange={this.handleChange}
                        />
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f16">
                        Embarkation Port and Date
                      </FormLabel>
                      <SimpleGrid width="100%" columns={2}>
                        <Input
                          type="date"
                          name="f16a"
                          placeholder="name"
                          onChange={this.handleChange}
                        />
                        <Input
                          marginLeft="5px"
                          type="time"
                          name="f16b"
                          placeholder="name"
                          onChange={this.handleChange}
                        />
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f17">
                        Disembarkation Port and Date
                      </FormLabel>
                      <SimpleGrid width="100%" columns={2}>
                        <Input
                          type="date"
                          name="f17a"
                          placeholder="name"
                          onChange={this.handleChange}
                        />
                        <Input
                          marginLeft="5px"
                          type="time"
                          name="f17b"
                          placeholder="name"
                          onChange={this.handleChange}
                        />
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f18">
                        Number of pax and crew onboard
                      </FormLabel>
                      <SimpleGrid width="100%" columns={2}>
                        <Input
                          type="number"
                          min="0"
                          name="f18a"
                          placeholder="Pax Onboard"
                          onChange={this.handleChange}
                        />
                        <Input
                          type="number"
                          min="0"
                          marginLeft="5px"
                          name="f18b"
                          placeholder="Crew  Onboard"
                          onChange={this.handleChange}
                        />
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f19">
                        Voyage: Number and Sail Date
                      </FormLabel>
                      <SimpleGrid width="100%" columns={2}>
                        <Input
                          type="number"
                          min="0"
                          name="f19a"
                          placeholder="Voyage Number"
                          onChange={this.handleChange}
                        />
                        <Input
                          type="date"
                          marginLeft="5px"
                          name="f19b"
                          placeholder="Sail Date"
                          onChange={this.handleChange}
                        />
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <FormLabel htmlFor="f20">
                        Voyage: Destination and Length
                      </FormLabel>
                      <SimpleGrid width="100%" columns={2}>
                        <Select name="f20" onChange={this.handleChange}>
                          <option value="0" isDisabled>
                            Please select...
                          </option>
                          <option value="Miami">Miami</option>
                          <option value="Genoa">Genoa</option>
                          <option value="Bimini">Bimini</option>
                        </Select>
                        <Input
                          name="f20a"
                          marginLeft="5px"
                          placeholder="Length"
                          onChange={this.handleChange}
                        />
                      </SimpleGrid>
                    </Box>
                    <Box gridColumn="span 2">
                      <FormLabel htmlFor="f21">Incident Synopsis</FormLabel>
                      <Textarea
                        name="f21"
                        onChange={this.handleChange}
                        placeholder="Describe the incident"
                      />
                    </Box>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader
                  className="accordionStyle"
                  _expanded={{
                    bg: '#3182ce',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    2. Law Enforcement Agency Notification
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  <SimpleGrid
                    id="mainGrid"
                    minChildWidth="315px"
                    spacing={10}
                    columns={2}
                    bg="white"
                  >
                    <Box>
                      <FormLabel htmlFor="f30">
                        Law Enforcement Notified:
                      </FormLabel>
                      <Select name="f30" onChange={this.handleChangeChoice}>
                        <option value="0" isDisabled>
                          Please select...
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Select>
                    </Box>

                    {(this.state.lawEnforcement !== '')
                      ? (lawFields(this.state.lawEnforcement).map((x, y) => (
                          <Box key={y}>
                            <FormLabel htmlFor={"30" + y}>{x}</FormLabel>
                            <Input
                              name={"30" + y}
                              placeholder={x}
                              onChange={this.handleChange}
                            />
                          </Box>
                        )))
                      : console.log('Nothing Here')}

                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader
                  className="accordionStyle"
                  _expanded={{
                    bg: '#3182ce',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    3. Substance / Alcohol Involvement
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                <SimpleGrid
                    id="mainGrid"
                    minChildWidth="315px"
                    spacing={10}
                    columns={2}
                    bg="white"
                  >
                    

                    {
                    
                    (this.state.alcoholDrugsInvolved === 'Yes')
                      ? (alcoholFields(this.state.alcoholDrugsInvolved).map((x, y) => (
                          <Box key={y}>
                            <FormLabel htmlFor={"40" + y}>{x}</FormLabel>
                            <Input
                              name={"40" + y}
                              placeholder={x}
                              onChange={this.handleChange}
                            />
                          </Box>
                        )))
                      :  <Text>No Drugs or Alcohol Involved</Text>
                      
                      }

                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader
                  className="accordionStyle"
                  _expanded={{
                    bg: '#3182ce',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    4. Passenger Involved
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionHeader
                  className="accordionStyle"
                  _expanded={{
                    bg: '#3182ce',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    5. Crew Involved
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            
            </Accordion>
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
