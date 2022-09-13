import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import DonateModal from './donate-form';
import { navigate } from 'gatsby';

const state = {
  donate_is_modal: false,
};

const handleClick = function (item) {
  if (item.id === 'donate-button') {
    state.donate_is_modal = !state.donate_is_modal;
  } else {
    navigate(item.link);
  }
};

// const Features = class extends React.Component {
//   render() {
//     return (
//       <div>
//         <DonateModal isDonateButton={false} />
//         <div className="columns is-multiline">
//           {this.props.gridItems.map((item) => (
//             <div className="card">
//               <div className="card-image">
//                 <GatsbyImage
//                   image={getImage(this.item.image)}
//                   alt={this.item.link}
//                 />
//               </div>
//               <div className="card-content">
//                 <div className="content">
//                   <h3>{this.item.text}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// };

const FeatureGrid = ({ gridItems }) => (
  <div>
    <DonateModal is_modal={state.donate_is_modal} click_method={handleClick} />
    <div className="columns is-multiline">
      {gridItems.map((item) => (
        <div key={item.text} className="column is-4">
          <div
            className="card"
            onClick={() => {
              handleClick(item);
            }}
          >
            <div className="card-image">
              <GatsbyImage image={getImage(item.image)} alt={item.link} />
            </div>
            <div className="card-content">
              <div className="content">
                <h3>{item.text}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      link: PropTypes.string,
      text: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
