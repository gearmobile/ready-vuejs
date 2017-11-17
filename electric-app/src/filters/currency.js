// ---------------------------
// ВЫВОДИТ ЧИСЛА В РУБЛЯХ
// ---------------------------

export default (value) => {
  return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
}
