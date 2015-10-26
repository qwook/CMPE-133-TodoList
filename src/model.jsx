
class EventDispatcher {
	constructor() {
		this.hooks = {};
	}

	on(name, fn) {
		this.hooks[name] = this.hooks[name] || [];
		this.hooks[name].push(fn);
	}

	off(name, fn) {
		if (this.hooks[name]) {
			this.hooks[name].splice(this.hooks[name].indexOf(fn), 1);
			if (this.hooks[name].length == 0) {
				this.hooks[name] = undefined;
			}
		}
	}

	dispatch(name) {
		if (this.hooks[name]) {
			for (var hook of this.hooks[name]) {
				hook();
			}
		}
	}
}

export class Model extends EventDispatcher {
	constructor(defaultModel) {
		super();

		this.data = defaultModel || {};
	}

	setProp(property, val) {
		this.data[property] = val;

		this.dispatch("change")
	}

	getProp(property) {
		return this.data[property];
	}

	getRaw() {
		return this.data;
	}
};

export class Collection extends EventDispatcher {
	constructor(defaultCollection) {
		super();

		this.data = defaultCollection || [];
		this.changeFn = this.dispatchChange.bind(this);

		for (var obj of this.data) {
			if (typeof(obj.on) == "function") {
				obj.on('change', this.changeFn);
			}
		}
	}

	dispatchChange() {
		console.log("uh");
		this.dispatch("change");
	}

	insert(obj) {
		this.data.push(obj);

		if (typeof(obj.on) == "function") {
			obj.on('change', this.changeFn);
		}

		this.dispatch("change");
	}

	remove(obj) {
		if (this.data.indexOf(obj) > -1) {
			if (typeof(obj.off) == "function") {
				obj.off('change', this.changeFn);
			}

			this.data.splice( this.data.indexOf(obj), 1 );
		} else {
			throw "Index out of bounds!";
		}
		
		this.dispatch("change");
	}
	
	getRaw() {
		return this.data;
	}
};
