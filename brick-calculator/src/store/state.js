const state = {
  language: {
    status: false,
    primary: 'russian',
    secondary: 'english'
  },
  mask: '###',
  maskOpening: '#',
  masonry: [
    { name: 'Кладка в 0,5 кирпича', value: '0.5' },
    { name: 'Кладка в 1 кирпич', value: '1' },
    { name: 'Кладка в 1,5 кирпича', value: '1.5' },
    { name: 'Кладка в 2 кирпича', value: '2' },
    { name: 'Кладка в 2,5 кирпича', value: '2.5' }
  ],
  seam: [
    { name: 'Без учета растворного шва', value: 0 },
    { name: 'С учетом растворного шва толщиной 5 мм', value: 5 },
    { name: 'С учетом растворного шва толщиной 10 мм', value: 10 },
    { name: 'С учетом растворного шва толщиной 15 мм', value: 15 },
    { name: 'С учетом растворного шва толщиной 20 мм', value: 20 }
  ],
  bricks: [
    { name: 'Одинарный (250×120×65 мм)', value: 'одинарный', length: 250, width: 120, height: 65, price: 7 },
    { name: 'Полуторный (250×120×88 мм)', value: 'полуторный', length: 250, width: 120, height: 88, price: 14 },
    { name: 'Двойной (250×120×140 мм)', value: 'двойной', length: 250, width: 120, height: 140, price: 21 },
    { name: 'ЕВРО (250×85×65 мм)', value: 'ЕВРО', length: 250, width: 85, height: 65, price: 28 }
  ],
  building: {
    length: null,
    width: null,
    height: null
  },
  opening: [
    {
      width: null,
      height: null
    }
  ],
  openingValueMax: 5,
  openingValueMin: 1,
  openingValueMaxStatus: false,
  openingText: '',
  RUBRate: null,
  order: {
    masonry: '0.5',
    brick: 'одинарный',
    seam: 0
  }
}

export default state
