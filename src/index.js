const form = document.getElementById('seespee-form');
const outputNode = document.getElementById('seespee-output');

function getValues(form) {
  const values = {};

  for (const el of form.elements) {
    if (el.value) {
      values[el.name] = el.value;
    }
  }

  return values;
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const values = getValues(form);

  if (values.url) {
    const result = await fetch(`${form.action}?${new URLSearchParams(values).toString()}`);

    outputNode.innerHTML = JSON.stringify(result, undefined, 2);
  }
});
