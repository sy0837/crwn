import React from "react";
import CollectionOverview from "../../components/collectionOverview/collectionOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collectionPage.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
// import logger from "redux-logger";
// import updateCollections from '../../redux/shop/shop.action'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unSubscribeFromSnapShot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collection')
        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap);
            this.setState({ loading: false })

        })
    }
    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);
