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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2hyaXNscy9kZXYvY29tbW9uLXVpL21vY2tpbmdiaXJkL3NyYy9qc3gvTW9ja01ldGhvZHMuanN4IiwiL1VzZXJzL2NocmlzbHMvZGV2L2NvbW1vbi11aS9tb2NraW5nYmlyZC9zcmMvanN4L01vY2tzRWRpdC5qc3giLCIvVXNlcnMvY2hyaXNscy9kZXYvY29tbW9uLXVpL21vY2tpbmdiaXJkL3NyYy9tb2Nrc19lZGl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTFCLElBQUksZ0NBQWdDLDBCQUFBOztJQUVoQyxlQUFlLEVBQUUsV0FBVztRQUN4QixPQUFPO1lBQ0gsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQzVCLENBQUM7QUFDVixLQUFLOztJQUVELGNBQWMsRUFBRSxXQUFXO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDakMsQ0FBQyxDQUFDO0FBQ1gsS0FBSzs7SUFFRCxrQkFBa0IsRUFBRSxXQUFXO1FBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDckIsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvRTtBQUNULEtBQUs7O0FBRUwsSUFBSSxTQUFTLEVBQUUsV0FBVzs7UUFFbEIs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LEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQSxFQUFBO3dDQUNoQyxvQkFBQSxRQUFPLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFDLEtBQU0sQ0FBQSxFQUFBLEtBQVksQ0FBQTtvQ0FDM0IsQ0FBQTtnQ0FDUCxDQUFBOzRCQUNKLENBQUE7d0JBQ0osQ0FBQSxFQUFBO3dCQUNOLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsVUFBVyxDQUFBLEVBQUE7NEJBQ3RCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsMEJBQTZCLENBQUEsRUFBQTs0QkFDakMsb0JBQUEsR0FB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O0tBQ0w7QUFDTCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7Ozs7QUMxSDNCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztBQUUvQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtJQUN2QyxjQUFjLEVBQUUsWUFBWSxDQUFDLFNBQVM7SUFDdEMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUN2QyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0NBQ2hELENBQUMsQ0FBQztBQUNILFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgTW9ja01ldGhvZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgICAgICBtZXRob2Q6IHRoaXMucHJvcHMubWV0aG9kXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHRvZ2dsZUVkaXRNb2RlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0TW9kZTogIXRoaXMuc3RhdGUuZWRpdE1vZGVcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICAkKFwiI3NlbGVjdENvZGVNZW51XCIgKyB0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2QpLnZhbCh0aGlzLnN0YXRlLm1ldGhvZC5jb2RlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwdXRVcGRhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgZW5kcG9pbnRJZDogdGhpcy5zdGF0ZS5tZXRob2QuZW5kcG9pbnRJZCxcbiAgICAgICAgICAgIGNvZGU6ICQoXCIjc2VsZWN0Q29kZU1lbnVcIiArIHRoaXMuc3RhdGUubWV0aG9kLm1ldGhvZCkudmFsKCksXG4gICAgICAgICAgICBtZXRob2Q6IHRoaXMuc3RhdGUubWV0aG9kLm1ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMucmVmcy5yZXNwb25zZURhdGEudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdXJsID0gJy9hcGkvbWV0aG9kLycgKyB0aGlzLnN0YXRlLm1ldGhvZC5faWQ7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiBwYXlsb2FkLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiByZXNwb25zZS5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzQwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+PGg0PkVkaXQge3RoaXMuc3RhdGUubWV0aG9kLm1ldGhvZH0gfCB7dGhpcy5zdGF0ZS5tZXRob2QuY29kZX08L2g0PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnB1dFVwZGF0ZX0+U2F2ZTwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy50b2dnbGVFZGl0TW9kZX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcIm1ldGhvZFJlc3BvbnNlRGF0YVwiICsgdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kfT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wganNvbi1maWVsZFwiIGlkPXtcIm1ldGhvZFJlc3BvbnNlRGF0YVwiICsgdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kfSByZWY9XCJyZXNwb25zZURhdGFcIiBkZWZhdWx0VmFsdWU9e0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWV0aG9kLmRhdGEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Nb2NrIFJlc3BvbnNlIENvZGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNob29zZSBhIHJlc3BvbnNlIGNvZGUgdG8gcmV0dXJuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPXtcInNlbGVjdENvZGVNZW51XCIgKyB0aGlzLnN0YXRlLm1ldGhvZC5tZXRob2R9IHJlZj1cInNlbGVjdENvZGVNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMFwiPjIwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDFcIj4yMDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyXCI+MjAyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwM1wiPjIwMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDRcIj4yMDQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA1XCI+MjA1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwNlwiPjIwNjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDBcIj4zMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzAxXCI+MzAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwMlwiPjMwMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDNcIj4zMDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzA0XCI+MzA0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwNVwiPjMwNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMDZcIj4zMDY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzA3XCI+MzA3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwMFwiPjQwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDFcIj40MDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDAzXCI+NDAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwNFwiPjQwNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDVcIj40MDU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDA3XCI+NDA3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwOFwiPjQwODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDlcIj40MDk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDEwXCI+NDEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQxMVwiPjQxMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MTJcIj40MTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDEzXCI+NDEzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQxNFwiPjQxNDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MTVcIj40MTU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDE2XCI+NDE2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQxN1wiPjQxNzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDBcIj41MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTAxXCI+NTAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwM1wiPjUwMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDRcIj41MDQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTA1XCI+NTA1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TW9jayBSZXNwb25zZSBEZWxheSAobXMpPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48ZW0+Q3VycmVudGx5IG5vdCBhdmFpbGFibGU8L2VtPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc0MHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPjxoND57dGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kfSB8IHt0aGlzLnN0YXRlLm1ldGhvZC5jb2RlfTwvaDQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHRleHQtcmlnaHRcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdE1vZGV9PkVkaXQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcIm1ldGhvZFJlc3BvbnNlRGF0YVwiICsgdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kfT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wganNvbi1maWVsZFwiIGlkPXtcIm1ldGhvZFJlc3BvbnNlRGF0YVwiICsgdGhpcy5zdGF0ZS5tZXRob2QubWV0aG9kfSByZWY9XCJyZXNwb25zZURhdGFcIiB2YWx1ZT17SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5tZXRob2QuZGF0YSl9IHJlYWRPbmx5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbnZhciBNb2NrTWV0aG9kcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXRob2RzOiB0aGlzLnByb3BzLm1ldGhvZHMsXG4gICAgICAgICAgICBhZGRNb2RlOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB0b2dnbGVBZGRNb2RlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhZGRNb2RlOiAhdGhpcy5zdGF0ZS5hZGRNb2RlXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjYWxjdWxhdGVBdmFpbGFibGVWZXJiczogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vV2FybmluZyAtIFNoaXR0eSBjb2RlIGZvciB0aGUgc2FrZSBvZiB0aW1lIHRvIGRlbW9cbiAgICAgICAgdmFyIHJlc3BvbnNlVmVyYnMgPSBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdQQVRDSCcsICdERUxFVEUnLCAnT1BUSU9OUyddO1xuICAgICAgICB2YXIgYXZhaWxhYmxlVmVyYnMgPSBbXTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBqO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVzcG9uc2VWZXJicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5zdGF0ZS5tZXRob2RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBtYXRjaCB8fCAodGhpcy5zdGF0ZS5tZXRob2RzW2pdLm1ldGhvZCA9PSByZXNwb25zZVZlcmJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVWZXJicy5wdXNoKHt2ZXJiOiByZXNwb25zZVZlcmJzW2ldfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXZhaWxhYmxlVmVyYnM7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlVmVyYk9wdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXZhaWxhYmxlVmVyYnMgPSB0aGlzLmNhbGN1bGF0ZUF2YWlsYWJsZVZlcmJzKCk7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhdmFpbGFibGVWZXJicy5tYXAoZnVuY3Rpb24odmVyYikge1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3ZlcmIudmVyYn0+e3ZlcmIudmVyYn08L29wdGlvbj47XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG5cbiAgICB9LFxuXG4gICAgcG9zdFZlcmI6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgZW5kcG9pbnRJZDogdGhpcy5wcm9wcy5tb2NrLl9pZCxcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5yZWZzLnNlbGVjdFZlcmJNZW51LnZhbHVlLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFwic2FtcGxla2V5XCI6IFwic2FtcGxldmFsdWVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdXJsID0gJy9hcGkvbWV0aG9kJztcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiBwYXlsb2FkLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcblxuICAgICAgICAgICAgICAgIHZhciBtZXRob2RzID0gdGhpcy5zdGF0ZS5tZXRob2RzLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChyZXNwb25zZS5yZXN1bHQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IG1ldGhvZHMsXG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG5cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWRkTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcyMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdFZlcmJNZW51XCIgcmVmPVwic2VsZWN0VmVyYk1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVZlcmJPcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5wb3N0VmVyYn0+Q3JlYXRlPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWRkTW9kZX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXRob2RzLm1hcChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TW9ja01ldGhvZCBrZXk9e21ldGhvZC5pZCArIG1ldGhvZC5jb2RlICsgbWV0aG9kLm1ldGhvZH0gbWV0aG9kPXttZXRob2R9Lz5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdmFyIGFkZEJ1dHRvbiA9IFwiXCI7XG4gICAgICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZVZlcmJPcHRpb25zKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFkZEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy50b2dnbGVBZGRNb2RlfT5BZGQgTmV3IFZlcmI8L2J1dHRvbj47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgdGV4dC1yaWdodFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMjBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthZGRCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXRob2RzLm1hcChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TW9ja01ldGhvZCBrZXk9e21ldGhvZC5pZH0gbWV0aG9kPXttZXRob2R9Lz5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vY2tNZXRob2RzO1xubW9kdWxlLmV4cG9ydHMuTW9ja01ldGhvZCA9IE1vY2tNZXRob2Q7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIE1vY2tNZXRob2RzID0gcmVxdWlyZSgnLi9Nb2NrTWV0aG9kcy5qc3gnKTtcblxudmFyIE1vY2tzRWRpdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2NrOiB0aGlzLnByb3BzLm1vY2ssXG4gICAgICAgICAgICB1cGRhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBwdXRGb3JtOiBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiAoISh0aGlzLnJlZnMubmFtZS52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMucmVmcy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLnJlZnMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBcImF1dGhvclwiOiB0aGlzLnJlZnMuYXV0aG9yLnZhbHVlLFxuICAgICAgICAgICAgXCJjb21wb25lbnROYW1lXCI6IHRoaXMucmVmcy5jb21wb25lbnROYW1lLnZhbHVlLFxuICAgICAgICAgICAgXCJyZXNwb25zZURhdGFcIjoge1wibnVsbFwiOiBcIm51bGxcIn0sXG4gICAgICAgICAgICBcImNvbXBvbmVudFByb2R1Y3RcIjogdGhpcy5yZWZzLmNvbXBvbmVudFByb2R1Y3QudmFsdWUsXG4gICAgICAgICAgICBcInJlc3BvbnNlQ29kZVwiOiAyMDAsXG4gICAgICAgICAgICBcInJlc3BvbnNlTWV0aG9kXCI6IFwiR0VUXCJcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdXJsID0gJy9hcGkvbW9jay8nICsgdGhpcy5zdGF0ZS5tb2NrLl9pZDtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtb2NrOiByZXNwb25zZS5yZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2FuY2VsRm9ybTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucHJvcHMuY29udGV4dF9yb290ICsgJy9tb2Nrcyc7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cGRhdGVkID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXBkYXRlZCkge1xuICAgICAgICAgICAgdXBkYXRlZCA9IDxzcGFuPlRoZSB1cGRhdGUgd2FzIHN1Y2Nlc3NmdWw8L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlVwZGF0ZSB7dGhpcy5wcm9wcy5tb2NrLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmNvbnRleHRfcm9vdCArICcvbW9ja2FwaS9tb2NrLycgKyB0aGlzLnN0YXRlLm1vY2suX2lkfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOiAnMjBweCd9fSBvbkNsaWNrPXt0aGlzLmNhbmNlbEZvcm19IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QmFzaWNzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVudGVyIHNvbWUgaWRlbnRpZnlpbmcgaW5mb3JtYXRpb248L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vY2tOYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtb2NrTmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZSAoUkVRVUlSRUQpXCIgcmVmPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm1vY2submFtZX0gcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb2NrRGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtb2NrRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgcmVmPVwiZGVzY3JpcHRpb25cIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubW9jay5tZXRhZGF0YS5kZXNjcmlwdGlvbn0gbmFtZT1cImRlc2NyaXB0aW9uXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb2NrQXV0aG9yXCI+QXV0aG9yIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm1vY2tBdXRob3JcIiBwbGFjZWhvbGRlcj1cIkF1dGhvciBFbWFpbFwiIHJlZj1cImF1dGhvclwiIG5hbWU9XCJhdXRob3JcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubW9jay5tZXRhZGF0YS5hdXRob3J9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db21wb25lbnQgSW5mbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FbnRlciBzb21lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb21wb25lbnQgdGhpcyBkYXRhIGlzIGdvaW5nIHRvIGJlIHVzZWQgZm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb2NrQ29tcG9uZW50TmFtZVwiPkNvbXBvbmVudCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm1vY2tDb21wb25lbnROYW1lXCIgcGxhY2Vob2xkZXI9XCJDb21wb25lbnQgTmFtZVwiIHJlZj1cImNvbXBvbmVudE5hbWVcIiBuYW1lPVwiY29tcG9uZW50TmFtZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5tb2NrLmNvbXBvbmVudC5uYW1lfT48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vY2tDb21wb25lbnRQcm9kdWN0XCI+UHJvZHVjdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtb2NrQ29tcG9uZW50UHJvZHVjdFwiIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBOYW1lXCIgcmVmPVwiY29tcG9uZW50UHJvZHVjdFwiIG5hbWU9XCJjb21wb25lbnRQcm9kdWN0XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm1vY2suY29tcG9uZW50LnByb2R1Y3R9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wdXRGb3JtfSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VXBkYXRlPC9idXR0b24+ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNhbmNlbEZvcm19IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPkNhbmNlbDwvYnV0dG9uPiB7dXBkYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkVuZHBvaW50IFZFUkJTPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+QmVsb3cgeW91IHdpbGwgZmluZCB2ZXJicyBhc3NvY2lhdGVkIHdpdGggdGhpcyBlbmRwb2ludDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2NrTWV0aG9kcyBtb2NrPXt0aGlzLnN0YXRlLm1vY2t9IG1ldGhvZHM9e3RoaXMucHJvcHMubWV0aG9kc30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9ja3NFZGl0O1xuIiwidmFyIE1vY2tzRWRpdCA9IHJlcXVpcmUoJy4vanN4L01vY2tzRWRpdC5qc3gnKTtcblxudmFyIG1vY2tzID0gUmVhY3QuY3JlYXRlRWxlbWVudChNb2Nrc0VkaXQgLHtcbiAgICBcImNvbnRleHRfcm9vdFwiOiBDT05URVhUX1JPT1QuaW5uZXJIVE1MLFxuICAgIG1vY2s6IEpTT04ucGFyc2UoY3VycmVudE1vY2suaW5uZXJIVE1MKSxcbiAgICBtZXRob2RzOiBKU09OLnBhcnNlKGN1cnJlbnRNZXRob2RzLmlubmVySFRNTClcbn0pO1xuUmVhY3RET00ucmVuZGVyKG1vY2tzLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3RDb250YWluZXInKSk7XG4iXX0=
