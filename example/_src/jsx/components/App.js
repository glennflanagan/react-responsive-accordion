import React from 'react';
import Accordion from '../../../../src/Accordion';


var App = React.createClass({

  render: function() {
    return(
      <div>
        <Accordion>
          <div data-trigger="A nifty React accordion component">
            <p>So this is an Accordion component that used the <a href="https://github.com/glennflanagan/react-collapsible">react-collapsible</a> component. How handy.</p>
          </div>

          <div data-trigger="What is the difference?" data-trigger-when-open={<div><span style={{color: "yellow"}}>THAT</span> is the difference!</div>}>
            <p>An Accordion is different to a Collapsible in the sense that only one "tray" will be open at any one time.</p>
          </div>

          <div data-trigger="Oh! I'm disabled?" data-trigger-disabled={true}>
            <p>You can see me now!</p>
          </div>

          <div data-trigger="I'm responsive and I have a little secret. Look inside.">
            <p>And this Accordion component is also completely repsonsive. Hurrah for mobile users!</p>

            <Accordion closeable={true}>
              <div data-trigger="Wait a minute, what is this!?">
                <p>Yep. This component is completely nestable...nestible...nestableableing... You can put one Accordion inside another.</p>
                <p>Also notice - this accordian is closeable. Meaning all children can be in the closed state if closeable = true</p>
              </div>

              <div data-trigger="And you can make the text change depending on whether I'm open or closed" data-trigger-when-open="Yeah!">
                <p>Using the trigger-when-open property you can change the text when the "tray" is in the open state.</p>
                <p>So this one is using trigger-when-open=&#123;"Yeah!"&#125;</p>
              </div>

              <div data-trigger="Get involved">
                <p>If you want to get involved with how this component evolved then head over to the <a href="https://github.com/glennflanagan/react-collapsible">GitHub repo</a> and get hacking!</p>
              </div>
            </Accordion>
          </div>
        </Accordion>
      </div>
    );
  }
});

export default App;
