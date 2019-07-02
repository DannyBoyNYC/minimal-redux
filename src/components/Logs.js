import React, { useEffect } from 'react';
import { getLogs } from '../actions/logActions';
import { connect } from 'react-redux';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {logs.map(log => (
        <p>{log.tech}</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  log: state.log,
});

export default connect(
  mapStateToProps,
  { getLogs },
)(Logs);
