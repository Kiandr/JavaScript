
Event.addBehavior({

  "form#baseline_form:submit": function() {
    Controller.calculate();
    return false;
  },
  
  'body': function() {
    Controller.calculate();
  },
  
  'div.column textarea#css_output:click': function() {
    this.select();
  }
      
});


var Controller = {

  calculate: function() {
    var metrics = new BaselineRhythmMetrics();
    metrics.bodyFontSizePx = parseInt($F('base_points'));
    metrics.bodyLineHeightPx = parseInt($F('rhythm_points'));
    metrics.applyStyles();
    
    $('css_output').update(metrics.toCSS());
  }

}
