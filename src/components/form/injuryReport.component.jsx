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
//var uniqid = require('uniqid');
//let currentDate = dayjs().format();

export default class injuryReport extends Component {
  documentData;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault();

    //var key = uniqid();
    //console.log(key);
    localStorage.setItem('document', JSON.stringify(this.state));
    //alert("Form key identifier is: "+ key + ".  Use this identifier if you want to retrieve this data later");
    //document.getElementById('injuryReport').reset();
  }

  // React Life Cycle
  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
    let form = document.getElementById('injuryReport');
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
    document.getElementById('injuryReport').reset();
  }

  render() {
    function print() {
      window.print();
    }

    return (
      <Box margin="2rem">
        <form onSubmit={this.handleFormSubmit} id="injuryReport">
          <FormControl>
            <SimpleGrid
              id="mainGrid"
              minChildWidth="315px"
              spacing={10}
              columns={2}
              bg="white"
            >
              <Text fontSize="3xl" className="formTitle">
                Personal Injury Report
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
                <FormLabel htmlFor="f3">
                  Date and Time this injury happened
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
                  Date and Time this injury was reported
                </FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                    type="date"
                    name="f4a"
                    placeholder="name"
                    onChange={this.handleChange}
                  />

                  <Input
                    marginLeft="5px"
                    type="time"
                    name="f4b"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f5">Injury first reported by</FormLabel>
                <Select name="f5" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Crew">Crew</option>
                  <option value="Passenger">Passenger</option>
                  <option value="Vendor">Vendor</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f6">
                  Person completing this report:
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
                <FormLabel htmlFor="f7">Personal Injury Category</FormLabel>
                <Select name="f7" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Crew">Passenger</option>
                  <option value="Passenger">Crew</option>
                  <option value="Vendor">Other</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f8">Personal Injury Category</FormLabel>
                <Select name="f8" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Public Pax Area">Public Pax Area</option>
                  <option value="Crew Area">Crew Area</option>
                  <option value="Pax \ Crew Cabin">Pax \ Crew Cabin</option>
                  <option value=" Ashore">Ashore</option>
                  <option value="Other">Other</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f9">Level of Incident</FormLabel>
                <Select name="f9" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Minor">Minor</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Serious">Serious</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f10">Specific Incident Location</FormLabel>
                <Input
                  name="f10"
                  placeholder="eg. Shower inside crew cabin 23341"
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="f12">
                  Did the incident involve any Equipment
                </FormLabel>
                <Select name="f12" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f14">
                  Condition of the Equipment involved
                </FormLabel>
                <Textarea
                  name="f14"
                  onChange={this.handleChange}
                  placeholder="Describe current state of equipment"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="f15">
                  Does this equipment require regular inspection?
                </FormLabel>
                <Select name="f15" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f17">
                  Person in charge of this inspetion
                </FormLabel>
                <SimpleGrid width="100%" columns={2}>
                  <Input
                    name="f17a"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    name="f17b"
                    placeholder="position"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f18">Date of last inspection</FormLabel>
                <Input
                  type="date"
                  marginLeft="5px"
                  name="f18"
                  placeholder="position"
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="f19">
                  Does this equipment require regular maintenance?
                </FormLabel>
                <Select name="f19" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f20">
                  Person in charge of Maintenance:
                </FormLabel>
                <SimpleGrid width="100%" columns={3}>
                  <Input
                    name="f20a"
                    placeholder="first name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    name="f20b"
                    placeholder="last name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="10px"
                    name="f20b"
                    placeholder="position"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f21">
                  Date maintenance was last performed:
                </FormLabel>
                <Input
                  type="date"
                  marginLeft="5px"
                  name="f21"
                  placeholder="position"
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="f22">
                  Did the incident involve any alcohol\drugs
                </FormLabel>
                <Select name="f22" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f23">Deck Surface</FormLabel>
                <Select name="f23" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Metal">Metal</option>
                  <option value="Wood">Wood</option>
                  <option value="Carpet">Carpet</option>
                  <option value="Marble">Marble</option>
                  <option value="Stone">Stone</option>
                  <option value="Concrete">Concrete</option>
                  <option value="Other">Other</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f24">Conditions of the Deck</FormLabel>
                <Select name="f24" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Dry">Dry</option>
                  <option value="Wet">Wet</option>
                  <option value="Other">Other</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f25">
                  Person in charge of the incident location:
                </FormLabel>
                <SimpleGrid width="100%" columns={3}>
                  <Input
                    name="f25a"
                    placeholder="first name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="5px"
                    name="f25b"
                    placeholder="last name"
                    onChange={this.handleChange}
                  />
                  <Input
                    marginLeft="10px"
                    name="f25c"
                    placeholder="position"
                    onChange={this.handleChange}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <FormLabel htmlFor="f26">Ship Location</FormLabel>
                <Select name="f26" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="At sea">At sea</option>
                  <option value="In port">In port</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f27">
                  Sea Conditions at the time of incident:
                </FormLabel>
                <Input
                  marginLeft="5px"
                  name="f27"
                  placeholder="position"
                  onChange={this.handleChange}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="f28">
                  Stabilizers operating at time of incident
                </FormLabel>
                <Select name="f28" onChange={this.handleChange}>
                  <option value="0" isDisabled>
                    Please select...
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="f29">
                  Weather at the time of incident:
                </FormLabel>
                <Input
                  name="f29"
                  placeholder="position"
                  onChange={this.handleChange}
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
