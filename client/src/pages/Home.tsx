import React, { Component } from 'react';
import Style from './Home.module.scss';

interface Props {}
interface States {}

class Home extends Component<Props, States> {
    render() {
        return (
            <>
                <section className={Style.Section}>
                    <h1>Hello World!!</h1>
                </section>
            </>
        );
    }
}

export default Home;
