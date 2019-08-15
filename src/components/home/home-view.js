import React from '../../../node_modules/react';
import './home.css';

import Project from '../project';

import masticar from '../../assets/images/masticar.jpg';
import max_bill from '../../assets/images/max_bill.jpg';
import cocina_artesanal from '../../assets/images/cocina_artesanal.png';
import invitation_card from '../../assets/images/invitation_card.jpg';

class Home extends React.Component {

  constructor() {
    super();
    this.projects = [
      {id: 'first', alt: 'Masticar', img: masticar},
      {id: 'second', alt: '', img: ''},
      {id: 'third', alt: 'Max Bill', img: max_bill},
      {id: 'fourth', alt: 'Cocina Artesanal', img: cocina_artesanal},
      {id: 'fifth', alt: 'Invitation Card', img: invitation_card}
    ];
  }

  createProjects() {
    const projectComponents = [];

    for(let i = 0; i < this.projects.length; ++i) {
      const current = this.projects[i];

      projectComponents.push(<Project article_id={current.id} img_alt={current.alt} img_src={current.img} />);
    }

    return projectComponents;
  }

  render() {
    return (
        <div class="container">
          {this.createProjects()}
        </div>
    );
  }
}

export default Home;