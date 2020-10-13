const requireContext = require.context("../images", true, /^\.\/.*\.(jpe?g|png|gif)$/);
const images = {};
requireContext.keys().forEach(key => {
    images[key.replace(/(\.\/|\.(jpe?g|png|gif))/g, '')] = requireContext(key).default
});
export default images;