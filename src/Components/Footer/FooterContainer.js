import Footer from './Footer';
import { scrollToHeaderActionCreator} from '../../Redux/footer-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
    }
  }
let mapDispatchToProps = (dispatch) => {
  return {
    scrollToHeader : (obj) => {
        let action = scrollToHeaderActionCreator(obj);
        dispatch(action);
    },
  }
}
const FooterContainer = connect(mapStateToProps,mapDispatchToProps)(Footer);

export default FooterContainer;


