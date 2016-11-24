// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../helpers/global-aphrodite';

import Logo from '../Logo';
import styles from './styles';

class Home extends Component {
  componentWillMount() {
    this.formElements = {};

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(ev) {
    ev.preventDefault();

    const user = this.formElements.user.value;
    const repo = this.formElements.repo.value;

    this.context.router.transitionTo(`/examine/${user}/${repo}`);
  }

  render() {
    return (
      <div className={css(styles.home)}>
        <Logo />
        <p>Learn about the people who've starred your repositories.</p>

        <form onSubmit={this.submitForm}>
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

Home.contextTypes = {
  router: PropTypes.object,
};

export default Home;
