import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css';
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import SearchBox from '../../components/SearchBox/SearchBox';

import { setSearchField, requestRobots } from './../../actions';

const mapStateToProps = state => {
  return { 
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
};

const mapDispatchToProps = dispatch => {
  return { 
    onSearchChangeHandler: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearchChangeHandler, robots, isPending} = this.props;

    const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return isPending ? <h1>Loading</h1> : (
      <div className={styles['App']}>
        <div>
          <h1 id={styles['main-title']}>Robo Friends</h1>
          <SearchBox searchChange={onSearchChangeHandler} />
        </div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
