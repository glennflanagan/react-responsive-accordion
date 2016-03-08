import React from 'react';
import Collapsible from 'react-collapsible';

var Accordion = React.createClass({

  //Set validation for prop types
  propTypes: {
    transitionTime: React.PropTypes.number,
    easing: React.PropTypes.string,
    startPosition: React.PropTypes.number,
    classParentString: React.PropTypes.string,
    children: React.PropTypes.arrayOf(React.PropTypes.shape({
      props: React.PropTypes.shape({
        triggerText: React.PropTypes.string.isRequired,
        triggerTextWhenOpen: React.PropTypes.string
      })
    }))
  },

  getInitialState: function() {

    //Allow the start position to be set by props
    var openPosition = this.props.startPosition | 0;

    return {
      openPosition: openPosition
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
                transitionTime={this.props.transitionTime}
                easing={this.props.easing}
                classParentString={this.props.classParentString}
                accordionPosition={index}>{node}</Collapsible>);
    });

    return (<div>{nodes}</div>);
  }

});

export default Accordion;
