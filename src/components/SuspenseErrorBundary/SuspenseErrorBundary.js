import React from 'react';
import { Button } from 'components'



class SuspenseErrorBundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {

        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    tryAgain = async () => {
        this.setState({
            hasError: false
        })
    }

    render() {

        return (
            <React.Suspense fallback="Loading...">
                {this.state.hasError ? (
                    <div>
                        Error
                        {/* Error <Button variant='regular' onClick={this.tryAgain}>Try again!</Button> */}
                    </div>

                ) : (
                        <React.Fragment>
                            {this.props.children}
                        </React.Fragment>
                    )
                }
            </React.Suspense>
        )
    }
}


export default SuspenseErrorBundary;