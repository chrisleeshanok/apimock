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

        var payload = {
            endpointId: this.state.method.endpointId,
            code: $("#selectCodeMenu" + this.state.method.method).val(),
            method: this.state.method.method,
            data: this.refs.responseData.value
        };

        var url = '/api/method/' + this.state.method._id;

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

        var payload = {
            endpointId: this.props.mock._id,
            code: 200,
            method: this.refs.selectVerbMenu.value,
            data: JSON.stringify({
                "samplekey": "samplevalue"
            })
        };

        var url = '/api/method';

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
                        return React.createElement(MockMethod, {key: method.id + method.code + method.method, method: method})
                    })
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
                        return React.createElement(MockMethod, {key: method.id, method: method})
                    })
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

        if (!(this.refs.name.value)) {
            this.setState({ error: true });
            return;
        }

        var data = {
            "name": this.refs.name.value,
            "description": this.refs.description.value,
            "author": this.refs.author.value,
            "componentName": this.refs.componentName.value,
            "responseData": {"null": "null"},
            "componentProduct": this.refs.componentProduct.value,
            "responseCode": 200,
            "responseMethod": "GET"
        };

        var url = '/api/mock/' + this.state.mock._id;

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
                    React.createElement("div", {className: "col-md-12"}, 
                        React.createElement("h1", null, "Update ", this.props.mock.name), 
                        React.createElement("hr", null)
                    )
                ), 
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
                        React.createElement(MockMethods, {mock: this.state.mock, methods: this.props.methods})
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
    "context_root": CONTEXT_ROOT.innerHTML,
    mock: JSON.parse(currentMock.innerHTML),
    methods: JSON.parse(currentMethods.innerHTML)
});
ReactDOM.render(mocks, document.getElementById('reactContainer'));

},{"./jsx/MocksEdit.jsx":"/Users/chrisls/dev/common-ui/mockingbird/src/jsx/MocksEdit.jsx"}]},{},["/Users/chrisls/dev/common-ui/mockingbird/src/mocks_edit.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2hyaXNscy9kZXYvY29tbW9uLXVpL21vY2tpbmdiaXJkL3NyYy9qc3gvTW9ja01ldGhvZHMuanN4IiwiL1VzZXJzL2NocmlzbHMvZGV2L2NvbW1vbi11aS9tb2NraW5nYmlyZC9zcmMvanN4L01vY2tzRWRpdC5qc3giLCIvVXNlcnMvY2hyaXNscy9kZXYvY29tbW9uLXVpL21vY2tpbmdiaXJkL3NyYy9tb2Nrc19lZGl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTFCLElBQUksZ0NBQWdDLDBCQUFBOztJQUVoQyxlQUFlLEVBQUUsV0FBVztRQUN4QixPQUFPO1lBQ0gsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQzVCLENBQUM7QUFDVixLQUFLOztJQUVELGNBQWMsRUFBRSxXQUFXO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDakMsQ0FBQyxDQUFDO0FBQ1gsS0FBSzs7SUFFRCxrQkFBa0IsRUFBRSxXQUFXO1FBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDckIsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvRTtBQUNULEtBQUs7O0FBRUwsSUFBSSxTQUFTLEVBQUUsV0FBVzs7UUFFbEIs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LEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQTtvQ0FDM0IsQ0FBQTtnQ0FDUCxDQUFBOzRCQUNKLENBQUE7d0JBQ0osQ0FBQSxFQUFBO3dCQUNOLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsVUFBVyxDQUFBLEVBQUE7NEJBQ3RCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsMEJBQTZCLENBQUEsRUFBQTs0QkFDakMsb0JBQUEsR0FB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LCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBNb2NrTWV0aG9kID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2RcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlRWRpdE1vZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVkaXRNb2RlOiAhdGhpcy5zdGF0ZS5lZGl0TW9kZVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdE1vZGUpIHtcbiAgICAgICAgICAgICQoXCIjc2VsZWN0Q29kZU1lbnVcIiArIHRoaXMuc3RhdGUubWV0aG9kLm1ldGhvZCkudmFsKHRoaXMuc3RhdGUubWV0aG9kLmNvZGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHB1dFVwZGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBlbmRwb2ludElkOiB0aGlzLnN0YXRlLm1ldGhvZC5lbmRwb2ludElkLFxuICAgICAgICAgICAgY29kZTogJChcIiNzZWxlY3RDb2RlTWVudVwiICsgdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kKS52YWwoKSxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5yZWZzLnJlc3BvbnNlRGF0YS52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS9tZXRob2QvJyArIHRoaXMuc3RhdGUubWV0aG9kLl9pZDtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGRhdGE6IHBheWxvYWQsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHJlc3BvbnNlLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG5cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lZGl0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNDBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj48aDQ+RWRpdCB7dGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kfSB8IHt0aGlzLnN0YXRlLm1ldGhvZC5jb2RlfTwvaDQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucHV0VXBkYXRlfT5TYXZlPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXRNb2RlfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWV0aG9kUmVzcG9uc2VEYXRhXCIgKyB0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2R9PjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBqc29uLWZpZWxkXCIgaWQ9e1wibWV0aG9kUmVzcG9uc2VEYXRhXCIgKyB0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2R9IHJlZj1cInJlc3BvbnNlRGF0YVwiIGRlZmF1bHRWYWx1ZT17SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5tZXRob2QuZGF0YSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk1vY2sgUmVzcG9uc2UgQ29kZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hvb3NlIGEgcmVzcG9uc2UgY29kZSB0byByZXR1cm48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9e1wic2VsZWN0Q29kZU1lbnVcIiArIHRoaXMuc3RhdGUubWV0aG9kLm1ldGhvZH0gcmVmPVwic2VsZWN0Q29kZU1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAwXCI+MjAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMVwiPjIwMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDJcIj4yMDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAzXCI+MjAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwNFwiPjIwNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDVcIj4yMDU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA2XCI+MjA2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwMFwiPjMwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDFcIj4zMDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzAyXCI+MzAyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwM1wiPjMwMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDRcIj4zMDQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzA1XCI+MzA1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwNlwiPjMwNjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDdcIj4zMDc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDAwXCI+NDAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwMVwiPjQwMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDNcIj40MDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDA0XCI+NDA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwNVwiPjQwNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDdcIj40MDc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDA4XCI+NDA4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwOVwiPjQwOTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MTBcIj40MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDExXCI+NDExPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQxMlwiPjQxMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MTNcIj40MTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDE0XCI+NDE0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQxNVwiPjQxNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MTZcIj40MTY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDE3XCI+NDE3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwMFwiPjUwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDFcIj41MDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTAzXCI+NTAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwNFwiPjUwNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDVcIj41MDU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Nb2NrIFJlc3BvbnNlIERlbGF5IChtcyk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxlbT5DdXJyZW50bHkgbm90IGF2YWlsYWJsZTwvZW0+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzQwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+PGg0Pnt0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2R9IHwge3RoaXMuc3RhdGUubWV0aG9kLmNvZGV9PC9oND48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgdGV4dC1yaWdodFwiPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgb25DbGljaz17dGhpcy50b2dnbGVFZGl0TW9kZX0+RWRpdDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWV0aG9kUmVzcG9uc2VEYXRhXCIgKyB0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2R9PjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBqc29uLWZpZWxkXCIgaWQ9e1wibWV0aG9kUmVzcG9uc2VEYXRhXCIgKyB0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2R9IHJlZj1cInJlc3BvbnNlRGF0YVwiIHZhbHVlPXtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1ldGhvZC5kYXRhKX0gcmVhZE9ubHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudmFyIE1vY2tNZXRob2RzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1ldGhvZHM6IHRoaXMucHJvcHMubWV0aG9kcyxcbiAgICAgICAgICAgIGFkZE1vZGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHRvZ2dsZUFkZE1vZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFkZE1vZGU6ICF0aGlzLnN0YXRlLmFkZE1vZGVcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNhbGN1bGF0ZUF2YWlsYWJsZVZlcmJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9XYXJuaW5nIC0gU2hpdHR5IGNvZGUgZm9yIHRoZSBzYWtlIG9mIHRpbWUgdG8gZGVtb1xuICAgICAgICB2YXIgcmVzcG9uc2VWZXJicyA9IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ1BBVENIJywgJ0RFTEVURScsICdPUFRJT05TJ107XG4gICAgICAgIHZhciBhdmFpbGFibGVWZXJicyA9IFtdO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGo7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXNwb25zZVZlcmJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLnN0YXRlLm1ldGhvZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IG1hdGNoIHx8ICh0aGlzLnN0YXRlLm1ldGhvZHNbal0ubWV0aG9kID09IHJlc3BvbnNlVmVyYnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVZlcmJzLnB1c2goe3ZlcmI6IHJlc3BvbnNlVmVyYnNbaV19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdmFpbGFibGVWZXJicztcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGVWZXJiT3B0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhdmFpbGFibGVWZXJicyA9IHRoaXMuY2FsY3VsYXRlQXZhaWxhYmxlVmVyYnMoKTtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IGF2YWlsYWJsZVZlcmJzLm1hcChmdW5jdGlvbih2ZXJiKSB7XG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17dmVyYi52ZXJifT57dmVyYi52ZXJifTwvb3B0aW9uPjtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcblxuICAgIH0sXG5cbiAgICBwb3N0VmVyYjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XG4gICAgICAgICAgICBlbmRwb2ludElkOiB0aGlzLnByb3BzLm1vY2suX2lkLFxuICAgICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLnJlZnMuc2VsZWN0VmVyYk1lbnUudmFsdWUsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgXCJzYW1wbGVrZXlcIjogXCJzYW1wbGV2YWx1ZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS9tZXRob2QnO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGRhdGE6IHBheWxvYWQsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSB0aGlzLnN0YXRlLm1ldGhvZHMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKHJlc3BvbnNlLnJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczogbWV0aG9kcyxcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcblxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hZGRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHRleHQtcmlnaHRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0VmVyYk1lbnVcIiByZWY9XCJzZWxlY3RWZXJiTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVmVyYk9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnBvc3RWZXJifT5DcmVhdGU8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy50b2dnbGVBZGRNb2RlfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1ldGhvZHMubWFwKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNb2NrTWV0aG9kIGtleT17bWV0aG9kLmlkICsgbWV0aG9kLmNvZGUgKyBtZXRob2QubWV0aG9kfSBtZXRob2Q9e21ldGhvZH0vPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB2YXIgYWRkQnV0dG9uID0gXCJcIjtcbiAgICAgICAgICAgIGlmICh0aGlzLmdlbmVyYXRlVmVyYk9wdGlvbnMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFkZE1vZGV9PkFkZCBOZXcgVmVyYjwvYnV0dG9uPjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcyMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FkZEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1ldGhvZHMubWFwKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNb2NrTWV0aG9kIGtleT17bWV0aG9kLmlkfSBtZXRob2Q9e21ldGhvZH0vPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG59KTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gTW9ja01ldGhvZHM7XG5tb2R1bGUuZXhwb3J0cy5Nb2NrTWV0aG9kID0gTW9ja01ldGhvZDtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgTW9ja01ldGhvZHMgPSByZXF1aXJlKCcuL01vY2tNZXRob2RzLmpzeCcpO1xuXG52YXIgTW9ja3NFZGl0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vY2s6IHRoaXMucHJvcHMubW9jayxcbiAgICAgICAgICAgIHVwZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHB1dEZvcm06IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmICghKHRoaXMucmVmcy5uYW1lLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5yZWZzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMucmVmcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIFwiYXV0aG9yXCI6IHRoaXMucmVmcy5hdXRob3IudmFsdWUsXG4gICAgICAgICAgICBcImNvbXBvbmVudE5hbWVcIjogdGhpcy5yZWZzLmNvbXBvbmVudE5hbWUudmFsdWUsXG4gICAgICAgICAgICBcInJlc3BvbnNlRGF0YVwiOiB7XCJudWxsXCI6IFwibnVsbFwifSxcbiAgICAgICAgICAgIFwiY29tcG9uZW50UHJvZHVjdFwiOiB0aGlzLnJlZnMuY29tcG9uZW50UHJvZHVjdC52YWx1ZSxcbiAgICAgICAgICAgIFwicmVzcG9uc2VDb2RlXCI6IDIwMCxcbiAgICAgICAgICAgIFwicmVzcG9uc2VNZXRob2RcIjogXCJHRVRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS9tb2NrLycgKyB0aGlzLnN0YXRlLm1vY2suX2lkO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUFVUJyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1vY2s6IHJlc3BvbnNlLnJlc3VsdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjYW5jZWxGb3JtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5wcm9wcy5jb250ZXh0X3Jvb3QgKyAnL21vY2tzJztcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVwZGF0ZWQgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS51cGRhdGVkKSB7XG4gICAgICAgICAgICB1cGRhdGVkID0gPHNwYW4+VGhlIHVwZGF0ZSB3YXMgc3VjY2Vzc2Z1bDwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlVwZGF0ZSB7dGhpcy5wcm9wcy5tb2NrLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CYXNpY3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW50ZXIgc29tZSBpZGVudGlmeWluZyBpbmZvcm1hdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW9ja05hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm1vY2tOYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lIChSRVFVSVJFRClcIiByZWY9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubW9jay5uYW1lfSByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vY2tEZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm1vY2tEZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiByZWY9XCJkZXNjcmlwdGlvblwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5tb2NrLm1ldGFkYXRhLmRlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vY2tBdXRob3JcIj5BdXRob3IgRW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibW9ja0F1dGhvclwiIHBsYWNlaG9sZGVyPVwiQXV0aG9yIEVtYWlsXCIgcmVmPVwiYXV0aG9yXCIgbmFtZT1cImF1dGhvclwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5tb2NrLm1ldGFkYXRhLmF1dGhvcn0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbXBvbmVudCBJbmZvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVudGVyIHNvbWUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbXBvbmVudCB0aGlzIGRhdGEgaXMgZ29pbmcgdG8gYmUgdXNlZCBmb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vY2tDb21wb25lbnROYW1lXCI+Q29tcG9uZW50IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibW9ja0NvbXBvbmVudE5hbWVcIiBwbGFjZWhvbGRlcj1cIkNvbXBvbmVudCBOYW1lXCIgcmVmPVwiY29tcG9uZW50TmFtZVwiIG5hbWU9XCJjb21wb25lbnROYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm1vY2suY29tcG9uZW50Lm5hbWV9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW9ja0NvbXBvbmVudFByb2R1Y3RcIj5Qcm9kdWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm1vY2tDb21wb25lbnRQcm9kdWN0XCIgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IE5hbWVcIiByZWY9XCJjb21wb25lbnRQcm9kdWN0XCIgbmFtZT1cImNvbXBvbmVudFByb2R1Y3RcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubW9jay5jb21wb25lbnQucHJvZHVjdH0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnB1dEZvcm19IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5VcGRhdGU8L2J1dHRvbj4gJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2FuY2VsRm9ybX0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+Q2FuY2VsPC9idXR0b24+IHt1cGRhdGVkfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+RW5kcG9pbnQgVkVSQlM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5CZWxvdyB5b3Ugd2lsbCBmaW5kIHZlcmJzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGVuZHBvaW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vY2tNZXRob2RzIG1vY2s9e3RoaXMuc3RhdGUubW9ja30gbWV0aG9kcz17dGhpcy5wcm9wcy5tZXRob2RzfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2Nrc0VkaXQ7XG4iLCJ2YXIgTW9ja3NFZGl0ID0gcmVxdWlyZSgnLi9qc3gvTW9ja3NFZGl0LmpzeCcpO1xuXG52YXIgbW9ja3MgPSBSZWFjdC5jcmVhdGVFbGVtZW50KE1vY2tzRWRpdCAse1xuICAgIFwiY29udGV4dF9yb290XCI6IENPTlRFWFRfUk9PVC5pbm5lckhUTUwsXG4gICAgbW9jazogSlNPTi5wYXJzZShjdXJyZW50TW9jay5pbm5lckhUTUwpLFxuICAgIG1ldGhvZHM6IEpTT04ucGFyc2UoY3VycmVudE1ldGhvZHMuaW5uZXJIVE1MKVxufSk7XG5SZWFjdERPTS5yZW5kZXIobW9ja3MsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdENvbnRhaW5lcicpKTtcbiJdfQ==
