import React from 'react';
import Griddle from 'griddle-react';
import _ from 'underscore';
import FormatterFactory from '../format/FormatterFactory';

export default class ExternalTable extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;
        this.state = this.getInitialState();
        this.changeSort = this.changeSort.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setPageSize = this.setPageSize.bind(this);

        if (this.props.data == null || this.props.data.length == 0) {
            this.props.getData({
                _size: this.state.externalResultsPerPage,
                _offset: 0
            });
        }
    }

    getInitialState() {
        var initial = {
            "results": [],
            "currentPage": 0,
            "maxPages": 0,
            "externalResultsPerPage": 20,
            "externalSortColumn":null,
            "externalSortAscending":true,
            "data": this.props.data == null?  [] : this.props.data
        };

        return initial;
    }

    componentWillMount() {
        this.setState({
            maxPages: Math.ceil((this.props.total != null ? this.props.total : this.state.data.length) / this.state.externalResultsPerPage),
            results: this.state.data.slice(0, this.state.externalResultsPerPage)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
            maxPages: Math.ceil((nextProps.total != null? nextProps.total: nextProps.data.length)/this.state.externalResultsPerPage),
            results: nextProps.data.slice(0,this.state.externalResultsPerPage)
        });
    }

    setPage(index) {
        //This should interact with the data source to get the page at the given index
        var number = index === 0 ? 0 : index * this.state.externalResultsPerPage;

        if (this.state.data > number) {
            this.setState(
                {
                    "results": this.state.data.slice(number, number+this.state.externalResultsPerPage>this.state.data.length
                        ? this.state.data.length : number+this.state.externalResultsPerPage),
                    "currentPage": index
                });
        } else {
            this.props.getData({
                _size: this.state.externalResultsPerPage,
                _offset: number
            });

            this.setState({
                "currentPage": index
            })
        }
    }

    sortData(sort, sortAscending, data) {
        //sorting should generally happen wherever the data is coming from
        var sortedData = _.sortBy(data, function(item){
            return item[sort];
        });

        if(sortAscending === false){
            sortedData.reverse();
        }
        return {
            "currentPage": 0,
            "externalSortColumn": sort,
            "externalSortAscending": sortAscending,
            "data": sortedData,
            "results": sortedData.slice(0,this.state.externalResultsPerPage)
        };
    }

    changeSort(sort, sortAscending) {
        //this should change the sort for the given column
        this.setState(this.sortData(sort, sortAscending, this.state.data));
    }

    setFilter(filter) {
        //filtering should generally occur on the server (or wherever)
        //this is a lot of code for what should normally just be a method that is used to pass data back and forth
        var sortedData = this.sortData(this.state.externalSortColumn, this.state.externalSortAscending, this.state.data);

        if(filter === ""){
            this.setState(_.extend(sortedData, {maxPages:
                Math.round(sortedData.data.length > this.state.externalResultsPerPage
                    ? sortedData.data.length/this.state.externalResultsPerPage : 1)}));

            return;
        }

        var filteredData = _.filter(sortedData.data,
            function(item) {
                var arr = _.values(item);
                for(var i = 0; i < arr.length; i++){
                    if ((arr[i]||"").toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0){
                        return true;
                    }
                }

                return false;
            });

        this.setState({
            data: filteredData,
            maxPages: Math.round(filteredData.length > this.state.externalResultsPerPage
                ? filteredData.length/this.state.externalResultsPerPage : 1),
            "results": filteredData.slice(0,this.state.externalResultsPerPage)
        });
    }

    setPageSize (size){
        this.setState({
            currentPage: 0,
            externalResultsPerPage: size,
            maxPages: Math.round(this.state.data.length > size ? this.state.data.length/size : 1),
            results: this.state.data.slice(0,size)
        });
    }

    render() {
        var columnMetadata = [], columns = [];

        var data = _.map(this.state.results, _.clone);

        this.props.columns.forEach((item) => {
            var metadata = {
                columnName: item.name
            };


            if (item.name.split("\.").length > 1) {
                data.forEach((dataItem) => {
                    var itemSplit = item.name.split("\.");

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

                if (formatter != null) {
                    data.forEach((row) => {
                        row[item.name] = formatter.format(row[item.name]);
                    });
                }

            }

            columnMetadata.push(metadata);
            columns.push(item.name);
        });

        return <Griddle useExternal={true} externalSetPage={this.setPage} columns={columns} columnMetadata={columnMetadata}
                        externalChangeSort={this.changeSort} externalSetFilter={this.setFilter}
                        externalSetPageSize={this.setPageSize} externalMaxPage={this.state.maxPages}
                        externalCurrentPage={this.state.currentPage} results={data}
                        tableClassName="table" resultsPerPage={this.state.externalResultsPerPage}
                        externalSortColumn={this.state.externalSortColumn} externalSortAscending={this.state.externalSortAscending}
                        showFilter={true} showSettings={false} />
    }

}