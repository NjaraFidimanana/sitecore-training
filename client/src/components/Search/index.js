import React ,{ Component } from 'react';
import { loader as gqlLoader } from 'graphql.macro';
import GraphQLData from '../../lib/GraphQLData';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react'
import CardView from '../CardView'
import './Search.css';
const ConnectedSearchQuery = gqlLoader('./Search.graphql');
class Search extends Component {
    render(){
        const graphQLResult = this.props.SearchQuery;
        const { error, loading } = graphQLResult;
        const { search, facets } = graphQLResult;
        return (
          <div className="search-container">
            <form>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" onChange={e => this.handleInputChange(e)}/>
                    <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                        <i className="glyphicon glyphicon-search"></i>
                    </button>
                    </div>
                </div>
            </form>
              {loading && <p className="alert alert-info">GraphQL query is executing...</p>}
              <div className="Search-Content-Result">
              { search && search.results.items && search.results.items.map((content,index)=>(
                       <div key={index}>
                           <CardView key={index} {...content.item}/>
                       </div>
                        ))
              }
              </div>
          </div>)
    }

    handleInputChange = (event) => {
        event.preventDefault();
        var keyword = (event.target && event.target.value) || '';
        const sitename =this.props.sitecoreContext.site.name;
        this.timeout = setTimeout(() => {
            this.props.SearchQuery.refetch({
                keyword: keyword,
                rootItem: `/sitecore/content/JSS Sites/${sitename}/home`})
            },500);
      };
}
const wrappedComponent=withSitecoreContext()(({ sitecoreContext }) => {
    /* console.log('sitename2',props.sitecoreContext.site.name);*/
    const WrappedComponent = GraphQLData(ConnectedSearchQuery, { name: 'SearchQuery' ,  options: {
        variables: {keyword:'',rootItem:`/sitecore/content/JSS Sites/${sitecoreContext.site.name}/home`}}})(Search);
        return <WrappedComponent />;
});
export default wrappedComponent;
