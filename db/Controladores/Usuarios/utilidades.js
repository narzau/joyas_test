// En tu archivo de utilidades
import Cookies from 'js-cookie';

export function getAuthToken() {
  // Obtén el token de la cookie llamada "token"
  return Cookies.get('token');
}

export function createAuthHeaders() {
  const token = getAuthToken();

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
}
