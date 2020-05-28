import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Intro from '../pages/intro'
import styles from './style.module.css'
import Parent from '../pages/parent'

export class Router extends Component {
  render() {
    return (
      <div className={styles.rootClass}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/intro'>Intro</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/intro' component={Intro} />
          <Route path='/parent' component={Parent} />
          <Route render={() => <div> 404页面 </div>} />
        </Switch>
      </div>
    )
  }
}

export default Router
