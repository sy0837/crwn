import React,{useEffect} from "react";
import CollectionOverviewContainer from '../../components/collectionOverview/collectionOverview.container'
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collectionPage.container";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const ShopPage =({fetchCollectionsStart,match})=> {

    useEffect(()=>{
        fetchCollectionsStart()
    },[fetchCollectionsStart])
   
        return (
            
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage);
