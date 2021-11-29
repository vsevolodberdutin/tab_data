import React from 'react'

const Grid = ({ config, data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {config.map((elCon, index) => (
              <th key={index}>{elCon.field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.imdbID}>
              {config.map((conEl, index) => (
                <td key={index}>
                  {
                    conEl.field !== 'Trailer'
                      ? el[conEl.field]
                      : conEl.component(el.Trailer)
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Grid
