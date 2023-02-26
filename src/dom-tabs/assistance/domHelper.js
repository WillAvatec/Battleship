export default function (tag, attr, childs) {
	const element = document.createElement(tag);

	for (const key in attr) {
		if ({}.hasOwnProperty.call(attr, key)) {
			element.setAttribute(key, attr[key]);
		}
	}

	if (Array.isArray(childs)) {
		childs.forEach(child => {
			element.appendChild((typeof child === 'string' || typeof child === 'number') ? document.createTextNode(child) : child);
		});
	}

	return element;
}
