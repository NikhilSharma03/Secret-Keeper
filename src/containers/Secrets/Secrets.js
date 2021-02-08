import React, { Component } from 'react';
import styles from './Secrets.module.css';
import { connect } from 'react-redux';
import * as actionCreators from './../../store/actions/secrets';
import Spinner from './../../components/UI/Spinner/Spinner';
import Card from './../../components/Card/Card';

class Secrets extends Component {
  componentDidMount() {
    this.props.onFetchSecret();
  }

  render() {
    const data = Object.keys(this.props.secrets).map((item) => {
      return (
        <Card
          key={item}
          title={this.props.secrets[item].text.secret}
          time={this.props.secrets[item].time.slice(0, 19)}
        />
      );
    });

    return this.props.loading ? (
      <Spinner />
    ) : (
      <div className={styles.Secrets}>{data}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    secrets: state.sec.secrets,
    loading: state.sec.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSecret: () => dispatch(actionCreators.fetchSecrets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Secrets);
