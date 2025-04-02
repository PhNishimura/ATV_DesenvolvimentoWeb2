const util = require('util');


function colorize(message, colorCode) {
  return util.format('\x1b[%sm%s\x1b[0m', colorCode, message);
}


const logLevels = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
};


const logLevel = process.env.NODE_DEV || logLevels.INFO;


const colors = {
  [logLevels.INFO]: '32', // Verde
  [logLevels.WARNING]: '33', // Amarelo
  [logLevels.ERROR]: '31', // Vermelho
};


const error = () => {
  if (logLevel === logLevels.ERROR) {
    console.log(colorize('ERROR: Um erro ocorreu!', colors[logLevels.ERROR]));
  }
};

const warning = () => {
  if (logLevel === logLevels.WARNING || logLevel === logLevels.INFO) {
    console.log(colorize('WARNING: Aviso importante!', colors[logLevels.WARNING]));
  }
};

const info = () => {
  if (logLevel === logLevels.INFO) {
    console.log(colorize('INFO: Informação útil.', colors[logLevels.INFO]));
  }
};

module.exports = {
  error,
  warning,
  info,
};
