'use strict';

import React from 'react';
import Griddle from 'griddle-react';
import FormatterFactory from '../format/FormatterFactory';
import DateFormatter from '../format/DateFormatter';
import AmountFormatter from '../format/AmountFormatter';
import BooleanFormatter from '../format/BooleanFormatter';

import _ from 'underscore';

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = props;
    }

    componentWillReceiveProps(nextProps) {
        this.state.data = nextProps.data;
        this.setState(this.state);
    }

    render() {
        // get latest value from parent on each render
        this.state.value = this.props.value;
        var columnMetadata = [], columns = [];

        var data = _.map(this.state.data, _.clone);

        this.state.columns.forEach((item) => {
            console.log(item);
            var metadata = {
                columnName: item.name
            };


            if (item.name.split("\.").length > 1) {
                var itemSplit = item.name.split("\.");
                data.forEach((dataItem) => {
                    var temp = dataItem[itemSplit[0]];

                    if (temp != null) {
                        for (var k = 1; k < itemSplit.length; k++) {
                            temp = temp[itemSplit[k]];
                        }
                    }

                    dataItem[item.name] = temp;
                });
            }

            if (item.label) {
                metadata.displayName = item.label;
            }

            if (item.type) {
                var formatter = FormatterFactory.get(item.type);

                data.forEach((row) => {
                    row[item.name] = formatter.format(row[item.name]);
                });
            }

            if (this.props.generators != null) {
                this.props.generators.forEach((generator) => {
                    data.forEach((data, i) => {
                        data[generator.name] = generator.func.call(null, data, i);
                    });
                });
            }

            columnMetadata.push(metadata);
            columns.push(item.name);
        });
        return <Griddle results={data} tableClassName="table" showFilter={true}
                        resultsPerPage={this.props.rowsPerPage? this.props.rowsPerPage : 10}
                        showSettings={false} columns={columns} columnMetadata={columnMetadata} />;
    }

}

module.exports = Table;