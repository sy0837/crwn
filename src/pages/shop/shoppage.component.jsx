import React from "react";
import CollectionOverviewContainer from '../../components/collectionOverview/collectionOverview.container'
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collectionPage.container";
// import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";
// import { createStructuredSelector } from "reselect";
// import {  selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";


// const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends React.Component {

    componentDidMount() {

        const {fetchCollectionsStart}=this.props
        fetchCollectionsStart()
    }
    render() {
        const { match} = this.props
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
}

// const mapStateToProps = createStructuredSelector({
//     isCollectionsLoaded: selectIsCollectionsLoaded
// })
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage);
