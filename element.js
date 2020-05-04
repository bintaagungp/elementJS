function element(n = {
    tag: null,
    attribute: null,
    value: null
  }) {
    this.element = null;
    this.tag = n.tag;
    this.attribute = n.attribute;
    this.value = n.value;

    this.create = function() {
        
      this.element = document.createElement(this.tag);

      const attr = this.attribute;
      const val = this.value;

      if (attr) {

        if ( typeof attr === 'object' ) attr = [attr];
        attr.forEach(e => {
            this.element.setAttribute(e.name, e.value)
        })
 
      }

    //   if (typeof this.value === "object") {
    //     if (this.value.length > 1) {
    //       this.value.forEach(e => {
    //         this.element.append(e);
    //       })
    //     } else {
    //       this.element.append(this.value);
    //     }
    //   }

      if ( typeof val === 'string' || typeof val === 'object') val = [val];
      val.forEach(e => {
          typeof e === 'string' ? this.element.innerText = e : this.element.append(e);
      })
    //   if (typeof this.value === "string") this.option ? this.element.innerHTML = this.value : this.element.innerText = this.value;

      return this.element;
    }
  }