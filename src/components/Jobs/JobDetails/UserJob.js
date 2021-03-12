import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import DeleteJob from "../../../pages/JobActions/DeleteJob";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 20px 0 60px;
  @media (min-width: ${768}px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 50px;
    flex-direction: column;
  }
  
`;
const Control = styled.p`
  cursor: pointer;
  background-color: #1D71B8;
  color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 0 10px;
  @media (min-width: ${768}px) {
    margin: 0;
  }
`;
const Text = styled.p`
color: white;
margin: 0 50px;
padding: 10px;
background-color: #1D71B8;
border-radius: 10px;
@media (min-width: ${768}px) {

}
margin: 10px 0;
`

const UserJob = ({ loggedIn, userId, jobId }) => {
  const [isDeleting, setisDeleting] = useState(false);

  if (userId === loggedIn)
    return (
      <Wrapper>
        <Control onClick={() => setisDeleting(true)}>Usuń oferte pracy</Control>
        <DeleteJob
          jobs={jobId}
          show={isDeleting}
          close={() => setisDeleting(false)}
        />
        <Link to={"/editjob/" + jobId}>
          <Text>Edytuj oferte pracy</Text>
        </Link>
      </Wrapper>
    );
  else{
    return null;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "jobs" }])
)(UserJob);
