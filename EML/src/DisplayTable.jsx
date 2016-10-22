//mostrador de tabla

var React = require('react');


var DisplayTable = React.createClass({
  render: function () {
    return(
      <div className="bs-component">
      <table className="table table-striped table-hover ">
        <thead>
        <tr> 
          <th>Participante</th>
          <th>Estado</th>
        </tr>
        </thead>
        <tbody>
          <tr className="info" >
              
              <td><div className="form"><input id="inputSmall" ref="textBox" placeholder="Nuevo participante" /></div></td>
              <td><span className="input-group-btn input-group-sm">
                  <button type="button" className="btn btn-fab btn-fab-mini" onClick={this.props.onClick}>
                    <i className="material-icons">a</i>
                  </button></span></td>
          </tr>

          {
            this.props.elements.map(function(name, i){
              return(
                <tr className={this.props.colors[this.props.states[i]]} key={"name_" +i}>
                  <td>{name}</td>
                  <td>{this.props.states[i]}</td>
                </tr>
                )
              }, this) 
          }

        </tbody>
        </table>
        </div>
      )
    }
});


module.exports = DisplayTable;