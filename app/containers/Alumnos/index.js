/*
 *
 * Alumnos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { createStructuredSelector } from 'reselect';
import makeSelectAlumnos from './selectors';

export class Alumnos extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    alumnos: [
      {
        nombre: 'Joselo',
        numControl: '14170934',
        semestre: 0,
        carrera: 'TIC',
      },
      {
        nombre: 'Rafa',
        numControl: '13170934',
        semestre: 10,
        carrera: 'TIC',
      },
      {
        nombre: 'Perry',
        numControl: '10170934',
        semestre: 14,
        carrera: 'TIC',
      },
    ],
    open: false,
    openUpdate: false,
    nombre: '',
    numControl: '',
    semestre: -1,
    carrera: '',
    selectedStudentIndex: -1,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCreateNewStudent = () => {
    const {
      nombre,
      numControl,
      semestre,
      carrera,
      alumnos,
    } = this.state;

    const newStudent = {
      nombre,
      numControl,
      semestre,
      carrera,
    };

    alumnos.push(newStudent);

    this.setState({ alumnos, open: false });
  };

  handleDeleteStudent = (index) => {
    const { alumnos } = this.state; // Traemos los alumnos que ya estaban en el estado
    delete alumnos[index]; // Borramos en el del array en el índice que recibimos
    this.setState({ alumnos });
  }

  handleOpenUpdate = (index) => {
    const { alumnos } = this.state;
    this.setState({
      openUpdate: true,
      selectedStudentIndex: index,
      nombre: alumnos[index].nombre,
      numControl: alumnos[index].numControl,
      semestre: alumnos[index].semestre,
      carrera: alumnos[index].carrera,
    });
  }

  handleCloseUpdate = () => {
    this.setState({ openUpdate: false });
  }

  handleUpdateUser = () => {
    const {
      alumnos,
      nombre,
      numControl,
      semestre,
      carrera,
      selectedStudentIndex,
     } = this.state;
    alumnos[selectedStudentIndex] = {
      nombre,
      numControl,
      semestre,
      carrera,
    };
    this.setState({ alumnos, openUpdate: false });
  }

  render() {
    const { alumnos } = this.state;
    // ACCIONES DEL DIÁLOGO DE CREAR
    const actions = [
      <FlatButton
        label="Cancelar"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Crear"
        primary
        keyboardFocused
        onClick={this.handleCreateNewStudent}
      />,
    ];
    const updateActions = [
      <FlatButton
        label="Cancelar"
        primary
        onClick={this.handleCloseUpdate}
      />,
      <FlatButton
        label="Actualizar"
        primary
        keyboardFocused
        onClick={this.handleUpdateUser}
      />,
    ];
    // TABLA DE ALUMNOS
    const TableExampleSimple = () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Nombre</TableHeaderColumn>
            <TableHeaderColumn>Número de control</TableHeaderColumn>
            <TableHeaderColumn>Semestre</TableHeaderColumn>
            <TableHeaderColumn>Carrera</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            alumnos.map((item, index) => (
              <TableRow key={index}>
                <TableRowColumn>{item.nombre}</TableRowColumn>
                <TableRowColumn>{item.numControl}</TableRowColumn>
                <TableRowColumn>{item.semestre}</TableRowColumn>
                <TableRowColumn>{item.carrera}</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton
                    label="Eliminar"
                    primary
                    style={style}
                    onClick={() => this.handleDeleteStudent(index)}
                  />
                <RaisedButton
                  label="Editar"
                  secondary
                  style={style}
                  onClick={() => this.handleOpenUpdate(index)}
                />
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
    // ESTILO DEL BOTÓN
    const style = {
      margin: 12,
    };
    return (
      <div>
        <Helmet
          title="Alumnos"
          meta={[]}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <RaisedButton
            label="Crear"
            style={style}
            onClick={this.handleOpen}
          />
        </div>
        {TableExampleSimple()}
        <Dialog
          title="NUEVO ALUMNO"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Nombre"
            fullWidth
            value={this.state.nombre}
            onChange={(e, newString) => {
              this.setState({ nombre: newString });
            }}
          />
          <TextField
            hintText="Número de control"
            fullWidth
            value={this.state.numControl}
            onChange={(e, newString) => {
              this.setState({ numControl: newString });
            }}
          />
          <TextField
            hintText="Semestre"
            fullWidth
            value={this.state.semestre}
            onChange={(e, newString) => {
              this.setState({ semestre: newString });
            }}
          />
          <TextField
            hintText="Carrera"
            fullWidth
            value={this.state.carrera}
            onChange={(e, newString) => {
              this.setState({ carrera: newString });
            }}
          />
        </Dialog>
        <Dialog
          title="EDITAR ALUMNO"
          actions={updateActions}
          modal={false}
          open={this.state.openUpdate}
          onRequestClose={this.handleCloseUpdate}
        >
          <TextField
            hintText="Nombre"
            fullWidth
            value={this.state.nombre}
            onChange={(e, newString) => {
              this.setState({ nombre: newString });
            }}
          />
          <TextField
            hintText="Número de control"
            fullWidth
            value={this.state.numControl}
            onChange={(e, newString) => {
              this.setState({ numControl: newString });
            }}
          />
          <TextField
            hintText="Semestre"
            fullWidth
            value={this.state.semestre}
            onChange={(e, newString) => {
              this.setState({ semestre: newString });
            }}
          />
          <TextField
            hintText="Carrera"
            fullWidth
            value={this.state.carrera}
            onChange={(e, newString) => {
              this.setState({ carrera: newString });
            }}
          />
        </Dialog>
      </div>
    );
  }
}

Alumnos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Alumnos: makeSelectAlumnos(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Alumnos);
