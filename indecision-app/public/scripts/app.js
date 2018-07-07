'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityApp = function (_React$Component) {
    _inherits(VisibilityApp, _React$Component);

    function VisibilityApp(props) {
        _classCallCheck(this, VisibilityApp);

        var _this = _possibleConstructorReturn(this, (VisibilityApp.__proto__ || Object.getPrototypeOf(VisibilityApp)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibilityApp, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' Visibility App '
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibility },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                this.state.visibility ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        ' Here are some detils for you '
                    )
                ) : null
            );
        }
    }]);

    return VisibilityApp;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityApp, null), document.getElementById('app'));

/* React Component syntax */
// console.log('This is working');

// const appRoot = document.getElementById('app')

// const visible_app = {
//     title: 'Visibility toggle',
//     visibility: false
// }

// const renderWebpage = () => {

//     const template = (
//     <div>
//         <h1> {visible_app.title} </h1>
//         <button onClick={toggleVisibility}>
//             {visible_app.visibility ? 'Hide details': 'Show details'}
//         </button>

//         {visible_app.visibility && (
//             <div>
//                 <p> Here are some details for you! </p>
//             </div>
//         )}
//     </div>
// )
//     ReactDOM.render(template, appRoot)
// }

// const toggleVisibility = () => {
//     visible_app.visibility = !visible_app.visibility
//     renderWebpage()
// }

// renderWebpage()
