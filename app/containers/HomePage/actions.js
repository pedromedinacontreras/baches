import {
  CHANGE_USERNAME,
  GET_PEDIDOS_SUCCESS,
  GET_PEDIDOS_FAIL,
} from './constants';

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function getPedidosSuccess(pedidos, facturas) {
  return {
    type: GET_PEDIDOS_SUCCESS,
    pedidos,
    facturas,
  };
}

export function getPedidosFail(error) {
  return {
    type: GET_PEDIDOS_FAIL,
    error,
  };
}
