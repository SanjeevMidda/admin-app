import React from "react";

const Main = () => {
  return (
    <div className="main">
      <h1 className="title">Main</h1>

      <div className="summary">
        <h1>Summary</h1>

        <div className="content"></div>
      </div>
      <div className="account">
        <h1>Account</h1>

        <div className="details">
          <div className="accountDetails">
            <h3>account details</h3>
            {/* <p>Account ID: </p>
            <p>Account number</p>
            <p>Credit Agreement Version</p>
            <p>Credit Agreement Date</p> */}
          </div>

          <div className="cmDetails">
            <h3>cm details</h3>
            {/* <span>
              <p>Given name:</p>Given name:
            </span>{" "}
            <span>Sanjeev Midda</span>Sanjeev
            <p>Family name: Midda</p>
            <p>DOB: 01/01/01</p>
            <p>Email: test@email.com</p>
            <p>Mobile Number: 00000000000</p>
            <p>Address: test, test, tes, me5 6nb</p> */}
          </div>
          <h3>card</h3>
        </div>
      </div>

      <div className="transactions">
        <h1>Transactions</h1>
      </div>
      <div className="notes">
        <h1>Notes</h1>
      </div>

      <div className="vulnerabilities">
        <h1>Vulnerabilities</h1>
      </div>
    </div>
  );
};

export default Main;

// Repayment detailsnp
