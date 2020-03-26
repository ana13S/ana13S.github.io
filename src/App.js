import React from 'react';
import './App.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Sahitya', 'Ruluko']
  }
});

var options = ["ABOUT ME", "SKILLS", "PROJECTS", "RESUME"];
var skillList = ["Javascript", "React.js", "Python", "Java", "C++"]
var projectList = [{title: "Road Conditions vs Accidents", 
link: "https://ana13s.github.io/road-condition-vs-accidents/"},
{title: "Level Up!",
link: "https://mycscourses-438b9.web.app/"}]


function Option(props) {
  return (
    <button className="option" onClick={props.onClick}>{options[props.value]}</button>
  );
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  renderOption(optionNum) {
    return (
      <Option 
        value={optionNum}
        onClick={() => this.props.updateContent(optionNum)}/>
    );
  }

  renderAllOptions() {
    return [0, 1, 2, 3].map((element) => this.renderOption(element))
  }

  render() {
    return (
      <div>
        <div className="Navigation-bar">
            {this.renderAllOptions()}
        </div>
      </div>
    );
  }
}



class Content extends React.Component {

  initializeSkill(s) {
    return (<div><li class="skill">{s}</li></div>);
  }

  initializeProject(obj) {
    return (<div><li class="project"><a href={obj.link}>{obj.title}</a></li></div>);
  }

  render() {
    switch (this.props.currentOption) {
      case 0: {
        return (<div className="content">
          <div className="portrait">
            <img src={process.env.PUBLIC_URL+ '/assets/Portrait.jpg'} alt="portrait" width="526" height="508"></img>
          </div>
          <div className="about">
            Hi,
            <p> I’m Ana, a Computer Science major in UCSD.</p>
            <p> I want to be a good full-stack developer who builds scalable, user-friendly web applications.</p>
            <p> I love video game design, writing maintainable code and reading about history.</p>
          </div>
        </div>);
      }
      case 1: {
        return ( <div className="content">
            <ul className="list">
              {skillList.map(element => this.initializeSkill(element))}
            </ul>
        </div>);
      }
      case 2: {
          return (
          <div className="content">
            <ul className="list">
              {projectList.map((element) => this.initializeProject(element))}
            </ul>
          </div>
        );
          }
      case 3: {
          return (
          <div className="content">
             <embed src={process.env.PUBLIC_URL+ '/assets/Resume.pdf'} type="application/pdf" width="100%" height="800px"/>
          </div>
        );
          }
    default:
      return null;
    }
  }
}
              
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOption: 0
    };
    this.updateContent = this.updateContent.bind(this);
  }
  
  updateContent(i) {
    this.setState({currentOption: i});
  }

  render() {
    return (
      <div className="App">
        <NavigationBar currentOption={this.state.currentOption} 
          updateContent={this.updateContent}/>
        <Content currentOption={this.state.currentOption}/>
      </div>
    );
  }
}

export default App;