import React from "react";
import styled from "styled-components";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";




const JobList = ({ jobs }) => {
  console.log(jobs)
  return (
      <Wrapper>
      <NameCompanyWrapper>
        <p className="name">{jobs.name}</p>
        <p className="company">{jobs.companyName}</p>
      </NameCompanyWrapper>
      <AttributeLocationWrapper>
        <div className="attributes">
          <p className="attribute">{jobs.earnings}</p>
          <p className="attribute">{jobs.interview}</p>
        </div>
        <p className="location">{jobs.location}</p>
      </AttributeLocationWrapper>
      </Wrapper>


  );
};



const NameCompanyWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  .name {
    font-size: 18px;
  }
  .company {
    color: #9f9c99;
    margin-left: 5px;
  }
`;

const AttributeLocationWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .location {
    color: #9f9c99;
  }
  .attribute {
    border: 1px solid #9f9c99;
    padding: 5px 10px;
    color: #9f9c99;
    font-size: 14px;
    margin: 0 5px;
    transition: all 0.3 ease-in;
    :hover {
      color: black;
      border: 1px solid black;
    }
  }
  .attributes {
    display: flex;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid rgb(240, 240, 240);
  border-left: 3px solid #151515;
  padding: 0 15px;
  cursor: pointer;
  transition: 0.4s ease;
  width: 900px;
  :hover {
    background: #f6f2fc;
  }
`;

const mapStateToProps = ({firestore}) => ({
  // jobs: firestore.ordered.jobs,
});

const mapDispatchToProps = {
  
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{collection: 'jobs'}] )
)(JobList);
