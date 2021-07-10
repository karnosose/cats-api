import React from 'react';
import {Route} from 'react-router-dom';

function MainRouter ({layout, component, ...rest}) {

    const [Layout, Component] = [layout, component]
    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}

export default MainRouter