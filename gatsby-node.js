// In your gatsby-node.js file

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
};