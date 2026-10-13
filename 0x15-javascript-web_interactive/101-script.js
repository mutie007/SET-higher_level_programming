document.addEventListener('DOMContentLoaded', function () {
  let items = ['Item'];

  function render () {
    const list = document.querySelector('ul.my_list');
    list.innerHTML = '';
    items.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }

  document.querySelector('#add_item').addEventListener('click', function () {
    items.push('Item');
    render();
  });

  document.querySelector('#remove_item').addEventListener('click', function () {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });

  document.querySelector('#clear_list').addEventListener('click', function () {
    items = [];
    render();
  });
});
