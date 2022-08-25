import { connect } from 'react-redux'

import Import from '../components/Import'
import { deleteMake, fetchMakes } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        deleteMake: () => dispatch(deleteMake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Import)