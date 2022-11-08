/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
 export default class UserTable {
  constructor(rows) {
      this.elem = this.render(rows);
  }

  render(rows) {
    
    let table = document.createElement('table');

    let list = rows.reduce(function (result, row) {
      return result + 
      `
      <tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button>X</button></td>
      </tr>
    ` 
    }, '');
    
    table.innerHTML = `
      <table>
        <thead>
          <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
            <td></td>
          </tr>
        </thead>
        <tbody>${list}</tbody>
      </table>
    `
    let btn = table.querySelectorAll('button');

    for (let key of btn) {
        key.addEventListener('click', this.onClick);
    }

    return table;
  }

  onClick(evt) {
      evt.target.closest('tr').remove();
  }
}
