import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className="modal">
      {console.log('alert')}
      <div className="modal-content">
        <div className="modal-main">
          {console.log('msg:', alert.msg)}
          <p className="modal-text">{alert.msg}</p>
        </div>
      </div>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
