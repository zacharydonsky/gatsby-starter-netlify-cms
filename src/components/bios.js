import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

const bioList = ({ bios }) => {
  return (
    <div className="columns is-multiline">
      {bios.map((item) => (
        <div key={item.next} className="column is-4">
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};
bioList.prototypes = {
  bios: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      position: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
export default bioList;
