import React, { useState } from 'react';
import './PromptInput.css';
import SendPromptButton from '../SendPromptButton/SendPromptButton';
import ApiCall from '../ApiCall/ApiCall';
import { ChatLeftDots, QuestionCircle, GpuCard } from 'react-bootstrap-icons';
import AlertMessage from '../AlertMessage/AlertMessage';

const PromptInput = ({ promptChange, prompt, context }) => {
    const apiCall = React.createRef();
    const [showAlert, setShowAlert] = useState(false);

    const handleKeyDown = (event) => {
        if(event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleButtonClick();
        }
    }

    const handleButtonClick = () => {
        if (!prompt.trim()) {  // Check if prompt is empty
            setShowAlert(true);  // Show alert if prompt is empty
        } else {
            apiCall.current.runCall();  // Else, make the API call
            setShowAlert(false);  // Hide alert if previously shown
        }
    }

    return(
        <div>
            <div>
                <label htmlFor="promptText" className="form-label fw-bold"><ChatLeftDots /> Prompt</label>
                <div className="my-1 input-group">
                    <span className="input-group-text">
                        Prompt
                    </span>
                    <textarea
                        type="text"
                        className="form-control"
                        id="promptText"
                        placeholder="e.g. Summarise into 2 sentences"
                        onChange={promptChange}
                        onKeyDown={handleKeyDown}
                    ></textarea>
                    <span className='mx-1'>
                        <SendPromptButton buttonName="Go" onClick={handleButtonClick} />
                    </span>
                    {/* <!-- tooltip --> */}
                    <span className="input-group-text">
                        <span className="tt" data-bs-placement="bottom" title="Type what you want the AI to do, the AI will look above for some context if there is any.">
                            <QuestionCircle />
                        </span>
                    </span>
                </div>

                <div className='my-2'>
                    {/* Conditionally render the AlertMessage component based on showAlert state */}
                    {showAlert && <AlertMessage alertText="Please enter your prompt" />}
                </div>
            </div>

            <div className='my-4'>
                <label htmlFor="promptOutput" className="form-label fw-bold"><GpuCard /> Output</label>
                <div className='border border-2 rounded-3 p-3'>
                    <ApiCall ref={apiCall} content={context} prompt={prompt}/>
                </div>
            </div>
        </div>
    );
}

export default PromptInput;