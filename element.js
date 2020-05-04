function element(n = {
  tag: null,
  attribute: null,
  value: null,
  event: null
}) {
  this.element = null;
  this.tag = n.tag;
  this.attribute = n.attribute;
  this.value = n.value;
  this.event = n.event;
  this.create = function() {
    this.element = document.createElement(this.tag);
    let attr = this.attribute;
    let val = this.value;
    let event = this.event;
    if (attr) {
      if ( !attr.length ) attr = [attr];
      attr.forEach(e => {
          this.element.setAttribute(e.name, e.value)
      })
    }
    if (val) {
        if ( typeof val === 'string') val = [val];
        val.forEach(e => {
            typeof e === 'string' ? this.element.innerText = e : this.element.append(e);
        })
    }
    if ( typeof event === "function" ) {
        event(this.element);
    }
    return this.element;
  }
}