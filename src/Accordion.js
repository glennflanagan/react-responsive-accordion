import React from 'react';
import Collapsible from 'react-collapsible';

var Accordion = React.createClass({

  getInitialState: function() {
    return {
      openPosition: 0
    }
  },

  handleTriggerClick: function(position) {
    this.setState({
      openPosition: position
    })
  },

  render: function() {

    var nodes = this.props.children.map((node, index) => {

      var triggerTextWhenOpen = (node.props.triggerTextWhenOpen) ? node.props.triggerTextWhenOpen : node.props.triggerText;

      return (<Collapsible
                key={"Collapsible"+index}
                handleTriggerClick={this.handleTriggerClick}
                open={(this.state.openPosition === index)}
                triggerText={node.props.triggerText}
                triggerTextWhenOpen={triggerTextWhenOpen}
                accordionPosition={index}>{node}</Collapsible>);
    });

    return (<div>{nodes}</div>);
  }

});

export default Accordion;
