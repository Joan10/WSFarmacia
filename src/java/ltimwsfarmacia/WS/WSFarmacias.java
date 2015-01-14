/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ltimwsfarmacia.WS;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import ltimwsfarmacia.data.Global;
import ltimwsfarmacia.dbdepot.DBCategorias;
import ltimwsfarmacia.dbdepot.DBEntradas;
import ltimwsfarmacia.dbdepot.DBFarmacias;
import ltimwsfarmacia.dbdepot.DBMedicamentos;
import ltimwsfarmacia.dbdepot.DBNoticias;
import ltimwsfarmacia.dbdepot.DBSalidas;

/**
 *
 * @author miquel
 */
@WebService(serviceName = "WSFarmacias")
public class WSFarmacias {

    /**
     * Web service operation
     */
    @WebMethod(operationName = "db")
    public String db(@WebParam(name = "text") String text) {
        String res = "ERROR";
        try {
            String[] ent = text.split(Global.separator);
            if (ent[0].toLowerCase().contentEquals("farmacias")) {  //DB de farmacias
                res = dbDeFarmacias(ent);
            } else if (ent[0].toLowerCase().contentEquals("categorias")) {  //DB de categorias
                res = dbDeCategorias(ent);
            } else if (ent[0].toLowerCase().contentEquals("medicamentos")) {  //DB de medicamentos
                res = dbDeMedicamentos(ent);
            } else if (ent[0].toLowerCase().contentEquals("entradas")) {  //DB de medicamentos
                res = dbDeEntradas(ent);
            } else if (ent[0].toLowerCase().contentEquals("salidas")) {  //DB de medicamentos
                res = dbDeSalidas(ent);
            } else if (ent[0].toLowerCase().contentEquals("noticias")) {  //DB de medicamentos
                res = dbDeNoticias(ent);
            } else if (ent[0].toLowerCase().contentEquals("fechahora")) {  //servicio de fecha y hora
                res = servicioDeFechaHora();
            }
        } catch (Exception e) {
            res = "ERROR";
        }
        return res;
    }

    private String dbDeFarmacias(String[] ent) {
        String res = "ERROR";
        try {
            String op = ent[1];
            if (op.toLowerCase().contentEquals("lista")) {
                ArrayList<String> resp = (new DBFarmacias()).lista();
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("consulta")) {
                String nombre = ent[2];
                res = (new DBFarmacias()).consulta(nombre);
            } else if (op.toLowerCase().contentEquals("alta")) {
                String nik = ent[2];
                String pass = ent[3];
                String nivel = ent[4];
                res = (new DBFarmacias()).alta(nik, pass, nivel);
            } else if (op.toLowerCase().contentEquals("baja")) {
                String nombre = ent[2];
                res = (new DBFarmacias()).baja(nombre);
            } else if (op.toLowerCase().contentEquals("modificacion")) {
                String nik = ent[2];
                String pass = ent[3];
                String nivel = ent[4];
                res = (new DBFarmacias()).modificacion(nik, pass, nivel);
            }
        } catch (Exception e) {
            res = "ERROR";
        }
        return res;
    }

    private String dbDeCategorias(String[] ent) {
        String res = "ERROR";
        try {
            String op = ent[1];
            if (op.toLowerCase().contentEquals("lista")) {
                ArrayList<String> resp = (new DBCategorias()).lista();
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("consulta")) {
                String nombre = ent[2];
                res = (new DBCategorias()).consulta(nombre);
            } else if (op.toLowerCase().contentEquals("alta")) {
                String nombre = ent[2];
                String texto = ent[3];
                String imagen = ent[4];
                res = (new DBCategorias()).alta(nombre, texto, imagen);
            } else if (op.toLowerCase().contentEquals("baja")) {
                String nombre = ent[2];
                res = (new DBCategorias()).baja(nombre);
            } else if (op.toLowerCase().contentEquals("modificacion")) {
                String nombre = ent[2];
                String texto = ent[3];
                String imagen = ent[4];
                res = (new DBCategorias()).modificacion(nombre, texto, imagen);
            }
        } catch (Exception e) {
            res = "ERROR";
        }
        return res;
    }

    private String dbDeMedicamentos(String[] ent) {
        String res = "ERROR";
        try {
            String op = ent[1];
            if (op.toLowerCase().contentEquals("lista")) {
                ArrayList<String> resp = (new DBMedicamentos()).lista();
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("consulta")) {
                String nombre = ent[2];
                res = (new DBMedicamentos()).consulta(nombre);
            } else if (op.toLowerCase().contentEquals("alta")) {
                int idcateg = Integer.parseInt(ent[2]);
                String texto = ent[3];
                String imagen = ent[4];
                String nombre = ent[5];
                String codigo = ent[6];
                int enalmacen = Integer.parseInt(ent[7]);
                res = (new DBMedicamentos()).alta(idcateg, nombre, texto, imagen, codigo,
                        enalmacen);
            } else if (op.toLowerCase().contentEquals("baja")) {
                String nombre = ent[2];
                res = (new DBMedicamentos()).baja(nombre);
            } else if (op.toLowerCase().contentEquals("modificacion")) {
                int idcateg = Integer.parseInt(ent[2]);
                String texto = ent[3];
                String imagen = ent[4];
                String nombre = ent[5];
                String codigo = ent[6];
                int enalmacen = Integer.parseInt(ent[7]);
                res = (new DBMedicamentos()).modificacion(idcateg, nombre, texto, imagen, codigo, enalmacen);
            } else if (op.toLowerCase().contentEquals("sumaenalmacen")) {
                String nombre = ent[2];
                int sum = Integer.parseInt(ent[3]);
                res = (new DBMedicamentos()).sumaEnAlmacen(nombre, sum);
            }
        } catch (Exception e) {
            res = "ERROR";
        }
        return res;
    }

    private String dbDeEntradas(String[] ent) {
        String res = "ERROR";
        try {
            String op = ent[1];
            if (op.toLowerCase().contentEquals("lista")) {
                ArrayList<String> resp = (new DBEntradas()).lista();
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("listaentrefechas")) {
                String f1 = ent[2];
                String f2 = ent[3];
                ArrayList<String> resp = (new DBEntradas()).listaEntreFechas(f1, f2);
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("alta")) {
                int idmedicamento = Integer.parseInt(ent[2]);
                int cantidad = Integer.parseInt(ent[3]);
                String fechahora = ent[4];
                res = (new DBEntradas()).alta(idmedicamento, cantidad, fechahora);
            }
        } catch (Exception e) {
            res = "ERROR";
        }
        return res;
    }

    private String dbDeSalidas(String[] ent) {
        String res = "ERROR";
        try {
            String op = ent[1];
            if (op.toLowerCase().contentEquals("lista")) {
                ArrayList<String> resp = (new DBSalidas()).lista();
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("listaentrefechas")) {
                String f1 = ent[2];
                String f2 = ent[3];
                ArrayList<String> resp = (new DBSalidas()).listaEntreFechas(f1, f2);
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("alta")) {
                int idfarmacia = Integer.parseInt(ent[2]);
                int idmedicamento = Integer.parseInt(ent[3]);
                int cantidad = Integer.parseInt(ent[4]);
                String fechahora = ent[5];
                res = (new DBSalidas()).alta(idfarmacia, idmedicamento, cantidad, fechahora);
            }
        } catch (Exception e) {
            res = "ERROR";
        }
        return res;
    }

    private String dbDeNoticias(String[] ent) {
        String res = "ERROR";
        try {
            String op = ent[1];
            if (op.toLowerCase().contentEquals("lista")) {
                ArrayList<String> resp = (new DBNoticias()).lista();
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("listaenfecha")) {
                String f1 = ent[2];
                ArrayList<String> resp = (new DBNoticias()).listaEnFecha(f1);
                res = "";
                for (int i = 0; i < resp.size(); i++) {
                    res = res + resp.get(i);
                    if (i < (resp.size() - 1)) {
                        res = res + Global.newline;
                    }
                }
            } else if (op.toLowerCase().contentEquals("consulta")) {
                int id = Integer.parseInt(ent[2]);
                res = (new DBNoticias()).consulta(id);
            } else if (op.toLowerCase().contentEquals("alta")) {
                String texto = ent[2];
                String inicio = ent[3];
                String fin = ent[4];
                res = (new DBNoticias()).alta(texto, inicio, fin);
            } else if (op.toLowerCase().contentEquals("modificacion")) {
                int id = Integer.parseInt(ent[2]);
                String texto = ent[3];
                String inicio = ent[4];
                String fin = ent[5];
                res = (new DBNoticias()).modificacion(id, texto, inicio, fin);
            }
        } catch (Exception e) {
            res = "ERROR";
        }
        return res;
    }

    private String servicioDeFechaHora() {
        String res;
        Date now = new Date();
        SimpleDateFormat format
                = new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
        res = format.format(now);
        return res;
    }
}
