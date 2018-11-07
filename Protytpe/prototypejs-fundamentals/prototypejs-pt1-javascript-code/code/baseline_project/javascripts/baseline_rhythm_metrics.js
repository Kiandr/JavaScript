
var BaselineRhythmMetrics = Class.create();
BaselineRhythmMetrics.prototype = {

  // Make a new object for calculations, using the body's font-size and line-height.
  //
  // If you need to use different settings, explicitly set bodyFontSizePx and bodyLineHeightPx.
  initialize: function() {
    var body = $(document.body);
    this.bodyFontSizePx = parseInt(body.getStyle('font-size'));
    this.bodyLineHeightPx = parseInt(body.getStyle('line-height'));
    this.bodyLineHeightEm = this.calculateLineHeight(this.bodyFontSizePx);

    // Matches HTML tags to font size offsets.
    // Font size offset will be added to the body font size.
    this.elementMappings = $H({
      "h1":8,
      "h2":6,
      "h3":4,
      "h4":2,
      "p, ul, blockquote, pre, td, th, label":0,
      "p.small":-2
    });
  },

  toCSS: function() {
    standardLineHeight = this.calculateLineHeight(this.bodyFontSizePx);
    
    var css = "body {\n";
    css += "\tfont-size: " + this.bodyFontSizePx + "px;\n";
    css += "\tline-height: " + standardLineHeight + "em;\n";
    css += "\tmargin: 0; padding: 0\n";
    css += "}\n";

    this.elementMappings.each(function(pair) {
      tagname = pair.key;
      tagFontSize = this.bodyFontSizePx + pair.value;
      
      css += tagname + " {\n";
      css += this.calculateForSizeAsCSSProperties(tagFontSize).toCSS();
      css += "}\n";
    }.bind(this));

    css += "table {\n";
    css += "\tborder-collapse: collapse;\n";
    css += "\tmargin-bottom: " + standardLineHeight + "em;\n";
    css += "}\n";

    return css;
  },
  
  applyStyles: function() {
    $(document.body).setStyle({
      'font-size':this.bodyFontSizePx + "px",
      'line-height':this.bodyLineHeightEm + "em"
    });
    
    // Calculate sizes and apply to all the CSS elements specified.
    this.elementMappings.each(function(pair) {
      var tagnames = pair.key;
      var tagFontSize = this.bodyFontSizePx + pair.value;
      var styleProperties = this.calculateForSizeAsCSSProperties(tagFontSize);

      $$(tagnames).invoke('setStyle', styleProperties);
            
    }.bind(this));
  },

  // Returns a hash with font size and line height in
  // px and em for the provided font size, using
  // the body line height.
  calculateForSize: function(targetFontSizePx) {
    return $H({
      fontSizePx: targetFontSizePx,
      fontSizeEm: (targetFontSizePx/this.bodyFontSizePx),
      lineHeightPx: this.bodyLineHeightPx,
      lineHeightEm: this.calculateLineHeight(targetFontSizePx)
    });
  },
  
  // Convert hash keys to CSS-friendly version.
  calculateForSizeAsCSSProperties: function(targetFontSizePx) {
    properties = this.calculateForSize(targetFontSizePx);
    return $H({
      'margin':0,
      'font-size':properties.fontSizeEm + "em",
      'line-height':properties.lineHeightEm + "em",
      'margin-bottom':properties.lineHeightEm + "em"
    })
  },

  // Calculate line height for a single font size,
  // using the body line height.
  calculateLineHeight: function(targetFontSizePx) {
    return (this.bodyLineHeightPx/targetFontSizePx);
  }
  
}

Object.extend(Hash.prototype, {
  // Emit a hash in the format of CSS property strings,
  // ready for wrapping in an element declaration.
  //
  // Example: "color: #ffffcc;"
  toCSS: function() {
    var css = '';
    var propertyPairTemplate = new Template("\t#{keyCleaned}: #{value};\n")
    this.each(function(pair) {
      pair.keyCleaned = pair.key.dasherize();
      css += propertyPairTemplate.evaluate(pair);
    });
    return css;
  }
});
