import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import {compose} from 'redux'
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from './collectionOverview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

 const CollectionOverviewContainer =compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
