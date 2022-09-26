import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

const BioList = ({ bios }) => {
  return (
    <div className="columns is-multiline">
      {bios.map((item) => (
        <div key={item.next} className="column is-4">
          <div className="card p-4">
            <div className="card-image is-align-content-center">
              <GatsbyImage image={getImage(item.image)} alt={item.link} />
            </div>
            <div className="card-content">
              <div className="title is-4">{item.name}</div>
              <div className="subtitle is-6">{item.position}</div>
              <div className="content">{item.text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
BioList.prototypes = {
  bios: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      position: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
export default BioList;
