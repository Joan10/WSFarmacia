/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ltimwsfarmacia.dbdepot;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import ltimwsfarmacia.data.Global;

/**
 *
 * @author miquel
 */
public class DBMedicamentos {

    public ArrayList<String> lista() {
        ArrayList<String> res = new ArrayList<>();
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from medicamentos;");
            while (rs.next()) {
                String aux = "";
                aux = aux + Integer.toString(rs.getInt("id"));
                aux = aux + Global.separator + Integer.toString(rs.getInt("idcategoria"));
                aux = aux + Global.separator + rs.getString("texto");
                aux = aux + Global.separator + rs.getString("imagen");
                aux = aux + Global.separator + rs.getString("nombre");
                aux = aux + Global.separator + rs.getString("codigo");
                aux = aux + Global.separator + rs.getString("enalmacen");
                res.add(aux);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String consulta(String nombre) {
        String res = "NOP";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery(
                    "select * from medicamentos where nombre='" + nombre + "';");
            if (rs.next()) {
                res = "";
                res = res + Integer.toString(rs.getInt("id")) + Global.separator;
                res = res + Integer.toString(rs.getInt("idcategoria")) + Global.separator;
                res = res + rs.getString("nombre") + Global.separator;
                res = res + rs.getString("texto") + Global.separator;
                res = res + rs.getString("imagen") + Global.separator;
                res = res + rs.getString("codigo") + Global.separator;
                res = res + Integer.toString(rs.getInt("enalmacen"));
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String alta(int idcateg, String nombre, String texto, String imagen, String codigo,
            int enalmacen) {
        String res = "Error: Error creating register";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            String sql = "INSERT INTO medicamentos (idcategoria,texto,imagen,nombre,codigo,enalmacen) "
                    + "VALUES('" + idcateg + "', '" + texto + "', '" + imagen + "', '"
                    + nombre + "', '" + codigo + "', '" + enalmacen + "');";
            ResultSet rs = st.executeQuery(
                    "select * from medicamentos where nombre ='" + nombre + "';");
            if (rs.next()) {
                res = "Error: This name is yet in the DB";
            } else {
                st.executeUpdate(sql);
                res = "OK";
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String baja(String nombre) {
        String res = "Error: Error deleting register";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery(
                    "select * from medicamentos where nombre ='" + nombre + "';");
            if (rs.next()) {
                String sql = "DELETE FROM medicamentos WHERE "
                        + "nombre = '" + nombre + "';";
                st.executeUpdate(sql);
                res = "OK";
            } else {
                res = "Error: This register is not in the DB";
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String modificacion(int idcateg, String nombre, String texto, String imagen, String codigo,
            int enalmacen) {
        String res = "Error: Error updating register";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery(
                    "select * from medicamentos where nombre='" + nombre + "';");
            if (rs.next()) {
                String sql = "UPDATE medicamentos SET "
                        + "texto = '" + texto + "'"
                        + ", imagen = '" + imagen + "'"
                        + ", codigo = '" + codigo + "'"
                        + ", idcategoria = '" + idcateg + "'"
                        + ", enalmacen = '" + enalmacen + "'"
                        + "WHERE nombre = '" + nombre + "';";
                st.executeUpdate(sql);
                res = "OK";
            } else {
                res = "Error: This name is not in the DB";
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String sumaEnAlmacen(String nombre, int sum) {
        String res = "Error: Error updating register";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery(
                    "select * from medicamentos where nombre='" + nombre + "';");
            if (rs.next()) {
                int hay = rs.getInt("enalmacen");
                String sql = "UPDATE medicamentos SET "
                        + "enalmacen = '" + (hay + sum) + "'"
                        + "WHERE nombre = '" + nombre + "';";
                st.executeUpdate(sql);
                res = "OK";
            } else {
                res = "Error: This name is not in the DB";
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }
}
