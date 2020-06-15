import React, { Component } from "react";
import styled from 'styled-components';

const Div = styled.div `
    .scroll-to-top{
        position: fixed;
        bottom: 1.5rem;
        right: 0.5rem;
        animation: fadeIn 700ms ease-in-out 1s both;
        cursor: pointer;
    }

    i{
        font-size: 3em;
        color: #07485c;
    }

    p{
        .05em;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export default class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <Div>
                <div className="scroll-to-top">
                    {is_visible && (
                        <div onClick={() => this.scrollToTop()}>
                            <i class="far fa-arrow-circle-up"></i>
                        </div>
                    )}
                </div>
            </Div>
            
        );
    }
}
