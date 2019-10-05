/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './style.scss';

export default class LoginPartial extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    const { username, password, onChangeUsername, onChangePassword, onSubmitForm } = this.props;
    if (username && password && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, username, password, onChangeUsername, onChangePassword, onSubmitForm
    } = this.props;
    const loginPartialProps = {
      loading,
      error,
      username,
      password
    };

    return (
      <div className="form-horizontal">
        <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label>Usuario</label>
            <input value={username} onChange={onChangeUsername} type="text" className="form-group" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input value={password} onChange={onChangePassword}  type="password" className="form-group" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-warning" value="Iniciar sesión" />
          </div>
        </form>
      </div>
    );
  }
}

LoginPartial.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  password: PropTypes.string,
  onChangePassword: PropTypes.func
};
