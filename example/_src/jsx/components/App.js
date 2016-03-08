import React from 'react';
import Accordion from '../../../../src/Accordion';


var App = React.createClass({


  render: function() {
    return(
      <div>

        <Accordion>
          <div triggerText="A nifty React accordion component">
            <p>So this is an Accordion component that used the <a href="https://github.com/glennflanagan/react-collapsible">react-collapsible</a> component. How handy.</p>
          </div>

          <div triggerText="What the difference?" triggerTextWhenOpen="THAT is the difference!">
            <p>An Accordion is different to a Collapsible in the sense that only one "tray" will be open at any one time.</p>
          </div>

          <div triggerText="I'm responsive and I have a little secret. Look inside.">
            <p>And this Accordion component is also completely repsonsive. Hurrah for mobile users!</p>

            <Accordion>
              <div triggerText="Wait a minute, what is this!?">
                <p>Yep. This component is completely nestable...nestible...nestableableing... You can put one Accordion inside another.</p>
              </div>

              <div triggerText="And you can make the text change depending on whether I'm open or closed" triggerTextWhenOpen="Yeah!">
                <p>Using the triggerTextWhenOpen property you can change the text when the "tray" is in the open state.</p>
                <p>So this one is using triggerTextWhenOpen=&#123;"Yeah!"&#125;</p>
              </div>

              <div triggerText="Get involved">
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
