'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCollapsible = require('react-collapsible');

var _reactCollapsible2 = _interopRequireDefault(_reactCollapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accordion = _react2.default.createClass({
  displayName: 'Accordion',


  //Set validation for prop types
  propTypes: {
    transitionTime: _propTypes2.default.number,
    easing: _propTypes2.default.string,
    startPosition: _propTypes2.default.number,
    classParentString: _propTypes2.default.string,
    closeable: _propTypes2.default.bool,
    children: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      props: _propTypes2.default.shape({
        'data-trigger': _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
        'data-triggerWhenOpen': _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
        'data-triggerDisabled': _propTypes2.default.bool
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

