import React from 'react'

function renderNone(loaded) {
  return <tr>
      <td colSpan={2}>
        {
          loaded
            ? "There are no service report to display"
            : "loading..."
        }
      </td>
    </tr>
}

function renderService(service) {
  return service.map(ser => <tr cellSpacing={0} key={ser.id}>
    <td>{ser.no}</td>
    <td>{ser.type}</td>
  </tr>)
}

export default function SerReportTable({service, loaded}) {
  return <table width="100%">
    <thead>
      <tr>
        <th>No.</th>
        <th>Service Type</th>
      </tr>
    </thead>

    <tbody>
      {
        service && service.length > 0 ? renderService(service): renderNone(loaded)
      }
    </tbody>
  </table>
}