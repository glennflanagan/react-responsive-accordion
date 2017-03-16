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
        'data-trigger': React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.element
        ]).isRequired,
        'data-triggerWhenOpen': React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.element
        ]),        
        'data-triggerDisabled': React.PropTypes.bool,
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
    });    
  },

  render: function() {

    var nodes = this.props.children.map((node, index) => {

      var triggerWhenOpen = (node.props['data-trigger-when-open']) ? node.props['data-trigger-when-open'] : node.props['data-trigger'];
      var triggerDisabled = (node.props['data-trigger-disabled']) || false;

      return (<Collapsible
                key={"Collapsible"+index}
                handleTriggerClick={this.handleTriggerClick}
                open={(this.state.openPosition === index)}
                trigger={node.props['data-trigger']}
                triggerWhenOpen={triggerWhenOpen}
                triggerDisabled={triggerDisabled}
                transitionTime={this.props.transitionTime}
                easing={this.props.easing}
                classParentString={this.props.classParentString}
                accordionPosition={index}>{node}</Collapsible>);
    });

    return (<div>{nodes}</div>);
  }

});

export default Accordion;
