import React from 'react'

function renderNone(loaded) {
  return <tr>
      <td colSpan={2}>   {/*does not work */}
        {
          loaded
            ? "loading..."
            : "There are no service report to display"
        }
      </td>
    </tr>
}

function renderService(service, history) {
  return service.map(ser => <tr
   cellSpacing={0} 
   key={ser.id}
   onClick={()=>history.push(`/service-report/${ser.id}`)}
  >
    <td>{ser.nom}</td>
    <td>{ser.type}</td>
  </tr>)
}

export default function SerReportTable({service, loaded, history}) {
  return <table width="100%">
    <thead>
      <tr>
        <th>No.</th>
        <th>Service Type</th>
      </tr>
    </thead>

    <tbody>
      {
        service && service.length > 0 ? renderService(service, history): renderNone(loaded)
      }
    </tbody>
  </table>
}

