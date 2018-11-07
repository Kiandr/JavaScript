
Event.addBehavior({
  
  'h1': function() {
    this.setStyle({
      color:'purple',
      'border-bottom':'1px solid purple'
    });
  },
  
  'a': function() {
    var linkTipTop = $(document.body).getStyle('font-size');
    
    var linkTip = $div(this.href);
    linkTip.setStyle({
      top:linkTipTop
    });
    linkTip.addClassName('linktip');
    linkTip.hide();
    
    this.makePositioned();
    this.appendChild(linkTip);

/*
    // Log messages for debugging positioning.
    // Does nearly the same thing in three ways.
    console.log(linkTip);
    console.log("top %s", linkTipTop);
    
    var templateTip = new Template('top: #{top}');
    var templateText = templateTip.evaluate({top:linkTipTop});
    console.log(templateText);
*/    

    this.observe('mouseover', function() { linkTip.show() });
    this.observe('mouseout', function() { linkTip.hide() });
  }
  
});

// $('footer').methods()
// Element.methods('footer')
Element.addMethods({
  
  methods: function(element) {
    return Object.keys(element).select(function(methodName) {
      return typeof element[methodName] == 'function';
    }).sort();
  }
  
});


