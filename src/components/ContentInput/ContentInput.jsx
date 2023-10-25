import React from 'react';
import './ContentInput.css';
import { FileText, QuestionCircle } from 'react-bootstrap-icons';

const ContentInput = ({ contextChange }) => {
    return (
        <div className="col-lg-8 col-md-8 col-12 my-1">
            <div className="row my-2">
                <div className="d-grid d-flex justify-content-between">
                    <label htmlFor="sourceText" className="form-label fw-bold text-body-secondary"><FileText /> Source Text / Context</label>
                    {/* <!-- tooltip --> */}
                    <span className="input-group-text">
                        <span className="tt" data-bs-placement="bottom" title="Enter the text or context to be worked on or reference to">
                            <QuestionCircle />
                        </span>
                    </span>
                </div>
            </div>
            <div className="row my-2">
                <div className="inputArea">
                    <textarea className="form-control px-3" id="sourceText" onChange={contextChange}></textarea>
                </div>
            </div>
        </div>
    );
}

export default ContentInput;