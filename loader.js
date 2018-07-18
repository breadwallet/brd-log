/*
  Originally from imports-loader:
  https://github.com/webpack-contrib/imports-loader
*/

var loaderUtils = require("loader-utils");
var SourceNode = require("source-map").SourceNode;
var SourceMapConsumer = require("source-map").SourceMapConsumer;
var HEADER = "/*** IMPORTS FROM brd-log  ***/\n";

module.exports = function(content, sourceMap) {
	if(this.cacheable) this.cacheable();
	var query = loaderUtils.getOptions(this) || {};
	var imports = [];
	var postfixes = [];

//  console.log("ResourcePath: ",this.resourcePath);
//  console.log("request: ",this.request);
//  console.log("QUERY: ",query);
  
  var options = { file: 'unknown' };
  imports.push(`const console = require('${query.logger||'brd-log/logger'}')(${JSON.stringify(options)});`);
  
	var prefix = HEADER + imports.join("\n") + "\n\n";
	var postfix = "\n" + postfixes.join("\n");
  
	if(sourceMap) {
		var currentRequest = loaderUtils.getCurrentRequest(this);
		var node = SourceNode.fromStringWithSourceMap(content, new SourceMapConsumer(sourceMap));
		node.prepend(prefix);
		node.add(postfix);
		var result = node.toStringWithSourceMap({
			file: currentRequest
		});
		this.callback(null, result.code, result.map.toJSON());
		return;
	}
  
  var ret = prefix + content + postfix;
//  console.log("RET: ",ret);
  return ret;
}

