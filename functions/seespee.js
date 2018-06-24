'use strict';

const seespee = require('seespee');
const { URL } = require('url');

const options = {};

exports.handler = async (event, context) => {
  const url = new URL(event.queryStringParameters.url);
  const result = await seespee(url.href, options);

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(result)
  }
};
