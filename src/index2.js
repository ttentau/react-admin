import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import store from "./store"
import {routeConfig} from "./route"
import CreateArticle from "./views/article/CreateArticle"
import Article from "./views/article/Article"

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components

class Sandwiches extends React.Component {
    render() {
        return <h2>Sandwiches</h2>;
    }
}

class Tacos extends React.Component {
    render() {
        return (
            <div>
                <h2>Tacos</h2>
                <ul>
                    <li>
                        <Link to="/tacos/bus">Bus</Link>
                    </li>
                    <li>
                        <Link to="/tacos/cart">Cart</Link>
                    </li>
                </ul>

                {this.props.routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        )
    }
}

class Bus extends React.Component {
    render() {
        return <h3>Bus</h3>;
    }
}

class Cart extends React.Component {
    render() {
        return <h3>Cart</h3>;
    }
}

////////////////////////////////////////////////////////////
// then our route config
const routes = [
    {
        path: "/sandwiches",
        // component: Sandwiches
        component: Article
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
            )}
        />
    );
}

function RouteConfigExample() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/tacos">Tacos</Link>
                        </li>
                        <li>
                            <Link to="/sandwiches">Sandwiches</Link>
                        </li>
                    </ul>

                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </div>
            </Router>
        </Provider>
    );
}

ReactDOM.render(<RouteConfigExample/>, document.getElementById('root'))

