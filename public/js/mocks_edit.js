(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/chrisls/dev/common-ui/mockingbird/src/jsx/MockMethods.jsx":[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var MockMethod = React.createClass({displayName: "MockMethod",

    getInitialState: function() {
        return {
            editMode: false,
            method: this.props.method
        };
    },

    toggleEditMode: function() {
        this.setState({
            editMode: !this.state.editMode
        });
    },

    componentDidUpdate: function() {
        if (this.state.editMode) {
            $("#selectCodeMenu" + this.state.method.method).val(this.state.method.code);
        }
    },

    putUpdate: function() {
        //TODO: Validation
        var payload = {
            endpointId: this.state.method.endpointId,
            code: $("#selectCodeMenu" + this.state.method.method).val(),
            method: this.state.method.method,
            data: this.refs.responseData.value
        };

        var url = this.props.context_root + '/api/method/' + this.state.method._id;

        $.ajax({
            type: 'PUT',
            url: url,
            data: payload,
            dataType: 'json',
            success: function(response){
                this.setState({
                    method: response.result,
                    editMode: false
                });
            }.bind(this)
        });

    },

    render: function() {

        if (this.state.editMode) {
            return (
                React.createElement("div", {style: {marginBottom: '40px'}}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Edit ", this.state.method.method, " | ", this.state.method.code)), 
                        React.createElement("div", {className: "col-md-6 text-right"}, 
                            React.createElement("button", {className: "btn btn-primary", onClick: this.putUpdate}, "Save"), " ", 
                            React.createElement("button", {className: "btn btn-default", onClick: this.toggleEditMode}, "Cancel")
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-md-12"}, 
                            React.createElement("label", {htmlFor: "methodResponseData" + this.state.method.method}), 
                            React.createElement("textarea", {className: "form-control json-field", id: "methodResponseData" + this.state.method.method, ref: "responseData", defaultValue: JSON.stringify(this.state.method.data)}
                            )
                        )
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-md-6"}, 
                            React.createElement("h4", null, "Mock Response Code"), 
                            React.createElement("p", null, "Choose a response code to return"), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "col-md-12"}, 
                                    React.createElement("select", {id: "selectCodeMenu" + this.state.method.method, ref: "selectCodeMenu"}, 
                                        React.createElement("option", {value: "200"}, "200"), 
                                        React.createElement("option", {value: "201"}, "201"), 
                                        React.createElement("option", {value: "202"}, "202"), 
                                        React.createElement("option", {value: "203"}, "203"), 
                                        React.createElement("option", {value: "204"}, "204"), 
                                        React.createElement("option", {value: "205"}, "205"), 
                                        React.createElement("option", {value: "206"}, "206"), 
                                        React.createElement("option", {value: "300"}, "300"), 
                                        React.createElement("option", {value: "301"}, "301"), 
                                        React.createElement("option", {value: "302"}, "302"), 
                                        React.createElement("option", {value: "303"}, "303"), 
                                        React.createElement("option", {value: "304"}, "304"), 
                                        React.createElement("option", {value: "305"}, "305"), 
                                        React.createElement("option", {value: "306"}, "306"), 
                                        React.createElement("option", {value: "307"}, "307"), 
                                        React.createElement("option", {value: "400"}, "400"), 
                                        React.createElement("option", {value: "401"}, "401"), 
                                        React.createElement("option", {value: "403"}, "403"), 
                                        React.createElement("option", {value: "404"}, "404"), 
                                        React.createElement("option", {value: "405"}, "405"), 
                                        React.createElement("option", {value: "407"}, "407"), 
                                        React.createElement("option", {value: "408"}, "408"), 
                                        React.createElement("option", {value: "409"}, "409"), 
                                        React.createElement("option", {value: "410"}, "410"), 
                                        React.createElement("option", {value: "411"}, "411"), 
                                        React.createElement("option", {value: "412"}, "412"), 
                                        React.createElement("option", {value: "413"}, "413"), 
                                        React.createElement("option", {value: "414"}, "414"), 
                                        React.createElement("option", {value: "415"}, "415"), 
                                        React.createElement("option", {value: "416"}, "416"), 
                                        React.createElement("option", {value: "417"}, "417"), 
                                        React.createElement("option", {value: "500"}, "500"), 
                                        React.createElement("option", {value: "501"}, "501"), 
                                        React.createElement("option", {value: "503"}, "503"), 
                                        React.createElement("option", {value: "504"}, "504"), 
                                        React.createElement("option", {value: "505"}, "505")
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "col-md-6"}, 
                            React.createElement("h4", null, "Mock Response Delay (ms)"), 
                            React.createElement("p", null, React.createElement("em", null, "Currently not available"))
                        )
                    )
                )
            );
        } else {
            return (
                React.createElement("div", {style: {marginBottom: '40px'}}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, this.state.method.method, " | ", this.state.method.code)), 
                        React.createElement("div", {className: "col-md-6 text-right"}, React.createElement("button", {className: "btn btn-warning", onClick: this.toggleEditMode}, "Edit"))
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-md-12"}, 
                            React.createElement("label", {htmlFor: "methodResponseData" + this.state.method.method}), 
                            React.createElement("textarea", {className: "form-control json-field", id: "methodResponseData" + this.state.method.method, ref: "responseData", value: JSON.stringify(this.state.method.data), readOnly: true}
                            )
                        )
                    )
                )
            );
        }
    }
});

var MockMethods = React.createClass({displayName: "MockMethods",

    getInitialState: function() {
        return {
            methods: this.props.methods,
            addMode: false
        };
    },

    toggleAddMode: function() {
        this.setState({
            addMode: !this.state.addMode
        });
    },

    calculateAvailableVerbs: function() {
        //Warning - Shitty code for the sake of time to demo
        //TODO: Clean up this diaper method
        var responseVerbs = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];
        var availableVerbs = [];
        var i;
        var j;
        for (i = 0; i < responseVerbs.length; i++) {
            var match = false;
            for (j = 0; j < this.state.methods.length; j++) {
                match = match || (this.state.methods[j].method == responseVerbs[i]);
            }
            if (!match) {
                availableVerbs.push({verb: responseVerbs[i]});
            }
        }

        return availableVerbs;
    },

    generateVerbOptions: function() {
        var availableVerbs = this.calculateAvailableVerbs();

        var options = availableVerbs.map(function(verb) {
            return React.createElement("option", {value: verb.verb}, verb.verb);
        });


        return options;

    },

    postVerb: function() {
        //TODO: Validation
        var payload = {
            endpointId: this.props.mock._id,
            code: 200,
            method: this.refs.selectVerbMenu.value,
            data: JSON.stringify({
                "samplekey": "samplevalue"
            })
        };

        var url = this.props.context_root + '/api/method';

        $.ajax({
            type: 'POST',
            url: url,
            data: payload,
            dataType: 'json',
            success: function(response){

                var methods = this.state.methods.slice(0);
                methods.push(response.result);

                this.setState({
                    methods: methods,
                    addMode: false
                });
            }.bind(this)
        });

    },

    render: function() {
        if (this.state.addMode) {
            return (
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-12 text-right", style: {marginBottom: '20px'}}, 
                        React.createElement("select", {id: "selectVerbMenu", ref: "selectVerbMenu"}, 
                            this.generateVerbOptions()
                        ), " ", 
                        React.createElement("button", {className: "btn btn-primary", onClick: this.postVerb}, "Create"), " ", 
                        React.createElement("button", {className: "btn btn-default", onClick: this.toggleAddMode}, "Cancel")
                    ), 
                    React.createElement("div", {className: "col-md-12"}, 
                    this.state.methods.map(function(method) {
                        return React.createElement(MockMethod, {context_root: this.props.context_root, key: method._id + method.code + method.method, method: method})
                    }.bind(this))
                    )
                )
            );
        } else {

            var addButton = "";
            if (this.generateVerbOptions().length > 0) {
                addButton = React.createElement("button", {className: "btn btn-primary", onClick: this.toggleAddMode}, "Add New Verb");
            }

            return (
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-12 text-right", style: {marginBottom: '20px'}}, 
                        addButton
                    ), 
                    React.createElement("div", {className: "col-md-12"}, 
                    this.state.methods.map(function(method) {
                        return React.createElement(MockMethod, {context_root: this.props.context_root, key: method._id + method.code + method.method, method: method})
                    }.bind(this))
                    )
                )
            );
        }

    }
});



module.exports = MockMethods;
module.exports.MockMethod = MockMethod;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/Users/chrisls/dev/common-ui/mockingbird/src/jsx/MocksEdit.jsx":[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var MockMethods = require('./MockMethods.jsx');

var MocksEdit = React.createClass({displayName: "MocksEdit",

    getInitialState: function() {
        return {
            mock: this.props.mock,
            updated: false,
            error: false
        };
    },

    putForm: function() {

        if (!this.refs.name.value) {
            this.setState({ error: true });
            return;
        }
        //TODO: cleanup code, method, and data. Deprecated

        var data = {
            "name": this.refs.name.value,
            "description": this.refs.description.value,
            "author": this.refs.author.value,
            "componentName": this.refs.componentName.value,
            "responseData": JSON.stringify({"null":"null}"}),
            "componentProduct": this.refs.componentProduct.value,
            "responseCode": 200,
            "responseMethod": "GET"
        };

        var url = this.props.context_root + '/api/mock/' + this.state.mock._id;

        $.ajax({
            type: 'PUT',
            url: url,
            data: data,
            dataType: 'json',
            success: function(response){
                this.setState({
                    updated: true,
                    mock: response.result
                });
            }.bind(this)
        });
    },

    cancelForm: function() {
        //Just plain navigate back to the root
        window.location = this.props.context_root + '/mocks';
    },

    render: function() {
        var updated = "";
        if (this.state.updated) {
            updated = React.createElement("span", null, "The update was successful");
        }

        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-9"}, 
                        React.createElement("h1", null, "Update ", this.props.mock.name), 
                        React.createElement("p", null, this.props.context_root + '/mockapi/mock/' + this.state.mock._id)

                    ), 
                    React.createElement("div", {className: "col-md-3 text-right"}, 
                        React.createElement("button", {style: {marginTop: '20px'}, onClick: this.cancelForm, type: "submit", className: "btn btn-secondary"}, "Back")
                    )
                ), 
                React.createElement("hr", null), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-6"}, 
                        React.createElement("h3", null, "Basics"), 
                        React.createElement("p", null, "Enter some identifying information"), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {htmlFor: "mockName"}, "Name"), 
                            React.createElement("input", {type: "text", className: "form-control", id: "mockName", placeholder: "Name (REQUIRED)", ref: "name", name: "name", defaultValue: this.props.mock.name, required: true})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {htmlFor: "mockDescription"}, "Description"), 
                            React.createElement("input", {type: "text", className: "form-control", id: "mockDescription", placeholder: "Description", ref: "description", defaultValue: this.props.mock.metadata.description, name: "description"})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {htmlFor: "mockAuthor"}, "Author Email"), 
                            React.createElement("input", {type: "text", className: "form-control", id: "mockAuthor", placeholder: "Author Email", ref: "author", name: "author", defaultValue: this.props.mock.metadata.author})
                        )
                    ), 
                    React.createElement("div", {className: "col-md-6"}, 
                        React.createElement("h3", null, "Component Info"), 
                        React.createElement("p", null, "Enter some information about the component this data is going to be used for"), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {htmlFor: "mockComponentName"}, "Component Name"), 
                            React.createElement("input", {type: "text", className: "form-control", id: "mockComponentName", placeholder: "Component Name", ref: "componentName", name: "componentName", defaultValue: this.props.mock.component.name})
                        ), 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {htmlFor: "mockComponentProduct"}, "Product"), 
                            React.createElement("input", {type: "text", className: "form-control", id: "mockComponentProduct", placeholder: "Product Name", ref: "componentProduct", name: "componentProduct", defaultValue: this.props.mock.component.product})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-12 text-right"}, 
                        React.createElement("hr", null), 
                        React.createElement("button", {onClick: this.putForm, type: "submit", className: "btn btn-primary"}, "Update"), "  ", 
                        React.createElement("button", {onClick: this.cancelForm, type: "submit", className: "btn btn-secondary"}, "Cancel"), " ", updated
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-12"}, 
                    React.createElement("h3", null, "Endpoint VERBS"), 
                    React.createElement("p", null, "Below you will find verbs associated with this endpoint"), 
                        React.createElement(MockMethods, {context_root: this.props.context_root, mock: this.state.mock, methods: this.props.methods})
                    )
                )

            )
        );
    }
});

module.exports = MocksEdit;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MockMethods.jsx":"/Users/chrisls/dev/common-ui/mockingbird/src/jsx/MockMethods.jsx"}],"/Users/chrisls/dev/common-ui/mockingbird/src/mocks_edit.js":[function(require,module,exports){
var MocksEdit = require('./jsx/MocksEdit.jsx');

var mocks = React.createElement(MocksEdit ,{
    context_root: CONTEXT_ROOT.innerHTML,
    mock: JSON.parse(currentMock.innerHTML),
    methods: JSON.parse(currentMethods.innerHTML)
});
ReactDOM.render(mocks, document.getElementById('reactContainer'));

},{"./jsx/MocksEdit.jsx":"/Users/chrisls/dev/common-ui/mockingbird/src/jsx/MocksEdit.jsx"}]},{},["/Users/chrisls/dev/common-ui/mockingbird/src/mocks_edit.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2hyaXNscy9kZXYvY29tbW9uLXVpL21vY2tpbmdiaXJkL3NyYy9qc3gvTW9ja01ldGhvZHMuanN4IiwiL1VzZXJzL2NocmlzbHMvZGV2L2NvbW1vbi11aS9tb2NraW5nYmlyZC9zcmMvanN4L01vY2tzRWRpdC5qc3giLCIvVXNlcnMvY2hyaXNscy9kZXYvY29tbW9uLXVpL21vY2tpbmdiaXJkL3NyYy9tb2Nrc19lZGl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTFCLElBQUksZ0NBQWdDLDBCQUFBOztJQUVoQyxlQUFlLEVBQUUsV0FBVztRQUN4QixPQUFPO1lBQ0gsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQzVCLENBQUM7QUFDVixLQUFLOztJQUVELGNBQWMsRUFBRSxXQUFXO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDakMsQ0FBQyxDQUFDO0FBQ1gsS0FBSzs7SUFFRCxrQkFBa0IsRUFBRSxXQUFXO1FBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDckIsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvRTtBQUNULEtBQUs7O0FBRUwsSUFBSSxTQUFTLEVBQUUsV0FBVzs7UUFFbEIs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LEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQTtvQ0FDM0IsQ0FBQTtnQ0FDUCxDQUFBOzRCQUNKLENBQUE7d0JBQ0osQ0FBQSxFQUFBO3dCQUNOLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsVUFBVyxDQUFBLEVBQUE7NEJBQ3RCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsMEJB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QUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxXQUFZLENBQUEsRUFBQTtvQkFDM0Isb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxnQkFBbUIsQ0FBQSxFQUFBO29CQUN2QixvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFBLHlEQUEyRCxDQUFBLEVBQUE7d0JBQzFELG9CQUFDLFdBQVcsRUFBQSxDQUFBLENBQUMsWUFBQSxFQUFZLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUMsQ0FBQyxJQUFBLEVBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxDQUFDLE9BQUEsRUFBTyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUSxDQUFFLENBQUE7b0JBQ3ZHLENBQUE7QUFDMUIsZ0JBQXNCLENBQUE7O1lBRUosQ0FBQTtVQUNSO0tBQ0w7QUFDTCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7Ozs7QUM1SDNCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztBQUUvQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtJQUN2QyxZQUFZLEVBQUUsWUFBWSxDQUFDLFNBQVM7SUFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUN2QyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0NBQ2hELENBQUMsQ0FBQztBQUNILFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgTW9ja01ldGhvZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgICAgICBtZXRob2Q6IHRoaXMucHJvcHMubWV0aG9kXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHRvZ2dsZUVkaXRNb2RlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0TW9kZTogIXRoaXMuc3RhdGUuZWRpdE1vZGVcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICAkKFwiI3NlbGVjdENvZGVNZW51XCIgKyB0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2QpLnZhbCh0aGlzLnN0YXRlLm1ldGhvZC5jb2RlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwdXRVcGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL1RPRE86IFZhbGlkYXRpb25cbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBlbmRwb2ludElkOiB0aGlzLnN0YXRlLm1ldGhvZC5lbmRwb2ludElkLFxuICAgICAgICAgICAgY29kZTogJChcIiNzZWxlY3RDb2RlTWVudVwiICsgdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kKS52YWwoKSxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5yZWZzLnJlc3BvbnNlRGF0YS52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnByb3BzLmNvbnRleHRfcm9vdCArICcvYXBpL21ldGhvZC8nICsgdGhpcy5zdGF0ZS5tZXRob2QuX2lkO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUFVUJyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogcmVzcG9uc2UucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBlZGl0TW9kZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcblxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc0MHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPjxoND5FZGl0IHt0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2R9IHwge3RoaXMuc3RhdGUubWV0aG9kLmNvZGV9PC9oND48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5wdXRVcGRhdGV9PlNhdmU8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdE1vZGV9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJtZXRob2RSZXNwb25zZURhdGFcIiArIHRoaXMuc3RhdGUubWV0aG9kLm1ldGhvZH0+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGpzb24tZmllbGRcIiBpZD17XCJtZXRob2RSZXNwb25zZURhdGFcIiArIHRoaXMuc3RhdGUubWV0aG9kLm1ldGhvZH0gcmVmPVwicmVzcG9uc2VEYXRhXCIgZGVmYXVsdFZhbHVlPXtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1ldGhvZC5kYXRhKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TW9jayBSZXNwb25zZSBDb2RlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaG9vc2UgYSByZXNwb25zZSBjb2RlIHRvIHJldHVybjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD17XCJzZWxlY3RDb2RlTWVudVwiICsgdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kfSByZWY9XCJzZWxlY3RDb2RlTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDBcIj4yMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAxXCI+MjAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMlwiPjIwMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDNcIj4yMDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA0XCI+MjA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwNVwiPjIwNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDZcIj4yMDY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzAwXCI+MzAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwMVwiPjMwMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDJcIj4zMDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzAzXCI+MzAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwNFwiPjMwNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDVcIj4zMDU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzA2XCI+MzA2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwN1wiPjMwNzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDBcIj40MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDAxXCI+NDAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwM1wiPjQwMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDRcIj40MDQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDA1XCI+NDA1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwN1wiPjQwNzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDhcIj40MDg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDA5XCI+NDA5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQxMFwiPjQxMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MTFcIj40MTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDEyXCI+NDEyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQxM1wiPjQxMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MTRcIj40MTQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDE1XCI+NDE1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQxNlwiPjQxNjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MTdcIj40MTc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTAwXCI+NTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwMVwiPjUwMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDNcIj41MDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTA0XCI+NTA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwNVwiPjUwNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk1vY2sgUmVzcG9uc2UgRGVsYXkgKG1zKTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGVtPkN1cnJlbnRseSBub3QgYXZhaWxhYmxlPC9lbT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNDBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj48aDQ+e3RoaXMuc3RhdGUubWV0aG9kLm1ldGhvZH0gfCB7dGhpcy5zdGF0ZS5tZXRob2QuY29kZX08L2g0PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiB0ZXh0LXJpZ2h0XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXRNb2RlfT5FZGl0PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJtZXRob2RSZXNwb25zZURhdGFcIiArIHRoaXMuc3RhdGUubWV0aG9kLm1ldGhvZH0+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGpzb24tZmllbGRcIiBpZD17XCJtZXRob2RSZXNwb25zZURhdGFcIiArIHRoaXMuc3RhdGUubWV0aG9kLm1ldGhvZH0gcmVmPVwicmVzcG9uc2VEYXRhXCIgdmFsdWU9e0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWV0aG9kLmRhdGEpfSByZWFkT25seT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG52YXIgTW9ja01ldGhvZHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWV0aG9kczogdGhpcy5wcm9wcy5tZXRob2RzLFxuICAgICAgICAgICAgYWRkTW9kZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQWRkTW9kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWRkTW9kZTogIXRoaXMuc3RhdGUuYWRkTW9kZVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlQXZhaWxhYmxlVmVyYnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL1dhcm5pbmcgLSBTaGl0dHkgY29kZSBmb3IgdGhlIHNha2Ugb2YgdGltZSB0byBkZW1vXG4gICAgICAgIC8vVE9ETzogQ2xlYW4gdXAgdGhpcyBkaWFwZXIgbWV0aG9kXG4gICAgICAgIHZhciByZXNwb25zZVZlcmJzID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnUEFUQ0gnLCAnREVMRVRFJywgJ09QVElPTlMnXTtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVZlcmJzID0gW107XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgajtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlc3BvbnNlVmVyYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHRoaXMuc3RhdGUubWV0aG9kcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gbWF0Y2ggfHwgKHRoaXMuc3RhdGUubWV0aG9kc1tqXS5tZXRob2QgPT0gcmVzcG9uc2VWZXJic1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlVmVyYnMucHVzaCh7dmVyYjogcmVzcG9uc2VWZXJic1tpXX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF2YWlsYWJsZVZlcmJzO1xuICAgIH0sXG5cbiAgICBnZW5lcmF0ZVZlcmJPcHRpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVZlcmJzID0gdGhpcy5jYWxjdWxhdGVBdmFpbGFibGVWZXJicygpO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0gYXZhaWxhYmxlVmVyYnMubWFwKGZ1bmN0aW9uKHZlcmIpIHtcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXt2ZXJiLnZlcmJ9Pnt2ZXJiLnZlcmJ9PC9vcHRpb24+O1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuXG4gICAgfSxcblxuICAgIHBvc3RWZXJiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9UT0RPOiBWYWxpZGF0aW9uXG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgZW5kcG9pbnRJZDogdGhpcy5wcm9wcy5tb2NrLl9pZCxcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5yZWZzLnNlbGVjdFZlcmJNZW51LnZhbHVlLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFwic2FtcGxla2V5XCI6IFwic2FtcGxldmFsdWVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdXJsID0gdGhpcy5wcm9wcy5jb250ZXh0X3Jvb3QgKyAnL2FwaS9tZXRob2QnO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGRhdGE6IHBheWxvYWQsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSB0aGlzLnN0YXRlLm1ldGhvZHMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKHJlc3BvbnNlLnJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogbWV0aG9kcyxcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcblxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hZGRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHRleHQtcmlnaHRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0VmVyYk1lbnVcIiByZWY9XCJzZWxlY3RWZXJiTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVmVyYk9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnBvc3RWZXJifT5DcmVhdGU8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy50b2dnbGVBZGRNb2RlfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1ldGhvZHMubWFwKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNb2NrTWV0aG9kIGNvbnRleHRfcm9vdD17dGhpcy5wcm9wcy5jb250ZXh0X3Jvb3R9IGtleT17bWV0aG9kLl9pZCArIG1ldGhvZC5jb2RlICsgbWV0aG9kLm1ldGhvZH0gbWV0aG9kPXttZXRob2R9Lz5cbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB2YXIgYWRkQnV0dG9uID0gXCJcIjtcbiAgICAgICAgICAgIGlmICh0aGlzLmdlbmVyYXRlVmVyYk9wdGlvbnMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFkZE1vZGV9PkFkZCBOZXcgVmVyYjwvYnV0dG9uPjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcyMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FkZEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1ldGhvZHMubWFwKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNb2NrTWV0aG9kIGNvbnRleHRfcm9vdD17dGhpcy5wcm9wcy5jb250ZXh0X3Jvb3R9IGtleT17bWV0aG9kLl9pZCArIG1ldGhvZC5jb2RlICsgbWV0aG9kLm1ldGhvZH0gbWV0aG9kPXttZXRob2R9Lz5cbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG59KTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gTW9ja01ldGhvZHM7XG5tb2R1bGUuZXhwb3J0cy5Nb2NrTWV0aG9kID0gTW9ja01ldGhvZDtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgTW9ja01ldGhvZHMgPSByZXF1aXJlKCcuL01vY2tNZXRob2RzLmpzeCcpO1xuXG52YXIgTW9ja3NFZGl0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vY2s6IHRoaXMucHJvcHMubW9jayxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHB1dEZvcm06IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5yZWZzLm5hbWUudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IGNsZWFudXAgY29kZSwgbWV0aG9kLCBhbmQgZGF0YS4gRGVwcmVjYXRlZFxuXG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMucmVmcy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLnJlZnMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBcImF1dGhvclwiOiB0aGlzLnJlZnMuYXV0aG9yLnZhbHVlLFxuICAgICAgICAgICAgXCJjb21wb25lbnROYW1lXCI6IHRoaXMucmVmcy5jb21wb25lbnROYW1lLnZhbHVlLFxuICAgICAgICAgICAgXCJyZXNwb25zZURhdGFcIjogSlNPTi5zdHJpbmdpZnkoe1wibnVsbFwiOlwibnVsbH1cIn0pLFxuICAgICAgICAgICAgXCJjb21wb25lbnRQcm9kdWN0XCI6IHRoaXMucmVmcy5jb21wb25lbnRQcm9kdWN0LnZhbHVlLFxuICAgICAgICAgICAgXCJyZXNwb25zZUNvZGVcIjogMjAwLFxuICAgICAgICAgICAgXCJyZXNwb25zZU1ldGhvZFwiOiBcIkdFVFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHVybCA9IHRoaXMucHJvcHMuY29udGV4dF9yb290ICsgJy9hcGkvbW9jay8nICsgdGhpcy5zdGF0ZS5tb2NrLl9pZDtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtb2NrOiByZXNwb25zZS5yZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2FuY2VsRm9ybTogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vSnVzdCBwbGFpbiBuYXZpZ2F0ZSBiYWNrIHRvIHRoZSByb290XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucHJvcHMuY29udGV4dF9yb290ICsgJy9tb2Nrcyc7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cGRhdGVkID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXBkYXRlZCkge1xuICAgICAgICAgICAgdXBkYXRlZCA9IDxzcGFuPlRoZSB1cGRhdGUgd2FzIHN1Y2Nlc3NmdWw8L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlVwZGF0ZSB7dGhpcy5wcm9wcy5tb2NrLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmNvbnRleHRfcm9vdCArICcvbW9ja2FwaS9tb2NrLycgKyB0aGlzLnN0YXRlLm1vY2suX2lkfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOiAnMjBweCd9fSBvbkNsaWNrPXt0aGlzLmNhbmNlbEZvcm19IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QmFzaWNzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVudGVyIHNvbWUgaWRlbnRpZnlpbmcgaW5mb3JtYXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vY2tOYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtb2NrTmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZSAoUkVRVUlSRUQpXCIgcmVmPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm1vY2submFtZX0gcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb2NrRGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtb2NrRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgcmVmPVwiZGVzY3JpcHRpb25cIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubW9jay5tZXRhZGF0YS5kZXNjcmlwdGlvbn0gbmFtZT1cImRlc2NyaXB0aW9uXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb2NrQXV0aG9yXCI+QXV0aG9yIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm1vY2tBdXRob3JcIiBwbGFjZWhvbGRlcj1cIkF1dGhvciBFbWFpbFwiIHJlZj1cImF1dGhvclwiIG5hbWU9XCJhdXRob3JcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubW9jay5tZXRhZGF0YS5hdXRob3J9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db21wb25lbnQgSW5mbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FbnRlciBzb21lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb21wb25lbnQgdGhpcyBkYXRhIGlzIGdvaW5nIHRvIGJlIHVzZWQgZm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb2NrQ29tcG9uZW50TmFtZVwiPkNvbXBvbmVudCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm1vY2tDb21wb25lbnROYW1lXCIgcGxhY2Vob2xkZXI9XCJDb21wb25lbnQgTmFtZVwiIHJlZj1cImNvbXBvbmVudE5hbWVcIiBuYW1lPVwiY29tcG9uZW50TmFtZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5tb2NrLmNvbXBvbmVudC5uYW1lfT48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vY2tDb21wb25lbnRQcm9kdWN0XCI+UHJvZHVjdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtb2NrQ29tcG9uZW50UHJvZHVjdFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBOYW1lXCIgcmVmPVwiY29tcG9uZW50UHJvZHVjdFwiIG5hbWU9XCJjb21wb25lbnRQcm9kdWN0XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm1vY2suY29tcG9uZW50LnByb2R1Y3R9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wdXRGb3JtfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VXBkYXRlPC9idXR0b24+ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNhbmNlbEZvcm19IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPkNhbmNlbDwvYnV0dG9uPiB7dXBkYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkVuZHBvaW50IFZFUkJTPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+QmVsb3cgeW91IHdpbGwgZmluZCB2ZXJicyBhc3NvY2lhdGVkIHdpdGggdGhpcyBlbmRwb2ludDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2NrTWV0aG9kcyBjb250ZXh0X3Jvb3Q9e3RoaXMucHJvcHMuY29udGV4dF9yb290fSBtb2NrPXt0aGlzLnN0YXRlLm1vY2t9IG1ldGhvZHM9e3RoaXMucHJvcHMubWV0aG9kc30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9ja3NFZGl0O1xuIiwidmFyIE1vY2tzRWRpdCA9IHJlcXVpcmUoJy4vanN4L01vY2tzRWRpdC5qc3gnKTtcblxudmFyIG1vY2tzID0gUmVhY3QuY3JlYXRlRWxlbWVudChNb2Nrc0VkaXQgLHtcbiAgICBjb250ZXh0X3Jvb3Q6IENPTlRFWFRfUk9PVC5pbm5lckhUTUwsXG4gICAgbW9jazogSlNPTi5wYXJzZShjdXJyZW50TW9jay5pbm5lckhUTUwpLFxuICAgIG1ldGhvZHM6IEpTT04ucGFyc2UoY3VycmVudE1ldGhvZHMuaW5uZXJIVE1MKVxufSk7XG5SZWFjdERPTS5yZW5kZXIobW9ja3MsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdENvbnRhaW5lcicpKTtcbiJdfQ==
