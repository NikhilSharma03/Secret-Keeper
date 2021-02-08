import React, { Component } from 'react';
import styles from './Post.module.css';
import Input from './../../components/UI/Input/Input';
import { connect } from 'react-redux';
import Spinner from './../../components/UI/Spinner/Spinner';
import * as actionCreators from './../../store/actions/post';
import { Redirect } from 'react-router-dom';

class Post extends Component {
  state = {
    post: {
      secret: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Enter Here',
        },
        value: '',
        valid: false,
        validation: {
          required: true,
          wordCannotUse: true,
        },
        touched: false,
      },
    },
    postIsValid: false,
  };

  isValidChecker = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.wordCannotUse) {
      let val = value.toLowerCase();
      function check(string) {
        return val.search(string) !== -1;
      }
      if (
        check('fuck') ||
        check('kunal') ||
        check('sonu') ||
        check('lokesh') ||
        check('kirti') ||
        check('nikhil')
      ) {
        isValid = false;
      }
    }

    return isValid;
  };

  onChangeHandler = (event, identifier) => {
    const updatedForm = {
      ...this.state.post,
      [identifier]: {
        ...this.state.post[identifier],
        value: event.target.value,
        touched: true,
        valid: this.isValidChecker(
          event.target.value,
          this.state.post.secret.validation
        ),
      },
    };

    let formisValid = true;
    if (!updatedForm.secret.valid) {
      formisValid = false;
    }

    this.setState({
      post: updatedForm,
      postIsValid: formisValid,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const secret = {
      secret: this.state.post.secret.value,
    };
    const token = 'token' + Math.random().toString();
    this.props.onPostSecret(secret, token);
  };

  render() {
    const postArray = [];
    // eslint-disable-next-line
    Object.keys(this.state.post).map((ele) => {
      postArray.push({ id: ele, config: this.state.post[ele] });
    });

    let redirect = null;
    if (this.props.posted) {
      redirect = <Redirect to='/' />;
    }

    return (
      <div className={styles.Main}>
        {redirect}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <h1 className={styles.MainHead}>
              Enter Your <label>Secret Here</label>
            </h1>
            <form className={styles.Form} onSubmit={this.onSubmitHandler}>
              {postArray.map((item) => {
                return (
                  <Input
                    key={item.id}
                    elementConfig={item.config.elementConfig}
                    elementType={item.config.elementType}
                    value={item.config.value}
                    changed={(event) => this.onChangeHandler(event, item.id)}
                  />
                );
              })}
              <button
                style={{
                  backgroundColor: this.state.postIsValid ? null : '#ccc',
                }}
                disabled={!this.state.postIsValid}
              >
                Post
              </button>
            </form>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.post.loading,
    posted: state.post.posted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostSecret: (data, token) =>
      dispatch(actionCreators.postSecret(data, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
