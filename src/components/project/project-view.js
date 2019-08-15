import React from 'react';
import './project.css';

class Project extends React.Component {

    render() {
        return (
            <article id={this.props.article_id}>
                <a href="https://google.com">
                <img alt={this.props.img_alt} src={this.props.img_src} />
                </a>
            </article>
        );
    }
}

export default Project;