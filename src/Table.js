import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    filterCategories() {
        const filtered = this.props.categories.filter(c => {
            const category = c.toLowerCase();
            const term = this.props.term.toLowerCase();
            return category.includes(term);
        });
        return filtered;
    }

    renderedCategories() {
        const filteredCategories = this.filterCategories();
        return filteredCategories.map(c => {
            return (
                <tr>
                    <td>{c}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table border="1"  >
                <thead>
                <th>Categories</th>
                </thead>
                <tbody>
                    {this.renderedCategories()}
                </tbody>

            </table>
        )
    }
}

export default Table;