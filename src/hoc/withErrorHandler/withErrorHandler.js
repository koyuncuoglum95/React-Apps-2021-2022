import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxx/Auxx';


// This method brings Main Component and its props tecniques here.
// When you bring it, you can update props upon existing ones.
// false and null are almost same value in the state.

const withErrorHandler = (WrappedComponent, axios ) => {
    return class extends Component {
        state ={
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        // The following interceptors are new ones.
        componentWillUnmount () {
            console.log('Will unmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({error: null});
        }

        render() {
            return(
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message :  null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
                
            )
        }
    }     
}



export default withErrorHandler;