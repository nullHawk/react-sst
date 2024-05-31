import React, { useState } from "react";
import './ProgressBar.css';
function ProgressBar({ percentage }) {
    return (
        <div className="progress-bar-ctn">
            <div className="progress-bar" style={{ width: `${percentage}%` }}>
                <span className="progress-bar-txt">{percentage}%</span>
            </div>
        </div>
    );
}

export default ProgressBar;