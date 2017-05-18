'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCollapsible = require('react-collapsible');

var _reactCollapsible2 = _interopRequireDefault(_reactCollapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('rra');

var Accordion = _react2.default.createClass({
  displayName: 'Accordion',


  //Set validation for prop types
  propTypes: {
    transitionTime: _react2.default.PropTypes.number,
    easing: _react2.default.PropTypes.string,
    startPosition: _react2.default.PropTypes.number,
    classParentString: _react2.default.PropTypes.string,
    closeable: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
      props: _react2.default.PropTypes.shape({
        'data-trigger': _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]).isRequired,
        'data-triggerWhenOpen': _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
        'data-triggerDisabled': _react2.default.PropTypes.bool
      })
    }))
  },

  getInitialState: function getInitialState() {

    //Allow the start position to be set by props
    var openPosition = this.props.startPosition | 0;

    return {
      openPosition: openPosition
    };
  },

  handleTriggerClick: function handleTriggerClick(position) {
    var closeAll = false;

    if (this.props.closeable) {
      closeAll = !this.state.closeAll && position === this.state.openPosition;
    }

    console.log(position, closeAll, this);

    this.setState({
      openPosition: position,
      closeAll: closeAll
    });
  },

  render: function render() {
    var _this = this;

    var nodes = this.props.children.map(function (node, index) {

      var triggerWhenOpen = node.props['data-trigger-when-open'] ? node.props['data-trigger-when-open'] : node.props['data-trigger'];
      var triggerDisabled = node.props['data-trigger-disabled'] || false;

      return _react2.default.createElement(
        _reactCollapsible2.default,
        {
          key: "Collapsible" + index,
          handleTriggerClick: _this.handleTriggerClick,
          open: !_this.state.closeAll && _this.state.openPosition === index,
          trigger: node.props['data-trigger'],
          triggerWhenOpen: triggerWhenOpen,
          triggerDisabled: triggerDisabled,
          transitionTime: _this.props.transitionTime,
          easing: _this.props.easing,
          classParentString: _this.props.classParentString,
          accordionPosition: index },
        node
      );
    });

    return _react2.default.createElement(
      'div',
      null,
      nodes
    );
  }

});

exports.default = Accordion;

