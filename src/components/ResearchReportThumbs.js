import * as React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
// import { navigate } from 'gatsby';

function strip_static_from_path(path) {
  // There seems to be a difference in path between local dev and deployed
  // production for referencing a report_path.
  // Also, caching affects the path to these files?? This seems like a smelly bug...
  // For now I'm just going to set it to what is correct for production.
  let report_path = path;
  report_path = report_path.split('static/');
  report_path = report_path[1];
  return report_path;
}
const ResearchReportThumbs = ({ researchReports }) => {
  return (
    <div className="columns is-multiline">
      {researchReports.map((item) => (
        <div key={item.next} className="column is-4">
          <div className="card p-4">
            <div className="card-image is-align-content-center">
              <GatsbyImage image={getImage(item.thumbnail)} alt={item.title} />
            </div>
            <div className="card-content">
              <div className="title is-4">{item.title}</div>
              <div className="subtitle is-6">{item.author}</div>
              <div className="content">{item.summary}</div>
            </div>
            <a href={strip_static_from_path(item.file)}>
              <div className="button">Download</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

ResearchReportThumbs.prototypes = {
  researchReports: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      author: PropTypes.string,
      summary: PropTypes.string,
      file: PropTypes.string,
    })
  ),
};
export default ResearchReportThumbs;
