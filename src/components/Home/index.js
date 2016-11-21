// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../helpers/global-aphrodite';

import Logo from '../Logo';
import styles from './styles';


class Home extends Component {
  componentDidMount() {
    this.formElements = {};
  }

  submitForm() {
    this.props.getRepositoryInfo({
      user: this.formElements.user.value,
      repository: this.formElements.repo.value,
    });
  }

  render() {
    return (
      <div className={css(styles.home)}>
        <Logo />
        <p>Learn about the people who've starred your repositories.</p>

        <form onClick={this.submitForm}>
          <input type="text" ref={elem => this.formElements.user = elem} />
          /
          <input type="text"ref={elem => this.formElements.repo = elem} />
          <button >Go</button>
        </form>
      </div>
    );
  }
};

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
