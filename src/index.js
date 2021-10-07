import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import HookApp from './HookApp';
import Time from './Time';
import Digital from './Digital';
import Events from './Events';

ReactDOM.render(
    <>
    <div className="header">
       <h2> 🚀 React Mini Projects 🚀  </h2>
    </div>
        <div className="card text-center">
            <div className="card-header">
                Increase & Decrease Numbers - Mini Project(React) - One
            </div>
            <div className="card-body">
                <h5 className="card-title">React Hooks - setStatus</h5>
                <p className="card-text">In this mini project I have used react hooks setStatus.By clicking on button 
                we can increase and decrease numbers.</p>
                <div>
                    <HookApp />
                </div>
            </div>
            <div className="card-footer text-muted">
                Project One
            </div>
        </div>

        <div className="card text-center">
            <div className="card-header">
                Update Time Manually - Mini Project(React) - Two
            </div>
            <div className="card-body">
                <h5 className="card-title">React Hooks - setStatus</h5>
                <p className="card-text">In this mini project I have used react hooks setStatus.When we click on button
                the time will refresh with current time.</p>
                <div>
                <Time />
                </div>
            </div>
            <div className="card-footer text-muted">
                Project Two
            </div>
        </div>

        <div className="card text-center">
            <div className="card-header">
                Digital Time - Mini Project(React) - Two
            </div>
            <div className="card-body">
                <h5 className="card-title">React Hooks - setStatus</h5>
                <p className="card-text">In this mini project I have used react hooks setStatus.In this project you can see 
                the time is update automatically with current time.</p>
                <div>
                <Digital />
                </div>
            </div>
            <div className="card-footer text-muted">
                Project Three
            </div>
        </div>

        <div className="card text-center">
            <div className="card-header">
                Events - Mini Project(React) - Two
            </div>
            <div className="card-body">
                <h5 className="card-title">React Hooks - setStatus</h5>
                <p className="card-text">In this mini project I have used react hooks setStatus.In this
                project we have used events and when we click on button we can see background color and text is changed.
                And after that when we double click again background color and text is changed.</p>
                <div>
                <Events />
                </div>
            </div>
            <div className="card-footer text-muted">
                Project Four
            </div>
        </div>
    </>, document.getElementById("root")
);