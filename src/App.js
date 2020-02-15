import React from 'react';
import StatRoller from "./Components/StatRoller"
import CurrentStats from "./Components/CurrentStats"
import DefaultClasses from "./Components/DefaultClasses"
import './App.css';
import classes from './classes'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      class: 'Warrior',
      vitality: 11,
      attunement: 8,
      endurance: 12,
      strength: 13,
      dexterity: 13,
      resistance: 11,
      intelligence: 9,
      faith: 9,
    }

    this.rollStat = this.rollStat.bind(this);
    this.saveStats = this.saveStats.bind(this);
    this.setDefaultStats = this.setDefaultStats.bind(this);
    this.resetStats = this.resetStats.bind(this);
  }


  componentDidMount() {
    const currentStats = JSON.parse(localStorage.getItem('SavedStats'))
    if(currentStats) {
      this.setState(currentStats)
    }
  }

  rollStat() {
    const statArray =  [ 
      'vitality',
      'attunement',
      'endurance',
      'strength',
      'dexterity',
      'resistance',
      'intelligence',
      'faith']
    const currentChosenStat = statArray[Math.floor(Math.random() * 7)]
    this.setState((prevState) => {
      return {
      [currentChosenStat]: prevState[currentChosenStat] + 1
      }
    })
  }

  saveStats() {
    localStorage.setItem('SavedStats',  JSON.stringify(this.state))
  }

  setDefaultStats(currentClass) {
    let setClass = classes[currentClass]
    this.setState(setClass)
  }

  resetStats() {
    const defaultClass = classes.warrior
    this.setState(defaultClass)
    localStorage.setItem('SavedStats',  JSON.stringify(this.state))
  }

  render () {
    return (
      <div>
        Current Class: {this.state.classTitle}
        <CurrentStats stats={this.state} />
        <DefaultClasses setDefaultStats={this.setDefaultStats} />
        <StatRoller rollStat={this.rollStat} />
        <button onClick={this.saveStats}> Save </button>
        <button onClick={this.resetStats}> Reset </button>
      </div>
    );
  }
}

export default App;
