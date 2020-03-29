import _ from 'lodash'

export function getProps() {
  return {
    payload: {
      points: [
        {
          id: 'Florilor',
          data: getData()
        },
      ]
    }
  }

  function getData() {
    const months = _.range(1, 12);
    const days = _.range(1, 28, 3);

    const data = [];
    months.forEach(m => {
      days.forEach(d => {
        data.push({
          x: `2018-${m}-${d}`, y: _.random(0, 1000)
        })
      })
    })

    return data;
  }
}
