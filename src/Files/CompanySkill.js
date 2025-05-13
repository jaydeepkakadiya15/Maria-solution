import React from 'react';
import '../App.css';

const CompanySkills = () => {
  const skills = [
    { name: 'Development', percent: 90 },
    { name: 'Design', percent: 70 },
    { name: 'Marketing', percent: 60 },
    { name: 'Designer', percent: 50 },
  ];

  return (
    <div className="container pt-5 g-4">
      <div className="row align-items-center company-skills">
        {/* Left Column */}
        <div className="col-md-6 mb-4">
          <h2 className="word_letter_specing fs-1 fw-medium">Maria Provides The</h2>
          <h3 className="word_letter_specing mb-4 fs-4 text-muted">Best Solution for your Business</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            words which don't look even slightly believable for our business and
            new company and this time any help please late me know for my best
            support all time.
          </p>
          <p>
            Company many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form this my company
            is professional business and working place.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <h2 className="word_letter_specing mb-4">Company Skills</h2>
          {
            skills.map((v, i) => (
                <div className="mb-4" key={i}>
                    <div className="d-flex justify-content-between">
                        <span className="fw-medium">{v.name}</span>
                        <span className="text-muted">{v.percent}%</span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                        <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: `${v.percent}%` }}
                        aria-valuenow={v.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CompanySkills;