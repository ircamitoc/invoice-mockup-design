import Button from "./Button";
import vaData from "./vaData.json";
import "../components/VADisabilityPay.css";

function VADisabilityPay() {
  return (
    <div className="va-container">
      <h2 className="va-header">TRAJECTOR MEDICAL SERVICE SUMMARY</h2>
      <p className="va-identified">
        Identified {vaData.identifiedVar} potentially undiagnosed or under rated
        disabilities for you to consider and curated supporting medical
        evidencefor those you chose to pursue
      </p>
      <p>
        <b>Initial VA Pay:</b> {vaData.initialVAPay}/month
      </p>
      <p>
        <b>Current VA Pay:</b> {vaData.currentVAPay}/month
      </p>
      <p>
        <b>Total Increase of VA Pay:</b> {vaData.totalIncreaseMonthly}/month
        -or- {vaData.totalIncreaseYearly} yearly
      </p>
      <br />
      <h2 className="va-header">EARNINGS OVERTIME</h2>
      <p>
        {vaData.yearEarningsIncrease} Years of VA Pay Increase |{" "}
        {vaData.totalYearsEarningsIncrease}
      </p>
      <p>
        ({vaData.yearEarningsIncrease} years X {vaData.totalIncreaseYearly}{" "}
        yearly benefit value)
      </p>
      <br />
      <h2 className="va-header">RETURN ON INVESTMENT</h2>
      <p>Trajector Medical Service Fee | {vaData.roiTMSF}</p>
      <p>
        {vaData.yearEarningsIncrease} Years of VA Pay Increase |{" "}
        {vaData.totalYearsEarningsIncrease}
      </p>
      <p>
        Return on Investment Factor: {vaData.roiFactor} Times Your Investment
      </p>
      <br />
      <table className="invoice-table">
        <tr className="invoice-table-header">
          <th className="invoice-head">Description</th>
          <th className="invoice-head">Unit Price</th>
        </tr>
        <tr className="invoice-table-desc">
          <td className="invoice-description">
            {vaData.tableItems.description}
          </td>
          <td className="invoice-price">$ {vaData.tableItems.unitPrice}</td>
        </tr>
      </table>
      <p class="va-support">
        If you have any questions or need assistance with your invoice, please
        contact our Customer Support Team.
      </p>
      <div className="va-contact">
        <p>
          <b>Reply to this email</b>
          <p>- or -</p>
          <b>Call {vaData.contactNumber}</b>
        </p>
      </div>
      <div className="va-button">
        <Button />
      </div>
    </div>
  );
}

export default VADisabilityPay;
