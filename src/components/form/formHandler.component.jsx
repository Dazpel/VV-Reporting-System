


export default function populateForm(e) {
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


  if (localStorage.getItem('document')) {
    this.setState({
      f2: this.documentData.f2,
      f3a: this.documentData.f3a,
      f3b: this.documentData.f3b,
      f4a: this.documentData.f4a,
      f4b: this.documentData.f4b,
      f5: this.documentData.f5,
      f6a: this.documentData.f6a,
      f6b: this.documentData.f6b,
      f6c: this.documentData.f6c,
      f7: this.documentData.f7,
      f8: this.documentData.f8,
      f9: this.documentData.f9,
      f10: this.documentData.f10
    });
  } else {
    this.setState({
      f2: '',
      f3a: '',
      f3b: '',
      f4a: '',
      f4b: '',
      f5: '',
      f6a: '',
      f6b: '',
      f6c: '',
      f7: '',
      f8: '',
      f9: '',
      f10: ''
    });
  }