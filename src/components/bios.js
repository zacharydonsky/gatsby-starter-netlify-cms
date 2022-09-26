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
          <div className="card-image">
            <GatsbyImage image={getImage(item.image)} alt={item.link} />
          </div>
          <div>{item.name}</div>
          <div>{item.position}</div>
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
