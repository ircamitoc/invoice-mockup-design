import React from "react";
import "./Statement.css";
import stData from "./stData.json";
import Logo from "../image/logo.png";

export default function FeeSummary() {
  return (
    <div className="statement-container">
      <img className="img-logo" src={Logo} alt="Trajector_Medical_Logo" />
      <p className="statement-greetings">Hi {stData.firstName} - </p>
      <p className="statement-congrats">
        <b>Congratulations on the increase in your VA benefits!</b>
      </p>
      <p className="statement-rating">
        You’ve been positively rated and compensated for your VA Disability
        Benefits.
      </p>
      <p className="statement-bravo">
        The journey was filled with challenges and complexities, but with
        Trajector Medical by your side – you faced every obstacle with
        determination, confidence – and evidence to support your application.{" "}
        <b>Bravo!</b>
      </p>
      <p>
        Since we began our journey together on {stData.monthAbbrev}{" "}
        {stData.dayOfTheMonth}, {stData.year}, we:
      </p>
      <p>
        <ul className="statement-list">
          <li>
            <b>Analyzed</b> your medical & military records to identify
            potentially underrated or overlooked disabilities.
          </li>
          <li>
            <b>Cataloged</b> presumptive, aggravated, and/or secondary ties of
            symptoms & disabilities to your military service record.
          </li>
          <li>
            <b>Identified</b> clinical connections between your reported
            symptoms and disabilities that may have otherwise seemed unrelated.
          </li>
          <li>
            <b>Curated</b> a personalized Medical Evidence Packet complementary
            to your formal VA Claim Application.
          </li>
          <li>
            <b>Leveraged</b> technology to electronically self-submit your VA
            Claim Application.
          </li>
          <li>
            <b>Set</b> expectations of anticipated medical examination standards
            for your VA Claim Exam.
          </li>
          <li>
            <b>Audited</b> your VA decision & rating response to make sure no
            evidence was overlooked or underrated.
          </li>
        </ul>
      </p>
      <p>
        We know that the impact of receiving rightful compensation for your
        service disabilities reaches far beyond dollars in the bank. Access to
        these benefits directly affects your day-to-day experiences and future
        life plans. Over the next year, decade, and throughout your life - these
        benefits will continue to enrich your life in immeasurable ways.
      </p>
      <p>
        <b>But this is just the beginning.</b> The support that the Trajector
        Medical team provides <b>goes beyond a one-time victory</b> - it is a
        lifelong resource available to you.
      </p>
      <p>
        As your needs evolve and symptoms change, we stand ready to help how we
        can!
      </p>
      <p>
        Congratulations once again on this incredible milestone in your journey.
      </p>
      <p>
        Thank you for trusting Trajector Medical to support your journey to
        receive the benefits you medically, legally, and ethically qualify for.
      </p>
      <p>
        Your Trajector Medical statement is now available. Detailed statement
        attached.
      </p>
    </div>
  );
}
