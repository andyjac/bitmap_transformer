module.exports = function validate(options) {
  if (!options.file) {
    console.log('You must provide a file to transform\n\nAborting\n');
    process.exit(0);
  }

  if (!options.transform) {
    console.log('You must provide a transform to run\n\nAborting\n');
    process.exit(0);
  }

  if (options.transform === "blueTint" && !options.amount) {
    console.log('No amount specified. Using default value: 100');
  }

  return options;
};
